import tubeMaxi from "@/assets/tube_maxi.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const CinematicExperience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-32 bg-jet-black text-soft-white overflow-hidden relative"
    >
      {/* Dynamic ambient lighting */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(191, 191, 191, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 70%, rgba(230, 230, 230, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 30%, rgba(191, 191, 191, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Molecular connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" style={{ mixBlendMode: "screen" }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(191, 191, 191, 0.5)" />
            <stop offset="100%" stopColor="rgba(230, 230, 230, 0.1)" />
          </linearGradient>
        </defs>
        {[...Array(15)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Product with cinematic zoom */}
          <motion.div
            style={{ scale, x }}
            className="relative"
          >
            {/* Rotating light ring */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full" style={{
                background: "conic-gradient(from 0deg, transparent, rgba(191, 191, 191, 0.2), transparent)",
                filter: "blur(40px)",
              }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ rotateY }}
              className="relative z-10 glass-effect rounded-3xl p-16 luxury-shadow group"
            >
              <motion.img
                src={tubeMaxi}
                alt="Maxitooth Advanced Natural Care"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.08, rotateY: 10 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Product highlight sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </motion.div>

            {/* Orbiting feature indicators */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-silver/30 rounded-full backdrop-blur-sm border border-silver/40"
                animate={{
                  x: [
                    Math.cos((i * 45) * Math.PI / 180) * 280,
                    Math.cos((i * 45 + 360) * Math.PI / 180) * 280,
                  ],
                  y: [
                    Math.sin((i * 45) * Math.PI / 180) * 280,
                    Math.sin((i * 45 + 360) * Math.PI / 180) * 280,
                  ],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
                style={{
                  left: "50%",
                  top: "50%",
                }}
              />
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="text-xs tracking-[0.3em] text-silver/40 uppercase font-light block"
              >
                The Process
              </motion.span>

              <div className="overflow-hidden">
                {["Designed.", "Tested.", "Perfected."].map((word, i) => (
                  <motion.h3
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ 
                      delay: 0.6 + i * 0.1,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`text-5xl md:text-6xl leading-[1.1] tracking-tight ${
                      i === 2 ? "font-semibold" : "font-light"
                    }`}
                  >
                    {word}
                  </motion.h3>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {[
                "Every detail is intentional. From molecular formulation to tactile experience, Maxitooth is engineered for those who recognize excellence.",
                "Where modern aesthetics converge with advanced science. This is oral care, redefined for the discerning individual.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.2 }}
                  className="text-silver/70 text-lg font-light leading-relaxed max-w-xl"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Animated stats with gradient borders */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              {[
                { value: "2+", label: "Years Development" },
                { value: "500+", label: "Beta Testers" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="space-y-3 border-l-2 border-silver/20 hover:border-silver/60 pl-6 transition-all duration-500 cursor-pointer group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 1.3 + i * 0.1, type: "spring" }}
                    className="text-5xl font-light text-soft-white group-hover:text-silver transition-colors duration-500"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-silver/50 tracking-wider uppercase group-hover:text-silver/70 transition-colors duration-500">
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

export default CinematicExperience;
