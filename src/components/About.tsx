const About = () => {
  return (
    <section id="about" className="py-32 bg-soft-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--jet-black)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Instagram Video Embed */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow">
            <iframe
              src="https://www.instagram.com/reel/DPoklSGjtFc/embed"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
            />
          </div>

          {/* Story Text */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-xs tracking-[0.3em] text-graphite/60 uppercase font-light">
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-semibold text-jet-black leading-tight tracking-tight">
                Precision.<br />
                Refined.<br />
                Elevated.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-graphite/80 leading-relaxed font-light max-w-xl">
              <p>
                At Maxitooth, we believe in balance — science, design, and care. Every element is
                tested, refined, and perfected for the modern individual.
              </p>
              <p>
                We're not reinventing oral care. We're elevating it to where it belongs.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 bg-jet-black/5 rounded-2xl backdrop-blur-sm border border-silver/10 hover:border-silver/30 transition-all duration-500">
                <div className="text-3xl font-light text-jet-black mb-2">100%</div>
                <div className="text-xs text-graphite/70 tracking-wider uppercase">Natural</div>
              </div>
              <div className="text-center p-6 bg-jet-black/5 rounded-2xl backdrop-blur-sm border border-silver/10 hover:border-silver/30 transition-all duration-500">
                <div className="text-3xl font-light text-jet-black mb-2">0</div>
                <div className="text-xs text-graphite/70 tracking-wider uppercase">Harsh Chemicals</div>
              </div>
              <div className="text-center p-6 bg-jet-black/5 rounded-2xl backdrop-blur-sm border border-silver/10 hover:border-silver/30 transition-all duration-500">
                <div className="text-3xl font-light text-jet-black mb-2">∞</div>
                <div className="text-xs text-graphite/70 tracking-wider uppercase">Smiles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
