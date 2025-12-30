import Hero from './components/Hero';
import About from './components/About';
import { Skills } from './components/Skills';
import Footer from './components/Contact';
import Navbar from './components/Navbar';
import Education from "./components/Education";
import ProjectShowcase from './components/ProjectShowcase';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <ProjectShowcase />
      <Skills />
      <Footer />
    </main>
  );
}