import React, { useState, useEffect, useRef } from 'react';
import trainVideo from './train.mp4';
import {
  GraduationCap,
  Mail,
  Gamepad2,
  Trophy,
  Sprout,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Leaf
} from 'lucide-react';

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const cvData = {
  name: "Vaibhav Bector",
  tagline: "I like football and creativity.",
  location: "Vancouver, BC",
  email: "bector2001@gmail.com",
  github: "https://github.com/B3ECT0R07",
  linkedin: "https://ca.linkedin.com/in/vaibhavbector",
  twitter: "https://x.com/bector2001",
  heroTitles: [
    "Project Manager",
    "Installation Coordinator",
    "Construction Estimator",
    "Supply Chain Manager"
  ],
  bio: "Dynamic operations professional based in Vancouver, BC. Proven track record driving high-impact efficiency improvements, cost reductions, and revenue growth across construction and supply chain operations. Massive Real Madrid fan, passionate gamer, and aspiring entrepreneur with a long-term vision in consultancy and innovative hydroponics.",
  skills: [
    { name: "Project Management", level: 95 },
    { name: "Supply Chain & Operations", level: 90 },
    { name: "Construction Estimating & CPM", level: 88 },
    { name: "Lean & Kaizen Methodologies", level: 85 },
    { name: "SAP & Salesforce", level: 85 },
    { name: "Budget Management & Forecasting", level: 92 },
    { name: "Cross-Functional Leadership", level: 90 }
  ],
  experience: [
    {
      role: "Project Manager / Installation Coordinator",
      company: "TORMAX Canada",
      period: "July 2024 – Present",
      location: "Vancouver, BC",
      highlights: [
        "Boosted operational efficiency by 40% through streamlined installation scheduling.",
        "Increased regional revenue by 30% by developing competitive construction bids.",
        "Implemented Lean & Kaizen frameworks to eliminate workflow bottlenecks.",
        "Utilized Critical Path Method (CPM) to guarantee on-time project completion."
      ]
    },
    {
      role: "Supply Chain Manager",
      company: "Wellness Extract",
      period: "August 2023 – July 2024",
      location: "Vancouver, BC",
      highlights: [
        "Achieved 66% growth in order fulfillment within 12 months.",
        "Reduced overall operational logistics costs by 23%.",
        "Managed multi-channel inventory allocations and vendor partnerships."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Business Administration (BBA)",
      institution: "University of the Fraser Valley (UFV)",
      year: "2023",
      details: "Focused on Supply Chain Management, Operations, and Business Leadership."
    },
    {
      degree: "Diploma in International Business",
      institution: "Universidad del Rosario",
      year: "2023",
      details: "Global market analysis and cross-cultural trade strategies."
    }
  ],
  interests: [
    {
      title: "Football & Real Madrid",
      icon: Trophy,
      accent: "#d4a017",
      gradient: "linear-gradient(160deg, #1a2a14 0%, #2f4a24 45%, #6b8e23 150%)",
      desc: "Die-hard Real Madrid supporter. Passionate about tactics, team dynamics, and world football."
    },
    {
      title: "Gaming",
      icon: Gamepad2,
      accent: "#7dcea0",
      gradient: "linear-gradient(160deg, #102018 0%, #1c3a2a 45%, #2e8b57 150%)",
      desc: "Avid gamer. Channeling strategic thinking, tactical agility, and quick decision-making under pressure."
    },
    {
      title: "Hydroponics & Tech",
      icon: Sprout,
      accent: "#a7d129",
      gradient: "linear-gradient(160deg, #14200e 0%, #2a4018 45%, #556b2f 150%)",
      desc: "Aspiring consultant and future hydroponics business founder focused on sustainable agriculture."
    }
  ],
  projects: [
    {
      title: "Workflow Optimization",
      category: "Process Engineering",
      desc: "Redesigned site installation workflows, cutting project turnaround times by 40%.",
      metrics: "+40% Efficiency"
    },
    {
      title: "Supply Chain Scale",
      category: "Logistics",
      desc: "Overhauled warehouse logistics to handle 66% increased order volume while slashing costs.",
      metrics: "66% Growth"
    },
    {
      title: "Bidding Engine",
      category: "Construction",
      desc: "Built accurate cost estimation structures leading to a 30% increase in contract wins.",
      metrics: "+30% Revenue"
    }
  ]
};

export default function App() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [passionsOpen, setPassionsOpen] = useState(false);
  const [selectedPassion, setSelectedPassion] = useState(null);
  
  const videoRef = useRef(null);
  const initials = cvData.name.split(' ').map((n) => n[0]).join('');

  // Force video playback on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [passionsOpen]);

  useEffect(() => {
    const currentFullText = cvData.heroTitles[titleIndex];
    const speed = isDeleting ? 28 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % cvData.heroTitles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <div className="portfolio-app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        :root {
          --bg: #07110b;
          --moss: #7dcea0;
          --leaf: #a7d129;
          --forest: #1b3a2a;
          --brass: #d4a017;
          --fog: #cddbcf;
          --muted: #93a897;
          --card: rgba(12, 28, 18, 0.75);
          --line: rgba(167, 209, 41, 0.22);
        }

        body {
          background: var(--bg);
          color: #eef6ef;
          font-family: Georgia, 'Times New Roman', serif;
          overflow-x: hidden;
        }

        /* Video Background Container */
        .bg-live {
          position: fixed;
          inset: 0;
          z-index: -3;
          overflow: hidden;
        }

        .bg-live video {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          filter: saturate(1.25) contrast(1.05) brightness(0.85);
        }

        .bg-overlay {
          position: fixed;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(to bottom, rgba(4, 12, 8, 0.35), rgba(4, 12, 8, 0.5) 50%, rgba(4, 12, 8, 0.75));
          pointer-events: none;
        }

        .reveal {
          opacity: 0;
          transform: translateY(48px);
          transition: opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }

        .display-font {
          font-family: Georgia, 'Times New Roman', serif;
          letter-spacing: 0.04em;
        }

        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(6, 16, 11, 0.65);
          backdrop-filter: blur(16px);
          z-index: 900;
          border-bottom: 1px solid rgba(167, 209, 41, 0.15);
        }

        .nav-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 1.2rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          color: var(--leaf);
          text-decoration: none;
          text-shadow: 0 0 18px rgba(167, 209, 41, 0.25);
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.92rem;
          transition: color 0.25s ease;
        }

        .nav-links a:hover {
          color: var(--leaf);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #eef6ef;
          cursor: pointer;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 7rem 1.5rem 4rem;
        }

        .hero-content {
          text-align: center;
          z-index: 2;
          max-width: 900px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          background: rgba(27, 58, 42, 0.7);
          border: 1px solid rgba(125, 206, 160, 0.35);
          border-radius: 999px;
          color: var(--moss);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .hero h1 {
          font-size: clamp(2.8rem, 7vw, 5.4rem);
          line-height: 1.02;
          margin-bottom: 1rem;
          color: #f4faf4;
          text-shadow: 0 10px 40px rgba(0,0,0,0.6);
        }

        .typing-container {
          font-size: clamp(1.05rem, 2.6vw, 1.55rem);
          color: var(--brass);
          min-height: 2rem;
          margin-bottom: 1.4rem;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: var(--brass);
          margin-left: 4px;
          animation: blink 0.8s infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-tagline {
          color: var(--fog);
          font-size: 1.15rem;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .cta-row {
          display: flex;
          gap: 0.9rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          text-decoration: none;
          padding: 0.85rem 1.4rem;
          border-radius: 999px;
          font-size: 0.95rem;
          transition: 0.25s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2e8b57, #a7d129);
          color: #07110b;
          font-weight: 700;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(46, 139, 87, 0.35);
        }

        .btn-secondary {
          border: 1px solid rgba(212, 160, 23, 0.5);
          color: var(--brass);
          background: rgba(0,0,0,0.35);
        }

        .btn-secondary:hover {
          border-color: var(--brass);
          background: rgba(212, 160, 23, 0.15);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 28px;
          color: var(--moss);
          opacity: 0.8;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-14px); }
          60% { transform: translateY(-7px); }
        }

        section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 6.5rem 1.5rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 0.6rem;
          color: #f2f8f2;
        }

        .section-sub {
          color: var(--muted);
          margin-bottom: 2.5rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.3rem;
        }

        .card {
          background: var(--card);
          border: 1px solid var(--line);
          backdrop-filter: blur(14px);
          padding: 1.8rem;
          border-radius: 22px;
          transition: 0.35s ease;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }

        .card.clickable {
          cursor: pointer;
        }

        .card.clickable:hover {
          transform: translateY(-8px) scale(1.015);
          border-color: rgba(125, 206, 160, 0.45);
          box-shadow: 0 18px 50px rgba(16, 48, 28, 0.55);
        }

        .skills-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          max-width: 780px;
        }

        .skill-name {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.45rem;
          color: #e7f3e9;
          font-size: 0.95rem;
        }

        .skill-bar-bg {
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #2e8b57, #a7d129, #d4a017);
          box-shadow: 0 0 12px rgba(167, 209, 41, 0.35);
        }

        .job-card {
          border-left: 2px solid rgba(212, 160, 23, 0.5);
          padding-left: 1.4rem;
          margin-bottom: 2rem;
          position: relative;
        }

        .job-card::before {
          content: '';
          position: absolute;
          left: -7px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--brass);
          box-shadow: 0 0 12px rgba(212, 160, 23, 0.55);
        }

        .job-title {
          font-size: 1.35rem;
          margin-bottom: 0.35rem;
        }

        .job-meta {
          color: var(--moss);
          margin-bottom: 1rem;
          font-size: 0.92rem;
        }

        .job-card ul { list-style: none; }
        .job-card li {
          display: flex;
          gap: 0.55rem;
          color: #cfe0d2;
          margin-bottom: 0.65rem;
          line-height: 1.55;
        }

        .project-tag {
          color: var(--brass);
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.7rem;
          display: block;
        }

        .project-metric {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.4rem 0.75rem;
          border-radius: 999px;
          background: rgba(125, 206, 160, 0.15);
          border: 1px solid rgba(125, 206, 160, 0.35);
          color: var(--moss);
          font-size: 0.82rem;
        }

        .passion-hero {
          min-height: 330px;
          border-radius: 28px;
          border: 1px solid rgba(167, 209, 41, 0.28);
          background:
            radial-gradient(circle at 15% 20%, rgba(167, 209, 41, 0.22), transparent 28%),
            radial-gradient(circle at 85% 25%, rgba(212, 160, 23, 0.16), transparent 24%),
            linear-gradient(160deg, rgba(10, 28, 18, 0.92), rgba(14, 36, 24, 0.9));
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: 0.35s ease;
        }

        .passion-hero:hover {
          transform: scale(1.015);
          border-color: rgba(125, 206, 160, 0.5);
          box-shadow: 0 25px 60px rgba(0,0,0,0.4);
        }

        .passion-hero h3 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin-bottom: 0.7rem;
        }

        .passion-hero p {
          color: #d5e5d8;
          max-width: 560px;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .passion-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--leaf);
          font-size: 0.9rem;
        }

        .passions-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .ghost-btn {
          border: 1px solid rgba(212, 160, 23, 0.4);
          background: rgba(0,0,0,0.3);
          color: var(--brass);
          border-radius: 999px;
          padding: 0.55rem 0.95rem;
          cursor: pointer;
        }

        .ghost-btn:hover {
          background: rgba(212, 160, 23, 0.2);
        }

        .passion-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .passion-tile {
          min-height: 260px;
          border-radius: 24px;
          padding: 1.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px) scale(0.96);
          animation: distribute 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .passion-tile:nth-child(1) { animation-delay: 0.05s; }
        .passion-tile:nth-child(2) { animation-delay: 0.12s; }
        .passion-tile:nth-child(3) { animation-delay: 0.19s; }

        @keyframes distribute {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .passion-tile:hover {
          transform: scale(1.03);
          box-shadow: 0 18px 40px rgba(0,0,0,0.4);
        }

        .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.35);
          margin-bottom: 0.9rem;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(3, 10, 7, 0.88);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          width: min(600px, 100%);
          background: rgba(12, 28, 18, 0.95);
          border: 1px solid rgba(167, 209, 41, 0.3);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
        }

        footer {
          border-top: 1px solid rgba(167, 209, 41, 0.12);
          text-align: center;
          padding: 3rem 1.5rem;
          color: var(--muted);
          background: rgba(0,0,0,0.35);
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1.4rem;
          margin-bottom: 1.2rem;
        }

        .social-icons a {
          color: #dceadd;
          transition: 0.25s ease;
        }

        .social-icons a:hover {
          color: var(--leaf);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .passion-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: ${menuOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(6, 16, 11, 0.96);
            padding: 1.2rem 1.5rem 1.5rem;
            border-bottom: 1px solid rgba(167, 209, 41, 0.12);
          }
          .mobile-toggle { display: block; }
        }
      `}</style>

      {/* Video Background Directly Imported from src */}
      <div className="bg-live" aria-hidden="true">
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src={trainVideo} type="video/mp4" />
        </video>
      </div>
      <div className="bg-overlay"></div>

      <header>
        <div className="nav-container">
          <a href="#hero" className="logo display-font">{`< ${initials} />`}</a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#passions" onClick={() => setMenuOpen(false)}>Passions</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="hero-content reveal">
          <div className="badge">
            <MapPin size={14} /> {cvData.location}
            <span style={{ opacity: 0.5 }}>•</span>
            <Leaf size={14} /> Live Wallpaper
          </div>
          <h1 className="display-font">{cvData.name}</h1>
          <div className="typing-container">
            <span>{displayText}</span>
            <span className="cursor"></span>
          </div>
          <p className="hero-tagline">“{cvData.tagline}”</p>
          <div className="cta-row">
            <a href="#passions" className="btn-primary">Explore Passions</a>
            <a href="#experience" className="btn-secondary">View Experience</a>
          </div>
        </div>
        <ChevronDown className="scroll-indicator" size={34} />
      </section>

      <section id="about">
        <h2 className="section-title display-font reveal">About Me</h2>
        <p className="section-sub reveal delay-1">Rooted in operations. Growing into entrepreneurship.</p>
        <div className="card reveal delay-2">
          <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: '#dceadd' }}>{cvData.bio}</p>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title display-font reveal">Core Competencies</h2>
        <p className="section-sub reveal delay-1">Tools and methods I use to build momentum.</p>
        <div className="skills-wrap">
          {cvData.skills.map((skill, i) => (
            <div key={i} className={`reveal delay-${(i % 3) + 1}`}>
              <div className="skill-name">
                <span>{skill.name}</span>
                <span style={{ color: 'var(--leaf)' }}>{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <h2 className="section-title display-font reveal">Professional Experience</h2>
        <p className="section-sub reveal delay-1">Where execution met measurable growth.</p>
        {cvData.experience.map((exp, i) => (
          <div key={i} className="job-card reveal delay-1">
            <h3 className="job-title display-font">{exp.role}</h3>
            <p className="job-meta">{exp.company} | {exp.period} | {exp.location}</p>
            <ul>
              {exp.highlights.map((h, j) => (
                <li key={j}>
                  <CheckCircle2 size={17} color="#a7d129" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="projects">
        <h2 className="section-title display-font reveal">Key Projects</h2>
        <p className="section-sub reveal delay-1">Click any box for a quick breakdown.</p>
        <div className="grid">
          {cvData.projects.map((proj, i) => (
            <div
              key={i}
              className={`card clickable reveal delay-${(i % 3) + 1}`}
              onClick={() => setSelectedProject(proj)}
            >
              <span className="project-tag">{proj.category}</span>
              <h3 className="display-font" style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>{proj.title}</h3>
              <p style={{ color: '#c5d6c8', lineHeight: 1.6 }}>{proj.desc}</p>
              <span className="project-metric">{proj.metrics}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="passions">
        <h2 className="section-title display-font reveal">Passions</h2>
        <p className="section-sub reveal delay-1">Apple-style click box — tap once, watch them spread.</p>

        {!passionsOpen ? (
          <div
            className="passion-hero reveal"
            onClick={() => setPassionsOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setPassionsOpen(true);
            }}
          >
            <div>
              <h3 className="display-font">Overgrown Passions</h3>
              <p>
                Click this living tile to quickly distribute my world outside work:
                Real Madrid, gaming, and building toward hydroponics + consulting.
              </p>
              <div className="passion-cta">
                <Sparkles size={16} /> Tap to reveal
              </div>
            </div>
          </div>
        ) : (
          <div className="reveal">
            <div className="passions-toolbar">
              <span style={{ color: 'var(--muted)' }}>Select a tile</span>
              <button className="ghost-btn" onClick={() => setPassionsOpen(false)}>Close box</button>
            </div>
            <div className="passion-grid">
              {cvData.interests.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="passion-tile"
                    style={{ background: item.gradient }}
                    onClick={() => setSelectedPassion(item)}
                  >
                    <div className="icon-wrap" style={{ color: item.accent }}>
                      <Icon size={24} />
                    </div>
                    <h3 className="display-font" style={{ fontSize: '1.15rem', marginBottom: '0.45rem' }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.5, fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <section id="education">
        <h2 className="section-title display-font reveal">Education</h2>
        <div className="grid" style={{ marginTop: '1rem' }}>
          {cvData.education.map((edu, i) => (
            <div key={i} className={`card reveal delay-${(i % 3) + 1}`}>
              <GraduationCap size={24} color="#d4a017" style={{ marginBottom: '0.8rem' }} />
              <h3 className="display-font" style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{edu.degree}</h3>
              <p style={{ color: 'var(--moss)', marginBottom: '0.45rem' }}>{edu.institution} ({edu.year})</p>
              <p style={{ color: '#c5d6c8', fontSize: '0.95rem' }}>{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title display-font reveal">Let’s Connect</h2>
        <div className="card reveal delay-1" style={{ maxWidth: 600, textAlign: 'center', margin: '0 auto' }}>
          <Mail size={30} color="#a7d129" style={{ marginBottom: '0.7rem' }} />
          <h3 className="display-font" style={{ marginBottom: '0.4rem' }}>Email Me</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>{cvData.email}</p>
          <a className="btn-primary" href={`mailto:${cvData.email}`}>Send Message</a>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <X size={22} />
            </button>
            <span className="project-tag">{selectedProject.category}</span>
            <h3 className="display-font" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{selectedProject.title}</h3>
            <p style={{ color: '#cfe0d2', lineHeight: 1.65, marginBottom: '1rem' }}>{selectedProject.desc}</p>
            <span className="project-metric">{selectedProject.metrics}</span>
          </div>
        </div>
      )}

      {selectedPassion && (
        <div className="modal-overlay" onClick={() => setSelectedPassion(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedPassion(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <X size={22} />
            </button>
            <span className="project-tag">Passion</span>
            <h3 className="display-font" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{selectedPassion.title}</h3>
            <p style={{ color: '#cfe0d2', lineHeight: 1.65 }}>{selectedPassion.desc}</p>
          </div>
        </div>
      )}

      <footer>
        <div className="social-icons">
          <a href={cvData.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={24} /></a>
          <a href={cvData.github} target="_blank" rel="noreferrer"><GithubIcon size={24} /></a>
          <a href={cvData.twitter} target="_blank" rel="noreferrer"><TwitterIcon size={24} /></a>
          <a href={`mailto:${cvData.email}`}><Mail size={24} /></a>
        </div>
        <p>© {new Date().getFullYear()} {cvData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}