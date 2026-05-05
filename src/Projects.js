import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="projects" className="section container">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <motion.div
            className="project-card"
            key={p.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><b>Tech:</b> {p.techStack}</p>

            <div style={{ marginTop: "10px" }}>
              <a
                href={p.githubLink}
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "10px", color: "#38bdf8" }}
              >
                GitHub
              </a>

              {p.liveLink && (
                <a
                  href={p.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#22c55e" }}
                >
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;