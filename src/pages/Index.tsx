import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Experience from "@/components/Experience";
import PreOrder from "@/components/PreOrder";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Experience />
      <PreOrder />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
