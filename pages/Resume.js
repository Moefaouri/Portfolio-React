import Nav from "./Nav";
import React from "react";
import Link from "next/link";

/* ── Data from CV ── */
const SKILLS = [
  { label: "React.js / Next.js", pct: 92 },
  { label: "JavaScript (ES6+)", pct: 90 },
  { label: "HTML5 & CSS3", pct: 95 },
  { label: "React Native", pct: 78 },
  { label: "UI/UX Design", pct: 85 },
  { label: "REST API Integration", pct: 82 },
];

const TOOLS = [
  "Bootstrap", "Material Design", "ApexCharts",
  "Adobe XD", "Photoshop", "Illustrator",
  "Git & GitHub", "Agile / Scrum", "Power BI",
];

const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Hakeem — National Health Information Center",
    period: "Oct 2023 – Present · Amman, Jordan",
    bullets: [
      "Contributed to building 8+ healthcare web modules including Hakeem Dashboard, PIM Web, Surgery Management, Scheduling, Emergency System, Medical Committee, and Health Pre-Marital Certificate.",
      "Led the frontend of Dr. Hakeem (React Native) and My Hakeem (WebView) mobile apps — all patient and physician-facing screens.",
      "Built a shared component library that reduced UI inconsistency issues by ~40% across products.",
      "Owned UI/UX design end-to-end using Adobe XD, Photoshop, and Illustrator — from first wireframe to final handoff — on every product I was involved in.",
      "Integrated 10+ REST API endpoints per module, working directly with backend engineers to align data structures with UI requirements.",
    ],
  },
  {
    role: "Quality Assurance Intern",
    company: "Royal Scientific Society",
    period: "Undergraduate Internship · 90 hours · Amman, Jordan",
    bullets: [
      "Executed 50+ structured manual test cases for web applications.",
      "Logged and tracked defects through full resolution cycles.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Hakeem Healthcare Suite",
    stack: "JavaScript · CSS · PHP · React Native · Adobe XD",
    desc: "Part of the team that built and maintains Jordan's national health platform frontend. Involved across 8+ modules covering clinical workflows, patient management, and mobile access.",
  },
  {
    name: "UI Consistency Checker",
    stack: "React.js · CSS",
    desc: "Built to catch UI inconsistencies — wrong fonts, mismatched colors, broken spacing — before they reach production. Lets anyone on the team upload a screenshot and get instant, specific feedback.",
  },
  {
    name: "Beedouin",
    stack: "React.js · Next.js · CSS",
    link: "beedouin.com",
    desc: "Full e-commerce storefront for a Jordanian honey brand — live in production, serving real orders across Jordan. Built in Arabic with full RTL layout, product catalog, cart, and contact flow.",
  },
  {
    name: "Personal Portfolio",
    stack: "React.js · Next.js · CSS",
    link: "moelfaouriportfolio.vercel.app",
    desc: "Showcases selected projects, services, and resume. Deployed on Vercel.",
  },
];

const EDUCATION = [
  {
    degree: "B.Sc. — Business Information Technology (BIT)",
    school: "University of Jordan, Amman",
    period: "2019 – 2023",
  },
];

const LANGUAGES = ["Arabic (Native)", "English (Professional — Advanced)"];
const INTERESTS = ["Climbing", "Snowboarding", "Photography", "Traveling"];

/* ── Sub-components ── */
const SectionTitle = ({ title }) => (
  <div className="resume-section-title">
    <h2>{title}</h2>
  </div>
);

const Resume = () => (
  <div className="page-shell">
    <Nav />
    <main className="main-pane">

      {/* Page header */}
      <div className="page-header">
        <h3>Online Resume</h3>
        <Link
          href="/documents/Mohammad_Elfauri_CV.pdf"
          className="btn-primary-custom"
          download
          style={{ display: "inline-flex", margin: "0 auto" }}
        >
          <svg stroke="#fff" fill="#fff" viewBox="0 0 256 256">
            <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" />
          </svg>
          Download PDF
        </Link>
      </div>

      {/* Identity bar */}
      <div className="resume-top-bar">
        <div className="resume-identity">
          <h1>Mohammad Elfauri</h1>
          <span className="title-tag">Frontend Developer Specialist · UI/UX Designer</span>
        </div>
        <div className="resume-contact-row">
          <a href="tel:+962792792606">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
              <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" />
            </svg>
            +962 792 792 606
          </a>
          <a href="mailto:moework190@gmail.com">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
            </svg>
            moework190@gmail.com
          </a>
          <span>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
            </svg>
            Amman, Jordan
          </span>
          <a href="https://github.com/Moefaouri" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
            </svg>
            github.com/Moefaouri
          </a>
          <a href="https://linkedin.com/in/el-fauri" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            linkedin.com/in/el-fauri
          </a>
        </div>
      </div>

      {/* Two-column body */}
      <div className="resume-wrapper">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="resume-sidebar">

          <div className="resume-section">
            <SectionTitle title="Skills" />
            <div className="skill-list">
              {SKILLS.map(s => (
                <div className="skill-row" key={s.label}>
                  <div className="skill-row-top">
                    <span>{s.label}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <SectionTitle title="Tools & Tech" />
            <div className="tag-cloud">
              {TOOLS.map(t => <span className="skill-tag" key={t}>{t}</span>)}
            </div>
          </div>

          <div className="resume-section">
            <SectionTitle title="Education" />
            {EDUCATION.map(e => (
              <div key={e.degree}>
                <div style={{ fontWeight: 700, fontSize: "0.83rem", color: "var(--text)", lineHeight: 1.4, marginBottom: 3 }}>{e.degree}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, marginBottom: 2 }}>{e.school}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>{e.period}</div>
              </div>
            ))}
          </div>


          <div className="resume-section">
            <SectionTitle title="Languages" />
            <ul className="simple-list">
              {LANGUAGES.map(l => <li key={l}>{l}</li>)}
            </ul>
          </div>

          <div className="resume-section">
            <SectionTitle title="Interests" />
            <ul className="simple-list">
              {INTERESTS.map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </aside>

        {/* ── RIGHT MAIN ── */}
        <div className="resume-main">

          <div className="resume-section">
            <SectionTitle title="Professional Summary" />
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.85 }}>
              Frontend Developer Specialist with 3+ years of experience building production-ready web and mobile
              applications for Jordan&apos;s national healthcare platform. Part of a team shipping 8+ internal systems
              used daily by medical professionals across the country. Deep care for code quality, design consistency,
              and delivering interfaces that just work — the first time.
            </p>
          </div>

          <div className="resume-section">
            <SectionTitle title="Experience" />
            <div className="timeline">
              {EXPERIENCE.map(exp => (
                <div className="timeline-item" key={exp.role}>
                  <div className="timeline-title">{exp.role}</div>
                  <div className="timeline-sub">{exp.company}</div>
                  <div className="timeline-date">{exp.period}</div>
                  <ul className="simple-list" style={{ marginTop: "4px" }}>
                    {exp.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <SectionTitle title="Projects" />
            <div className="timeline">
              {PROJECTS.map(p => (
                <div className="timeline-item" key={p.name}>
                  <div className="timeline-title">{p.name}</div>
                  <div className="timeline-sub">{p.stack}</div>
                  {p.link && (
                    <div className="timeline-date">
                      <a href={`https://${p.link}`} target="_blank" rel="noreferrer"
                        style={{ color: "var(--accent)" }}>
                        {p.link}
                      </a>
                    </div>
                  )}
                  <div className="timeline-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </main>
  </div>
);

export default Resume;