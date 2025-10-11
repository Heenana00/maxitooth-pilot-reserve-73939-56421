import tubeMaxi from "@/assets/tube_maxi.jpg";

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-jet-black text-soft-white overflow-hidden relative">
      {/* Ambient light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-silver/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Product Image */}
          <div className="relative animate-fade-in group">
            <div className="relative z-10 glass-effect rounded-3xl p-16 luxury-shadow">
              <img
                src={tubeMaxi}
                alt="Maxitooth Advanced Natural Care - Premium Toothpaste Detail"
                className="w-full max-w-md mx-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Enhanced decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-silver/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-silver/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-silver/10 to-transparent rounded-full"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-xs tracking-[0.3em] text-silver/40 uppercase font-light">
                  The Process
                </span>
              </div>
              <h3 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">
                Designed.<br />
                Tested.<br />
                <span className="font-semibold">Perfected.</span>
              </h3>
            </div>

            <div className="space-y-8 text-silver/70 text-lg font-light leading-relaxed max-w-xl">
              <p>
                Every detail is intentional. From molecular formulation to tactile experience, 
                Maxitooth is engineered for those who recognize excellence.
              </p>
              <p>
                Where modern aesthetics converge with advanced science. This is oral care, 
                redefined for the discerning individual.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-3 border-l-2 border-silver/20 pl-6 hover:border-silver/40 transition-colors duration-500">
                <div className="text-5xl font-light text-soft-white">2+</div>
                <div className="text-xs text-silver/50 tracking-wider uppercase">Years Development</div>
              </div>
              <div className="space-y-3 border-l-2 border-silver/20 pl-6 hover:border-silver/40 transition-colors duration-500">
                <div className="text-5xl font-light text-soft-white">500+</div>
                <div className="text-xs text-silver/50 tracking-wider uppercase">Beta Testers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
