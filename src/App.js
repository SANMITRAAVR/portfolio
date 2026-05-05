import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div style={{ background: "#0f172a" }}>
      
      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;