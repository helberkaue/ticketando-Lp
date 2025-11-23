import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Premium from "@/components/Premium";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Events />
      <Features />
      <Testimonials />
      <Premium />
      <Footer />
    </div>
  );
};

export default Index;
