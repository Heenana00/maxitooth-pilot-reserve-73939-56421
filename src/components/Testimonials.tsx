import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, a toothpaste that looks as good as it feels.",
    author: "Priya Sharma",
    role: "Beauty Influencer",
  },
  {
    quote: "The design is minimal, the results are maximal.",
    author: "Rahul Verma",
    role: "Product Designer",
  },
  {
    quote: "This is what modern oral care should be. Elegant and effective.",
    author: "Dr. Anjali Mehta",
    role: "Dental Surgeon",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-soft-white relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--jet-black)) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] text-graphite/60 uppercase font-light mb-6 block">
            Beta Insights
          </span>
          <h2 className="text-5xl md:text-6xl font-semibold text-jet-black mb-6 leading-tight tracking-tight">
            First Impressions
          </h2>
          <p className="text-xl text-graphite/70 font-light">Perspectives from early adopters</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card p-10 rounded-3xl border border-silver/10 hover:border-silver/30 luxury-shadow hover:translate-y-[-4px] transition-all duration-700 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-silver/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-jet-black/80 text-jet-black/80" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-jet-black mb-8 leading-relaxed font-light relative">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-silver/10 pt-6 relative">
                <div className="font-medium text-jet-black tracking-tight">{testimonial.author}</div>
                <div className="text-sm text-graphite/70 font-light mt-1">{testimonial.role}</div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-8 right-8 text-7xl font-serif text-jet-black/5 leading-none">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
