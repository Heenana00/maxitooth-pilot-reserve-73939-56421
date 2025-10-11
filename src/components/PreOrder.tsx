import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const PreOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [slotsLeft, setSlotsLeft] = useState(87);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Show success with confetti effect
    toast({
      title: "Welcome to the Founders 100! 🎉",
      description: "Check your email for confirmation details.",
    });

    // Reset form
    setFormData({ name: "", email: "", mobile: "" });
    setSlotsLeft(prev => Math.max(0, prev - 1));
  };

  return (
    <section id="pre-order" className="py-24 bg-jet-black text-soft-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Join the Founders 100
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-silver mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-graphite/20 border-silver/30 text-soft-white placeholder:text-silver/50 focus:border-silver"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-silver mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-graphite/20 border-silver/30 text-soft-white placeholder:text-silver/50 focus:border-silver"
                  required
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-silver mb-2">
                  Mobile Number (Optional)
                </label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="bg-graphite/20 border-silver/30 text-soft-white placeholder:text-silver/50 focus:border-silver"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="premium"
              size="xl"
              className="w-full"
            >
              Pre-Book Now — ₹99
            </Button>

            <p className="text-xs text-silver/70 text-center">
              * Refundable before shipping. Est. delivery: Q2 2025
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PreOrder;
