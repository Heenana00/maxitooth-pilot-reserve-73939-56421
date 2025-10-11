import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const CinematicTestimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-32 bg-soft-white relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "30px 30px"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--jet-black)) 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs tracking-[0.3em] text-graphite/60 uppercase font-light mb-6 block"
          >
            Beta Insights
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-semibold text-jet-black mb-6 leading-tight tracking-tight"
          >
            First Impressions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-graphite/70 font-light"
          >
            Perspectives from early adopters
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: 0.6 + index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card p-10 rounded-3xl border border-silver/10 hover:border-silver/30 luxury-shadow transition-all duration-700 relative overflow-hidden cursor-pointer"
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(135deg, rgba(230, 230, 230, 0.03) 0%, rgba(191, 191, 191, 0.05) 100%)",
                }}
              />

              {/* Stars with stagger animation */}
              <div className="flex gap-1 mb-6 relative">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.8 + index * 0.2 + i * 0.05,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Star className="w-4 h-4 fill-jet-black/80 text-jet-black/80" />
                  </motion.div>
                ))}
              </div>

              {/* Quote with reveal animation */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.2 }}
                className="text-lg text-jet-black mb-8 leading-relaxed font-light relative"
              >
                "{testimonial.quote}"
              </motion.blockquote>

              {/* Author with slide-in */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="border-t border-silver/10 pt-6 relative"
              >
                <div className="font-medium text-jet-black tracking-tight">
                  {testimonial.author}
                </div>
                <div className="text-sm text-graphite/70 font-light mt-1">
                  {testimonial.role}
                </div>
              </motion.div>

              {/* Decorative quote mark */}
              <motion.div
                className="absolute top-8 right-8 text-7xl font-serif text-jet-black/5 leading-none"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                "
              </motion.div>

              {/* Hover light sweep */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.2 }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CinematicTestimonials;
