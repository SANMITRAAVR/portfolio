function Skills() {
  const skills = [
    "Java", "C++", "Python", "React",
    "Frontend Development", "AI", "Cloud"
  ];

  return (
    <div id="skills" className="section" style={{ padding: "40px", color: "white", textAlign: "center" }}>
      <h2>My Skills</h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "10px 20px",
              margin: "10px",
              borderRadius: "8px"
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;