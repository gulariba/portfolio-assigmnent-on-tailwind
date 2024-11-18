import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">Feel free to reach out to me through this form:</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows={5} required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
