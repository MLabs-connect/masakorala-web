import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientTicker from "@/components/ClientTicker";
import AboutSection from "@/components/AboutSection";
import ProductCatalog from "@/components/ProductCatalog";
import PavingCalculator from "@/components/PavingCalculator";
import QualityProcess from "@/components/QualityProcess";
import ProjectsGallery from "@/components/ProjectsGallery";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site-wrapper">
      <Header />
      <main id="main-content">
        <Hero />
        <ClientTicker />
        <AboutSection />
        <ProductCatalog />
        <PavingCalculator />
        <QualityProcess />
        <ProjectsGallery />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
