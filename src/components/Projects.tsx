import React from "react";
import "../style/Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with HTML and Tailwind CSS.",
      link: "https://github.com/gulariba/WEBPAGE-USING-TAILWIND-CSS", // GitHub link
    },
    {
      title: "Digital Marketing",
      description: "A lead marketing page for grwoing your buisness.",
      link: "https://github.com/gulariba/Digital-Marketing-webpage", // GitHub link
    },
    {
      title: "My Portfolio",
      description: "A blog platform built using React.js and styled with CSS modules.",
      link: "https://github.com/gulariba/MY-PORTFOLIO", // GitHub link
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
