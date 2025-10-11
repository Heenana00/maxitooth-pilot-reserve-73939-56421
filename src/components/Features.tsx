import { Shield, Sparkles, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "No Harsh Chemicals",
    description: "Pure formula, zero compromises. Safe for daily use, gentle on sensitive teeth.",
  },
  {
    icon: Sparkles,
    title: "Advanced Whitening Care",
    description: "Scientifically proven results. Brighter smiles without the sensitivity.",
  },
  {
    icon: Leaf,
    title: "Modern Formula, Minimal Design",
    description: "Sustainable ingredients, elegant packaging. Care that looks as good as it feels.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-gradient-grey-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(hsl(var(--jet-black)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--jet-black)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] text-graphite/60 uppercase font-light mb-6 block">
            Core Principles
          </span>
          <h2 className="text-5xl md:text-6xl font-semibold text-jet-black mb-6 leading-tight tracking-tight">
            Engineered for Excellence
          </h2>
          <p className="text-xl text-graphite/70 font-light">Three pillars define our approach to modern oral care</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card p-10 rounded-3xl border border-silver/10 hover:border-silver/30 luxury-shadow hover:translate-y-[-8px] transition-all duration-700 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-silver/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Icon */}
              <div className="relative w-20 h-20 bg-jet-black/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-silver/10">
                <feature.icon className="w-9 h-9 text-jet-black" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-semibold text-jet-black mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-graphite/80 leading-relaxed font-light">{feature.description}</p>
              </div>

              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-jet-black/5 group-hover:text-jet-black/10 transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
