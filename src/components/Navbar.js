import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: scrolled ? '15px 40px' : '25px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(15px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'JetBrains Mono', monospace",
          cursor: 'pointer',
        }}
      >
        {'<Portfolio />'}
      </div>

      <div style={{ display: 'flex', gap: '30px' }} className="nav-links">
        {navItems.map(item => (
          <a
            key={item.label}
            href={item.href}
            style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              fontFamily: "'JetBrains Mono', monospace",
              transition: 'color 0.2s',
            }}
            className="hoverable"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;