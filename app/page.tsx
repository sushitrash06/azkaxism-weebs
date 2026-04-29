import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
     <div className="min-h-screen selection:bg-comic-magenta selection:text-white">
       <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
