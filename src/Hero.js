import profilePic from "./assets/profile pic.jpeg";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-section">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <h1>
          Hi, I'm <span>Sanmitraa V R</span>
        </h1>

        <h2>Software Developer & AI Enthusiast</h2>

        <p>
          Passionate about building creative web applications,
          AI-powered solutions, and impactful real-world projects.
          Skilled in React, Java, Python, and AI technologies with
          experience in hackathons, internships, and full-stack projects.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">

          

          <a href="/resume.pdf" download>
            <button className="resume-btn">
              Download Resume
            </button>
          </a>

        </div>

        {/* SOCIAL ICONS */}
        <div className="social-icons">

          <a
            href="https://github.com/SANMITRAAVR"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sanmitraa-v-r-202196294"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:princess.sanmitra05@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-image">
        <img src={profilePic} alt="profile" />
      </div>

    </div>
  );
}

export default Hero;