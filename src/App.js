import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, X, ChevronDown, Sparkles, ExternalLink } from 'lucide-react';

const roles = [
  "Project Manager",
  "Installation Coordinator",
  "Construction Estimator",
  "Supply Chain Manager"
];

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

const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function App() {
  const [typedRole, setTypedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedPassion, setSelectedPassion] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const videoRef = useRef(null);

  const initials = "VB";

  const personalInfo = {
    name: "Vaibhav Bector",
    location: "Vancouver, BC",
    email: "bector2001@gmail.com",
    tagline: "I like football and creativity.",
    github: "https://github.com/B3ECT0R07",
    linkedin: "https://ca.linkedin.com/in/vaibhavbector",
    twitter: "https://x.com/bector2001"
  };

  const passions = [
    {
      id: "football",
      title: "Football & Real Madrid",
      icon: "⚽",
      tagline: "Hala Madrid y nada más",
      fullContent: "Football is more than a game to me. It is a lesson in strategy, leadership, and performing under pressure. As a Real Madrid supporter, I take inspiration from constant improvement, teamwork, and ambition."
    },
    {
      id: "hydroponics",
      title: "Overgrown Nature & Hydroponics",
      icon: "🌿",
      tagline: "Sustainable growth and vertical farming",
      fullContent: "Hydroponics combines technology and nature. I am interested in automated growing, nutrient systems, and cleaner ways to produce food without soil."
    },
    {
      id: "gaming",
      title: "Gaming & Interactive Design",
      icon: "🎮",
      tagline: "Immersive worlds and sharp decisions",
      fullContent: "Gaming shapes how I think about design, feedback, and fast decisions. From strategy games to open-world storytelling, it keeps my creative side active."
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship & Consulting",
      icon: "💡",
      tagline: "Turning ideas into working systems",
      fullContent: "I like finding bottlenecks and turning them into simple, repeatable systems. That same mindset drives my work in operations, consulting, and project delivery."
    }
  ];

  const experiences = [
    {
      company: "TORMAX Canada",
      role: "Project Manager / Installation Coordinator",
      period: "July 2024 – Present",
      location: "Vancouver, BC",
      highlights: [
        "Improved project efficiency by 40% using Lean and Kaizen frameworks.",
        "Supported 30% regional revenue growth through planning and client coordination.",
        "Managed CPM scheduling for commercial entrance installation projects."
      ]
    },
    {
      company: "Wellness Extract",
      role: "Supply Chain Manager",
      period: "August 2023 – July 2024",
      location: "Vancouver, BC",
      highlights: [
        "Grew order fulfillment by 66% through multi-channel inventory coordination.",
        "Reduced logistics costs by 23% by improving freight and vendor terms.",
        "Managed supply chain flow across North American fulfillment channels."
      ]
    }
  ];

  const education = [
    {
      school: "University of the Fraser Valley",
      credential: "Bachelor of Business Administration (BBA)",
      year: "2023"
    },
    {
      school: "Universidad del Rosario",
      credential: "Diploma in International Business",
      year: "2023"
    }
  ];

  const projects = [
    {
      id: "tormax-tracker",
      title: "Lean Project Delivery Engine",
      category: "Operations & Project Management",
      desc: "Built planning workflows that reduced installation delays and kept field teams aligned.",
      details: "Critical path scheduling and clear status tracking improved installation flow, coordinated technicians with materials, and supported regional growth."
    },
    {
      id: "supply-chain-hub",
      title: "Multi-Channel Fulfillment Optimizer",
      category: "Supply Chain & Logistics",
      desc: "Organized inventory and shipping workflows that supported a 66% fulfillment increase.",
      details: "Better stock visibility and freight decisions helped prevent stockouts and reduced logistics cost by 23%."
    }
  ];

  useEffect(() => {
    const current = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedRole(current.substring(0, typedRole.length + 1));
        if (typedRole === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedRole(current.substring(0, typedRole.length - 1));
        if (typedRole === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <div className="portfolio-app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&family=Cinzel:wght@600;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body, html {
          background-color: #0b130e;
          color: #e2ebd8;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        .bg-live {
          position: fixed;
          inset: 0;
          z-index: -2;
          overflow: hidden;
        }

        .bg-live video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4) contrast(1.15) saturate(1.1);
        }

        .bg-overlay {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(11, 19, 14, 0.4) 0%, rgba(7, 12, 9, 0.92) 100%),
            linear-gradient(to bottom, rgba(11, 19, 14, 0.6), rgba(11, 19, 14, 0.85));
          z-index: -1;
          pointer-events: none;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(14, 24, 18, 0.65);
          border-bottom: 1px solid rgba(138, 171, 123, 0.15);
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #d4af37, #a8c99c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links { display: flex; gap: 1.5rem; align-items: center; }

        .nav-link {
          color: #a8c99c;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-link:hover { color: #d4af37; }

        .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 6rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(45, 74, 50, 0.4);
          border: 1px solid rgba(168, 201, 156, 0.3);
          border-radius: 999px;
          color: #a8c99c;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .hero-title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-title span {
          background: linear-gradient(135deg, #ffffff, #a8c99c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .typing-container {
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          color: #d4af37;
          font-weight: 700;
          min-height: 3rem;
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 1.8rem;
          background-color: #d4af37;
          margin-left: 6px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: #9ab392;
          max-width: 650px;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .social-bar { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(168, 201, 156, 0.2);
          color: #d4e7c5;
          text-decoration: none;
        }

        .social-btn:hover {
          background: rgba(168, 201, 156, 0.2);
          border-color: #d4af37;
          color: #d4af37;
          transform: translateY(-3px);
        }

        .glass-card {
          background: rgba(18, 30, 22, 0.55);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(168, 201, 156, 0.18);
          border-radius: 20px;
          padding: 2rem;
        }

        .section-header { margin-bottom: 3rem; }

        .section-tag {
          color: #d4af37;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-title { font-size: 2.2rem; font-weight: 800; color: #ffffff; }

        .passions-grid, .projects-grid, .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .passion-tile, .project-card { cursor: pointer; }

        .passion-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .passion-title, .project-title, .exp-company { color: #ffffff; font-weight: 700; }
        .passion-title { font-size: 1.2rem; margin-bottom: 0.5rem; }
        .passion-tagline, .project-desc, .edu-year { color: #9ab392; }

        .exp-grid { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 5rem; }

        .exp-header {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .exp-company, .project-title { font-size: 1.3rem; margin-bottom: 0.35rem; }
        .exp-role, .project-cat { color: #d4af37; font-weight: 700; }
        .exp-meta { color: #8aab7b; font-size: 0.85rem; text-align: right; }

        .exp-list { list-style: none; }
        .exp-list li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.6rem;
          color: #c3d6b8;
          line-height: 1.5;
        }
        .exp-list li::before { content: "▹"; position: absolute; left: 0; color: #a8c99c; }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 10, 7, 0.85);
          backdrop-filter: blur(10px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          background: #121e16;
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 24px;
          max-width: 550px;
          width: 100%;
          padding: 2.5rem;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #e2ebd8;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .footer {
          border-top: 1px solid rgba(168, 201, 156, 0.15);
          padding: 3rem 0;
          text-align: center;
          color: #79966b;
        }

        @media (max-width: 640px) {
          .exp-meta { text-align: left; }
          .nav-links { display: none; }
        }
      `}</style>

      <div className="bg-live" aria-hidden="true">
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src="/train.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
      </div>

      <header className="header">
        <div className="logo">{`< ${initials} />`}</div>
        <nav className="nav-links">
          <a href="#passions" className="nav-link">Passions</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-badge">
            <Sparkles size={14} /> Available for Operations & PM Roles
          </div>
          <h1 className="hero-title">Hi, I'm <span>{personalInfo.name}</span></h1>
          <div className="typing-container">
            <span>{typedRole}</span>
            <span className="cursor"></span>
          </div>
          <p className="hero-subtitle">
            Based in {personalInfo.location}. {personalInfo.tagline} I work across project management, installation coordination, estimating, and supply chain, with a creative eye for how systems should feel and flow.
          </p>
          <div className="social-bar">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub"><GithubIcon /></a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter"><TwitterIcon /></a>
            <a href={`mailto:${personalInfo.email}`} className="social-btn" aria-label="Email"><Mail size={20} /></a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#8aab7b' }}>
              <MapPin size={16} /> {personalInfo.location}
            </span>
          </div>
        </section>

        <section id="passions" style={{ padding: '4rem 0' }}>
          <div className="section-header">
            <div className="section-tag"><Sparkles size={14} /> Core Interests</div>
            <h2 className="section-title">Passions & Creative Drive</h2>
          </div>
          <div className="passions-grid">
            {passions.map((passion) => (
              <div key={passion.id} className="glass-card passion-tile" onClick={() => setSelectedPassion(passion)}>
                <div className="passion-icon">{passion.icon}</div>
                <div className="passion-title">{passion.title}</div>
                <div className="passion-tagline">{passion.tagline}</div>
                <div style={{ marginTop: '1rem', color: '#d4af37', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Click to explore <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" style={{ padding: '4rem 0' }}>
          <div className="section-header">
            <div className="section-tag"><Sparkles size={14} /> Track Record</div>
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <div className="exp-grid">
            {experiences.map((exp) => (
              <div key={exp.company} className="glass-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                  </div>
                  <div className="exp-meta">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <ul className="exp-list">
                  {exp.highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" style={{ padding: '2rem 0 4rem' }}>
          <div className="section-header">
            <div className="section-tag"><Sparkles size={14} /> Education</div>
            <h2 className="section-title">Studies</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <div key={item.school} className="glass-card">
                <div className="exp-role">{item.year}</div>
                <div className="passion-title">{item.credential}</div>
                <div className="edu-year">{item.school}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" style={{ padding: '2rem 0 4rem' }}>
          <div className="section-header">
            <div className="section-tag"><Sparkles size={14} /> Strategic Initiatives</div>
            <h2 className="section-title">Key Operational Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="glass-card project-card" onClick={() => setSelectedProject(proj)}>
                <div className="project-cat">{proj.category}</div>
                <div className="project-title">{proj.title}</div>
                <div className="project-desc">{proj.desc}</div>
                <div style={{ marginTop: '1.5rem', color: '#a8c99c', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  View details <ExternalLink size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedPassion && (
        <div className="modal-overlay" onClick={() => setSelectedPassion(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPassion(null)} aria-label="Close"><X size={20} /></button>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{selectedPassion.icon}</div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>{selectedPassion.title}</h3>
            <p style={{ color: '#d4af37', fontWeight: 600, marginBottom: '1.5rem' }}>{selectedPassion.tagline}</p>
            <p style={{ color: '#c3d6b8', lineHeight: 1.7 }}>{selectedPassion.fullContent}</p>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Close"><X size={20} /></button>
            <div className="project-cat">{selectedProject.category}</div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: '0.5rem 0 1rem' }}>{selectedProject.title}</h3>
            <p style={{ color: '#c3d6b8', lineHeight: 1.7 }}>{selectedProject.details}</p>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {personalInfo.name} — Designed with an overgrown nature train aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}