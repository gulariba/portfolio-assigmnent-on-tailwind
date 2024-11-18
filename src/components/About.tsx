import React from 'react';
import '../style/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          Hi, I am Areeba Ahmed Khan, a passionate web developer dedicated to creating beautiful, functional, and user-friendly websites. With a strong foundation in HTML, CSS, Tailwind CSS, React.js, and Next.js, I specialize in crafting responsive and dynamic web applications.
        </p>
        <p className="about-text">
          I believe in continuous learning and strive to stay updated with the latest technologies in the web development field. My goal is to deliver high-quality solutions that exceed client expectations and make a positive impact.
        </p>
        <p className="about-text">
          Apart from coding, I enjoy exploring new trends in technology, reading books, and working on creative projects. I am always excited to take on new challenges and expand my skillset.
        </p>
        <button className="about-button">Learn More</button>
      </div>
    </section>
  );
};

export default About;
