import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Pause, Square } from "lucide-react";
import { toast } from "sonner";
import { whatsappConfig } from "@/config/whatsapp";

const Index = () => {
  const [numbers, setNumbers] = useState("");
  const [copyText, setCopyText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentQueue, setCurrentQueue] = useState<string[]>([]);

  const sendWhatsAppMessage = async (phoneNumber: string, message: string) => {
    try {
      const response = await fetch(
        `${whatsappConfig.apiUrl}/${whatsappConfig.apiVersion}/${whatsappConfig.phoneNumberId}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${whatsappConfig.accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: phoneNumber,
            type: "text",
            text: { body: message },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      throw error;
    }
  };

  const processQueue = async () => {
    if (!currentQueue.length || isPaused || !isRunning) return;

    try {
      const phoneNumber = currentQueue[0];
      await sendWhatsAppMessage(phoneNumber, copyText);
      toast.success(`Mensagem enviada para ${phoneNumber}`);
      setCurrentQueue((prev) => prev.slice(1));
    } catch (error) {
      toast.error(`Erro ao enviar mensagem: ${error.message}`);
      setIsRunning(false);
    }
  };

  const handlePlay = () => {
    if (!numbers.trim() || !copyText.trim()) {
      toast.error("Por favor, preencha os números do WhatsApp e a mensagem");
      return;
    }

    const phoneNumbers = numbers
      .split("\n")
      .map((number) => number.trim())
      .filter((number) => number);

    setCurrentQueue(phoneNumbers);
    setIsRunning(true);
    setIsPaused(false);
    toast.success("Iniciando automação...");
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    toast.info(isPaused ? "Retomando..." : "Pausado");
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setCurrentQueue([]);
    toast.info("Automação interrompida");
  };

  // Processa a fila quando houver mudanças
  React.useEffect(() => {
    if (isRunning && !isPaused && currentQueue.length > 0) {
      const timer = setTimeout(processQueue, 2000); // Delay de 2 segundos entre mensagens
      return () => clearTimeout(timer);
    }
  }, [isRunning, isPaused, currentQueue, copyText]);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Sistema de Prospecção WhatsApp
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Números do WhatsApp (um por linha)
          </label>
          <Textarea
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="Digite os números do WhatsApp..."
            className="min-h-[150px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Mensagem (uma mensagem por linha)
          </label>
          <Textarea
            value={copyText}
            onChange={(e) => setCopyText(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="min-h-[150px]"
          />
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={handlePlay}
            disabled={isRunning && !isPaused}
            className={`w-32 ${
              isRunning && !isPaused ? "bg-success" : "bg-primary"
            }`}
          >
            <Play className="mr-2 h-4 w-4" />
            Iniciar
          </Button>
          <Button
            onClick={handlePause}
            disabled={!isRunning}
            className={`w-32 ${isPaused ? "bg-warning" : "bg-secondary"}`}
          >
            <Pause className="mr-2 h-4 w-4" />
            Pausar
          </Button>
          <Button
            onClick={handleStop}
            disabled={!isRunning}
            className="w-32 bg-destructive"
          >
            <Square className="mr-2 h-4 w-4" />
            Parar
          </Button>
        </div>

        {isRunning && (
          <div className="mt-4 p-4 border rounded-lg bg-muted">
            <p className="text-sm">
              Status: {isPaused ? "Pausado" : "Enviando mensagens..."}
            </p>
            <p className="text-sm mt-2">
              Mensagens restantes: {currentQueue.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;