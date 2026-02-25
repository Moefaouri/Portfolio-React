import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import React, { useState, useEffect } from "react";

const ROLES = ["Frontend Developer", "UI/UX Designer"];
const TYPING_SPEED   = 90;
const DELETING_SPEED = 45;
const PAUSE_TIME     = 2200;

const STATS = [
  { label: "Years of Experience", target: 3 },
  { label: "Personal Projects",   target: 6 },
  { label: "Company Projects",    target: 14 },
];

const TECH = [
  "React.js", "Next.js", "JavaScript", "TypeScript",
  "HTML5", "CSS3", "Bootstrap", "Material Design",
  "React Native", "REST APIs", "Git & GitHub",
  "Adobe XD", "Photoshop", "Illustrator", "UI/UX Design",
];

const About = () => {
  const [text,       setText]       = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex,  setLoopIndex]  = useState(0);
  const [statValues, setStatValues] = useState(STATS.map(() => 0));

  /* Typing effect */
  useEffect(() => {
    const currentRole = ROLES[loopIndex % ROLES.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") { setIsDeleting(false); setLoopIndex(i => i + 1); }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopIndex]);

  /* Counter animation */
  useEffect(() => {
    const steps = 50;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setStatValues(STATS.map(s => Math.min(Math.round((s.target / steps) * step), s.target)));
      if (step >= steps) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-shell">
      <Nav />
      <main className="main-pane">

        {/*
          Desktop layout:
            [  text intro  |  portrait  ]
            [ ── chips spanning full row ── ]
            [ ──────── stats ──────────── ]

          Mobile layout (flex-direction: column):
            text intro   ← order: 1
            portrait     ← order: 2
            chips        ← order: 3
            stats        ← order: 4
        */}

        <div className="about-wrapper">

          {/* Row 1: text LEFT + portrait RIGHT */}
          <section className="about-hero">

            {/* Text — mobile order 1 */}
            <div className="about-intro">
              <h1 className="about-name">Mohammad<br />Elfauri</h1>
              <div className="about-role-typed">
                {text}<span className="cursor" />
              </div>
              <p className="about-desc">
                Frontend Developer based in <strong>Amman, Jordan</strong> with 3+ years building
                production web &amp; mobile apps. Currently shipping <strong>Hakeem</strong> — Jordan&apos;s
                national healthcare platform — across 8+ internal systems. I own UI/UX end-to-end,
                from wireframe to final handoff.
              </p>
              <div className="about-cta-wrap">
                <Link href="/Portfolio" className="btn-primary-custom">
                  <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                  </svg>
                  View Portfolio
                </Link>
                <Link href="/Resume" className="btn-secondary-custom">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"/>
                  </svg>
                  View Resume
                </Link>
              </div>
            </div>

            {/* Portrait — mobile order 2 */}
            <div className="about-portrait-wrap">
              <div className="about-portrait-card">
                <div className="portrait-accent-ring" />
                <div className="portrait-accent-dots" />
                <div className="portrait-frame">
                  <Image
                    src="/images/color-white.png"
                    width={220}
                    height={280}
                    alt="Mohammad Elfauri"
                    priority
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                  <div className="portrait-gradient" />
                </div>
              </div>
            </div>

          </section>

          {/* Row 2: chips full-width — mobile order 3 */}
          <div className="about-chips-row">
            <div className="tag-cloud">
              {TECH.map(t => <span className="skill-tag" key={t}>{t}</span>)}
            </div>
          </div>

        </div>

        {/* Row 3: stats — mobile order 4 */}
        <section className="stats-row">
          {STATS.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-number">{statValues[i]}</div>
              <div className="stat-sep" />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
};

export default About;