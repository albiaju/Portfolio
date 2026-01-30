import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xqebddyg", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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

            <a href={`mailto:${personalInfo.email}`} className="info-item link">
              <Mail className="icon" />
              <span>{personalInfo.email}</span>
            </a>

            <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="info-item link">
              <Phone className="icon" />
              <span>{personalInfo.phone}</span>
            </a>

            <div className="info-item">
              <MapPin className="icon" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
              >
                <CheckCircle size={48} className="success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button type="button" onClick={() => setStatus("")} className="reset-btn">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
                {status === "error" && (
                  <p className="error-text">Oops! There was a problem sending your message.</p>
                )}
              </>
            )}
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
          text-decoration: none;
          transition: transform 0.2s;
        }
        .info-item.link:hover {
            transform: translateX(5px);
            color: var(--primary-color);
        }
        .icon {
          color: var(--primary-color);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 350px;
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
          cursor: pointer;
        }
        .submit-btn:hover {
          opacity: 0.9;
        }
        .submit-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .success-message {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            background: #151515;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .success-icon {
            color: #4ade80;
            margin-bottom: 1rem;
        }
        .reset-btn {
            margin-top: 1.5rem;
            text-decoration: underline;
            color: #888;
            font-size: 0.9rem;
        }
        .error-text {
            color: #ef4444;
            text-align: center;
            font-size: 0.9rem;
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
