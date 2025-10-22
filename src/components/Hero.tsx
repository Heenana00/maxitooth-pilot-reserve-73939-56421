import { Button } from "@/components/ui/button";
import tubeMaxi from "@/assets/tube_maxi.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-soft-white pt-28">
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-graphite rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold text-jet-black leading-[0.95] tracking-tight">
                Maxitooth for your sexy tooth
              </h1>
              <p className="text-xl md:text-2xl text-graphite font-light max-w-xl leading-relaxed">
                Precision-engineered oral care. Refined for the modern individual.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="xl"
                onClick={() => {
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLScRNvwTdFNPR82fv994G6MuVZ1-PGBUP2vdPQAKV57iEWF9fQ/viewform?pli=1", "_blank");
                }}
                className="bg-jet-black text-soft-white hover:bg-jet-black/90"
              >
                Pre-Order Now (₹99)
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-graphite">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-graphite rounded-full"></div>
                <span>Made in India</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-graphite rounded-full"></div>
                <span>Dentist Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-graphite rounded-full"></div>
                <span>Cruelty-Free</span>
              </div>
            </div>
          </div>

          {/* Product Image - Parallax Effect */}
          <div 
            className="relative animate-fade-in-up" 
            style={{ 
              animationDelay: "0.2s",
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out"
            }}
          >
            {/* Glass container for product */}
            <div className="relative z-10 bg-soft-white/50 backdrop-blur-sm border border-graphite/10 rounded-3xl p-12 shadow-luxury">
              <img
                src={tubeMaxi}
                alt="Maxitooth Premium Natural Oral Care - Advanced Toothpaste"
                className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-graphite/10 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-graphite/5 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-graphite rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-graphite rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
