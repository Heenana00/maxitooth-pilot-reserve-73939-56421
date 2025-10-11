import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const CinematicAbout = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 bg-soft-white relative overflow-hidden"
    >
      {/* Morphing background gradient */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(14, 14, 14, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(107, 107, 107, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(14, 14, 14, 0.03) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-graphite/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Video placeholder with cinematic frame */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              style={{ y: textY }}
              className="relative aspect-[4/5] bg-gradient-grey-white rounded-3xl overflow-hidden luxury-shadow group"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{
                  boxShadow: [
                    "inset 0 0 20px rgba(191, 191, 191, 0.1)",
                    "inset 0 0 40px rgba(191, 191, 191, 0.2)",
                    "inset 0 0 20px rgba(191, 191, 191, 0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-jet-black/5 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-24 h-24 mx-auto bg-jet-black/10 rounded-full flex items-center justify-center backdrop-blur-md border border-silver/20 group-hover:border-silver/40"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[22px] border-l-jet-black border-b-[14px] border-b-transparent ml-2"
                    />
                  </motion.div>
                  <p className="text-jet-black/60 text-sm tracking-wider uppercase font-light">
                    Product Story
                  </p>
                </div>
              </div>

              {/* Film grain effect */}
              <motion.div
                className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Story Text with cinematic reveal */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="inline-block"
              >
                <span className="text-xs tracking-[0.3em] text-graphite/60 uppercase font-light">
                  Our Philosophy
                </span>
              </motion.div>
              
              <div className="overflow-hidden">
                {["Precision.", "Refined.", "Elevated."].map((word, i) => (
                  <motion.h2
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ 
                      delay: 0.6 + i * 0.1, 
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="text-5xl md:text-6xl font-semibold text-jet-black leading-tight tracking-tight"
                  >
                    {word}
                  </motion.h2>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {[
                "At Maxitooth, we believe in balance — science, design, and care. Every element is tested, refined, and perfected for the modern individual.",
                "We're not reinventing oral care. We're elevating it to where it belongs.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.2 }}
                  className="text-lg text-graphite/80 leading-relaxed font-light max-w-xl"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "100%", label: "Natural" },
                { value: "0", label: "Harsh Chemicals" },
                { value: "∞", label: "Smiles" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-jet-black/5 rounded-2xl backdrop-blur-sm border border-silver/10 hover:border-silver/30 transition-all duration-500 cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 1.3 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="text-3xl font-light text-jet-black mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-graphite/70 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CinematicAbout;
