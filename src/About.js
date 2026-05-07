import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* LEFT SIDE */}
      <div className="about-left">

        <h1>About Me</h1>

        <p>
          I am a passionate Computer Science Engineering student with
          strong interests in frontend development, Artificial Intelligence,
          and full-stack web technologies.
        </p>

        <p>
          I enjoy building user-friendly applications and solving real-world
          problems through innovative software solutions.
        </p>

        <p>
          With experience in internships, hackathons, and project development,
          I continuously explore new technologies and improve my skills.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">

        <div className="about-card">

          <h2>🎓 Education</h2>

          <p>
            B.E Computer Science and Engineering
            <br />
            Sri Krishna College of Engineering and Technology
          </p>

        </div>

        <div className="about-card">

          <h2>💻 Experience</h2>

          <p>
            Frontend Developer Intern at Alfido Tech
            <br />
            Java Intern at TechnoHacks
          </p>

        </div>

        <div className="about-card">

          <h2>🏆 Achievements</h2>

          <p>
            Hackathon Finalist • LeetCode Problem Solver • AI Projects
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default About;