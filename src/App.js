import React, { useState, useEffect } from 'react';
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
  Sparkles
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
  tagline: "I LIKE FOOTBALL AND CREATIVITY.",
  location: "Vancouver, BC",
  email: "bector2001@gmail.com",
  github: "https://github.com/B3ECT0R07",
  linkedin: "https://ca.linkedin.com/in/vaibhavbector",
  twitter: "https://x.com/bector2001",
  heroTitles: [
    "PROJECT MANAGER",
    "INSTALLATION COORDINATOR",
    "CONSTRUCTION ESTIMATOR",
    "SUPPLY CHAIN MANAGER"
  ],
  bio: "Dynamic operations professional based in Vancouver, BC. Proven track record driving high-impact efficiency improvements, cost reductions, and revenue growth across construction and supply chain operations. Massive Real Madrid fan, passionate gamer, and aspiring entrepreneur with a long-term vision in consultancy and innovative hydroponics.",
  skills: [
    { name: "PROJECT MANAGEMENT", level: 95 },
    { name: "SUPPLY CHAIN & OPERATIONS", level: 90 },
    { name: "CONSTRUCTION ESTIMATING", level: 88 },
    { name: "LEAN & KAIZEN METHODOLOGIES", level: 85 },
    { name: "SAP & SALESFORCE", level: 85 },
    { name: "BUDGET MANAGEMENT", level: 92 },
    { name: "CROSS-FUNCTIONAL LEADERSHIP", level: 90 }
  ],
  experience: [
    {
      role: "PROJECT MANAGER / INSTALLATION COORDINATOR",
      company: "TORMAX CANADA",
      period: "JULY 2024 – PRESENT",
      location: "VANCOUVER, BC",
      highlights: [
        "Boosted operational efficiency by 40% through streamlined installation scheduling.",
        "Increased regional revenue by 30% by developing competitive construction bids.",
        "Implemented Lean & Kaizen frameworks to eliminate workflow bottlenecks.",
        "Utilized Critical Path Method (CPM) to guarantee on-time project completion."
      ]
    },
    {
      role: "SUPPLY CHAIN MANAGER",
      company: "WELLNESS EXTRACT",
      period: "AUGUST 2023 – JULY 2024",
      location: "VANCOUVER, BC",
      highlights: [
        "Achieved 66% growth in order fulfillment within 12 months.",
        "Reduced overall operational logistics costs by 23%.",
        "Managed multi-channel inventory allocations and vendor partnerships."
      ]
    }
  ],
  education: [
    {
      degree: "BACHELOR OF BUSINESS ADMINISTRATION",
      institution: "UNIVERSITY OF THE FRASER VALLEY",
      year: "2023",
      details: "Focused on Supply Chain Management, Operations, and Business Leadership."
    },
    {
      degree: "DIPLOMA IN INTERNATIONAL BUSINESS",
      institution: "UNIVERSIDAD DEL ROSARIO",
      year: "2023",
      details: "Global market analysis and cross-cultural trade strategies."
    }
  ],
  interests: [
    {
      title: "FOOTBALL & REAL MADRID",
      icon: Trophy,
      accent: "#ff007f",
      gradient: "linear-gradient(135deg, #1a0010 0%, #4a0028 45%, #ff007f 140%)",
      desc: "Die-hard Real Madrid supporter. Passionate about tactics, team dynamics, and world football."
    },
    {
      title: "GAMING",
      icon: Gamepad2,
      accent: "#00f3ff",
      gradient: "linear-gradient(135deg, #001018 0%, #003344 45%, #00f3ff 140%)",
      desc: "Avid gamer. Channeling strategic thinking, tactical agility, and quick decision-making under pressure."
    },
    {
      title: "HYDROPONICS & TECH",
      icon: Sprout,
      accent: "#ff7a00",
      gradient: "linear-gradient(135deg, #120a00 0%, #3a2200 45%, #ff7a00 140%)",
      desc: "Aspiring consultant and future hydroponics business founder focused on sustainable agriculture."
    }
  ],
  projects: [
    {
      title: "WORKFLOW OPTIMIZATION",
      category: "PROCESS ENGINEERING",
      desc: "Redesigned site installation workflows, cutting project turnaround times by 40%.",
      metrics: "+40% EFFICIENCY"
    },
    {
      title: "SUPPLY CHAIN SCALE",
      category: "LOGISTICS",
      desc: "Overhauled warehouse logistics to handle 66% increased order volume while slashing costs.",
      metrics: "66% GROWTH"
    },
    {
      title: "BIDDING ENGINE",
      category: "CONSTRUCTION",
      desc: "Built accurate cost estimation structures leading to a 30% increase in contract wins.",
      metrics: "+30% REVENUE"
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

  const initials = cvData.name.split(' ').map((n) => n[0]).join('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [passionsOpen]);

  useEffect(() => {
    const currentFullText = cvData.heroTitles[titleIndex];
    const speed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
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

        body {
          background-color: #050505;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          overflow-x: hidden;
        }

        .reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }

        .gta-font {
          font-family: 'Arial Black', Impact, sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(5, 5, 5, 0.6);
          backdrop-filter: blur(15px);
          z-index: 900;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          color: #fff;
          text-decoration: none;
          text-shadow: 0 0 10px rgba(255, 0, 127, 0.5);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          color: #a0a0a0;
          text-decoration: none;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          color: #ff007f;
          text-shadow: 0 0 8px rgba(255, 0, 127, 0.6);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .hero {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at center, rgba(255,0,127,0.15) 0%, rgba(5,5,5,1) 70%);
        }

        .hero-content {
          text-align: center;
          z-index: 2;
          padding: 0 1.5rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: #00f3ff;
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          backdrop-filter: blur(5px);
        }

        .hero h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1;
          margin-bottom: 1rem;
          color: #ffffff;
          text-shadow: 2px 2px 20px rgba(255, 0, 127, 0.4);
        }

        .typing-container {
          font-size: clamp(1rem, 3vw, 1.5rem);
          color: #ff7a00;
          min-height: 2rem;
          margin-bottom: 2rem;
          letter-spacing: 3px;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: #ff7a00;
          margin-left: 5px;
          animation: blink 0.8s infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-tagline {
          color: #888;
          font-size: 1.2rem;
          letter-spacing: 4px;
          margin-bottom: 3rem;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          color: #fff;
          animation: bounce 2s infinite;
          opacity: 0.5;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }

        section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 8rem 1.5rem;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          color: #fff;
          margin-bottom: 0.5rem;
          display: inline-block;
          border-bottom: 4px solid #ff007f;
          padding-bottom: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          border-radius: 18px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .card.clickable {
          cursor: pointer;
        }

        .card.clickable:hover {
          transform: scale(1.02) translateY(-6px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 0, 127, 0.35);
          box-shadow: 0 24px 50px rgba(0,0,0,0.45);
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, transparent, #ff007f, transparent);
          transition: left 0.5s ease;
        }

        .card.clickable:hover::before {
          left: 100%;
        }

        .skills-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
        }

        .skill-name {
          font-size: 0.9rem;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: space-between;
        }

        .skill-bar-bg {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          width: 100%;
        }

        .skill-bar-fill {
          height: 100%;
          background: #00f3ff;
          box-shadow: 0 0 10px #00f3ff;
        }

        .job-card {
          border-left: 2px solid #333;
          padding-left: 2rem;
          position: relative;
          margin-bottom: 3rem;
        }

        .job-card::after {
          content: '';
          position: absolute;
          left: -7px;
          top: 0;
          width: 12px;
          height: 12px;
          background: #ff7a00;
          border-radius: 50%;
          box-shadow: 0 0 10px #ff7a00;
        }

        .job-title {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .job-meta {
          color: #00f3ff;
          font-size: 0.85rem;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .job-card ul { list-style: none; }

        .job-card li {
          margin-bottom: 0.8rem;
          color: #aaa;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.6;
        }

        .project-tag {
          color: #ff007f;
          font-size: 0.75rem;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          display: block;
        }

        .project-metric {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 243, 255, 0.1);
          color: #00f3ff;
          border: 1px solid rgba(0, 243, 255, 0.3);
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        /* Apple-style passions hero box */
        .passion-hero {
          min-height: 340px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.08);
          background:
            radial-gradient(circle at 20% 20%, rgba(255,0,127,0.35), transparent 35%),
            radial-gradient(circle at 80% 30%, rgba(0,243,255,0.2), transparent 30%),
            radial-gradient(circle at 50% 80%, rgba(255,122,0,0.2), transparent 35%),
            linear-gradient(160deg, #0d0d0d, #151515 50%, #0a0a0a);
          display: flex;
          align-items: flex-end;
          padding: 2.5rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .passion-hero:hover {
          transform: scale(1.015);
          border-color: rgba(255,0,127,0.35);
          box-shadow: 0 30px 80px rgba(255, 0, 127, 0.15);
        }

        .passion-hero-copy h3 {
          font-size: clamp(2rem, 5vw, 3.4rem);
          margin-bottom: 0.8rem;
        }

        .passion-hero-copy p {
          color: #bdbdbd;
          max-width: 520px;
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .passion-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #00f3ff;
          letter-spacing: 2px;
          font-size: 0.8rem;
        }

        .passion-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }

        .passion-tile {
          min-height: 280px;
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transform: translateY(30px) scale(0.96);
          opacity: 0;
          animation: distribute 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .passion-tile:nth-child(1) { animation-delay: 0.05s; }
        .passion-tile:nth-child(2) { animation-delay: 0.12s; }
        .passion-tile:nth-child(3) { animation-delay: 0.19s; }

        @keyframes distribute {
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .passion-tile:hover {
          transform: scale(1.03);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }

        .passion-tile .icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.35);
          margin-bottom: 1rem;
          backdrop-filter: blur(8px);
        }

        .passion-tile h3 {
          font-size: 1.15rem;
          margin-bottom: 0.6rem;
        }

        .passion-tile p {
          color: rgba(255,255,255,0.82);
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .passions-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .ghost-btn {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          padding: 0.7rem 1rem;
          border-radius: 999px;
          cursor: pointer;
          letter-spacing: 1px;
          font-size: 0.75rem;
        }

        .ghost-btn:hover {
          border-color: #ff007f;
          color: #ff007f;
        }

        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          background: #111;
          padding: 2.5rem;
          border: 1px solid #333;
          max-width: 600px;
          width: 100%;
          position: relative;
          border-radius: 18px;
        }

        footer {
          text-align: center;
          padding: 4rem 1.5rem;
          border-top: 1px solid #222;
          background: #000;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .social-icons a {
          color: #fff;
          transition: all 0.3s;
        }

        .social-icons a:hover {
          color: #ff007f;
          transform: scale(1.2);
        }

        @media (max-width: 900px) {
          .passion-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: ${menuOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 100%; left: 0; width: 100%;
            background: rgba(5,5,5,0.95);
            padding: 2rem;
            border-bottom: 1px solid #333;
          }
          .mobile-toggle { display: block; }
          .section-title { font-size: 2.2rem; }
        }
      `}</style>

      <header>
        <div className="nav-container">
          <a href="#hero" className="logo gta-font">{`< ${initials} />`}</a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ul className="nav-links gta-font">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>CAREER</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
            <li><a href="#passions" onClick={() => setMenuOpen(false)}>PASSIONS</a></li>
          </ul>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="hero-content reveal">
          <div className="badge gta-font">
            <MapPin size={14} /> {cvData.location}
          </div>
          <h1 className="gta-font">{cvData.name}</h1>
          <div className="typing-container gta-font">
            <span>{displayText}</span>
            <span className="cursor"></span>
          </div>
          <p className="hero-tagline gta-font">{cvData.tagline}</p>
        </div>
        <ChevronDown className="scroll-indicator" size={40} />
      </section>

      <section id="about">
        <div className="section-header reveal">
          <h2 className="section-title gta-font">WHO I AM</h2>
        </div>
        <div className="card reveal delay-1">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
            {cvData.bio}
          </p>
        </div>
      </section>

      <section id="skills">
        <div className="section-header reveal">
          <h2 className="section-title gta-font">ARSENAL</h2>
        </div>
        <div className="skills-wrapper">
          {cvData.skills.map((skill, i) => (
            <div key={i} className={`reveal delay-${(i % 3) + 1}`}>
              <div className="skill-name gta-font">
                <span>{skill.name}</span>
                <span style={{ color: '#00f3ff' }}>{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <div className="section-header reveal">
          <h2 className="section-title gta-font">MISSIONS COMPLETED</h2>
        </div>
        <div>
          {cvData.experience.map((exp, i) => (
            <div key={i} className="job-card reveal delay-1">
              <h3 className="job-title gta-font">{exp.role}</h3>
              <p className="job-meta gta-font">{exp.company} {" | "} {exp.period}</p>
              <ul>
                {exp.highlights.map((h, j) => (
                  <li key={j}>
                    <CheckCircle2 size={18} color="#ff007f" style={{ flexShrink: 0, marginTop: '3px' }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="section-header reveal">
          <h2 className="section-title gta-font">HEISTS & HIGHLIGHTS</h2>
        </div>
        <div className="grid">
          {cvData.projects.map((proj, i) => (
            <div
              key={i}
              className={`card clickable reveal delay-${(i % 3) + 1}`}
              onClick={() => setSelectedProject(proj)}
            >
              <span className="project-tag gta-font">{proj.category}</span>
              <h3 className="gta-font" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{proj.title}</h3>
              <p style={{ color: '#888', lineHeight: '1.6' }}>{proj.desc}</p>
              <span className="project-metric gta-font">{proj.metrics}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Apple-style clickable passions */}
      <section id="passions">
        <div className="section-header reveal">
          <h2 className="section-title gta-font">PASSIONS</h2>
        </div>

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
            <div className="passion-hero-copy">
              <h3 className="gta-font">OPEN THE BOX</h3>
              <p>
                Click this tile to quickly distribute my world outside work:
                Real Madrid, gaming, and building a future in hydroponics and consulting.
              </p>
              <div className="passion-cta gta-font">
                <Sparkles size={16} /> TAP TO REVEAL
              </div>
            </div>
          </div>
        ) : (
          <div className="reveal">
            <div className="passions-toolbar">
              <p className="gta-font" style={{ color: '#888', fontSize: '0.8rem' }}>
                SELECT A TILE
              </p>
              <button className="ghost-btn gta-font" onClick={() => setPassionsOpen(false)}>
                CLOSE BOX
              </button>
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
                      <Icon size={26} />
                    </div>
                    <h3 className="gta-font">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <section id="more">
        <div className="section-header reveal">
          <h2 className="section-title gta-font">CREDENTIALS</h2>
        </div>
        <div className="grid">
          {cvData.education.map((edu, i) => (
            <div key={i} className={`card reveal delay-${(i % 3) + 1}`}>
              <GraduationCap size={24} color="#ff7a00" style={{ marginBottom: '1rem' }} />
              <h3 className="gta-font" style={{ fontSize: '1.1rem' }}>{edu.degree}</h3>
              <p style={{ color: '#00f3ff', fontSize: '0.8rem', margin: '0.5rem 0' }} className="gta-font">
                {edu.institution} ({edu.year})
              </p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
            <span className="project-tag gta-font">{selectedProject.category}</span>
            <h3 className="gta-font" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>
              {selectedProject.title}
            </h3>
            <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '2rem' }}>{selectedProject.desc}</p>
            <span className="project-metric gta-font">{selectedProject.metrics}</span>
          </div>
        </div>
      )}

      {selectedPassion && (
        <div className="modal-overlay" onClick={() => setSelectedPassion(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPassion(null)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
            <span className="project-tag gta-font">PASSION</span>
            <h3 className="gta-font" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>
              {selectedPassion.title}
            </h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{selectedPassion.desc}</p>
          </div>
        </div>
      )}

      <footer>
        <div className="social-icons">
          <a href={cvData.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={28} /></a>
          <a href={cvData.github} target="_blank" rel="noreferrer"><GithubIcon size={28} /></a>
          <a href={cvData.twitter} target="_blank" rel="noreferrer"><TwitterIcon size={28} /></a>
          <a href={`mailto:${cvData.email}`}><Mail size={28} /></a>
        </div>
        <p className="gta-font" style={{ color: '#555', letterSpacing: '2px', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} {cvData.name}. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}