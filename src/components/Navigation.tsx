import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/maxitooth_logo.jpg";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-effect shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="Maxitooth"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-soft-white/80 hover:text-soft-white transition-colors duration-300"
            >
              Story
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-soft-white/80 hover:text-soft-white transition-colors duration-300"
            >
              Benefits
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-soft-white/80 hover:text-soft-white transition-colors duration-300"
            >
              Design
            </a>
          </div>

          {/* CTA */}
          <Button
            variant="premium"
            size="sm"
            onClick={() => {
              document.getElementById("pre-order")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:inline-flex"
          >
            Pre-Order
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
