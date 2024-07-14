import React from 'react';

import '../../src/styles/styles.css';

function MainContact() {
  return (
    <main>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Have questions or suggestions? Reach out to us!</p>
        <form id="contactForm" action="https://formsubmit.co/b7f14c8779d7c24864dfb59c536bf326" method="POST">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="service">Select Service:</label>
          <select name="Service" id="service">
            <option>Question</option>
            <option>Comments</option>
          </select>

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
          <button type="button" onClick={() => window.location.href = '/'}>Exit</button>
        </form>
        <div id="formMessages" className="form-messages"></div>
      </section>
    </main>
  );
}

export default MainContact;
