import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Achievements />
      <Footer />
    </div>
  );
};

export default Index;
