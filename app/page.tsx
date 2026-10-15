import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Hero />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </main>
  );
}