import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="overlay">
                  <div className="links">
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <Github size={24} />
                    </a>

                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 5rem 2rem;
          background: #0f0f0f;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          font-weight: 700;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
        .project-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .project-card:hover .project-image {
          transform: scale(1.1);
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project-card:hover .overlay {
          opacity: 1;
        }
        .links {
          display: flex;
          gap: 1.5rem;
        }
        .icon-link {
          color: white;
          transition: color 0.2s, transform 0.2s;
        }
        .icon-link:hover {
          color: var(--primary-color);
          transform: scale(1.1);
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .project-content p {
          color: #ccc;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tag {
          background: rgba(100, 108, 255, 0.1);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Projects;
