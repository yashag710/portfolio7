import Hero from './components/Hero';
import About from './components/About';
import { Skills } from './components/Skills';
import Footer from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}