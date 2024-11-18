import React from "react";
import "../style/Skills.css";

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        <div className="skill-item">HTML</div>
        <div className="skill-item">CSS</div>
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">TypeScript</div>
        <div className="skill-item">React.js</div>
        <div className="skill-item">Next.js</div>
        <div className="skill-item">Tailwind CSS</div>
        <div className="skill-item">Bootstrap</div>
        <div className="skill-item">Git & GitHub</div>
        <div className="skill-item">Responsive Design</div>
      </div>
    </section>
  );
};

export default Skills;
