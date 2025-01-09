import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import React, { useState, useEffect } from "react";

const About = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const roles = ["Front-End Developer", "UI/UX Designer"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  const [statics, setStatics] = useState([
    { id: 1, label: "Years of Experience", value: 0, target: 1},
    { id: 2, label: "Personal Projects", value: 0, target: 6 },
    { id: 3, label: "Company Projects", value: 0, target: 14 },
  ]);

  const totalDuration = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopIndex % roles.length];
      if (!isDeleting) {
        setText((prev) => currentRole.substring(0, prev.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText((prev) => currentRole.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(typingTimeout); 
  }, [text, isDeleting, loopIndex]);

  useEffect(() => {
    const maxTarget = Math.max(...statics.map((stat) => stat.target));
    const increments = statics.map((stat) => ({
      id: stat.id,
      increment: stat.target / (totalDuration / 50),
    }));

    const incrementStatics = () => {
      setStatics((prevStatics) =>
        prevStatics.map((stat) => {
          const increment = increments.find((inc) => inc.id === stat.id).increment;
          if (stat.value < stat.target) {
            return {
              ...stat,
              value: Math.min(stat.value + increment, stat.target),
            };
          }
          return stat;
        })
      );
    };

    const interval = setInterval(incrementStatics, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Nav />
      <div className="main-content pt-120 pb-60 mt-10 ">
        <div className="d-flex flex-wrap gap-9 gap-md-12 align-items-center justify-content-between">
          <div className="introduction align-items-center ms-60">
            <h3>HI, I'M A FREELANCER</h3>
            <h1 className="intro-role">{text}</h1>
            <p className="p-controller intro-desc">
              I'm a software engineer specializing in scalable web apps.Explore
              <Link href="/Portfolio" className="intro-link" passHref>
                project portfolio
              </Link>
              and
              <Link href="/Resume" className="intro-link" passHref>
                online resume.
              </Link>
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3 gap-md-6 mt-5 mt-md-8">
              <Link
                href="/Portfolio"
                className="p-btn btn-primary px-4 py-4 rounded-pill d-flex align-items-center gap-2"
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
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
                View Portfolio
              </Link>
              <Link
                href="/Resume"
                className="p-btn btn-secondary px-4 py-4 rounded-pill d-flex align-items-center gap-2"
                passHref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  height="18px"
                  width="18px"
                  fill="#ffffff"
                >
                  <path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z" />
                </svg>{" "}
                View Resume
              </Link>
            </div>
          </div>
          <div className="position-relative profile-img ">
            <div className="user-bg"></div>
            <div className="bg-white">
              <Image
                src="/images/color-white.png"
                className="user-img"
                width={200}
                height={200}
                alt="my image"
              />
            </div>
          </div>
        </div>
        <div className="pt-120 br-bottom-n3 pb-60 pt-xs">
          <div className="Statics ms-60 ">
            <div className="Statics-content d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 mt-10  ">
              {statics.map((stat) => (
                <div key={stat.id} className="d-flex align-items-center gap-2 gap-xl-4">
                  <h2 className="value">
                    <span>{Math.floor(stat.value)}</span>
                    {stat.label === "Clients Worldwide" && "k"}
                  </h2>
                  <div className="separator"></div>
                  <span className="value-title">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
