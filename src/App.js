import React, { useState, useEffect, useRef, useCallback } from "react";
import profileImg from "./Profile.jpg";
import "./App.css";

/* ═══════════════════════════════════════════
   STATIC DATA ARRAYS
═══════════════════════════════════════════ */

const TECH_STACK = [
  "MS Project",
  "Primavera P6",
  "AutoCAD",
  "SAP",
  "Oracle ERP",
  "Tableau",
  "Power BI",
  "Excel",
  "Jira",
  "Asana",
  "Salesforce",
  "Bluebeam",
  "CostX",
  "Procore",
  "Lean Six Sigma",
  "CPM Scheduling",
  "Supply Chain Ops",
  "Vendor Management",
];

const KPIS = [
  {
    value: "+40%",
    label: "Efficiency Boost",
    sub: "Delivery cycle compression",
  },
  {
    value: "+66%",
    label: "Fulfillment Growth",
    sub: "Order throughput scaled",
  },
  {
    value: "−23%",
    label: "Logistics Savings",
    sub: "Freight & routing optimized",
  },
  {
    value: "+30%",
    label: "Revenue Expansion",
    sub: "Process-led growth",
  },
];

const EXPERIENCE = [
  {
    id: "tormax",
    company: "TORMAX Canada",
    role: "Project Manager",
    period: "2023 — Present",
    location: "Vancouver, BC",
    points: [
      "Lead end-to-end installation programs for automatic door systems across commercial and institutional sites.",
      "Build and own CPM schedules, coordinate multi-trade crews, and drive on-time handover under tight occupancy windows.",
      "Partner with general contractors, architects, and suppliers to de-risk scope gaps before they hit the field.",
      "Standardize handoff packages and QA checklists that cut rework and protect margin on live jobs.",
    ],
  },
  {
    id: "wellness",
    company: "Wellness Extract",
    role: "Supply Chain Manager",
    period: "2021 — 2023",
    location: "Remote / Hybrid",
    points: [
      "Scaled fulfillment operations and tightened inventory discipline across a fast-growing CPG supply chain.",
      "Renegotiated carrier and 3PL terms; redesigned routing logic that delivered material logistics cost reduction.",
      "Stood up demand-planning rhythms and safety-stock rules that stabilized OTIF during volume spikes.",
      "Connected sales forecasts to procurement so purchasing stopped reacting and started leading.",
    ],
  },
];

const PROJECTS = [
  {
    id: "p1",
    title: "National Rollout — Automatic Entrances",
    tag: "Project Controls",
    blurb:
      "Multi-site installation program with phased CPM schedules, vendor scorecards, and live risk registers kept under one operating cadence.",
  },
  {
    id: "p2",
    title: "Fulfillment Network Redesign",
    tag: "Supply Chain",
    blurb:
      "Rebuilt pick-pack-ship flow and carrier mix to absorb a step-change in order volume without proportional headcount growth.",
  },
  {
    id: "p3",
    title: "Estimating → Execution Bridge",
    tag: "Operations",
    blurb:
      "Closed the gap between takeoff assumptions and field reality with standardized scope packs and change-order triggers.",
  },
];

const EDUCATION = [
  {
    id: "ufv",
    school: "University of the Fraser Valley",
    credential: "Bachelor of Business Administration (BBA)",
    period: "2023",
    detail: "Focus on operations, strategy, and applied business analytics.",
  },
  {
    id: "rosario",
    school: "Universidad del Rosario",
    credential: "Diploma — International Business",
    period: "2023",
    detail: "Cross-border trade, global supply networks, and market entry.",
  },
];

const PRINCIPLES = [
  {
    id: "pr1",
    title: "Football Tactics → Team Ops",
    body: "Formations are org design. Pressing triggers are escalation rules. Match review is the retro. I borrow structure from the pitch and apply it to crews, vendors, and decision rights.",
  },
  {
    id: "pr2",
    title: "Hydroponics → Lean Systems",
    body: "Closed-loop resource use, measured inputs, zero wasted motion. Vertical farming is a masterclass in constraint-based operations — the same math that keeps a jobsite or a warehouse honest.",
  },
  {
    id: "pr3",
    title: "Entrepreneurship → Ownership",
    body: "Bias to ship, instrument everything, and cut work that doesn't move the KPI. Lean isn't austerity — it's clarity about what creates value.",
  },
];

