const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🟢 Connect to SQLite database
const db = new sqlite3.Database("./portfolio.db", (err) => {
  if (err) {
    console.log("Error connecting DB:", err);
  } else {
    console.log("Database connected");
  }
});

// 🟢 Create Projects Table
db.run(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    techStack TEXT,
    githubLink TEXT,
    liveLink TEXT
  )
`);

// 🟢 Test Route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 🟢 Add Project API
app.post("/addProject", (req, res) => {
  const { title, description, techStack, githubLink, liveLink } = req.body;

  const query = `
    INSERT INTO projects (title, description, techStack, githubLink, liveLink)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(query, [title, description, techStack, githubLink, liveLink], function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send("Error adding project");
    }
    res.send("Project added successfully ✅");
  });
});

// 🟢 Get All Projects API
app.get("/projects", (req, res) => {
  db.all("SELECT * FROM projects", [], (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error fetching projects");
    }
    res.json(rows);
  });
});

// 🟢 Delete Project API (optional but useful)
app.delete("/deleteProject/:id", (req, res) => {
  const id = req.params.id;

  db.run("DELETE FROM projects WHERE id = ?", [id], function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send("Error deleting project");
    }
    res.send("Project deleted ✅");
  });
});

// 🟢 Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});