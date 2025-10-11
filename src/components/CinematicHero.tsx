import { Button } from "@/components/ui/button";
import tubeMaxi from "@/assets/tube_maxi.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const CinematicHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section 
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-jet-black pt-20"
    >
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-silver/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Cinematic spotlight glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(191, 191, 191, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(191, 191, 191, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(191, 191, 191, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content with word-by-word reveal */}
          <div className="text-center lg:text-left space-y-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <span className="text-xs tracking-[0.3em] text-silver/60 uppercase font-light">
                Pilot Launch 2025
              </span>
            </motion.div>

            <div className="space-y-6">
              <div className="text-6xl md:text-8xl font-bold text-soft-white leading-[0.95] tracking-tight overflow-hidden">
                {["Advanced", "Natural Care."].map((word, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.5 + i * 0.2, 
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {word}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 100, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.9, 
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="text-gradient-silver mt-2"
                >
                  Modern Design.
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="text-xl md:text-2xl text-silver/80 font-light max-w-xl leading-relaxed"
              >
                Precision-engineered oral care. Refined for the modern individual.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="premium"
                  size="xl"
                  onClick={() => {
                    document.getElementById("pre-order")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  Reserve Your Spot (₹99)
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
              className="flex items-center gap-6 justify-center lg:justify-start text-sm text-silver/70"
            >
              {["Made in India", "Dentist Approved", "Cruelty-Free"].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    className="w-2 h-2 bg-silver/50 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Product Image - Cinematic reveal */}
          <motion.div
            style={{ scale, y }}
            className="relative"
          >
            {/* Rotating glow effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-silver/20 via-transparent to-silver/20 blur-3xl" />
            </motion.div>

            {/* Product container with 3D effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`,
              }}
              className="relative z-10 glass-effect rounded-3xl p-12 luxury-shadow"
            >
              <motion.img
                src={tubeMaxi}
                alt="Maxitooth Premium Natural Oral Care"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              
              {/* Metallic shine sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Ambient particle field */}
            <div className="absolute inset-0 -z-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-silver/20 rounded-full blur-sm"
                  animate={{
                    x: [
                      Math.cos(i * (360 / 20) * Math.PI / 180) * 200,
                      Math.cos(i * (360 / 20) * Math.PI / 180) * 250,
                      Math.cos(i * (360 / 20) * Math.PI / 180) * 200,
                    ],
                    y: [
                      Math.sin(i * (360 / 20) * Math.PI / 180) * 200,
                      Math.sin(i * (360 / 20) * Math.PI / 180) * 250,
                      Math.sin(i * (360 / 20) * Math.PI / 180) * 200,
                    ],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 5 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-silver/50 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-silver/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-silver/50 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CinematicHero;
