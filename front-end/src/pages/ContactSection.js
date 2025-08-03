import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../Styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <div className="divider"></div>
          <p>We'd love to hear from you. Reach out to us with any questions or feedback.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="icon-circle">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <h3>Our Location</h3>
              <p>123 Fashion Street, Paris, France</p>
            </div>
            
            <div className="info-card">
              <div className="icon-circle">
                <FaPhone className="contact-icon" />
              </div>
              <h3>Phone Number</h3>
              <p>+33 1 23 45 67 89</p>
            </div>
            
            <div className="info-card">
              <div className="icon-circle">
                <FaEnvelope className="contact-icon" />
              </div>
              <h3>Email Address</h3>
              <p>contact@alleralamode.com</p>
            </div>
            
            <div className="info-card">
              <div className="icon-circle">
                <FaClock className="contact-icon" />
              </div>
              <h3>Opening Hours</h3>
              <p>Monday-Friday: 9AM - 8PM</p>
              <p>Saturday-Sunday: 10AM - 6PM</p>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;