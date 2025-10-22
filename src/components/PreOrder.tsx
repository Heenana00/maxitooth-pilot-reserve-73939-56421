import { useState } from "react";
import { Button } from "@/components/ui/button";

const PreOrder = () => {
  const [slotsLeft, setSlotsLeft] = useState(41);

  return (
    <section id="pre-order" className="py-24 bg-jet-black text-soft-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Join Us Today
            </h2>
            <p className="text-xl text-silver">
              Pre-book your spot before we close the first 100.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex justify-between text-sm text-silver mb-2">
              <span>Slots Reserved</span>
              <span className="font-bold">{100 - slotsLeft} / 100</span>
            </div>
            <div className="h-3 bg-graphite/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-silver via-soft-white to-silver transition-all duration-1000 ease-out"
                style={{ width: `${((100 - slotsLeft) / 100) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-silver/70 mt-2 text-center">
              {slotsLeft} slots remaining
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button
              variant="premium"
              size="xl"
              className="w-full"
              onClick={() => {
                window.open("https://docs.google.com/forms/d/e/1FAIpQLScRNvwTdFNPR82fv994G6MuVZ1-PGBUP2vdPQAKV57iEWF9fQ/viewform?pli=1", "_blank");
              }}
            >
              Pre-Book Now — ₹99
            </Button>

            <p className="text-xs text-silver/70 text-center mt-6">
              * Refundable before shipping. Est. delivery: Q2 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOrder;
