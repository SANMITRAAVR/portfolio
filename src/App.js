import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Hero from "./Hero";

function App() {
  return (
    <div style={{ background: "#0f172a" }}>
      
      {/* 🔹 Navbar */}
      <Navbar />
      <Hero />
      {/* 🔹 Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;