import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cvData } from '../data/cvData';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref} style={{ padding: '100px 40px' }}>
      <div className="section-header">
        <span className="section-label">{'// What I use'}</span>
        <h2 className="section-title">Skills & Tech</h2>
        <div className="section-line" />
      </div>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
      }}>
        {cvData.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05 }}
            style={{
              padding: '20px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                {skill.icon} {skill.name}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00f5a0', fontSize: '0.85rem' }}>
                {skill.level}%
              </span>
            </div>
            <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '5px', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #00f5a0, #00d9f5)', borderRadius: '5px' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;