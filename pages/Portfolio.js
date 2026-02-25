import React, { useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

const FRONTEND_PROJECTS = [
  {
    title: "Hakeem Healthcare Suite",
    description: "Jordan's national health platform frontend — 8+ modules covering clinical workflows, patient management, and mobile access. Built with JavaScript, CSS, PHP, and React Native.",
    href:   "https://github.com/Moefaouri",
    github: "https://github.com/Moefaouri",
    image:  "/images/fe.jpg",
    chips:  ["JavaScript", "React Native", "CSS", "PHP", "WebView"],
  },
  {
    title: "Beedouin",
    description: "Full e-commerce storefront for a Jordanian honey brand — live in production. Arabic RTL layout, product catalog, cart, and contact flow.",
    href:   "https://petra-bloom.vercel.app/",
    github: "https://github.com/Moefaouri/PetraBloom",
    image:  "/images/fe.jpg",
    chips:  ["Next.js", "React.js", "CSS", "RTL"],
  },
  {
    title: "UI Consistency Checker",
    description: "Internal tool to catch UI inconsistencies — wrong fonts, colors, broken spacing — before they reach production. Upload a screenshot, get instant feedback.",
    href:   "https://github.com/Moefaouri",
    github: "https://github.com/Moefaouri",
    image:  "/images/fe.jpg",
    chips:  ["React.js", "CSS"],
  },
  {
    title: "Personal Portfolio — Old Version",
    description: "My previous portfolio built with vanilla HTML, CSS & JavaScript — the one before this React version. View the live site or browse the source code.",
    href:   "https://moefaouri.github.io/portfolio/",
    github: "https://github.com/Moefaouri/portfolio",
    image:  "/images/fe.jpg",
    chips:  ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Form with Stepper",
    description: "A multi-step form UI component with smooth step transitions and input validation.",
    href:   "https://moefaouri.github.io/Form-with-stepper/",
    github: "https://github.com/Moefaouri/Form-with-stepper",
    image:  "/images/fe.jpg",
    chips:  ["HTML", "CSS", "JavaScript"],
  },
];

const UIUX_PROJECTS = [
  {
    title: "Hakeem — Healthcare Modules UI",
    description: "End-to-end UI/UX design ownership across 8+ healthcare modules — Surgery Management, Emergency System, Medical Committee, PIM Web, and more. From wireframe to final handoff using Adobe XD.",
    href:   "https://github.com/Moefaouri",
    github: null,
    image:  "/images/userinterface.jpg",
    chips:  ["Adobe XD", "Photoshop", "Illustrator", "Wireframing"],
  },
  {
    title: "Accident Documentation App",
    description: "Mobile UI/UX design for a road accident documentation application.",
    href:   "https://xd.adobe.com/view/5427591a-d9f2-42e2-a955-6bb47b48458d-0174/",
    github: null,
    image:  "/images/userinterface.jpg",
    chips:  ["Adobe XD", "UI/UX", "Mobile"],
  },
  {
    title: "Patients Requests",
    description: "Healthcare wireframe design for managing patient service requests.",
    href:   "https://xd.adobe.com/view/75cb6e6d-5afd-4fe2-b06d-54a129994965-2098/",
    github: null,
    image:  "/images/userinterface.jpg",
    chips:  ["Wireframing", "Adobe XD", "Photoshop"],
  },
  {
    title: "Design Collection",
    description: "A curated collection of graphic and UI design works across various projects.",
    href:   "https://github.com/Moefaouri/Design",
    github: "https://github.com/Moefaouri/Design",
    image:  "/images/userinterface.jpg",
    chips:  ["Adobe XD", "Illustrator", "UI Design"],
  },
];

const ArrowIcon = () => (
  <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
  </svg>
);

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <a href={project.href} target="_blank" rel="noreferrer" style={{ display:"block" }}>
      <div className="project-thumb">
        <Image
          src={project.image}
          width={620} height={350}
          alt={project.title}
          style={{ width:"100%", height:"100%", objectFit:"cover" }}
        />
      </div>
    </a>
    <div className="project-body">
      <div className="project-chips">
        {project.chips.map(c => <span className="chip" key={c}>{c}</span>)}
      </div>
      <div className="project-footer">
        <div style={{ flex: 1, minWidth: 0 }}>
          <a className="project-name" href={project.href} target="_blank" rel="noreferrer">
            {project.title}
          </a>
          <p className="project-desc">{project.description}</p>
        </div>
        <div style={{ display:"flex", gap:6, flexShrink:0, marginTop:4 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn" title="GitHub">
              <GithubIcon />
            </a>
          )}
          <a href={project.href} target="_blank" rel="noreferrer" className="project-link-btn" title="View live">
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const projects = activeTab === "frontend" ? FRONTEND_PROJECTS : UIUX_PROJECTS;

  return (
    <div className="page-shell">
      <Nav />
      <main className="main-pane">

        <div className="page-header">
          <h3>Project Portfolio</h3>
          <Link href="/contact" className="btn-primary-custom" style={{ display:"inline-flex", margin:"0 auto" }}>
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256">
              <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68Z"/>
            </svg>
            Hire Me
          </Link>
        </div>

        <div className="portfolio-tabs-wrap">
          <div className="portfolio-tabs">
            <button
              className={`tab-btn ${activeTab === "frontend" ? "active" : ""}`}
              onClick={() => setActiveTab("frontend")}
            >
              Front-End
            </button>
            <button
              className={`tab-btn ${activeTab === "uiux" ? "active" : ""}`}
              onClick={() => setActiveTab("uiux")}
            >
              UI/UX Design
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>

      </main>
    </div>
  );
};

export default Portfolio;