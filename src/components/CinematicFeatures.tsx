import { Shield, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const CinematicFeatures = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="features" className="py-32 bg-graphite/5 relative overflow-hidden">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--jet-black)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--jet-black)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Flowing light particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-silver/20 rounded-full blur-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
            }}
            animate={{
              y: -100,
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs tracking-[0.3em] text-graphite/60 uppercase font-light mb-6 block"
          >
            Core Principles
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-semibold text-jet-black mb-6 leading-tight tracking-tight"
          >
            Engineered for Excellence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-graphite/70 font-light"
          >
            Three pillars define our approach to modern oral care
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index, inView }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        delay: 0.6 + index * 0.2, 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative bg-card p-10 rounded-3xl border border-silver/10 hover:border-silver/30 luxury-shadow transition-all duration-700 overflow-hidden cursor-pointer"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "linear-gradient(135deg, rgba(230, 230, 230, 0.05) 0%, rgba(191, 191, 191, 0.1) 100%)",
        }}
      />

      {/* Light sweep effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
        }}
      />

      {/* Icon with orbital animation */}
      <div className="relative mb-8">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-20 h-20 bg-jet-black/5 rounded-2xl flex items-center justify-center border border-silver/10 group-hover:border-silver/30 transition-all duration-500"
        >
          <feature.icon className="w-9 h-9 text-jet-black relative z-10" />
          
          {/* Orbiting particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-silver/50 rounded-full"
              animate={{
                x: [
                  Math.cos((i * 120) * Math.PI / 180) * 40,
                  Math.cos((i * 120 + 360) * Math.PI / 180) * 40,
                ],
                y: [
                  Math.sin((i * 120) * Math.PI / 180) * 40,
                  Math.sin((i * 120 + 360) * Math.PI / 180) * 40,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-2xl font-semibold text-jet-black tracking-tight group-hover:text-graphite transition-colors duration-500">
          {feature.title}
        </h3>
        <p className="text-graphite/80 leading-relaxed font-light">
          {feature.description}
        </p>
      </div>

      {/* Number indicator with glow */}
      <motion.div
        className="absolute top-6 right-6 text-6xl font-bold text-jet-black/5 group-hover:text-jet-black/10 transition-colors duration-500"
        whileHover={{ scale: 1.1 }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>

      {/* Corner accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at bottom right, rgba(191, 191, 191, 0.1), transparent)",
        }}
      />
    </motion.div>
  );
};

export default CinematicFeatures;
