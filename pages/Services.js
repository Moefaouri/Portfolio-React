import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle an accordion item
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "When can you start with us?",
      answer:
        "I am available to start immediately for freelance projects and can begin full-time employment after a two-week notice period, depending on the specific role or project.",
    },
    {
      question: "What services do you offer?",
      answer:
        "I specialize in front-end development using React.js and Next.js, with expertise in building responsive and user-friendly websites. I also offer UI/UX design, HTML/CSS, JavaScript development, and general web development services.",
    },
    {
      question: "Can you show us examples of previous work or projects?",
      answer:
        "Yes! You can view my portfolio, which showcases several personal projects, as well as collaborative work. Feel free to check out the detailed case studies of the projects I’ve worked on under the Resume section of my portfolio.",
    },
    {
      question: "What tools or technologies do you use?",
      answer:
        "I am proficient in HTML, CSS, JavaScript, React.js, Next.js, and Bootstrap. For version control, I use Git and GitHub. I also work with various design tools such as Figma and Adobe XD for creating responsive layouts and UI/UX designs.",
    },
    {
      question: "What is your availability for freelance work or full-time roles?",
      answer:
        "I am available for both freelance work and full-time roles. For freelance projects, I can dedicate 20-30 hours per week, while for full-time positions, I am open to discussions and can adapt to the required schedule.",
    },
  ];

  return (
    <div className="container">
      <Nav />
      <div className="main-content pt-120 pb-60 mt-10">
        <div className="pb-60 br-bottom-n3">
          <header className="text-center page-heading">
            <h3 className="">Services & FAQ </h3>
            <p className="p-controller mb-4-l">
              I have 2 years of development experience building software for the
              web . You can take a look at my online
              <span className="intro-link">resume</span> and
              <span className="intro-link">project portfolio</span> to find out
              more about my skills and experiences.
            </p>
            <Link
              href="/ui"
              className="p-btn nav-btn  btn-primary px-4 py-4 rounded-pill d-flex align-items-center gap-2"
              passHref
            >
              <svg
                stroke="#ffffff"
                fill="#ffffff"
                stroke-width="0"
                viewBox="0 0 256 256"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
              </svg>
              Hire Me
            </Link>
          </header>
        </div>
        <div className="container mt-8 mt-md-15">
          <div
            style={{
              opacity: 1,
              transform: "none",
              willChange: "auto",
            }}
          >
            <div className="section-heading">
              <div className="d-flex align-items-center gap-2 mb-4 mb-md-10">
                <div className="title-line"></div>
                <h2 className="Title-services">Service</h2>
              </div>
              <p className="p-styling mt-2">
                Explore the range of services I provide to help bring your
                projects to life. From initial concept to final delivery, I am
                committed to delivering high-quality results tailored to your
                needs.
              </p>
            </div>
          </div>
          <section className="mt-8 mt-md-15 d-flex align-items-center-res flex-column wrapper">
            <div className="row br-bottom-n3 max">
              <div className=" col-sm-12 col-md-6  col-xxl-4 service-con    ">
                <div
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "auto",
                  }}
                >
                  <div className="Service-card mb-5 px-3  py-4 text-center overflow-hidden position-relative">
                    <div className="label-services align-items-center d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div className="title-line"></div>
                        <h3 className="service-name text-align-left">
                          UI Development
                        </h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="64px"
                          viewBox="0 -960 960 960"
                          width="64px"
                          fill="#5271ff"
                        >
                          <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="line my-5 "></div>
                    <ul>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Responsive Design Creation
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Interactive UI Components
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Performance Optimization
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Cross-Browser Compatibility
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Integration with Backend Systems
                        </span>
                      </li>
                    </ul>
                    <a
                      className="p-btn nav-btn  btn-primary px-4 py-4 my-5 rounded-pill d-flex align-items-center gap-2"
                      href="/contact"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                      </svg>
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              <div className=" col-sm-12 col-md-6  col-xxl-4 service-con  ">
                <div
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "auto",
                  }}
                >
                  <div className="Service-card mb-5 px-3  py-4 text-center overflow-hidden position-relative">
                    <div className="label-services align-items-center d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div className="title-line"></div>
                        <h3 className="service-name text-align-left">UI/UX</h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="64px"
                          viewBox="0 -960 960 960"
                          width="64px"
                          fill="#5271ff"
                        >
                          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Z" />
                        </svg>{" "}
                      </div>
                    </div>
                    <div className="line my-5 "></div>
                    <ul>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          User Interface (UI) Design
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          User Experience (UX) Research and Analysis
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Wireframing and Prototyping
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Responsive and Accessible Design
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Usability Testing and Optimization
                        </span>
                      </li>
                    </ul>
                    <a
                      className="p-btn nav-btn  btn-primary px-4 py-4 my-5 rounded-pill d-flex align-items-center gap-2"
                      href="/contact"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                      </svg>
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className=" col-sm-12 col-md-6  col-xxl-4 service-con  ">
                <div
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "auto",
                  }}
                >
                  <div className="Service-card mb-5 px-3  py-4 text-center overflow-hidden position-relative">
                    <div className="label-services align-items-center d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div className="title-line"></div>
                        <h3 className="service-name text-align-left">
                          Manual Testing
                        </h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="64px"
                          viewBox="0 -960 960 960"
                          width="64px"
                          fill="#5271ff"
                        >
                          <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="line my-5 "></div>
                    <ul>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Functional Testing
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">Usability Testing</span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Regression Testing
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Defect Identification and Reporting
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Cross-Platform Testing
                        </span>
                      </li>
                    </ul>
                    <a
                      className="p-btn nav-btn  btn-primary px-4 py-4 my-5 rounded-pill d-flex align-items-center gap-2"
                      href="/contact"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                      </svg>
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              <div className=" col-sm-12 col-md-6  col-xxl-4 service-con  ">
                <div
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "auto",
                  }}
                >
                  <div className="Service-card mb-5 px-3  py-4 text-center overflow-hidden position-relative">
                    <div className="label-services align-items-center d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div className="title-line"></div>
                        <h3 className="service-name text-align-left">
                          Data Analysis
                        </h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="64px"
                          viewBox="0 -960 960 960"
                          width="64px"
                          fill="#5271ff"
                        >
                          <path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="line my-5 "></div>
                    <ul>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Data Cleaning and Preparation
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Trend and Pattern Identification
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Visualization and Reporting
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Statistical Analysis
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Predictive Analysis
                        </span>
                      </li>
                    </ul>
                    <a
                      className="p-btn nav-btn  btn-primary px-4 py-4 my-5 rounded-pill d-flex align-items-center gap-2"
                      href="/contact"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                      </svg>
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              <div className=" col-sm-12 col-md-6  col-xxl-4 service-con  ">
                <div
                  style={{
                    opacity: 1,
                    transform: "none",
                    willChange: "auto",
                  }}
                >
                  <div className="Service-card mb-5 px-3  py-4 text-center overflow-hidden position-relative">
                    <div className="label-services align-items-center d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div className="title-line"></div>
                        <h3 className="service-name text-align-left">
                          Management
                        </h3>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="64px"
                          viewBox="0 -960 960 960"
                          width="64px"
                          fill="#5271ff"
                        >
                          <path d="M680-119q-8 0-16-2t-15-7l-120-70q-14-8-21.5-21.5T500-249v-141q0-16 7.5-29.5T529-441l120-70q7-5 15-7t16-2q8 0 15.5 2.5T710-511l120 70q14 8 22 21.5t8 29.5v141q0 16-8 29.5T830-198l-120 70q-7 4-14.5 6.5T680-119ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm320-400q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Zm174-166 94 55 94-55-94-54-94 54Zm124 208 90-52v-110l-90 53v109Zm-150-52 90 53v-109l-90-53v109Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="line my-5 "></div>
                    <ul>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Strategic Planning
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Team Leadership and Coordination
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Project Management
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Performance Monitoring
                        </span>
                      </li>
                      <li className="d-flex gap-3 align-items-center mb-3">
                        <i className="">
                          <svg
                            stroke="#5271ff"
                            fill="#5271ff"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </i>
                        <span className="resume-career service-desc">
                          Problem-Solving and Decision-Making
                        </span>
                      </li>
                    </ul>
                    <a
                      className="p-btn nav-btn  btn-primary px-4 py-4 my-5 rounded-pill d-flex align-items-center gap-2"
                      href="/contact"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                      </svg>
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-120">
              <div
                style={{
                  opacity: 1,
                  transform: "none",
                  willChange: "auto",
                }}
              >
                <div className="section-heading">
                  <div className="d-flex align-items-center gap-2 mb-4 mb-md-10">
                    <div className="title-line"></div>
                    <h2 className="Title-services">Have any questions?</h2>
                  </div>
                  <p className="p-styling mt-2">
                    This section covers the most frequently asked questions
                    about my services. If you have additional queries, feel free
                    to reach out I’m here to help clarify and assist with your
                    project needs.
                  </p>
                </div>

                <div className="row mt-md-15 align-items-center">
                  <div className="col-12 col-md-6">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className={`p-4 mb-2 faq-box ${
                          openIndex === index ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(index)} // Trigger toggle on clicking anywhere in the box
                      >
                        <div
                          className={`question d-flex gap-3 justify-content-between align-items-center rounded-2 ${
                            openIndex === index ? "active" : ""
                          }`}
                        >
                          <div className="d-flex gap-2 align-items-center">
                            <div className="faq_icon_width d-flex flex-shrink-0 align-items-center justify-content-center">
                              <i
                                className={openIndex === index ? "active" : ""}
                              >
                                <svg
                                  stroke="#ffffff"
                                  fill="#ffffff"
                                  strokeWidth="0"
                                  viewBox="0 0 256 256"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                </svg>
                              </i>
                            </div>
                            <h3 className="p-styling">{item.question}</h3>
                          </div>

                          {/* Plus/Minus SVG */}
                          <span
                            className={`fs-five n4-color ${
                              openIndex === index ? "active" : ""
                            }`}
                          >
                            {openIndex === index ? (
                              <svg
                                stroke="#5271ff"
                                fill="#5271ff"
                                strokeWidth="0"
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></path>
                              </svg>
                            ) : (
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 256 256"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
                              </svg>
                            )}
                          </span>
                        </div>

                        {/* Display answer with animation if this item is open */}
                        <div
                          className={`faq-answer-wrapper pt-2 ${
                            openIndex === index ? "open" : ""
                          }`}
                          aria-hidden={openIndex !== index}
                        >
                          <p className="pt-4 p-styling faq-answer">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-12 col-md-6 faq-img">
                    <Image
                      src="/images/light.webp"
                      width={526}
                      height={657}
                      className="img-fluid"
                      alt="my image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
