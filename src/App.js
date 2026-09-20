import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// ==================== VAIBHAV'S DATA ====================
const cvData = {
  name: "Vaibhav Bector",
  title: "Project Manager & Estimator",
  tagline: "I like football, creativity, and driving business growth through strategic project management.",
  email: "bector2001@gmail.com",
  phone: "+1 (604)-300-6397",
  location: "Vancouver, BC",
  social: {
    linkedin: "https://ca.linkedin.com/in/vaibhavbector",
    github: "https://github.com/B3ECT0R07",
    twitter: "https://x.com/bector2001",
  },
  about: {
    bio: "I am a results-driven Project Manager and Installation Coordinator with a passion for optimizing workflows, leading teams, and driving revenue growth. Beyond my professional life, I am an aspiring entrepreneur with a vision to eventually transition into business consulting and launch a sustainable hydroponics business.",
    funFacts: [
      "⚽ Die-hard Real Madrid fan (Hala Madrid!)",
      "🎮 Passionate gamer when I'm off the clock",
      "🌱 Researching and planning a future Hydroponics venture",
      "📈 Driven by data analytics and continuous improvement (Kaizen)",
      "🏆 Certified AAADM Inspector",
    ],
    stats: [
      { label: "Workflow Efficiency", value: "40%+" },
      { label: "Revenue Growth", value: "30%+" },
      { label: "Cost Reductions", value: "23%" },
      { label: "Turnover Reduced", value: "66%" },
    ],
  },
  skills: [
    { name: "Project Management", level: 95, category: "management", icon: "📈" },
    { name: "Lean, Kaizen & CPM", level: 90, category: "management", icon: "⚙️" },
    { name: "Budget Management", level: 88, category: "management", icon: "💰" },
    { name: "Data Analytics", level: 85, category: "management", icon: "📊" },
    { name: "Salesforce & CRM", level: 90, category: "tools", icon: "☁️" },
    { name: "SAP & Oracle", level: 85, category: "tools", icon: "🗄️" },
    { name: "Jira & Miro", level: 95, category: "tools", icon: "🎯" },
    { name: "Excel & Appsheet", level: 90, category: "tools", icon: "📝" },
    { name: "Leadership & Teamwork", level: 95, category: "interpersonal", icon: "🤝" },
    { name: "Problem-Solving", level: 92, category: "interpersonal", icon: "🧠" },
  ],
  experience: [
    {
      id: 1,
      role: "Project Manager / Installation Coordinator",
      company: "TORMAX Canada",
      location: "Vancouver, BC",
      period: "July 2024 - Present",
      description: "Managing commercial automatic door projects from start to finish. Coordinated end-to-end installations using Lean and CPM methods, reducing turnover time from 3 weeks to 1 week. Introduced workflow improvements increasing delivery efficiency by 40% and driving 30% revenue growth.",
      tech: ["Project Estimation", "Scheduling", "Lean & Kaizen", "AAADM Compliance"],
      color: "#00f5a0",
    },
    {
      id: 2,
      role: "Supply Chain Manager",
      company: "Wellness Extract",
      location: "Abbotsford, BC",
      period: "August 2023 - July 2024",
      description: "Led global operations across North America, UK, and Australia. Managed FBA and 3PL inventory, making strategic decisions that resulted in a 23% cost reduction. Created demand analysis roadmaps in SAP to reduce stockouts, achieving 66% overall company growth in 2023.",
      tech: ["3PL Management", "SAP", "Salesforce", "Global Operations"],
      color: "#00d9f5",
    },
    {
      id: 3,
      role: "Bachelors in Business Administration",
      company: "University of the Fraser Valley",
      location: "BC, Canada",
      period: "Graduated 2023",
      description: "Developed a strong foundation in business strategy, financial management, and organizational leadership. Also hold a Diploma Certification in International Business (LATAM) from Universidad del Rosario (2023).",
      tech: ["Business Strategy", "Finance", "International Business", "Analytics"],
      color: "#f5a000",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Commercial Installation Optimization",
      description: "Spearheaded workflow restructuring for commercial automatic door installations using Lean and CPM methodologies. Successfully reduced project turnaround time by 66% (from 3 weeks to 1 week) and improved overall project delivery efficiency by 40%.",
      tech: ["Lean Methodology", "CPM", "Process Optimization", "Scheduling"],
      image: "https://images.unsplash.com/photo-1541888081682-144f808c105e?w=800&q=80",
      color: "#00f5a0",
    },
    {
      id: 2,
      title: "Global Supply Chain Overhaul",
      description: "Strategically managed and transitioned 3PL and FBA inventory networks across North America, the UK, and Australia. This logistical restructuring resulted in a massive 23% cost reduction while maintaining high service levels and paving the way for 66% growth.",
      tech: ["Logistics", "SAP Planning", "3PL Management", "Budget Optimization"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed7fc51f7?w=800&q=80",
      color: "#00d9f5",
    },
    {
      id: 3,
      title: "Future Venture: Hydroponics",
      description: "Currently researching and developing a strategic roadmap for a sustainable hydroponics business. This initiative merges my passion for innovative entrepreneurship, tech integration, and modern agricultural solutions.",
      tech: ["Entrepreneurship", "Market Research", "Consulting", "Sustainability"],
      image: "https://images.unsplash.com/photo-1530836369250-ef71a3f5e48c?w=800&q=80",
      color: "#f5a000",
    },
  ],
};

// ==================== MAIN COMPONENT ====================
export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSkills = activeCategory === 'all'
    ? cvData.skills
    : cvData.skills.filter(s => s.category === activeCategory);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="portfolio-app">
      {/* INJECTED CSS STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #0a0a0a !important;
          color: #ffffff !important;
          font-family: 'Space Grotesk', sans-serif !important;
          overflow-x: hidden;
        }

        .portfolio-app {
          min-height: 100vh;
          background-color: #0a0a0a;
          color: #ffffff;
        }

        .scroll-indicator {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #00f5a0, #00d9f5);
          z-index: 9999;
          transition: width 0.1s linear;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 50px;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 1000;
        }

        .nav-logo {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.25rem;
          font-weight: 700;
          color: #00f5a0;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #00f5a0;
        }

        .nav-cta {
          padding: 8px 18px;
          background: rgba(0, 245, 160, 0.1);
          border: 1px solid #00f5a0;
          border-radius: 20px;
          color: #00f5a0 !important;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 20px 60px;
          background: radial-gradient(circle at 50% 30%, rgba(0, 245, 160, 0.08), transparent 60%);
        }

        .hero-badge {
          font-family: 'JetBrains Mono', monospace;
          color: #00f5a0;
          font-size: 0.95rem;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 7vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00f5a0, #00d9f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-typewriter {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 25px;
          min-height: 40px;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.5);
          max-width: 600px;
          margin: 0 auto 40px;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 34px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          cursor: pointer;
          border: none;
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-block;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #00f5a0, #00d9f5);
          color: #0a0a0a !important;
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid rgba(0, 245, 160, 0.4);
          color: #00f5a0 !important;
        }

        .section {
          padding: 100px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bg-darker {
          background: #0d0d0d;
          width: 100%;
        }

        .bg-darker-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 40px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-tag {
          font-family: 'JetBrains Mono', monospace;
          color: #00f5a0;
          font-size: 0.85rem;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 10px;
        }

        .section-heading {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .section-divider {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #00f5a0, #00d9f5);
          margin: 0 auto;
          border-radius: 2px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 35px;
          border-radius: 20px;
        }

        .about-bio {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .about-subtitle {
          font-family: 'JetBrains Mono', monospace;
          color: #00f5a0;
          font-size: 0.95rem;
          margin-bottom: 15px;
        }

        .fun-facts-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .fun-fact-item {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 30px;
          border-radius: 16px;
          text-align: center;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 8px;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          text-transform: uppercase;
        }

        .skills-filter {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 20px;
          border-radius: 30px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          text-transform: uppercase;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          transition: all 0.2s;
        }

        .filter-btn.active, .filter-btn:hover {
          background: rgba(0, 245, 160, 0.1);
          border-color: #00f5a0;
          color: #00f5a0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 20px;
          border-radius: 12px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .skill-percentage {
          color: #00f5a0;
          font-family: 'JetBrains Mono', monospace;
        }

        .skill-bar-bg {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00f5a0, #00d9f5);
          border-radius: 4px;
        }

        .timeline {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .timeline-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 4px solid #00f5a0;
          padding: 30px;
          border-radius: 14px;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .timeline-role {
          font-size: 1.3rem;
        }

        .timeline-company {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.95rem;
        }

        .timeline-period {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
        }

        .timeline-desc {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .tag-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          font-size: 0.75rem;
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.6);
        }

        .tag-accent {
          background: rgba(0, 245, 160, 0.1);
          color: #00f5a0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, border-color 0.2s;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 245, 160, 0.3);
        }

        .project-img-wrapper {
          height: 220px;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-body {
          padding: 24px;
        }

        .project-title {
          font-size: 1.3rem;
          margin-bottom: 10px;
        }

        .project-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-links {
          margin-top: 20px;
        }

        .link-live {
          color: #00f5a0;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
        }

        .modal-box {
          background: #141414;
          border-radius: 20px;
          max-width: 650px;
          width: 100%;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .modal-body {
          padding: 30px;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 50px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
        }

        .contact-info p {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'JetBrains Mono', monospace;
        }

        .contact-details a {
          color: #00f5a0;
          text-decoration: none;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-input {
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          color: #fff;
          font-family: inherit;
          outline: none;
        }

        .form-input:focus {
          border-color: #00f5a0;
        }

        .footer {
          padding: 40px;
          text-align: center;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.85rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .navbar { padding: 15px 20px; }
          .nav-links { display: none; }
          .section { padding: 60px 20px; }
        }
      `}</style>

      {/* Top Scroll Progress Indicator */}
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav className="navbar">
        <a href="#hero" className="nav-logo">{'< ' + cvData.name.split(' ')[0] + ' />'}</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Initiatives</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
          >
            {'> Welcome to my professional portfolio_'}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="hero-title"
          >
            Hi, I'm <span className="gradient-text">{cvData.name}</span>
          </motion.h1>

          <div className="hero-typewriter">
            <TypeAnimation
              sequence={[
                'Project Manager',
                2200,
                'Installation Coordinator',
                2200,
                'Aspiring Consultant',
                2200,
                'Passionate Gamer',
                2200,
                cvData.title,
                3000,
              ]}
              wrapper="span"
              repeat={Infinity}
              speed={45}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-subtitle"
          >
            {cvData.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn btn-primary">View Initiatives →</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-darker">
        <div className="bg-darker-inner">
          <div className="section-header">
            <span className="section-tag">// Background</span>
            <h2 className="section-heading">About Me</h2>
            <div className="section-divider"></div>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <p className="about-bio">{cvData.about.bio}</p>
              <h3 className="about-subtitle">{'> Fun Facts & Ambitions'}</h3>
              <ul className="fun-facts-list">
                {cvData.about.funFacts.map((fact, i) => (
                  <li key={i} className="fun-fact-item">{fact}</li>
                ))}
              </ul>
            </div>

            <div className="stats-grid">
              {cvData.about.stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-number gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-tag">// Capabilities</span>
          <h2 className="section-heading">Skills & Tools</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-filter">
          {['all', 'management', 'tools', 'interpersonal'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="skills-grid">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={skill.name}
                className="skill-card"
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.icon} {skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-darker">
        <div className="bg-darker-inner">
          <div className="section-header">
            <span className="section-tag">// History</span>
            <h2 className="section-heading">Professional Experience</h2>
            <div className="section-divider"></div>
          </div>

          <div className="timeline">
            {cvData.experience.map((exp) => (
              <div key={exp.id} className="timeline-item" style={{ borderLeftColor: exp.color }}>
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company} • {exp.location}</div>
                  </div>
                  <span className="timeline-period" style={{ color: exp.color }}>{exp.period}</span>
                </div>
                <p className="timeline-desc">{exp.description}</p>
                <div className="tag-row">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Initiatives Section */}
      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-tag">// Portfolio</span>
          <h2 className="section-heading">Key Initiatives</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-grid">
          {cvData.projects.map((proj) => (
            <div 
              key={proj.id} 
              className="project-card"
              onClick={() => setSelectedProject(proj)}
            >
              <div className="project-img-wrapper">
                <img src={proj.image} alt={proj.title} className="project-img" />
              </div>
              <div className="project-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
                <div className="tag-row">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag tag-accent">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <span className="link-live">Click to view details ↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="modal-box"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
                <div className="modal-body">
                  <h2>{selectedProject.title}</h2>
                  <p style={{ margin: '15px 0', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{selectedProject.description}</p>
                  <div className="tag-row" style={{ margin: '20px 0' }}>
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="tag tag-accent">{t}</span>
                    ))}
                  </div>
                  <div className="modal-actions">
                    <button onClick={() => setSelectedProject(null)} className="btn btn-primary">Close Details</button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-darker">
        <div className="bg-darker-inner">
          <div className="section-header">
            <span className="section-tag">// Connect</span>
            <h2 className="section-heading">Get In Touch</h2>
            <div className="section-divider"></div>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Let's build something exceptional together.</h3>
              <p>I am always open to discussing new business opportunities, strategic consulting, or creative collaborations.</p>
              <div className="contact-details">
                <div>✉️ <strong>Email:</strong> <a href={`mailto:${cvData.email}`}>{cvData.email}</a></div>
                <div>📍 <strong>Location:</strong> {cvData.location}</div>
                <div>🔗 <strong>LinkedIn:</strong> <a href={cvData.social.linkedin} target="_blank" rel="noreferrer">View Profile</a></div>
                <div>✖️ <strong>Twitter/X:</strong> <a href={cvData.social.twitter} target="_blank" rel="noreferrer">@bector2001</a></div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="contact-form">
              <input type="text" required placeholder="Your Name" className="form-input" />
              <input type="email" required placeholder="Your Email Address" className="form-input" />
              <textarea required rows="4" placeholder="How can I help you?" className="form-input"></textarea>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {formSubmitted ? 'Message Sent Successfully! ✓' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} {cvData.name}. Powered by React & Framer Motion.</p>
      </footer>
    </div>
  );
}