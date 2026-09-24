import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cvData } from '../data/cvData';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" ref={ref} style={{ background: '#0d0d0d', padding: '100px 40px' }}>
      <div className="section-header">
        <span className="section-label">{'// Career Journey'}</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {cvData.experience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.15 }}
            style={{
              padding: '30px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '16px',
              border: `1px solid rgba(255,255,255,0.06)`,
              borderLeft: `4px solid ${exp.color}`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>{exp.role}</h3>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: exp.color, fontSize: '0.85rem' }}>
                {exp.period}
              </span>
            </div>
            <h4 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginBottom: '15px' }}>
              {exp.company} • {exp.location}
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '20px' }}>
              {exp.description}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {exp.tech.map(t => (
                <span
                  key={t}
                  style={{
                    padding: '4px 12px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;