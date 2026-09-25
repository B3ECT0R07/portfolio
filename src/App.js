import React, { useState, useEffect, useRef } from 'react';
import profilePic from './Profile.jpg';

/* ════════════════════════════════════════════════════════════
   INLINE ICONS (Replaces lucide-react to prevent Vercel crashes)
══════════════════════════════════════════════════════════════ */
const IconMail = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconMapPin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const IconX = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconChevronDown = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconArrowRight = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const IconExternalLink = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const IconDownload = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const IconZap = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const IconTrendingUp = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const IconBarChart3 = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path><rect width="4" height="7" x="7" y="10" rx="1"></rect><rect width="4" height="12" x="15" y="5" rx="1"></rect>
  </svg>
);

const IconTarget = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" width="20" height="20">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" width="20" height="20">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);


/* ════════════════════════════════════════════════════════════
   COMPONENTS
══════════════════════════════════════════════════════════════ */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

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

const GlitchTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

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
          shiftX: (Math.random() - 0.5) * 2,
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

          const glitchSnap =
            Math.random() > 0.9 ? (Math.random() - 0.5) * 15 : 0;

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
        zIndex: 9999,
      }}
    />
  );
};

const PageLoader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!isLoading) return undefined;

    let current = 0;

    const id = setInterval(() => {
      current += Math.random() * 12 + 4;

      if (current >= 90) {
        current = 90;
        clearInterval(id);
      }

      setProgress(Math.min(90, Math.floor(current)));
    }, 180);

    return () => clearInterval(id);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return undefined;

    setProgress(100);

    const hideTimer = setTimeout(() => setHiding(true), 280);
    const goneTimer = setTimeout(() => setGone(true), 900);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(goneTimer);
    };
  }, [isLoading]);

  if (gone) return null;

  return (
    <div className={`page-loader ${hiding ? 'page-loader-hide' : ''}`}>
      <div className="loader-inner">
        <div className="loader-mark">VB</div>

        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="loader-meta">
          <span className="loader-label">Loading systems</span>
          <span className="loader-pct">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

const TechTicker = ({ items }) => {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const measure = () => {
    const track = trackRef.current;
    if (!track) return;
    halfWidthRef.current = track.scrollWidth / 2;
  };

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [items]);

  useEffect(() => {
    const SPEED = 0.45;

    const tick = () => {
      if (
        !pausedRef.current &&
        !draggingRef.current &&
        halfWidthRef.current > 0
      ) {
        offsetRef.current -= SPEED;

        if (Math.abs(offsetRef.current) >= halfWidthRef.current) {
          offsetRef.current += halfWidthRef.current;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const wrapOffset = (value) => {
    const half = halfWidthRef.current || 1;
    let next = value;

    while (next <= -half) next += half;
    while (next > 0) next -= half;

    return next;
  };

  const onPointerDown = (e) => {
    draggingRef.current = true;
    pausedRef.current = true;
    setIsDragging(true);

    startXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    startOffsetRef.current = offsetRef.current;

    if (e.currentTarget.setPointerCapture && e.pointerId != null) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;

    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const delta = clientX - startXRef.current;

    offsetRef.current = wrapOffset(startOffsetRef.current + delta);

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  const onPointerUp = () => {
    draggingRef.current = false;
    setIsDragging(false);

    setTimeout(() => {
      if (!draggingRef.current) pausedRef.current = false;
    }, 900);
  };

  const onKeyDown = (e) => {
    const step = 80;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      pausedRef.current = true;
      offsetRef.current = wrapOffset(offsetRef.current + step);

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      setTimeout(() => {
        pausedRef.current = false;
      }, 900);
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      pausedRef.current = true;
      offsetRef.current = wrapOffset(offsetRef.current - step);

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      setTimeout(() => {
        pausedRef.current = false;
      }, 900);
    }
  };

  const loopItems = [...items, ...items];

  return (
    <div
      className={`ticker-section ${isDragging ? 'is-dragging' : ''}`}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        if (!draggingRef.current) pausedRef.current = false;
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={onKeyDown}
      role="region"
      aria-label="Tools and tech stack — drag or swipe to browse"
      tabIndex={0}
    >
      <div className="ticker-hint">Drag or swipe</div>

      <div className="ticker-fade ticker-fade-left" aria-hidden="true" />
      <div className="ticker-fade ticker-fade-right" aria-hidden="true" />

      <div className="ticker-window">
        <div className="ticker-track" ref={trackRef}>
          {loopItems.map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="ticker-pill"
              aria-hidden={idx >= items.length ? true : undefined}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════════════════
   MAIN APPLICATION
══════════════════════════════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [expandedPrinciples, setExpandedPrinciples] = useState(['football']);
  const [selectedModalItem, setSelectedModalItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  /* ── DATA ARRAYS ── */
  const personalInfo = {
    name: 'Vaibhav Bector',
    location: 'Vancouver, BC',
    email: 'bector2001@gmail.com',
    tagline: 'I build lean operations and scalable supply chains.',
    linkedin: 'https://ca.linkedin.com/in/vaibhavbector',
    github: 'https://github.com/B3ECT0R07',
  };

  const techStack = [
    'MS Project',
    'Primavera P6',
    'AutoCAD',
    'SAP',
    'Oracle ERP',
    'Tableau',
    'Power BI',
    'Excel',
    'Jira',
    'Asana',
    'Salesforce',
    'Bluebeam',
    'CostX',
    'Procore',
    'Lean Six Sigma',
    'CPM Scheduling',
    'Supply Chain Ops',
    'Vendor Management',
  ];

  const kpis = [
    {
      label: 'Efficiency Boost',
      value: '40%',
      icon: <IconZap size={26} />,
      description: 'Operational throughput improvement via Lean and Kaizen frameworks.',
    },
    {
      label: 'Fulfillment Growth',
      value: '66%',
      icon: <IconTrendingUp size={26} />,
      description: 'Expansion in daily order capacity through inventory and fulfillment scaling.',
    },
    {
      label: 'Logistics Savings',
      value: '23%',
      icon: <IconBarChart3 size={26} />,
      description: 'Logistics cost reduction through freight and routing optimization.',
    },
    {
      label: 'Revenue Expansion',
      value: '30%',
      icon: <IconTarget size={26} />,
      description: 'Regional project-volume growth supported by robust resource allocation.',
    },
  ];

  const experiences = [
    {
      company: 'TORMAX Canada',
      role: 'Project Manager',
      period: '2023 — Present',
      location: 'Vancouver, BC',
      highlights: [
        'Lead end-to-end installation programs for automatic door systems across commercial and institutional sites.',
        'Build and own CPM schedules, coordinate multi-trade crews, and drive on-time handover under tight occupancy windows.',
        'Partner with general contractors, architects, and suppliers to de-risk scope gaps before they hit the field.',
        'Standardize handoff packages and QA checklists that cut rework and protect margin on live jobs.',
      ],
    },
    {
      company: 'Wellness Extract',
      role: 'Supply Chain Manager',
      period: '2021 — 2023',
      location: 'Remote / Hybrid',
      highlights: [
        'Scaled fulfillment operations and tightened inventory discipline across a fast-growing CPG supply chain.',
        'Renegotiated carrier and 3PL terms; redesigned routing logic that delivered material logistics cost reduction.',
        'Stood up demand-planning rhythms and safety-stock rules that stabilized OTIF during volume spikes.',
        'Connected sales forecasts to procurement so purchasing stopped reacting and started leading.',
      ],
    },
  ];

  const projects = [
    {
      id: 'p1',
      category: 'Project Controls',
      title: 'National Rollout — Automatic Entrances',
      desc: 'Multi-site installation program with phased CPM schedules, vendor scorecards, and live risk registers.',
      paragraphs: [
        'Managed a high-stakes, multi-site installation program that required zero downtime for active commercial facilities.',
        'Built comprehensive CPM schedules that phased out deliveries, synchronized multi-trade crews, and eliminated sequential bottlenecks.',
        'Implemented live risk registers and vendor scorecards to ensure every stakeholder was aligned on the daily critical path, resulting in a flawless handover.'
      ]
    },
    {
      id: 'p2',
      category: 'Supply Chain',
      title: 'Fulfillment Network Redesign',
      desc: 'Rebuilt pick-pack-ship flow and carrier mix to absorb a step-change in order volume.',
      paragraphs: [
        'Tasked with scaling order fulfillment capacity during a period of aggressive company growth without proportionally increasing headcount.',
        'Redesigned the physical layout of the pick-pack-ship line to minimize wasted motion, applying Lean Six Sigma principles to warehouse flow.',
        'Overhauled the carrier mix and integrated automated routing logic, achieving a 66% scale in throughput while dropping overall logistics spend by 23%.'
      ]
    },
    {
      id: 'p3',
      category: 'Operations',
      title: 'Estimating → Execution Bridge',
      desc: 'Closed the gap between takeoff assumptions and field reality with standardized scope packs.',
      paragraphs: [
        'Identified a chronic margin-leakage issue stemming from misaligned assumptions between the estimating team and field execution.',
        'Developed standardized scope handoff packages that translated abstract takeoff data into actionable, measurable field tasks.',
        'Introduced early-warning triggers for change-orders, protecting project profitability and drastically cutting on-site rework.'
      ]
    },
  ];

  // Feature #5: Explorations (Thought Leadership) integrated natively into the interactive card style
  const explorations = [
    {
      id: 'hydro',
      category: 'Systems Thinking',
      title: 'Hydroponics & Vertical Farming',
      desc: 'Closed-loop growing as a living lab for lean operations — measured inputs, tight feedback, zero wasted motion.',
      paragraphs: [
        "A hydroponic rack is a supply chain in miniature: demand is the plant's growth curve, inventory is nutrient concentration, and lead time is the pump cycle. When you dial EC, pH, and photoperiod, you're running a control tower.",
        "I've used that mindset on real networks — safety stock as buffer against variability, kanban-style replenishment for consumables, and root-cause checks when yield drifts. The crop doesn't care about your excuses; neither does a live jobsite.",
        "Vertical farming also forces capital discipline. Every watt and every litre has to justify itself. That's the same conversation as crew mix, crane time, and freight lanes: instrument the constraint, then design the flow around it.",
      ],
      takeaways: [
        "Measure inputs like you measure margin",
        "Design for feedback loops, not heroics",
        "Constraints are features — name them early",
      ]
    },
    {
      id: 'football',
      category: 'Tactical Leadership',
      title: 'Football Tactics → Business',
      desc: 'Real Madrid\'s structure, pressing triggers, and match review — translated into crew coordination and project control.',
      paragraphs: [
        "Great sides don't win on talent alone — they win on shape. A 4-3-3 is a RACI chart with boots on. Who presses, who covers, who resets the tempo: those are decision rights. I map the same clarity onto PMs, leads, trades, and suppliers.",
        "Pressing triggers become escalation rules. When a delivery slips or a rough-opening fails inspection, the team already knows the cue and the counter-press — no waiting for a weekly meeting to discover the fire.",
        "Match review is the project retro. Clip the turnovers (rework), study the transitions (handoffs), and adjust the next lineup (resource plan). The goal isn't blame; it's a tighter second half.",
      ],
      takeaways: [
        "Formation = org design & swimlanes",
        "Triggers beat status meetings",
        "Review the tape; then change the plan",
      ]
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Business Administration (BBA)',
      institution: 'University of the Fraser Valley',
      period: '2023',
      highlights: [
        'Core focus on Operations Management, Strategy, and Applied Business Analytics.',
        'Developed foundational frameworks for scalable business models.',
      ],
    },
    {
      degree: 'Diploma in International Business',
      institution: 'Universidad del Rosario',
      period: '2023',
      highlights: [
        'Specialized in global supply networks, cross-border trade, and market entry.',
        'Studied emerging market dynamics and international negotiation.',
      ],
    },
  ];

  const principles = [
    {
      id: 'football',
      title: 'Football Tactics → Team Ops',
      tagline: 'Strategy & Leadership — Hala Madrid',
      fullContent: 'Formations are org design. Pressing triggers are escalation rules. Match review is the retro. I borrow structure from the pitch and apply it to crews, vendors, and decision rights.',
    },
    {
      id: 'hydroponics',
      title: 'Hydroponics → Lean Systems',
      tagline: 'Vertical farming & bio-tech',
      fullContent: 'Closed-loop resource use, measured inputs, zero wasted motion. Vertical farming is a masterclass in constraint-based operations — the same math that keeps a jobsite or a warehouse honest.',
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship → Ownership',
      tagline: 'Supply chain & problem solving',
      fullContent: 'Bias to ship, instrument everything, and cut work that doesn\'t move the KPI. Lean isn\'t austerity — it\'s clarity about what creates value.',
    },
  ];

  /* ── LIFECYCLE HOOKS ── */
  useEffect(() => {
    const minTime = new Promise((resolve) => setTimeout(resolve, 1200));
    const video = videoRef.current;

    const videoReady = new Promise((resolve) => {
      if (!video) {
        resolve();
        return;
      }

      if (video.readyState >= 3) {
        resolve();
        return;
      }

      const done = () => resolve();

      video.addEventListener('canplaythrough', done, { once: true });
      video.addEventListener('loadeddata', done, { once: true });

      setTimeout(done, 4000); // Fallback timeout
    });

    Promise.all([minTime, videoReady]).then(() => {
      setIsLoading(false);
      setTimeout(() => setHeroReady(true), 200);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedModalItem || isLoading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedModalItem, isLoading]);

  const togglePrinciple = (id) => {
    setExpandedPrinciples((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="mercury-app">
      <PageLoader isLoading={isLoading} />
      <GlitchTrail />

      {/* Fixed full-viewport background — never moves with scroll */}
      <div className="page-video-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="page-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/meditating-ninja-4k.mp4" type="video/mp4" />
        </video>
        <div className="page-video-overlay" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');

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

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body,
        html {
          background-color: var(--color-onyx);
          color: var(--color-ivory);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        .mercury-app {
          position: relative;
          isolation: isolate;
        }

        .page-loader {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: var(--color-onyx);
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            opacity 0.55s var(--ease-out),
            visibility 0.55s var(--ease-out);
        }

        .page-loader-hide {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .loader-inner {
          width: min(280px, 70vw);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .loader-mark {
          font-family: var(--font-display);
          font-size: 42px;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: var(--color-white);
          animation: loaderPulse 1.6s var(--ease-out) infinite;
        }

        @keyframes loaderPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.72;
            transform: scale(0.98);
          }
        }

        .loader-bar-track {
          width: 100%;
          height: 2px;
          background: var(--color-obsidian);
          border-radius: 2px;
          overflow: hidden;
        }

        .loader-bar-fill {
          height: 100%;
          background: var(--color-cobalt);
          border-radius: 2px;
          box-shadow: 0 0 12px rgba(82, 102, 235, 0.55);
          transition: width 0.35s var(--ease-out);
        }

        .loader-meta {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .loader-label {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-slate);
        }

        .loader-pct {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 500;
          color: var(--color-ash);
          font-variant-numeric: tabular-nums;
        }

        /* Fixed background */
        .page-video-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .page-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          transform: none;
          pointer-events: none;
        }

        .page-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(23, 23, 33, 0.55) 0%,
            rgba(23, 23, 33, 0.78) 45%,
            rgba(23, 23, 33, 0.92) 100%
          );
        }

        .page-content {
          position: relative;
          z-index: 1;
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

        .hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px 40px;
          background-color: transparent;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

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
          transition:
            transform 0.35s var(--ease-out),
            border-color 0.35s ease;
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
          background: rgba(23, 23, 33, 0.35);
          backdrop-filter: blur(8px);
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(42px, 6vw, 65px);
          font-weight: 600;
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
          background-color: rgba(23, 23, 33, 0.4);
          color: var(--color-ivory);
          border: 1px solid var(--color-slate);
          padding: 14px 24px;
          font-weight: 400;
          backdrop-filter: blur(8px);
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

        .ticker-section {
          padding: 36px 0 28px;
          background: rgba(23, 23, 33, 0.45);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(39, 39, 53, 0.6);
          border-bottom: 1px solid rgba(39, 39, 53, 0.6);
          overflow: hidden;
          margin-bottom: 72px;
          position: relative;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-y;
          outline: none;
        }

        .ticker-section.is-dragging {
          cursor: grabbing;
        }

        .ticker-section:focus-visible {
          box-shadow: inset 0 0 0 1px rgba(82, 102, 235, 0.45);
        }

        .ticker-hint {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-slate);
          pointer-events: none;
          z-index: 3;
        }

        .ticker-window {
          overflow: hidden;
          width: 100%;
        }

        .ticker-track {
          display: flex;
          gap: 16px;
          width: max-content;
          will-change: transform;
          padding: 8px 0;
        }

        .ticker-pill {
          background: rgba(30, 30, 42, 0.88);
          border: 1px solid var(--color-obsidian);
          padding: 10px 24px;
          border-radius: 40px;
          color: var(--color-ivory);
          font-family: var(--font-display);
          font-size: 14px;
          white-space: nowrap;
          flex-shrink: 0;
          pointer-events: none;
        }

        .ticker-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 64px;
          z-index: 2;
          pointer-events: none;
        }

        .ticker-fade-left {
          left: 0;
          background: linear-gradient(to right, rgba(23, 23, 33, 0.85), transparent);
        }

        .ticker-fade-right {
          right: 0;
          background: linear-gradient(to left, rgba(23, 23, 33, 0.85), transparent);
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
          font-weight: 600;
          color: var(--color-ivory);
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

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

        .nav-link:hover {
          color: var(--color-white);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 112px 24px;
        }

        .section-header {
          margin-bottom: 56px;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 42px;
          font-weight: 600;
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
          background-color: rgba(30, 30, 42, 0.88);
          backdrop-filter: blur(12px);
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
          background-color: rgba(33, 33, 47, 0.94);
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .kpi-card {
          height: 100%;
          background-color: rgba(30, 30, 42, 0.88);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          border: 1px solid transparent;
          transition:
            transform 0.35s var(--ease-out),
            border-color 0.35s ease;
        }

        .kpi-card:hover {
          transform: translateY(-6px);
          border-color: rgba(82, 102, 235, 0.25);
        }

        .kpi-icon-wrapper {
          color: var(--color-cobalt);
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .kpi-value {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 600;
          color: var(--color-white);
          margin-bottom: 8px;
          line-height: 1;
        }

        .kpi-label {
          color: var(--color-ivory);
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }

        .kpi-desc {
          color: var(--color-ash);
          font-size: 14px;
          line-height: 1.5;
        }

        .exp-role {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 600;
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
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          gap: 16px;
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          text-align: left;
        }

        .dropbox-title {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 600;
          color: var(--color-white);
        }

        .dropbox-tagline {
          font-size: 14px;
          color: var(--color-ash);
          margin-top: 4px;
        }

        .chevron {
          color: var(--color-slate);
          transition:
            transform 0.35s var(--ease-out),
            color 0.25s ease;
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

        /* ── MODAL STYLES ── */
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
          max-width: 680px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          border: 1px solid var(--color-obsidian);
          animation: modalIn 0.4s var(--ease-out);
        }

        .modal-content p {
          color: var(--color-ivory);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .modal-takeaways {
          margin-top: 24px;
          padding: 20px;
          background: rgba(82, 102, 235, 0.08);
          border: 1px solid rgba(82, 102, 235, 0.15);
          border-radius: 8px;
        }
        
        .modal-takeaways h4 {
          font-family: var(--font-display);
          font-size: 14px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-cobalt);
          margin-bottom: 12px;
        }

        .modal-takeaways ul {
          list-style: none;
        }
        
        .modal-takeaways li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          color: var(--color-ivory);
          font-size: 15px;
        }
        
        .modal-takeaways li::before {
          content: '→';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--color-cobalt);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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
          background: rgba(23, 23, 33, 0.55);
          backdrop-filter: blur(8px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hero-title {
            font-size: 42px;
          }
          .section-container {
            padding: 72px 24px;
          }
          .nav-bar,
          .nav-bar.scrolled {
            padding: 16px 20px;
          }
          .ticker-hint {
            right: 12px;
            font-size: 10px;
          }
          .kpi-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }
          .kpi-card {
            padding: 24px 16px;
          }
          .kpi-value {
            font-size: 40px;
          }
          .modal-content {
            padding: 32px 20px;
          }
        }

        @media (max-width: 480px) {
          .button-group {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
          .button-group a {
            justify-content: center;
          }
          .kpi-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-content">
        <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-logo">Vaibhav Bector.</div>

          <div className="nav-links">
            <a href="#impact" className="nav-link">Impact</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#explorations" className="nav-link">Explorations</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#about" className="nav-link">About</a>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-ghost"
            style={{ padding: '8px 16px', fontSize: '14px' }}
          >
            <IconMail size={14} />
            Contact
          </a>
        </nav>

        <header className={`hero ${heroReady ? 'hero-ready' : ''}`}>
          <div className="hero-content">
            <div className="portrait-container hero-item hero-item-0">
              <img
                src={profilePic}
                alt="Vaibhav Bector"
                className="portrait-img"
              />
            </div>

            <div className="hero-badge hero-item hero-item-1">
              <IconMapPin size={14} />
              {personalInfo.location} — Open to opportunities
            </div>

            <h1 className="hero-title hero-item hero-item-2">
              Orchestrating complex systems.
            </h1>

            <p className="hero-subtitle hero-item hero-item-3">
              {personalInfo.tagline} Designed to eliminate operational
              bottlenecks and architect predictable, high-growth delivery.
            </p>

            <div className="button-group hero-item hero-item-4">
              <a href="#projects" className="btn-primary">
                View Initiatives
                <IconArrowRight size={18} />
              </a>

              <a
                href="/Vaibhav_Bector_Resume.pdf"
                download="Vaibhav_Bector_Resume.pdf"
                className="btn-ghost"
              >
                <IconDownload size={16} />
                Download CV
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <LinkedinIcon />
                LinkedIn
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>
          </div>
        </header>

        <Reveal>
          <TechTicker items={techStack} />
        </Reveal>

        {/* ── KPI Dashboard ── */}
        <section
          id="impact"
          className="section-container"
          style={{ paddingBottom: '32px' }}
        >
          <Reveal>
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title">Strategic Impact</h2>
              <p className="section-desc">
                Quantifiable results from scaling operations and reducing inefficiencies.
              </p>
            </div>
          </Reveal>

          <div className="kpi-grid">
            {kpis.map((kpi, idx) => (
              <Reveal key={kpi.label} delay={idx * 120}>
                <div className="kpi-card">
                  <div className="kpi-icon-wrapper">{kpi.icon}</div>
                  <div className="kpi-value">{kpi.value}</div>
                  <div className="kpi-label">{kpi.label}</div>
                  <div className="kpi-desc">{kpi.description}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="section-container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Track Record</h2>
              <p className="section-desc">
                Executing lean operations across supply chain management and architectural installations.
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

        {/* ── Projects ── */}
        <section
          id="projects"
          className="section-container"
          style={{ paddingTop: 0 }}
        >
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
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${proj.title}`}
                  onClick={() => setSelectedModalItem(proj)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedModalItem(proj);
                    }
                  }}
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
                    View details
                    <IconExternalLink size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Explorations (Feature #5) ── */}
        <section
          id="explorations"
          className="section-container"
          style={{ paddingTop: 0 }}
        >
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Explorations & Thought Leadership</h2>
              <p className="section-desc">
                Where craft meets curiosity — translating tactics and biological systems into business operations.
              </p>
            </div>
          </Reveal>

          <div className="grid-2">
            {explorations.map((exp, idx) => (
              <Reveal key={exp.id} delay={idx * 120}>
                <div
                  className="graphite-card interactive"
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${exp.title}`}
                  onClick={() => setSelectedModalItem(exp)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedModalItem(exp);
                    }
                  }}
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
                    {exp.category}
                  </div>

                  <h3 className="exp-role">{exp.title}</h3>

                  <p
                    style={{
                      color: 'var(--color-ash)',
                      fontSize: '16px',
                      lineHeight: 1.5,
                      marginTop: '12px',
                    }}
                  >
                    {exp.desc}
                  </p>

                  <div className="project-link">
                    Read the thinking
                    <IconArrowRight size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section
          id="education"
          className="section-container"
          style={{ paddingTop: 0 }}
        >
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Education & Credentials</h2>
              <p className="section-desc">
                Academic foundation in global business and operational strategy.
              </p>
            </div>
          </Reveal>

          <div className="grid-2">
            {education.map((edu, idx) => (
              <Reveal key={edu.institution} delay={idx * 120}>
                <div className="graphite-card">
                  <h3 className="exp-role">{edu.degree}</h3>

                  <div className="exp-meta">
                    <span>{edu.institution}</span>
                    <span>{edu.period}</span>
                  </div>

                  <ul className="exp-list">
                    {edu.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Principles / About ── */}
        <section
          id="about"
          className="section-container"
          style={{ paddingTop: 0 }}
        >
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Driving Principles</h2>
              <p className="section-desc">
                The philosophies that influence my approach to complex project management.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {principles.map((principle, idx) => {
              const isOpen = expandedPrinciples.includes(principle.id);
              const panelId = `principle-panel-${principle.id}`;

              return (
                <Reveal key={principle.id} delay={idx * 90}>
                  <div className="graphite-card">
                    <button
                      type="button"
                      className="dropbox-header"
                      onClick={() => togglePrinciple(principle.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <div>
                        <h3 className="dropbox-title">{principle.title}</h3>
                        <div className="dropbox-tagline">{principle.tagline}</div>
                      </div>

                      <IconChevronDown
                        size={24}
                        className={`chevron ${isOpen ? 'open' : ''}`}
                      />
                    </button>

                    <div
                      id={panelId}
                      className={`dropbox-content ${isOpen ? 'open' : ''}`}
                      aria-hidden={!isOpen}
                    >
                      <div className="dropbox-content-inner">
                        <div>{principle.fullContent}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Dynamic Modal Overlay (Handles both Projects & Explorations) ── */}
        {selectedModalItem && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedModalItem(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedModalItem(null)}
                aria-label="Close"
              >
                <IconX size={24} />
              </button>

              <div
                style={{
                  color: 'var(--color-slate)',
                  fontSize: '14px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {selectedModalItem.category}
              </div>

              <h3
                className="section-title"
                style={{ fontSize: '32px', marginBottom: '24px' }}
              >
                {selectedModalItem.title}
              </h3>

              {/* Render paragraphs array if it exists */}
              {selectedModalItem.paragraphs && selectedModalItem.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* Render specific takeaways if it's an Exploration */}
              {selectedModalItem.takeaways && (
                <div className="modal-takeaways">
                  <h4>Operating Takeaways</h4>
                  <ul>
                    {selectedModalItem.takeaways.map((takeaway, i) => (
                      <li key={i}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Vaibhav Bector. Modeled on Alpine banking aesthetics.
          </p>
        </footer>
      </div>
    </div>
  );
}