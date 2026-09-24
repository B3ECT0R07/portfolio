import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, X, ChevronDown, ChevronUp, Sparkles, ExternalLink, SlidersHorizontal } from 'lucide-react';

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
  
  // Passions drop box state (open specific ID or all)
  const [expandedPassions, setExpandedPassions] = useState(['football']); // Default football expanded
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
      tagline: "Hala Madrid y nada más — Strategy & Leadership",
      fullContent: `Football is more than a game to me—it's a masterclass in strategy, split-second tactical adjustments, and high-pressure execution. As an avid supporter of Real Madrid, I draw daily inspiration from their championship mindset: constant relentless growth, clutch performance under pressure, and unyielding ambition. Whether coordinating complex project timelines or analyzing field dynamics, the drive for tactical excellence remains identical.`
    },
    {
      id: "hydroponics",
      title: "Overgrown Nature & Hydroponics",
      icon: "🌿",
      tagline: "Sustainable growth, vertical farming & bio-tech",
      fullContent: `Deeply fascinated by nature ecosystems blending with tech architecture. My interest in hydroponics centers around vertical urban farming, automated nutrient recirculating systems, and zero-soil growth. It represents the perfect intersection of engineering, operational control, and environmental stewardship.`
    },
    {
      id: "gaming",
      title: "Gaming & Interactive Design",
      icon: "🎮",
      tagline: "Immersive open worlds, GTA VI hype & UX loops",
      fullContent: `From high-stakes strategic simulations to massive open-world environments like GTA VI, gaming inspires my approach to digital user experience and operational system loops. Complex games require seamless feedback, instant decision making, and intuitive control layout—principles I apply directly to project coordination and workflow optimization.`
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship & Consulting",
      icon: "💡",
      tagline: "Lean operations, supply chain & problem solving",
      fullContent: `Building lean, scalable systems is at the heart of everything I do. My track record in supply chain management (achieving 66% fulfillment growth) and installation coordination (boosting project efficiency by 40%) stems from an entrepreneurial drive to eliminate operational bottlenecks and build predictable success.`
    }
  ];

  const experiences = [
    {
      company: "TORMAX Canada",
      role: "Project Manager / Installation Coordinator",
      period: "July 2024 – Present",
      location: "Vancouver, BC",
      highlights: [
        "Boosted operational project delivery efficiency by 40% using Lean and Kaizen frameworks.",
        "Supported 30% regional revenue growth through precise resource allocation and client coordination.",
        "Managed Critical Path Method (CPM) scheduling for commercial entrance installations."
      ]
    },
    {
      company: "Wellness Extract",
      role: "Supply Chain Manager",
      period: "August 2023 – July 2024",
      location: "Vancouver, BC",
      highlights: [
        "Scaled order fulfillment capacity by 66% through automated multi-channel inventory control.",
        "Reduced logistics operational costs by 23% by renegotiating freight and vendor contracts.",
        "Managed end-to-end supply chain pipelines across North American fulfillment hubs."
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
      desc: "Built resource planning matrices that cut project delays by 40% and aligned installation teams.",
      details: "By combining Critical Path Method (CPM) scheduling with agile tracking, this system improved site installation flow, aligned technicians with supply hubs, and drove regional growth."
    },
    {
      id: "supply-chain-hub",
      title: "Multi-Channel Fulfillment Optimizer",
      category: "Supply Chain & Logistics",
      desc: "Architected end-to-end inventory workflows supporting a 66% order volume increase.",
      details: "Leveraged inventory analytics to optimize stock levels, prevent stockouts, and reduce overall freight expenditure by 23% across North American distribution channels."
    }
  ];

  // Video Autoplay enforcer
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        console.log("Video autoplay fallback active");
      });
    }
  }, []);

  // Typing effect logic
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

  // Drop Box Toggle Logic
  const togglePassion = (id) => {
    if (expandedPassions.includes(id)) {
      setExpandedPassions(expandedPassions.filter(item => item !== id));
    } else {
      setExpandedPassions([...expandedPassions, id]);
    }
  };

  const toggleAllPassions = () => {
    if (expandedPassions.length === passions.length) {
      setExpandedPassions([]);
    } else {
      setExpandedPassions(passions.map(p => p.id));
    }
  };

  return (
    <div className="portfolio-app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&family=Cinzel:wght@600;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body, html {
          background-color: #08110b;
          color: #e2ebd8;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        /* Video Background + Atmospheric Fallback */
        .bg-live {
          position: fixed;
          inset: 0;
          z-index: -2;
          overflow: hidden;
          background: radial-gradient(circle at 50% 30%, #172e1e 0%, #08110b 80%);
        }

        .bg-live video {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          filter: brightness(0.45) contrast(1.15) saturate(1.2);
        }

        .bg-overlay {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(11, 22, 15, 0.3) 0%, rgba(5, 10, 7, 0.88) 100%),
            linear-gradient(to bottom, rgba(8, 17, 11, 0.5), rgba(8, 17, 11, 0.9));
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
          background: rgba(12, 22, 15, 0.7);
          border-bottom: 1px solid rgba(138, 171, 123, 0.2);
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
          transition: color 0.3s ease;
        }

        .nav-link:hover { color: #d4af37; }

        .container { max-width: 1050px; margin: 0 auto; padding: 0 1.5rem; }

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
          background: rgba(45, 74, 50, 0.45);
          border: 1px solid rgba(168, 201, 156, 0.35);
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
          color: #a3bf9b;
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
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(168, 201, 156, 0.25);
          color: #d4e7c5;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: rgba(168, 201, 156, 0.2);
          border-color: #d4af37;
          color: #d4af37;
          transform: translateY(-3px);
        }

        .glass-card {
          background: rgba(16, 28, 20, 0.65);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(168, 201, 156, 0.2);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

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

        /* DROP BOX ACCORDION STYLES */
        .dropbox-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: #d4af37;
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dropbox-btn:hover {
          background: rgba(212, 175, 55, 0.25);
          transform: translateY(-2px);
        }

        .passions-dropbox-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 5rem;
        }

        .passion-dropbox-card {
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .passion-dropbox-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .passion-title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .passion-icon { font-size: 2rem; }

        .passion-title { font-size: 1.25rem; font-weight: 700; color: #ffffff; }
        .passion-tagline { font-size: 0.9rem; color: #a8c99c; margin-top: 0.2rem; }

        .passion-dropbox-content {
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(168, 201, 156, 0.2);
          color: #c9dbc1;
          line-height: 1.7;
          font-size: 0.98rem;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .projects-grid, .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .project-card { cursor: pointer; }

        .exp-grid { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 5rem; }

        .exp-header {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .exp-company, .project-title { font-size: 1.3rem; margin-bottom: 0.35rem; color: #ffffff; font-weight: 700; }
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
          background: rgba(5, 10, 7, 0.88);
          backdrop-filter: blur(12px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          background: #111f15;
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

      {/* Live Video Background */}
      <div className="bg-live" aria-hidden="true">
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src="/train.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo">{`< ${initials} />`}</div>
        <nav className="nav-links">
          <a href="#passions" className="nav-link">Passions</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="container">
        {/* Hero Section */}
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
            Based in {personalInfo.location}. {personalInfo.tagline} Driving operational growth, lean execution, and project coordination with creative strategic vision.
          </p>
          <div className="social-bar">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub"><GithubIcon /></a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter"><TwitterIcon /></a>
            <a href={`mailto:${personalInfo.email}`} className="social-btn" aria-label="Email"><Mail size={20} /></a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#8aab7b', fontSize: '0.9rem' }}>
              <MapPin size={16} /> {personalInfo.location}
            </span>
          </div>
        </section>

        {/* PASSIONS SECTION WITH EXPANDABLE DROP BOX ACCORDION */}
        <section id="passions" style={{ padding: '4rem 0' }}>
          <div className="section-header">
            <div>
              <div className="section-tag"><Sparkles size={14} /> Core Interests</div>
              <h2 className="section-title">Passions & Creative Drive</h2>
            </div>
            <button className="dropbox-btn" onClick={toggleAllPassions}>
              <SlidersHorizontal size={16} />
              {expandedPassions.length === passions.length ? "Collapse Drop Box" : "Expand All Drop Box"}
            </button>
          </div>

          <div className="passions-dropbox-container">
            {passions.map((p) => {
              const isOpen = expandedPassions.includes(p.id);
              return (
                <div
                  key={p.id}
                  className="glass-card passion-dropbox-card"
                  onClick={() => togglePassion(p.id)}
                >
                  <div className="passion-dropbox-header">
                    <div className="passion-title-group">
                      <span className="passion-icon">{p.icon}</span>
                      <div>
                        <div className="passion-title">{p.title}</div>
                        <div className="passion-tagline">{p.tagline}</div>
                      </div>
                    </div>
                    <div style={{ color: '#d4af37' }}>
                      {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="passion-dropbox-content">
                      {p.fullContent}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ padding: '2rem 0 4rem' }}>
          <div className="section-header">
            <div>
              <div className="section-tag"><Sparkles size={14} /> Track Record</div>
              <h2 className="section-title">Professional Experience</h2>
            </div>
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

        {/* Education Section */}
        <section id="education" style={{ padding: '2rem 0 4rem' }}>
          <div className="section-header">
            <div>
              <div className="section-tag"><Sparkles size={14} /> Education</div>
              <h2 className="section-title">Academic Background</h2>
            </div>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <div key={item.school} className="glass-card">
                <div className="exp-role">{item.year}</div>
                <div className="passion-title" style={{ margin: '0.4rem 0' }}>{item.credential}</div>
                <div style={{ color: '#9ab392' }}>{item.school}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ padding: '2rem 0 4rem' }}>
          <div className="section-header">
            <div>
              <div className="section-tag"><Sparkles size={14} /> Strategic Initiatives</div>
              <h2 className="section-title">Key Operational Projects</h2>
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="glass-card project-card" onClick={() => setSelectedProject(proj)}>
                <div className="project-cat">{proj.category}</div>
                <div className="project-title">{proj.title}</div>
                <div style={{ color: '#9ab392', fontSize: '0.95rem', lineHeight: '1.5' }}>{proj.desc}</div>
                <div style={{ marginTop: '1.5rem', color: '#a8c99c', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  View details <ExternalLink size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Project Modal */}
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {personalInfo.name} — Designed with Overgrown Nature Aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}