import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cvData } from '../data/cvData';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} style={{ background: '#0d0d0d', padding: '100px 40px' }}>
      <div className="section-header">
        <span className="section-label">{'// Let\'s talk'}</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line" />
      </div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
            Let's build something extraordinary.
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '30px' }}>
            Whether you want to discuss an upcoming project, contract work, or just say hi, my inbox is always open!
          </p>
          <p style={{ color: '#00f5a0', fontFamily: "'JetBrains Mono', monospace" }}>
            ✉ {cvData.email}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'JetBrains Mono', monospace", marginTop: '8px' }}>
            📍 {cvData.location}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            style={{
              padding: '14px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none',
            }}
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            style={{
              padding: '14px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none',
            }}
          />
          <textarea
            required
            rows={4}
            placeholder="Your Message"
            style={{
              padding: '14px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              outline: 'none',
              resize: 'none',
            }}
          />
          <button
            type="submit"
            className="hoverable"
            style={{
              padding: '14px',
              background: sent ? '#28ca41' : 'linear-gradient(135deg, #00f5a0, #00d9f5)',
              border: 'none',
              borderRadius: '8px',
              color: '#0a0a0a',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {sent ? 'Message Sent! ✓' : 'Send Message →'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;