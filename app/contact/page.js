'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., log data or show success)
    console.log('Form submitted:', formData);
    setSubmitStatus('Thank you! Your message has been received.');
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus(null);
    }, 2000);
  };

  return (
    <div className="container">
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Get in touch for support or inquiries about our tools.</p>
      </section>
      <div className="calculator contact-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here"
              rows="5"
            />
          </div>
          <button type="submit" className="tool-link">
            Send Message
          </button>
          {submitStatus && <p className="submit-status">{submitStatus}</p>}
        </form>
      </div>
      <section className="content-section">
        <h2>Contact Information</h2>
        <p>
          We’re here to assist you! For general inquiries, use the form above. For urgent issues, you can reach us via email at support@Quicklytools.com. Our team responds within 24-48 hours.
        </p>
        <h3>Support Hours</h3>
        <p>
          Monday to Friday, 9 AM - 5 PM WAT. We’re closed on weekends and public holidays but check emails periodically.
        </p>
      </section>
    </div>
  );
}