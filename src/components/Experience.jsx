import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div className="timeline">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <p className="description">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .experience-section {
          padding: 5rem 2rem;
          background: #0a0a0a;
        }
        .container {
          max-width: 800px; // Narrower for reading
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          font-weight: 700;
        }
        .timeline {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid rgba(255, 255, 255, 0.1);
        }
        .timeline-item {
          margin-bottom: 2.5rem;
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -2.6rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--primary-color);
          border-radius: 50%;
          border: 4px solid #0a0a0a;
        }
        .timeline-content {
          background: #151515;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.3s;
        }
        .timeline-content:hover {
          background: #1a1a1a;
        }
        .timeline-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 0.5rem;
        }
        .timeline-header h3 {
          font-size: 1.25rem;
          color: white;
        }
        .company {
          color: var(--primary-color);
          font-weight: 600;
        }
        .period {
          font-size: 0.9rem;
          color: #888;
          margin-top: 0.2rem;
        }
        .description {
          color: #ccc;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .timeline-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
        </section>
    );
};

export default Experience;
