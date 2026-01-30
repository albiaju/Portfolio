import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="greeting"
        >
          Hello, I'm
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="name"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="role"
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bio"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="social-icons"
        >
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="social-icon-link"
            >
              <social.icon size={24} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="cta-container"
        >
          <a href="#projects" className="cta-button primary">
            View Work <ArrowRight size={20} />
          </a>
          <a href="/portfolio/resume.pdf" download className="cta-button secondary">
            Download Resume
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: radial-gradient(circle at 50% 50%, rgba(100, 108, 255, 0.1) 0%, rgba(10, 10, 10, 0) 50%);
        }
        .hero-content {
          max-width: 800px;
          text-align: center;
        }
        .greeting {
          color: var(--primary-color);
          font-weight: 500;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          display: block;
        }
        .name {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #fff, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .role {
          font-size: 2rem;
          color: #888;
          margin-bottom: 1rem;
        }
        .bio {
          font-size: 1.1rem;
          color: #ccc;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 2.5rem;
        }
        .social-icon-link {
            color: #888;
            transition: color 0.3s, transform 0.2s;
            padding: 0.5rem;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .social-icon-link:hover {
            color: var(--primary-color);
            background: rgba(255, 255, 255, 0.05);
            transform: translateY(-3px);
            border-color: var(--primary-color);
        }
        .cta-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .cta-button {
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.2s, opacity 0.2s;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .cta-button.primary {
          background: var(--primary-color);
          color: white;
        }
        .cta-button.secondary {
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        @media (min-width: 768px) {
          .name { font-size: 5rem; }
          .role { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
