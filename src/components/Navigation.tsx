import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/maxitooth_logo_full.png";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
          <a href="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="MaxiTooth - Advanced Natural Care"
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium text-jet-black/80 hover:text-jet-black transition-colors duration-300"
            >
              About Us
            </a>
            <button
              onClick={() => navigate("/our-products")}
              className="text-sm font-medium text-jet-black/80 hover:text-jet-black transition-colors duration-300"
            >
              Our Products
            </button>
          </div>

          {/* CTA */}
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              window.open("https://docs.google.com/forms/d/e/1FAIpQLScRNvwTdFNPR82fv994G6MuVZ1-PGBUP2vdPQAKV57iEWF9fQ/viewform?pli=1", "_blank");
            }}
            className="hidden md:inline-flex bg-jet-black text-soft-white hover:bg-jet-black/90"
          >
            Pre-Order
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
