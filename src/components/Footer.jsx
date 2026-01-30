import React from 'react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                <div className="social-links">
                    {personalInfo.socials.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .footer {
          background: #050505;
          padding: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: #666;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-links a {
          color: #666;
          transition: color 0.3s;
        }
        .social-links a:hover {
          color: var(--primary-color);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
