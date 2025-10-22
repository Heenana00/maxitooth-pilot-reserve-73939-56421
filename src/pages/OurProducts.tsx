import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product_1.jpg";
import product2 from "@/assets/product_2.jpg";
import product3 from "@/assets/product_3.jpg";
import product4 from "@/assets/product_4.jpg";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      image: product1,
      alt: "Maxitooth Product Variant 1"
    },
    {
      id: 2,
      image: product2,
      alt: "Maxitooth Product Variant 2"
    },
    {
      id: 3,
      image: product3,
      alt: "Maxitooth Product Variant 3"
    },
    {
      id: 4,
      image: product4,
      alt: "Maxitooth Product Variant 4"
    }
  ];

  return (
    <div className="smooth-scroll">
      <Navigation />
      
      <section className="min-h-screen bg-soft-white pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs tracking-[0.3em] text-graphite/60 uppercase font-light">
                Our Collection
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-jet-black leading-tight tracking-tight mb-6">
              Our Products
            </h1>
            <p className="text-xl text-graphite max-w-2xl mx-auto">
              Premium natural oral care products designed for modern excellence
            </p>
          </div>

          {/* Special Offer Banner */}
          <div className="max-w-4xl mx-auto mb-16 bg-jet-black text-soft-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product Launch Soon
            </h2>
            <div className="text-2xl md:text-3xl font-light mb-6">
              20% OFF for Advanced Booking
            </div>
            <p className="text-lg text-silver/80 mb-8">
              + A cookie gift from our side
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="default"
                size="xl"
                onClick={() => {
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLScRNvwTdFNPR82fv994G6MuVZ1-PGBUP2vdPQAKV57iEWF9fQ/viewform?pli=1", "_blank");
                }}
                className="bg-soft-white text-jet-black hover:bg-soft-white/90"
              >
                Register Now
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => {
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLScRNvwTdFNPR82fv994G6MuVZ1-PGBUP2vdPQAKV57iEWF9fQ/viewform?pli=1", "_blank");
                }}
                className="bg-transparent text-soft-white border-soft-white/30 hover:bg-soft-white/10"
              >
                Pay Now
              </Button>
            </div>
            <div className="text-sm text-silver/70">
              <p>Call Us: 9494192752, 8690727572</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-soft-white rounded-3xl overflow-hidden shadow-luxury hover:shadow-hard transition-all duration-500 border border-graphite/10"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              variant="default"
              size="xl"
              onClick={() => {
                window.open("https://docs.google.com/forms/d/e/1FAIpQLScRNvwTdFNPR82fv994G6MuVZ1-PGBUP2vdPQAKV57iEWF9fQ/viewform?pli=1", "_blank");
              }}
              className="bg-jet-black text-soft-white hover:bg-jet-black/90"
            >
              Book Your Product Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurProducts;
