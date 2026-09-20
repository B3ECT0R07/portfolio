import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cvData } from '../data/cvData';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" ref={ref} style={{ padding: '100px 40px' }}>
      <div className="section-header">
        <span className="section-label">{'// Selected work'}</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
      }}>
        {cvData.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.15 }}
            style={{
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {project.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      padding: '3px 10px',
                      background: 'rgba(0,245,160,0.1)',
                      color: '#00f5a0',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hoverable"
                  style={{ color: '#00f5a0', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hoverable"
                  style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem' }}
                >
                  Source Code ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;