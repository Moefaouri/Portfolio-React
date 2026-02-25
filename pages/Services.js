import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";

const SERVICES = [
  {
    number: "01",
    title: "Frontend Development",
    tagline: "Fast, clean, production-ready",
    description: "Building performant web interfaces with React.js and Next.js — from component architecture to API integration and deployment.",
    items: [
      "React.js & Next.js SPAs",
      "Responsive & accessible UIs",
      "REST API integration",
      "Performance optimisation",
      "Component library building",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Mobile Development",
    tagline: "Cross-platform, pixel-perfect",
    description: "Shipping React Native apps for iOS and Android — covering patient, physician and consumer experiences end-to-end.",
    items: [
      "React Native apps",
      "WebView integration",
      "Patient & physician screens",
      "Cross-platform testing",
      "App Store & Play Store ready",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
        <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "UI/UX Design",
    tagline: "Wireframe to final handoff",
    description: "End-to-end design ownership using Adobe XD — from first wireframe through usability testing to pixel-perfect developer handoff.",
    items: [
      "Wireframing & prototyping",
      "Adobe XD & Photoshop",
      "Design systems & handoff",
      "Usability testing",
      "End-to-end design ownership",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    question: "When can you start?",
    answer: "I'm available to start immediately for freelance projects. For full-time roles I'd need a brief notice period of up to two weeks.",
  },
  {
    question: "What services do you offer?",
    answer: "Frontend development (React.js, Next.js, React Native) and UI/UX design end-to-end — from first wireframe to production deployment.",
  },
  {
    question: "Can I see examples of your work?",
    answer: "Yes — my Portfolio page shows selected projects including Hakeem Healthcare Suite, Beedouin (live e-commerce), and personal tools. Check the Resume page for full case details.",
  },
  {
    question: "What tools and technologies do you use?",
    answer: "React, Next.js, React Native, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Material Design. Design: Adobe XD, Photoshop, Illustrator. Workflow: Git, GitHub, Agile/Scrum.",
  },
  {
    question: "What's your availability?",
    answer: "I can take on freelance projects alongside my current role. For full-time opportunities I'm always open to the right conversation.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="page-shell">
      <Nav />
      <main className="main-pane">

        <div className="page-header">
          <h3>Services &amp; FAQ</h3>
          <Link href="/contact" className="btn-primary-custom" style={{ display: "inline-flex", margin: "0 auto" }}>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
              <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68Z"/>
            </svg>
            Hire Me
          </Link>
        </div>

        {/* ══ Services Stepper ══ */}
        <div className="svc-stepper">
          {SERVICES.map((svc, idx) => (
            <div className="svc-step" key={svc.number}>

              {/* Left rail: track line + node */}
              <div className="svc-rail">
                {/* Top segment of track (hidden on first item) */}
                <div className={`svc-track svc-track-top ${idx === 0 ? "svc-track-hidden" : ""}`} />

                {/* The step node — icon on top, number below */}
                <div className="svc-node">
                  <div className="svc-node-ring" />
                  <div className="svc-node-icon">{svc.icon}</div>
                </div>

                {/* Bottom segment of track (hidden on last item) */}
                <div className={`svc-track svc-track-bottom ${idx === SERVICES.length - 1 ? "svc-track-hidden" : ""}`} />
              </div>

              {/* Right: content card */}
              <div className="svc-card">
                <div className="svc-card-header">
                  <div>
                    <div className="svc-num-label">{svc.number}</div>
                    <h2 className="svc-title">{svc.title}</h2>
                    <p className="svc-tagline">{svc.tagline}</p>
                  </div>
                  <span className="svc-badge">{svc.items.length} services</span>
                </div>
                <p className="svc-desc">{svc.description}</p>
                <ul className="svc-list">
                  {svc.items.map(item => (
                    <li key={item}>
                      <span className="svc-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* ══ FAQ ══ */}
        <div className="faq-section">
          {/* Plain heading — no line decoration */}
          <h3 className="faq-heading">Frequently Asked Questions</h3>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`faq-item ${openIndex === i ? "open" : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <div className="faq-toggle">
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"/>
                    </svg>
                  </div>
                </div>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Services;