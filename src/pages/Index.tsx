import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Pause, Square } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [numbers, setNumbers] = useState("");
  const [copyText, setCopyText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [currentQueue, setCurrentQueue] = useState<string[]>([]);

  const convertToUrls = (numbers: string) => {
    return numbers
      .split("\n")
      .map((number) => number.trim())
      .filter((number) => number)
      .map((number) => `https://web.whatsapp.com/send?phone=55${number}`);
  };

  const handlePlay = () => {
    if (!numbers.trim() || !copyText.trim()) {
      toast.error("Please fill in both WhatsApp numbers and message fields");
      return;
    }

    setCurrentQueue(convertToUrls(numbers));
    setIsRunning(true);
    setIsPaused(false);
    toast.success("Starting automation...");
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    toast.info(isPaused ? "Resuming..." : "Paused");
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setCurrentQueue([]);
    toast.info("Stopped automation");
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        WhatsApp Prospecting System
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            WhatsApp Numbers (one per line)
          </label>
          <Textarea
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="Enter WhatsApp numbers..."
            className="min-h-[150px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Message Copy (one message per line)
          </label>
          <Textarea
            value={copyText}
            onChange={(e) => setCopyText(e.target.value)}
            placeholder="Enter your message..."
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
            Play
          </Button>
          <Button
            onClick={handlePause}
            disabled={!isRunning}
            className={`w-32 ${isPaused ? "bg-warning" : "bg-secondary"}`}
          >
            <Pause className="mr-2 h-4 w-4" />
            Pause
          </Button>
          <Button
            onClick={handleStop}
            disabled={!isRunning}
            className="w-32 bg-error"
          >
            <Square className="mr-2 h-4 w-4" />
            Stop
          </Button>
        </div>

        {isRunning && (
          <div className="mt-8 border rounded-lg overflow-hidden">
            <iframe
              ref={iframeRef}
              className="w-full h-[600px]"
              src={currentQueue[0]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;