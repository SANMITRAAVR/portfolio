import profilePic from "./assets/profile pic.jpeg";
import "./About.css";

function About() {
  return (
    <div id="about" className="about-section">
      
      {/* LEFT CONTENT */}
      <div className="about-text">
        <h1>Hi, I'm Sanmitraa 👋</h1>

        <h2>Software Engineer | Full Stack Web Developer | AI Enthusiast | ML Engineer</h2>

        <p>
          I am a final-year Computer Science Engineering student passionate about 
          building impactful digital solutions. I specialize in frontend development 
          and have strong foundations in Java, C++, and Python.
        </p>

        <p>
          I have hands-on experience through internships, hackathons, and real-world 
          projects. I enjoy solving meaningful problems using technology, especially 
          in areas like AI, web development, and social impact.
        </p>

        <p>
          My goal is to become a skilled software engineer who builds scalable and 
          user-friendly applications that create real value.
        </p>

        <a href="/resume.pdf" download>
        <button className="resume-btn">Download Resume</button>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="about-image">
        <img src={profilePic} alt="Profile" />
      </div>

    </div>
  );
}

export default About;