const EXPLORATIONS = [
  {
    id: "hydro",
    eyebrow: "Systems Thinking",
    title: "Hydroponics & Vertical Farming",
    summary:
      "Closed-loop growing as a living lab for lean operations — measured inputs, tight feedback, zero wasted motion.",
    accent: "#5266eb",
    icon: "leaf",
    modal: {
      title: "Hydroponics as an Operating System",
      paragraphs: [
        "A hydroponic rack is a supply chain in miniature: demand is the plant's growth curve, inventory is nutrient concentration, and lead time is the pump cycle. When you dial EC, pH, and photoperiod, you're running a control tower.",
        "I've used that mindset on real networks — safety stock as buffer against variability, kanban-style replenishment for consumables, and root-cause checks when yield drifts. The crop doesn't care about your excuses; neither does a live jobsite.",
        "Vertical farming also forces capital discipline. Every watt and every litre has to justify itself. That's the same conversation as crew mix, crane time, and freight lanes: instrument the constraint, then design the flow around it.",
      ],
      takeaways: [
        "Measure inputs like you measure margin",
        "Design for feedback loops, not heroics",
        "Constraints are features — name them early",
      ],
    },
  },
  {
    id: "football",
    eyebrow: "Tactical Leadership",
    title: "Football Tactics → Business",
    summary:
      "Real Madrid's structure, pressing triggers, and match review — translated into crew coordination and project control.",
    accent: "#c4a46c",
    icon: "pitch",
    modal: {
      title: "From the Bernabéu to the Jobsite",
      paragraphs: [
        "Great sides don't win on talent alone — they win on shape. A 4-3-3 is a RACI chart with boots on. Who presses, who covers, who resets the tempo: those are decision rights. I map the same clarity onto PMs, leads, trades, and suppliers.",
        "Pressing triggers become escalation rules. When a delivery slips or a rough-opening fails inspection, the team already knows the cue and the counter-press — no waiting for a weekly meeting to discover the fire.",
        "Match review is the project retro. Clip the turnovers (rework), study the transitions (handoffs), and adjust the next lineup (resource plan). The goal isn't blame; it's a tighter second half.",
      ],
      takeaways: [
        "Formation = org design & swimlanes",
        "Triggers beat status meetings",
        "Review the tape; then change the plan",
      ],
    },
  },
];

/* ═══════════════════════════════════════════
   INLINE SVG ICONS
═══════════════════════════════════════════ */

const IconGitHub = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.48 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconMail = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconDownload = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconLeaf = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M11 20A7 7 0 019.8 6.1C15.5 4 20 9 20 14a7 7 0 01-9 6z" />
    <path d="M2 21c6-3 9-9 10-15" />
  </svg>
);

const IconPitch = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M3 12h6M15 12h6M12 3v6M12 15v6" />
  </svg>
);

const IconClose = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ═══════════════════════════════════════════
   REVEAL COMPONENT (IntersectionObserver)
═══════════════════════════════════════════ */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════
   GLITCH TRAIL CANVAS
═══════════════════════════════════════════ */
function GlitchTrail() {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const raf = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        ox: (Math.random() - 0.5) * 18,
      });
      if (points.current.length > 40) points.current.shift();
    };
    window.addEventListener("pointermove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      points.current.forEach((p) => {
        p.life -= 0.02;
        if (p.life <= 0) return;
        const alpha = p.life * 0.55;
        const gw = 14 + Math.random() * 28;
        const gh = 2 + Math.random() * 3;
        ctx.fillStyle = `rgba(82, 102, 235, ${alpha})`;
        ctx.fillRect(p.x + p.ox - gw / 2, p.y - gh / 2, gw, gh);
        if (Math.random() > 0.7) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.35})`;
          ctx.fillRect(p.x - p.ox - 8, p.y + 3, 10 + Math.random() * 16, 1);
        }
      });
      points.current = points.current.filter((p) => p.life > 0);
      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="glitch-canvas" aria-hidden="true" />;
}

/* ═══════════════════════════════════════════
   TECH TICKER COMPONENT
═══════════════════════════════════════════ */
function TechTicker() {
  const trackRef = useRef(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const auto = useRef(true);

  const items = [...TECH_STACK, ...TECH_STACK];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    let frame;
    const tick = () => {
      if (auto.current && !dragging.current) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    auto.current = false;
    startX.current = e.clientX;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    trackRef.current.scrollLeft = scrollLeft.current - dx;
  };
  const onUp = () => {
    dragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    setTimeout(() => {
      auto.current = true;
    }, 1800);
  };

  return (
    <div className="ticker-wrap">
      <div className="ticker-label">Tools &amp; Stack</div>
      <div
        className="ticker-track"
        ref={trackRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
      >
        {items.map((t, i) => (
          <span className="ticker-pill" key={`${t}-${i}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ACCORDION COMPONENT
