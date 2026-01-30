import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ideally this would send an email or use a service like Formspree
        alert("Thanks for reaching out! This is a demo form.");
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Let's Talk</h3>
                        <p>
                            I'm open to freelance opportunities or discussing your next big project.
                            Feel free to reach out!
                        </p>

                        <div className="info-item">
                            <Mail className="icon" />
                            <span>{personalInfo.email}</span>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <span>{personalInfo.phone}</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <span>Remote / Worldwide</span>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>

            <style jsx>{`
        .contact-section {
          padding: 5rem 2rem;
          background: #0f0f0f;
        }
        .container {
          max-width: 1000px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          font-weight: 700;
        }
        .contact-content {
          display: grid;
          gap: 3rem;
        }
        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .contact-info p {
          color: #ccc;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #eee;
        }
        .icon {
          color: var(--primary-color);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        .submit-btn {
          background: var(--primary-color);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: opacity 0.3s;
        }
        .submit-btn:hover {
          opacity: 0.9;
        }

        @media (min-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
