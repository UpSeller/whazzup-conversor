import { Button } from "@/components/ui/button";

interface Service {
  id: number;
  name: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Montagem de Aquários",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Manutenção",
    image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Consultoria",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Análises de Água",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-12 bg-gradient-to-b from-[#cce7f0] to-[#a8d8ea] relative overflow-hidden">
      {/* Decorative coral/seaweed elements at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f4a460]/20 to-transparent pointer-events-none"></div>

      {/* Decorative bubbles */}
      <div className="absolute top-20 left-[20%] w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-[30%] w-2 h-2 bg-white/50 rounded-full animate-bounce delay-150"></div>
      <div className="absolute bottom-40 left-[40%] w-4 h-4 bg-white/30 rounded-full animate-bounce delay-300"></div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0066a0] mb-10 tracking-wide">
          NOSSOS SERVIÇOS
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            className="bg-gradient-to-r from-[#00a8d9] to-[#0088b5] hover:from-[#0099c4] hover:to-[#0077a0] text-white font-bold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            SAIBA MAIS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
