import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cvData } from '../data/cvData';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} style={{ background: '#0d0d0d', padding: '100px 40px' }}>
      <div className="section-header">
        <span className="section-label">{'// Get to know me'}</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
      </div>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            padding: '35px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '25px' }}>
            {cvData.about.bio}
          </p>

          <h3 style={{ fontSize: '1rem', color: '#00f5a0', fontFamily: "'JetBrains Mono', monospace", marginBottom: '15px' }}>
            {'> Quick Facts'}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {cvData.about.funFacts.map((fact, idx) => (
              <li key={idx} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                {fact}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          {cvData.about.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '30px 20px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: '2.8rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '5px',
              }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;