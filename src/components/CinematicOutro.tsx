import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tubeMaxi from "@/assets/tube_maxi.jpg";

const CinematicOutro = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="py-40 bg-gradient-to-b from-jet-black via-graphite to-soft-white relative overflow-hidden"
    >
      {/* Radial light burst */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 2, opacity: 0.3 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(230, 230, 230, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Floating light particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-silver/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
              scale: 0,
            }}
            animate={inView ? {
              y: -100,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            } : {}}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-16">
          {/* Product fade to light */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={inView ? { opacity: 0, scale: 1.5, y: -50 } : {}}
            transition={{ duration: 3, delay: 0.5 }}
            className="relative w-48 h-48 mx-auto"
          >
            <img
              src={tubeMaxi}
              alt="Maxitooth"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: [0, 0.8, 0] } : {}}
              transition={{ duration: 3, delay: 1 }}
              className="absolute inset-0 bg-white/50 blur-3xl rounded-full"
            />
          </motion.div>

          {/* Tagline reveal */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="overflow-hidden"
            >
              <motion.h2
                initial={{ y: 100 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-light text-jet-black"
              >
                Maxitooth
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
              className="relative inline-block"
            >
              <h3 className="text-2xl md:text-4xl font-semibold text-jet-black tracking-tight">
                Brilliance Begins Here.
              </h3>
              
              {/* Underline animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 3 }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-graphite to-transparent origin-center"
              />
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("pre-order")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="glass-effect px-12 py-4 rounded-full text-jet-black font-medium border border-silver/30 hover:border-silver/60 transition-all duration-500"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(191, 191, 191, 0)",
                      "0 0 10px rgba(191, 191, 191, 0.5)",
                      "0 0 0px rgba(191, 191, 191, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Reserve Your Spot
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicOutro;
