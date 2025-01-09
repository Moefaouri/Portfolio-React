import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="container">
      <Nav />
      <div className="main-content pt-120 pb-60 mt-10">
        <div className="pb-60 br-bottom-n3">
          <header className="text-center page-heading">
            <h3 className="">A collection of my best projects </h3>
            <p className="p-controller mb-4-l">
              With many years in web development, I acquired extensive
              experience working on projects across multiple industries and
              technologies. Let me show you my best creations.
            </p>
            <Link
              href="/ui"
              className="p-btn nav-btn  btn-primary px-4 py-4 rounded-pill d-flex align-items-center gap-2"
              passHref
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
              Hire Me
            </Link>
          </header>
        </div>
        <div className="tabs m-5 ">
          <ul
            className="nav justify-content-center gap-5 align-items-center  nav-pills mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item " role="presentation">
              <button
                className="nav-link active"
                id="pills-all-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all"
                type="button"
                role="tab"
                aria-controls="pills-all"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
                id="pills-frontend-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-frontend"
                type="button"
                role="tab"
                aria-controls="pills-frontend"
                aria-selected="false"
              >
                Front-End
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
                id="pills-ui-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-ui"
                type="button"
                role="tab"
                aria-controls="pills-ui"
                aria-selected="false"
              >
                UI/UX
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6   mt-3">
                  <div
                    style={{
                      opacity: 1,
                      transform: "none",
                      willChange: "auto",
                    }}
                  >
                    <div className="project-card">
                      <Link
                        className="thumb d-block"
                        href={"https://moefaouri.github.io/portfolio/"}
                      >
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/ccpng.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/ccpng.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                      </Link>
                      <div class="d-flex justify-content-between gap-2 align-items-center pt-4  px-3 ">
                        <div>
                          <div class="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                            <a class=" chip  rounded-pill " href="#">
                            Web Development
                            </a>
                            <a class=" chip  rounded-pill" href="#">
                              HTML
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              CSS
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              JS
                            </a>
                          </div>
                          <a
                            class="project-title mt-5 d-block"
                            href="https://moefaouri.github.io/portfolio/"
                          >
                           Resume / CV
                          </a>
                        </div>
                        <a
                          class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                          href="https://moefaouri.github.io/portfolio/"
                        >
                          <i class="">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6   mt-3">
                  <div
                    style={{
                      opacity: 1,
                      transform: "none",
                      willChange: "auto",
                    }}
                  >
                    <div className="project-card">
                      <Link
                        className="thumb d-block"
                        href={"https://moefaouri.github.io/Education/"}
                      >
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/Education.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/Education.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                      </Link>
                      <div class="d-flex justify-content-between gap-2 align-items-center pt-4  px-3 ">
                        <div>
                        <div class="d-flex flex-wrap gap-1 align-items-center">
                            <a class=" chip  rounded-pill " href="#">
                            Web Development
                            </a>
                            <a class=" chip  rounded-pill" href="#">
                              HTML
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              CSS
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              JS
                            </a>
                          </div>
                          <a
                            class="project-title mt-4 d-block"
                            href="https://moefaouri.github.io/Education/"
                          >
                            Education Website
                          </a>
                        </div>
                        <a
                          class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                          href="https://moefaouri.github.io/Education/"
                        >
                          <i class="">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6   mt-3">
                  <div
                    style={{
                      opacity: 1,
                      transform: "none",
                      willChange: "auto",
                    }}
                  >
                    <div className="project-card">
                      <Link
                        className="thumb d-block"
                        href={"https://moefaouri.github.io/Form-with-stepper/"}
                      >
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/form-with-stepper.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/form-with-stepper.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                      </Link>
                      <div class="d-flex justify-content-between gap-2 align-items-center pt-4  px-3 ">
                        <div>
                        <div class="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                            <a class=" chip  rounded-pill " href="#">
                            Web Development
                            </a>
                            <a class=" chip  rounded-pill" href="#">
                              HTML
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              CSS
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              JS
                            </a>
                          </div>
                          <a
                            class="project-title mt-4 d-block"
                            href="https://moefaouri.github.io/Form-with-stepper/"
                          >
                            Form With Stepper
                          </a>
                        </div>
                        <a
                          class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                          href="https://moefaouri.github.io/Form-with-stepper/"
                        >
                          <i class="">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-frontend"
              role="tabpanel"
              aria-labelledby="pills-frontend-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6   mt-3">
                  <div
                    style={{
                      opacity: 1,
                      transform: "none",
                      willChange: "auto",
                    }}
                  >
                    <div className="project-card">
                      <Link
                        className="thumb d-block"
                        href={"https://moefaouri.github.io/portfolio/"}
                      >
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/ccpng.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/ccpng.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                      </Link>
                      <div class="d-flex justify-content-between gap-2 align-items-center pt-4  px-3 ">
                        <div>
                          <div class="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                            <a class=" chip  rounded-pill " href="#">
                            Web Development
                            </a>
                            <a class=" chip  rounded-pill" href="#">
                              HTML
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              CSS
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              JS
                            </a>
                          </div>
                          <a
                            class="project-title mt-5 d-block"
                            href="https://moefaouri.github.io/portfolio/"
                          >
                           Resume / CV
                          </a>
                        </div>
                        <a
                          class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                          href="https://moefaouri.github.io/portfolio/"
                        >
                          <i class="">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6   mt-3">
                  <div
                    style={{
                      opacity: 1,
                      transform: "none",
                      willChange: "auto",
                    }}
                  >
                    <div className="project-card">
                      <Link
                        className="thumb d-block"
                        href={"https://moefaouri.github.io/Education/"}
                      >
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/Education.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/Education.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                      </Link>
                      <div class="d-flex justify-content-between gap-2 align-items-center pt-4  px-3 ">
                        <div>
                        <div class="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                            <a class=" chip  rounded-pill " href="#">
                            Web Development
                            </a>
                            <a class=" chip  rounded-pill" href="#">
                              HTML
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              CSS
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              JS
                            </a>
                          </div>
                          <a
                            class="project-title mt-4 d-block"
                            href="https://moefaouri.github.io/Education/"
                          >
                            Education Website
                          </a>
                        </div>
                        <a
                          class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                          href="https://moefaouri.github.io/Education/"
                        >
                          <i class="">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6   mt-3">
                  <div
                    style={{
                      opacity: 1,
                      transform: "none",
                      willChange: "auto",
                    }}
                  >
                    <div className="project-card">
                      <Link
                        className="thumb d-block"
                        href={"https://moefaouri.github.io/Form-with-stepper/"}
                      >
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/form-with-stepper.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                        <div className="post-thumb">
                          <div className="post-thumb-inner">
                            <Image
                              src="/images/form-with-stepper.png"
                              className="p-2 w-100"
                              width={620}
                              height={357}
                              alt="my image"
                            />
                          </div>
                        </div>
                      </Link>
                      <div class="d-flex justify-content-between gap-2 align-items-center pt-4  px-3 ">
                        <div>
                        <div class="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                            <a class=" chip  rounded-pill " href="#">
                            Web Development
                            </a>
                            <a class=" chip  rounded-pill" href="#">
                              HTML
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              CSS
                            </a>
                            <a class=" chip rounded-pill" href="#">
                              JS
                            </a>
                          </div>
                          <a
                            class="project-title mt-4 d-block"
                            href="https://moefaouri.github.io/Form-with-stepper/"
                          >
                            Form With Stepper
                          </a>
                        </div>
                        <a
                          class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                          href="https://moefaouri.github.io/Form-with-stepper/"
                        >
                          <i class="">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 256 256"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            <div
              className="tab-pane fade"
              id="pills-ui"
              role="tabpanel"
              aria-labelledby="pills-ui-tab"
              tabindex="0"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
