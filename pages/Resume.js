import Nav from "./Nav";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Resume = () => {
  return (
    <div cla>
      <Nav />
      <div className="main-content pt-120 pb-60 mt-10">
        <div className="pb-60 br-bottom-n3">
          <header className="text-center page-heading">
            <h3 className="">Online Resume </h3>
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
                <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
              </svg>
              Download PDF Version
            </Link>
          </header>
        </div>
        <div className="container mt-8 mt-md-15">
          <div className="resume-structure ">
            <div className="row">
              <div
                style={{
                  opacity: 1,
                  transform: "none",
                  willChange: "auto",
                }}
              >
                <div className="d-flex  flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-5">
                  <div>
                    <h2 class="resume-name">Mohammad Elfauri</h2>
                    <span class="resume-career">
                      FRONT-END DEVELOPER & UI/UX DESIGNER
                    </span>
                  </div>
                  <div class="ps-5 br-left-n3 info ps-xs">
                    <ul class="d-flex flex-column gap-3">
                      <li>
                        <a
                          class="d-flex gap-2 align-items-center"
                          href="tel:+962792792606"
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
                            <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                          </svg>
                          +962792792606
                        </a>
                      </li>
                      <li>
                        <a
                          class="d-flex gap-2 align-items-center "
                          href="mailto:someone@example.com"
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
                            <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                          </svg>
                          Mohammadalfaure190@icloud.com
                          </a>
                      </li>
                      <li class="d-flex gap-2 align-items-center ">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 256 256"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
                        </svg>
                        https://moefaouri.github.io/portfolio/
                      </li>
                      <li class="d-flex gap-2 align-items-center ">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 256 256"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                        </svg>
                        Amman
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" resume-profile-container d-flex align-items-center gap-3  br-bottom-n3 ">
                  <div className="resume-profile flex-shrink-0">
                    <Image
                      src="/images/color-primary.png"
                      width={160}
                      height={160}
                      alt="my image"
                    />
                  </div>
                  <p className="job-desc p-styling">
                    As a Front-End Developer, I am dedicated to building
                    efficient, user-friendly digital experiences. With a focus
                    on performance and seamless interaction, I strive to create
                    websites and applications that deliver both functionality
                    and aesthetic appeal, ensuring a positive user experience.
                  </p>
                </div>

                <div className="resume-section row pt-60 pb-60 br-bottom-n3">
                  <div class="col-12 col-md-8">
                    <div class="d-flex align-items-center gap-2 mb-5 mb-md-10 mb-2">
                      <div class="title-line2"></div>
                      <h2 class="h2-style">Work Experiences</h2>
                    </div>
                    <div class="mb-4 mb-md-6">
                      <div class="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                        <span class="semi-title">FRONT-END WEB DEVELOPER</span>
                        <span class="light-text">
                          Hakeem (EHS), Amman-Jordan | Oct 2021 - Present
                        </span>
                      </div>
                      <p class="p-styling mt-4 mb-4">
                        ser Interface specialist focused on customer needs,
                        requirements, and personas, as well as end-to-end web
                        development using the latest technologies such as JS,
                        JQuery, HTML, CSS, and more
                      </p>
                      <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 custom-list">
                        <li class="p-styling">
                          Build and Optimize User Interfaces (UIs)
                        </li>
                        <li class="p-styling">
                          Collaborate with Design and Back-End Teams
                        </li>
                        <li class="p-styling">
                          Maintain and Enhance Codebases
                        </li>
                      </ul>
                    </div>
                    <div class="mb-4 mb-md-6">
                      <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                        <span class="semi-title">TELESALES REPRESENTATIVE</span>
                        <span class="light-text">
                          Abwaab, Amman-Jordan | Jan 2021 – June 2021
                        </span>
                      </div>
                      <p class="p-styling mt-4 mb-4">
                        Leading the sales team and managing the sale of vouchers
                        and learning cards for university students.
                      </p>
                      <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 custom-list">
                        <li class="p-styling">Contact Potential Customers</li>
                        <li class="p-styling">Achieve Sales Targets</li>
                        <li class="p-styling">Maintain Customer Records</li>
                      </ul>
                    </div>
                    <div class="mb-4 mb-md-6">
                      <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                        <span class="semi-title">QUALITY ASURANCE</span>
                        <span class="light-text">
                          Royal Scientific Society, Amman- Jordan Undergraduate
                          internship (90 hours)
                        </span>
                      </div>
                      <p class="p-styling mt-4 mb-4">
                        Learning how conduct website manual testing, I have
                        managed and solved different test cases throughout my
                        internship using the latest techniques and technologies.
                      </p>
                      <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 custom-list">
                        <li class="p-styling">Test Software for Defects</li>
                        <li class="p-styling">
                          Develop and Execute Test Plans
                        </li>
                        <li class="p-styling">
                          Collaborate with Development Teams
                        </li>
                      </ul>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-5 mb-md-10">
                      <div class="title-line2"></div>
                      <h2 class="h2-style">Projects</h2>
                    </div>
                    <div class="mb-4 mb-md-6">
                      <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                        <span class="semi-title">PIM Website</span>
                        <span class="light-text">Open Source</span>
                      </div>
                      <p class="p-styling">
                        Collect business requirements, create a wireframe and
                        prototype to ensure alignment with these requirements,
                        gather feedback, and finally develop a userfriendly,
                        responsive website.
                      </p>
                    </div>
                    <div class="mb-4 mb-md-6">
                      <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                        <span class="semi-title">Portfolio Project</span>
                        <span class="light-text">Open Source</span>
                      </div>
                      <p class="p-styling">
                        This is a fully responsive and dynamic portfolio website
                        showcasing my skills, projects, and experience. I
                        developed this project twice to demonstrate my
                        proficiency with both React.js and basic web development
                        tools like HTML, CSS, and JavaScript.
                      </p>
                    </div>
                    <div class="mb-4 mb-md-6">
                      <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                        <span class="semi-title">Dental website</span>
                        <span class="light-text">Open Source</span>
                      </div>
                      <p class="p-styling">
                        Dental website was developed to help dentist and
                        patients have access to their profile, practice, get
                        appointments, follow up and share feedbacks
                      </p>
                    </div>
                    <div>
                      <div class="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                        <span class="semi-title">
                          Android Battery Saver Application (Graduation Project)
                        </span>
                        <span class="light-text">Open Source</span>
                      </div>
                      <p class="p-styling">
                        The graduation project involves developing a specialized
                        program for Android devices called a "battery saving
                        application" that conserves the device's battery through
                        various functionalities.
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                      <div class="mb-8 mb-md-15">
                        <div class="d-flex align-items-center gap-2 mb-5 mb-md-10">
                          <div class="title-line2"></div>
                          <h2 class="h2-style">Skills</h2>
                        </div>
                        <div class="mb-3 mb-md-6">
                          <h5 class="semi-title mb-3">Technical</h5>
                          <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 custom-list">
                            <li class=" p-styling">UI/UX design</li>
                            <li class=" p-styling"> User research</li>
                            <li class=" p-styling">
                              {" "}
                              Usability testing
                            </li>
                            <li class=" p-styling"> Adobe suite</li>
                            <li class=" p-styling">ERP</li>
                            <li class=" p-styling">
                              html, CSS, JavaScript, PHP,React Js
                            </li>
                            <li class=" p-styling">
                              Business analysis (Power Bi)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="semi-title mb-3">Professional</h5>
                          <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 custom-list">
                            <li class=" p-styling">
                              Effective communication
                            </li>
                            <li class=" p-styling">Team player</li>
                            <li class=" p-styling">
                              Strong problem solver
                            </li>
                            <li class=" p-styling">
                              Good time management
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="mb-8 mb-md-15">
                        <div class="d-flex align-items-center gap-2 mb-3 mb-md-6 mt-5">
                          <div class="title-line2"></div>
                          <h2 class="h2-style">Education</h2>
                        </div>
                        <div class="d-flex gap-2">
                          <i class="fs-six p1-color">
                            <svg
                              stroke="currentColor"
                              fill="#5271ff"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                            </svg>
                          </i>
                          <div>
                            <span class=" p-styling">
                              BSc Business Information Technology (BIT)
                              University of Jordan
                            </span>
                            <span class="date-style">2019 - 2023</span>
                          </div>
                        </div>
                      </div>
                      <div class="mb-8 mb-md-15">
                        <div class="d-flex align-items-center gap-2 mb-3 mb-md-6 mt-5">
                          <div class="title-line2"></div>
                          <h2 class="h2-style">Courses</h2>
                        </div>
                        <div class="d-flex gap-2 mb-3 mb-md-5">
                          <i class=" fs-six p1-color">
                            <svg
                              stroke="#5271ff"
                              fill="#5271ff"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                            </svg>
                          </i>
                          <div>
                            <span class=" p-styling">
                              Java Programming for Complete Beginners
                            </span>
                            <span class="date-style">2023</span>
                          </div>
                        </div>
                        <div class="d-flex gap-2">
                          <i class=" fs-six p1-color">
                            <svg
                              stroke="#5271ff"
                              fill="#5271ff"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                            </svg>
                          </i>
                          <div>
                            <span class=" p-styling">
                              The English Master Course
                            </span>
                            <span class="date-style">2021</span>
                          </div>
                        </div>
                      </div>
                      <div class="mb-8 mb-md-15">
                        <div class="d-flex align-items-center gap-2 mb-3 mb-md-6 mt-5">
                          <div class="title-line2"></div>
                          <h2 class="h2-style">Languages</h2>
                        </div>
                        <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 custom-list">
                          <li class=" p-styling">Arabic(Native)</li>
                          <li class=" p-styling">
                            English (Professional)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div class="d-flex align-items-center gap-2 mb-3 mb-md-6 mt-5">
                          <div class="title-line2"></div>
                          <h2 class="h2-style">Interests</h2>
                        </div>
                        <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 custom-list">
                          <li class=" p-styling">Climbing</li>
                          <li class=" p-styling">Snowboarding</li>
                          <li class=" p-styling">Photography</li>
                          <li class=" p-styling">Traveling</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Social-media d-flex flex-row gap-3 justify-content-center mb-3">
                    <a
                      target="blank"
                      className="Social-media-icon"
                      href="http://linkedin.com/in/el-fauri"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                    <a
                      target="blank"
                      className="Social-media-icon"
                      href="https://www.instagram.com/instamoe_/profilecard/?igsh=MWRmNDI2ZWdnb2NhNA%3D%3D"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                    <a
                      target="blank"
                      className="Social-media-icon"
                      href="https://github.com/Moefaouri"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </a>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
