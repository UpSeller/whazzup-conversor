const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066a0]/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-shadow-lg mb-4">
          Bem-vindo à Teivah
        </h2>
        <p className="text-xl md:text-2xl text-white text-shadow">
          Seu destino para aquarismo de qualidade
        </p>
      </div>

      {/* Decorative fish elements - using CSS shapes */}
      <div className="absolute bottom-10 left-10 w-16 h-8 opacity-60">
        <svg viewBox="0 0 100 50" className="w-full h-full fill-orange-400">
          <ellipse cx="40" cy="25" rx="35" ry="20" />
          <polygon points="80,25 100,10 100,40" />
        </svg>
      </div>
      <div className="absolute top-20 right-20 w-12 h-6 opacity-60">
        <svg viewBox="0 0 100 50" className="w-full h-full fill-yellow-400">
          <ellipse cx="40" cy="25" rx="35" ry="20" />
          <polygon points="80,25 100,10 100,40" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
