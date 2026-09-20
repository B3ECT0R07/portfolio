import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { cvData } from '../data/cvData';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      padding: '0 20px',
    }}>
      <div style={{ maxWidth: '850px', zIndex: 2 }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#00f5a0',
            letterSpacing: '3px',
            fontSize: '1rem',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '20px',
          }}
        >
          {'> Hello, World_'}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          I am{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {cvData.name}
          </span>
        </motion.h1>

        <div style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '30px',
          minHeight: '40px',
        }}>
          <TypeAnimation
            sequence={[
              'Creative Developer',
              2000,
              'Problem Solver',
              2000,
              'UI/UX Enthusiast',
              2000,
              'Web Designer',
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
            speed={50}
          />
        </div>

        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 40px',
          lineHeight: 1.8,
        }}>
          {cvData.tagline}
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
              borderRadius: '50px',
              color: '#0a0a0a',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            View Projects →
          </a>
          <a
            href="#contact"
            style={{
              padding: '14px 36px',
              border: '2px solid rgba(0, 245, 160, 0.4)',
              borderRadius: '50px',
              color: '#00f5a0',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;