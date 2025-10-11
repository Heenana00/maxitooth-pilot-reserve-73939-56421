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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-black-grey pt-20">
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-silver rounded-full animate-float"
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
          <div className="text-center lg:text-left space-y-12 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-xs tracking-[0.3em] text-silver/60 uppercase font-light">
                  Pilot Launch 2025
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-soft-white leading-[0.95] tracking-tight">
                Advanced<br />
                Natural Care.{" "}
                <span className="text-gradient-silver block mt-2">Modern Design.</span>
              </h1>
              <p className="text-xl md:text-2xl text-silver/80 font-light max-w-xl leading-relaxed">
                Precision-engineered oral care. Refined for the modern individual.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="premium"
                size="xl"
                onClick={() => {
                  document.getElementById("pre-order")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Reserve Your Spot (₹199)
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-silver">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-silver rounded-full"></div>
                <span>Made in India</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-silver rounded-full"></div>
                <span>Dentist Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-silver rounded-full"></div>
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
            <div className="relative z-10 glass-effect rounded-3xl p-12 luxury-shadow">
              <img
                src={tubeMaxi}
                alt="Maxitooth Premium Natural Oral Care - Advanced Toothpaste"
                className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-silver/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-silver/10 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-silver rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-silver rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
