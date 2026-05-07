function Contact() {
  return (

    <div
      id="contact"
      className="section"
      style={{
        minHeight: "60vh",
        background: "#020617",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 20px"
      }}
    >

      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "25px",
          color: "#38bdf8"
        }}
      >
        Contact Me
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#cbd5e1",
          marginBottom: "15px"
        }}
      >
        Email: princess.sanmitra05@gmail.com
      </p>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#cbd5e1",
          marginBottom: "25px"
        }}
      >
        Phone: +91 8122606900
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px"
        }}
      >

        <a
          href="https://github.com/SANMITRAAVR"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "#38bdf8",
            fontSize: "1.2rem",
            fontWeight: "bold"
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sanmitraa-v-r-202196294"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "#38bdf8",
            fontSize: "1.2rem",
            fontWeight: "bold"
          }}
        >
          LinkedIn
        </a>

      </div>

    </div>
  );
}

export default Contact;