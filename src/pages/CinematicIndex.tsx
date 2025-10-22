import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CinematicHero from "@/components/CinematicHero";
import CinematicAbout from "@/components/CinematicAbout";
import CinematicFeatures from "@/components/CinematicFeatures";
import CinematicExperience from "@/components/CinematicExperience";
import PreOrder from "@/components/PreOrder";
import CinematicTestimonials from "@/components/CinematicTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CinematicOutro from "@/components/CinematicOutro";

const CinematicIndex = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add cinematic page transitions
    document.body.style.overflowX = "hidden";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <CinematicHero />
      <CinematicAbout />
      <CinematicFeatures />
      <CinematicExperience />
      <PreOrder />
      <CinematicTestimonials />
      <FAQ />
      <CinematicOutro />
      <Footer />
    </div>
  );
};

export default CinematicIndex;
