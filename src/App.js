import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, X, ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import profilePic from './Profile.jpg';

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// --- GLITCH CURSOR TRAIL COMPONENT ---
const GlitchTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e) => {
      const numParticles = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < numParticles; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          width: Math.random() * 20 + 5,
          height: Math.random() * 3 + 1,
          life: 1,
          decay: Math.random() * 0.05 + 0.02,
          color: Math.random() > 0.5 ? '#5266eb' : '#70707d',
          shiftX: (Math.random() - 0.5) * 2
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life -= p.decay;
        p.x += p.shiftX; 

        if (p.life <= 0) {
          particles.current.splice(i, 1);
        } else {
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          
          if (p.color === '#5266eb') {
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#5266eb';
          } else {
            ctx.shadowBlur = 0;
          }

          const glitchSnap = Math.random() > 0.9 ? (Math.random() - 0.5) * 15 : 0;
          ctx.fillRect(p.x + glitchSnap, p.y, p.width, p.height);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none', 
        zIndex: 9999 
      }} 
    />
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [expandedPassions, setExpandedPassions] = useState(['football']);
  const [selectedProject, setSelectedProject] = useState(null);

  const personalInfo = {
    name: 'Vaibhav Bector',
    location: 'Vancouver, BC',
    email: 'bector2001@gmail.com',
    tagline: 'I build lean operations and scalable supply chains.',
    linkedin: 'https://ca.linkedin.com/in/vaibhavbector',
    github: 'https://github.com/B3ECT0R07',
  };

  const passions = [
    {
      id: 'football',
      title: 'Tactical Execution',
      tagline: 'Strategy & Leadership — Hala Madrid',
      fullContent:
        'Football is a masterclass in strategy, split-second tactical adjustments, and high-pressure execution. As an avid supporter of Real Madrid, I draw daily inspiration from their championship mindset: relentless growth, clutch performance under pressure, and unyielding ambition. I apply this exact framework to coordinating complex project timelines.',
    },
    {
      id: 'hydroponics',
      title: 'Sustainable Systems',
      tagline: 'Vertical farming & bio-tech',
      fullContent:
        'Deeply fascinated by nature ecosystems blending with tech architecture. My interest in hydroponics centers around automated nutrient recirculating systems and zero-soil growth. It represents the perfect intersection of engineering, operational control, and environmental stewardship.',
    },
    {
      id: 'entrepreneurship',
      title: 'Lean Operations',
      tagline: 'Supply chain & problem solving',
      fullContent:
        'Building scalable systems is at the heart of everything I do. My track record in supply chain management and installation coordination stems from an entrepreneurial drive to eliminate bottlenecks and build predictable success.',
    },
  ];

  const experiences = [
    {
      company: 'TORMAX Canada',
      role: 'Project Manager / Installation Coordinator',
      period: 'July 2024 – Present',
      highlights: [
        'Boosted operational project delivery efficiency by 40% using Lean and Kaizen frameworks.',
        'Supported 30% regional revenue growth through precise resource allocation.',
        'Managed Critical Path Method (CPM) scheduling for commercial architectural installations.',
      ],
    },
    {
      company: 'Wellness Extract',
      role: 'Supply Chain Manager',
      period: 'August 2023 – July 2024',
      highlights: [
        'Scaled order fulfillment capacity by 66% through automated multi-channel inventory control.',
        'Reduced logistics operational costs by 23% by renegotiating freight and vendor contracts.',
        'Managed end-to-end supply chain pipelines across North American fulfillment hubs.',
      ],
    },
  ];

  const projects = [
    {
      id: 'tormax-tracker',
      title: 'Lean Project Delivery Engine',
      category: 'Operations & Project Management',
      desc: 'Built resource planning matrices that cut project delays by 40% and aligned installation teams.',
      details:
        'By combining Critical Path Method (CPM) scheduling with agile tracking, this system improved site installation flow, aligned technicians with supply hubs, and drove regional growth.',
    },
    {
      id: 'supply-chain-hub',
      title: 'Fulfillment Optimizer',
      category: 'Supply Chain & Logistics',
      desc: 'Architected end-to-end inventory workflows supporting a 66% order volume increase.',
      details:
        'Leveraged inventory analytics to optimize stock levels, prevent stockouts, and reduce overall freight expenditure by 23% across North American distribution channels.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const togglePassion = (id) => {
    setExpandedPassions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="mercury-app">
      {/* GLITCH TRAIL COMPONENT INJECTED HERE */}
      <GlitchTrail />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@400;500&display=swap');

        :root {
          --color-onyx: #171721;
          --color-graphite: #1e1e2a;
          --color-obsidian: #272735;
          --color-slate: #70707d;
          --color-mist: #e2e3ed;
          --color-ash: #c3c3cc;
          --color-ivory: #ededf3;
          --color-cobalt: #5266eb;
          --color-white: #ffffff;
          --font-body: 'Inter', sans-serif;
          --font-display: 'Space Grotesk', sans-serif;
          --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body, html {
          background-color: var(--color-onyx);
          color: var(--color-ivory);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.8s var(--ease-out),
            transform 0.8s var(--ease-out);
          will-change: opacity, transform;
        }

        .reveal.reveal-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-item {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.9s var(--ease-out),
            transform 0.9s var(--ease-out);
        }

        .hero-ready .hero-item {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-item-0 { transition-delay: 0.02s; }
        .hero-item-1 { transition-delay: 0.12s; }
        .hero-item-2 { transition-delay: 0.24s; }
        .hero-item-3 { transition-delay: 0.36s; }
        .hero-item-4 { transition-delay: 0.48s; }

        .hero-bg {
          transform: scale(1.06);
          transition: transform 1.6s var(--ease-out);
        }

        .hero-ready .hero-bg {
          transform: scale(1);
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px 40px;
          background-color: var(--color-onyx);
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(23, 23, 33, 0.4) 0%, rgba(23, 23, 33, 1) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Portrait Styling */
        .portrait-container {
          margin-bottom: 24px;
          position: relative;
        }

        .portrait-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-obsidian);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
          transition: transform 0.35s var(--ease-out), border-color 0.35s ease;
        }

        .portrait-img:hover {
          transform: scale(1.05);
          border-color: var(--color-cobalt);
        }

        .hero-badge {
          font-size: 14px;
          font-weight: 400;
          color: var(--color-ash);
          border: 1px solid var(--color-slate);
          padding: 8px 16px;
          border-radius: 40px;
          margin-bottom: 28px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(42px, 6vw, 65px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: var(--color-white);
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5;
          color: var(--color-ivory);
          margin-bottom: 40px;
          max-width: 540px;
        }

        .btn-primary,
        .btn-ghost {
          border-radius: 32px;
          font-family: var(--font-body);
          font-size: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition:
            background-color 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s var(--ease-out),
            box-shadow 0.25s ease;
        }

        .btn-primary {
          background-color: var(--color-cobalt);
          color: var(--color-white);
          border: none;
          padding: 14px 24px;
          font-weight: 500;
        }

        .btn-primary:hover {
          background-color: #4255d6;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(82, 102, 235, 0.28);
        }

        .btn-ghost {
          background-color: transparent;
          color: var(--color-ivory);
          border: 1px solid var(--color-slate);
          padding: 14px 24px;
          font-weight: 400;
        }

        .btn-ghost:hover {
          border-color: var(--color-mist);
          transform: translateY(-2px);
        }

        .button-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            backdrop-filter 0.35s ease,
            padding 0.35s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .nav-bar.scrolled {
          background: rgba(23, 23, 33, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-obsidian);
          padding: 16px 40px;
        }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 500;
          color: var(--color-ivory);
          letter-spacing: -0.02em;
        }

        .nav-links { display: flex; gap: 32px; }

        .nav-link {
          color: var(--color-ivory);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          position: relative;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1px;
          background: var(--color-ivory);
          transition: width 0.3s var(--ease-out);
        }

        .nav-link:hover { color: var(--color-white); }
        .nav-link:hover::after { width: 100%; }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 112px 24px;
        }

        .section-header { margin-bottom: 56px; }

        .section-title {
          font-family: var(--font-display);
          font-size: 42px;
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.01em;
          color: var(--color-white);
          margin-bottom: 16px;
        }

        .section-desc {
          font-size: 18px;
          color: var(--color-ash);
          max-width: 600px;
          line-height: 1.5;
        }

        .graphite-card {
          background-color: var(--color-graphite);
          border-radius: 12px;
          padding: 32px;
          border: 1px solid transparent;
          box-shadow: none;
          transition:
            transform 0.35s var(--ease-out),
            border-color 0.35s ease,
            background-color 0.35s ease;
        }

        .graphite-card.interactive {
          cursor: pointer;
        }

        .graphite-card.interactive:hover {
          transform: translateY(-6px);
          border-color: rgba(82, 102, 235, 0.25);
          background-color: #21212f;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
        }

        .exp-role {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 500;
          color: var(--color-white);
          margin-bottom: 8px;
        }

        .exp-meta {
          font-size: 16px;
          color: var(--color-ash);
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--color-obsidian);
          padding-bottom: 16px;
        }

        .exp-list {
          list-style: none;
          color: var(--color-ivory);
          font-size: 16px;
          line-height: 1.6;
        }

        .exp-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
        }

        .exp-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--color-slate);
        }

        .project-link {
          margin-top: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-cobalt);
          font-weight: 500;
          font-size: 14px;
          transition: gap 0.25s var(--ease-out);
        }

        .graphite-card.interactive:hover .project-link {
          gap: 12px;
        }

        .dropbox-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          gap: 16px;
        }

        .dropbox-title {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 500;
          color: var(--color-white);
        }

        .dropbox-tagline {
          font-size: 14px;
          color: var(--color-ash);
          margin-top: 4px;
        }

        .chevron {
          color: var(--color-slate);
          transition: transform 0.35s var(--ease-out), color 0.25s ease;
          flex-shrink: 0;
        }

        .chevron.open {
          transform: rotate(180deg);
          color: var(--color-ivory);
        }

        .dropbox-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s var(--ease-out);
        }

        .dropbox-content.open {
          grid-template-rows: 1fr;
        }

        .dropbox-content-inner {
          overflow: hidden;
        }

        .dropbox-content-inner > div {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--color-obsidian);
          color: var(--color-ivory);
          line-height: 1.6;
          font-size: 16px;
          opacity: 0;
          transform: translateY(-6px);
          transition:
            opacity 0.35s ease 0.05s,
            transform 0.35s var(--ease-out) 0.05s;
        }

        .dropbox-content.open .dropbox-content-inner > div {
          opacity: 1;
          transform: translateY(0);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(23, 23, 33, 0.92);
          backdrop-filter: blur(10px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease;
        }

        .modal-content {
          background-color: var(--color-graphite);
          border-radius: 12px;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          position: relative;
          border: 1px solid var(--color-obsidian);
          animation: modalIn 0.4s var(--ease-out);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalIn {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: transparent;
          border: none;
          color: var(--color-ash);
          cursor: pointer;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .modal-close:hover {
          color: var(--color-white);
          transform: rotate(90deg);
        }

        .footer {
          border-top: 1px solid var(--color-obsidian);
          padding: 40px 24px;
          text-align: center;
          font-size: 14px;
          color: var(--color-ash);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hero-title { font-size: 42px; }
          .section-container { padding: 72px 24px; }
          .nav-bar, .nav-bar.scrolled { padding: 16px 20px; }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">Vaibhav Bector.</div>
        <div className="nav-links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About</a>
        </div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-ghost"
          style={{ padding: '8px 16px', fontSize: '14px' }}
        >
          <Mail size={14} /> Contact
        </a>
      </nav>

      {/* Hero with Personal Portrait */}
      <header className={`hero ${heroReady ? 'hero-ready' : ''}`}>
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-overlay" />

        <div className="hero-content">
          {/* Portrait Image Container */}
          <div className="portrait-container hero-item hero-item-0">
            <img 
              src={profilePic} 
              alt="Vaibhav Bector" 
              className="portrait-img"
            />
          </div>

          <div className="hero-badge hero-item hero-item-1">
            <MapPin size={14} /> {personalInfo.location} — Operations & Strategy
          </div>

          <h1 className="hero-title hero-item hero-item-2">
            Orchestrating complex systems.
          </h1>

          <p className="hero-subtitle hero-item hero-item-3">
            {personalInfo.tagline} Designed to eliminate operational bottlenecks
            and architect predictable, high-growth delivery.
          </p>

          <div className="button-group hero-item hero-item-4">
            <a href="#projects" className="btn-primary">
              View Initiatives <ArrowRight size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Experience */}
      <section id="experience" className="section-container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title">Track Record</h2>
            <p className="section-desc">
              Executing lean operations across supply chain management and
              architectural installations.
            </p>
          </div>
        </Reveal>

        <div className="grid-2">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 120}>
              <div className="graphite-card">
                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-meta">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="exp-list">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-container" style={{ paddingTop: 0 }}>
        <Reveal>
          <div className="section-header">
            <h2 className="section-title">Key Initiatives</h2>
          </div>
        </Reveal>

        <div className="grid-2">
          {projects.map((proj, idx) => (
            <Reveal key={proj.id} delay={idx * 120}>
              <div
                className="graphite-card interactive"
                onClick={() => setSelectedProject(proj)}
              >
                <div
                  style={{
                    color: 'var(--color-slate)',
                    fontSize: '14px',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {proj.category}
                </div>
                <h3 className="exp-role">{proj.title}</h3>
                <p
                  style={{
                    color: 'var(--color-ash)',
                    fontSize: '16px',
                    lineHeight: 1.5,
                    marginTop: '12px',
                  }}
                >
                  {proj.desc}
                </p>
                <div className="project-link">
                  View details <ExternalLink size={14} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About / Passions */}
      <section id="about" className="section-container" style={{ paddingTop: 0 }}>
        <Reveal>
          <div className="section-header">
            <h2 className="section-title">Driving Principles</h2>
            <p className="section-desc">
              The philosophies that influence my approach to complex project
              management.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {passions.map((passion, idx) => {
            const isOpen = expandedPassions.includes(passion.id);
            return (
              <Reveal key={passion.id} delay={idx * 90}>
                <div className="graphite-card">
                  <div
                    className="dropbox-header"
                    onClick={() => togglePassion(passion.id)}
                  >
                    <div>
                      <h3 className="dropbox-title">{passion.title}</h3>
                      <div className="dropbox-tagline">{passion.tagline}</div>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`chevron ${isOpen ? 'open' : ''}`}
                    />
                  </div>

                  <div className={`dropbox-content ${isOpen ? 'open' : ''}`}>
                    <div className="dropbox-content-inner">
                      <div>{passion.fullContent}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div
              style={{
                color: 'var(--color-slate)',
                fontSize: '14px',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {selectedProject.category}
            </div>
            <h3
              className="section-title"
              style={{ fontSize: '32px', marginBottom: '24px' }}
            >
              {selectedProject.title}
            </h3>
            <p
              style={{
                color: 'var(--color-ivory)',
                fontSize: '16px',
                lineHeight: 1.6,
              }}
            >
              {selectedProject.details}
            </p>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Vaibhav Bector. Modeled on Alpine banking
          aesthetics.
        </p>
      </footer>
    </div>
  );
}