import "./Projects.css";

function Projects() {

  const projects = [

    {
      title: "Advanced To-Do List App with Calendar and Reminders",

      description:
        "A productivity application with calendar integration, reminders, and task management features for better scheduling and organization.",

      tech: ["React", "MySQL", "REST API"],

      github:
        "https://github.com/SANMITRAAVR/Advanced-To-Do-App-with-calender-and-remainders"
    },

    {
      title: "Colour Detection System",

      description:
        "A computer vision project that detects and identifies colors from images using image processing techniques.",

      tech: ["Python", "OpenCV", "AI"],

      github:
        "https://github.com/SANMITRAAVR/Colour-detection"
    },

    {
      title: "Face Detection",

      description:
        "AI-powered application capable of detecting human faces in real-time using computer vision algorithms.",

      tech: ["Python", "OpenCV", "AI"],

      github:
        "https://github.com/SANMITRAAVR/Face-detection"
    },

    {
      title: "Face Recognition System",

      description:
        "A facial recognition application that identifies and verifies individuals using AI and image recognition techniques.",

      tech: ["Python", "AI", "OpenCV"],

      github:
        "https://github.com/SANMITRAAVR/Face-recognition"
    },

    {
      title: "Personalized Home Improvement App",

      description:
        "A smart home improvement platform providing personalized recommendations and user-focused solutions.",

      tech: ["REST API"],

      github:
        "https://github.com/SANMITRAAVR/REST-API"
    },

    {
      title: "E-Hospital Management System",

      description:
        "A healthcare management platform for handling patient records, appointments, and hospital administration efficiently.",

      tech: ["ML", "React", "Firebase"],

      github:
        "https://github.com/priya242005/e-hospital"
    }

  ];

  return (

    <div id="projects" className="projects-section">

      <h1>Projects</h1>

      <p>
        Some of the projects I built during internships,
        hackathons and personal learning.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              {/* TECH TAGS */}
              <div className="tech-tags">

                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}

              </div>

              {/* BUTTON */}
              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Projects;