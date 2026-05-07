import "./Skills.css";
import { SiFigma } from "react-icons/si";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaCloud
} from "react-icons/fa";

import {
  SiCplusplus,
  SiMysql,
  SiPostman,
  SiCanva,
  SiFirebase,
  SiDocker
} from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaCloud />, name: "Cloud" },
    { icon: <SiMysql />, name: "REST API" }
  ];

  const tools = [
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiCanva />, name: "Canva" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiDocker />, name: "Docker" }
];

  return (
    <div id="skills" className="skills-section">

      <h1>Skills & Tools</h1>

      <p>
        Technologies and tools I use to build modern applications
      </p>

      {/* SKILLS */}
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>
        ))}

      </div>

      {/* TOOLS */}
      <h2 className="section-title">Tools</h2>

      <div className="skills-grid">

        {tools.map((tool, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {tool.icon}
            </div>

            <h3>{tool.name}</h3>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Skills;