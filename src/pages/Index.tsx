import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectGallery from "@/components/ProjectGallery";
import CtaStrip from "@/components/CtaStrip";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProjectGallery />
        <CtaStrip />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