═══════════════════════════════════════════ */
function AccordionItem({ title, meta, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`acc-item ${open ? "open" : ""}`}>
      <button
        type="button"
        className="acc-head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="acc-head-text">
          <span className="acc-title">{title}</span>
          {meta && <span className="acc-meta">{meta}</span>}
        </div>
        <span className="acc-chevron" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div className="acc-body" style={{ maxHeight: open ? "640px" : "0px" }}>
        <div className="acc-body-inner">{children}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   EXPLORATION MODAL
═══════════════════════════════════════════ */
function ExplorationModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!item) return null;
  const { modal, title, eyebrow, accent, icon } = item;

  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-label={modal.title}>
      <button
        type="button"
        className="modal-backdrop"
        onClick={onClose}
        aria-label="Close dialog"
      />
      <div className="modal-panel">
        <div className="modal-top" style={{ borderTopColor: accent }}>
          <div
            className="modal-icon"
            style={{ color: accent, background: `${accent}22` }}
          >
            {icon === "leaf" ? <IconLeaf /> : <IconPitch />}
          </div>
          <div>
            <div className="modal-eyebrow">{eyebrow}</div>
            <h3 className="modal-title">{modal.title}</h3>
            <div className="modal-sub">{title}</div>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <IconClose />
          </button>
        </div>
        <div className="modal-content">
          {modal.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="modal-takeaways">
            <div className="modal-takeaways-label">Operating takeaways</div>
            <ul>
              {modal.takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN APP EXPORT
═══════════════════════════════════════════ */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeExplore, setActiveExplore] = useState(null);
  const [navSolid, setNavSolid] = useState(false);

  /* Loader logic */
  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 8;
      if (p >= 100) {
        p = 100;
        setProgress(100);
        clearInterval(id);
        setTimeout(() => setLoading(false), 320);
      } else {
        setProgress(Math.floor(p));
      }
    }, 140);
    return () => clearInterval(id);
  }, []);

  /* Nav background logic */
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openExplore = useCallback((item) => setActiveExplore(item), []);
  const closeExplore = useCallback(() => setActiveExplore(null), []);

  return (
    <div className="app-root" id="top">
      {/* ── 1. Fixed Cinematic Background ── */}
      <div className="bg-stage" aria-hidden="true">
        <video
          className="bg-video"
          src="/meditating-ninja-4k.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="bg-veil" />
        <div className="bg-grain" />
      </div>

      {/* ── 2. Glitch Cursor Trail ── */}
      <GlitchTrail />

      {/* ── 3. Initial Page Loader ── */}
      {loading && (
        <div className="loader">
          <div className="loader-brand">VB</div>
          <div className="loader-bar">
            <div className="loader-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-pct">{progress}%</div>
        </div>
      )}

      {/* ── 4. Main Nav Navigation ── */}
      <header className={`nav ${navSolid ? "nav-solid" : ""}`}>
        <a href="#top" className="nav-logo">
          Vaibhav Bector
        </a>
        <nav className="nav-links">
          <a href="#impact">Impact</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#explorations">Explorations</a>
          <a href="#education">Education</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-actions">
          <a
            className="btn btn-ghost btn-sm"
            href="/Vaibhav_Bector_Resume.pdf"
            download
          >
            <IconDownload />
            <span>CV</span>
          </a>
          <a className="btn btn-primary btn-sm" href="mailto:bector2001@gmail.com">
            Contact
          </a>
        </div>
      </header>

      {/* ── Main Content Shell ── */}
      <main className={`main-shell ${loading ? "is-loading" : ""}`}>
        
        {/* ════════════ HERO ════════════ */}
        <section className="hero">
          <Reveal>
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Vancouver, BC · Open to opportunities</div>
                <h1>
                  I build lean operations
                  <br />
                  <span className="text-accent">and scalable supply chains.</span>
                </h1>
                <p className="hero-lead">
                  Project Manager · Installation Coordinator · Construction Estimator ·
                  Supply Chain Manager. Turning complex field programs and fulfillment
                  networks into calm, measurable systems.
                </p>
                <div className="hero-cta">
                  <a className="btn btn-primary" href="mailto:bector2001@gmail.com">
                    <IconMail />
                    <span>Get in touch</span>
                  </a>
                  <a
                    className="btn btn-ghost"
                    href="/Vaibhav_Bector_Resume.pdf"
                    download
                  >
                    <IconDownload />
                    <span>Download CV</span>
                  </a>
                </div>
                <div className="hero-social">
                  <a
                    href="https://github.com/B3ECT0R07"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <IconGitHub />
                  </a>
                  <a
                    href="https://ca.linkedin.com/in/vaibhavbector"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <IconLinkedIn />
                  </a>
                </div>
              </div>
              <div className="hero-portrait">
                <div className="portrait-frame">
                  <img src={profileImg} alt="Vaibhav Bector" />
                </div>
                <div className="portrait-chip">Based in Vancouver</div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ════════════ TECH TICKER ════════════ */}
        <TechTicker />

        {/* ════════════ KPI DASHBOARD ════════════ */}
        <section className="section" id="impact">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Strategic Impact</div>
              <h2>Numbers that survive a board review.</h2>
              <p className="section-sub">
                Efficiency, fulfillment, logistics, and revenue — the four dials I keep
                in view on every program.
              </p>
            </div>
          </Reveal>
          <div className="kpi-grid">
            {KPIS.map((k, i) => (
              <Reveal key={k.label} delay={i * 80}>
                <div className="kpi-card">
                  <div className="kpi-value">{k.value}</div>
                  <div className="kpi-label">{k.label}</div>
                  <div className="kpi-sub">{k.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════ EXPERIENCE ════════════ */}
        <section className="section" id="experience">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Experience</div>
              <h2>Field programs &amp; supply networks.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="card stack-card">
              {EXPERIENCE.map((job, idx) => (
                <AccordionItem
                  key={job.id}
                  defaultOpen={idx === 0}
                  title={`${job.role} · ${job.company}`}
                  meta={`${job.period} · ${job.location}`}
                >
                  <ul className="bullet-list">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ════════════ PROJECTS ════════════ */}
        <section className="section" id="projects">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Selected Work</div>
              <h2>Programs built to scale without drama.</h2>
            </div>
          </Reveal>
          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <article className="project-card">
                  <div className="project-tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════ EXPLORATIONS ════════════ */}
        <section className="section" id="explorations">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Explorations</div>
              <h2>Where craft meets curiosity.</h2>
              <p className="section-sub">
                Hydroponics and football tactics aren't hobbies on the side — they're
                how I stress-test ideas about flow, formation, and feedback before they
                hit a live operation.
              </p>
            </div>
          </Reveal>
          <div className="explore-grid">
            {EXPLORATIONS.map((item, i) => (
              <Reveal key={item.id} delay={i * 90}>
                <button
                  type="button"
                  className="explore-card"
                  onClick={() => openExplore(item)}
                  style={{ "--card-accent": item.accent }}
                >
                  <div className="explore-icon" style={{ color: item.accent }}>
                    {item.icon === "leaf" ? <IconLeaf /> : <IconPitch />}
                  </div>
                  <div className="explore-eyebrow">{item.eyebrow}</div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="explore-cta">
                    Read the thinking <span aria-hidden="true">→</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════ EDUCATION ════════════ */}
        <section className="section" id="education">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Education</div>
              <h2>Foundations.</h2>
            </div>
          </Reveal>
          <div className="edu-grid">
            {EDUCATION.map((ed, i) => (
              <Reveal key={ed.id} delay={i * 70}>
                <div className="edu-card">
                  <div className="edu-period">{ed.period}</div>
                  <h3>{ed.credential}</h3>
                  <div className="edu-school">{ed.school}</div>
                  <p>{ed.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════ ABOUT / PRINCIPLES ════════════ */}
        <section className="section" id="about">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">Principles</div>
              <h2>How I think when the plan meets reality.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="card stack-card">
              {PRINCIPLES.map((pr, idx) => (
                <AccordionItem key={pr.id} title={pr.title} defaultOpen={idx === 0}>
                  <p className="principle-body">{pr.body}</p>
                </AccordionItem>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ════════════ FOOTER CTA ════════════ */}
        <section className="section footer-cta">
          <Reveal>
            <div className="cta-panel">
              <div>
                <div className="eyebrow">Next move</div>
                <h2>Let's build the calm version of complex.</h2>
                <p>
                  Whether it's a multi-site install program or a fulfillment network
                  that needs discipline — I'm ready to dig in.
                </p>
              </div>
              <div className="hero-cta">
                <a className="btn btn-primary" href="mailto:bector2001@gmail.com">
                  <IconMail />
                  <span>bector2001@gmail.com</span>
                </a>
                <a
                  className="btn btn-ghost"
                  href="/Vaibhav_Bector_Resume.pdf"
                  download
                >
                  <IconDownload />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </Reveal>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Vaibhav Bector</span>
            <span className="dot">·</span>
            <span>Vancouver, BC</span>
          </div>
        </section>
      </main>

      {/* ── Exploration Modal Overlay ── */}
      {activeExplore && (
        <ExplorationModal item={activeExplore} onClose={closeExplore} />
      )}
    </div>
  );
}