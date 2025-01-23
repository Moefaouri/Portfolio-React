import React from "react";
import Nav from "./Nav";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    saveDetails: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  
    // Example mailto link implementation (similar to formatMailBody function)
    const { name, email, phone, location, message } = formData;
    const mail = "mailto:mohammadalfaure190@icloud.com";
    const subject = "Contact Form Submission";
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ALocation: ${location}%0AMessage: ${message}`;
    const mailtoLink = `${mail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
  
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      saveDetails: false,
    });
  
    // Show success alert
    alert("Your email app will be opened to send the message. Please check it!");
  };
  
  return (
    <div>
      <Nav />
      <div className="main-content pt-120 pb-60 mt-10 ">
        <div className="pb-60 br-bottom-n3 responsive">
          <header class="text-center page-heading">
            <h3 class=""> Contact </h3>
            <p class="p-controller mb-4-l">
              Interested in hiring me for your project or just want to say hi?
              You can fill in the contact form below or send me an email to
              <a href="mailto:mohammadalfaure190@icloud.com" class="intro-link">
                mohammadalfaure190@icloud.com
              </a>
            </p>
          </header>
        </div>

        <div className="container mt-8 mt-md-15  jj">
          <div
          className="d-flex  align-items-center-res flex-column"
            style={{
              opacity: 1,
              transform: "none",
              willChange: "auto",
            }}
          >
            <div className="section-heading ms-4">
              <div className="d-flex align-items-center gap-2 mb-4 mb-md-10">
                <div className="title-line"></div>
                <h2 className="Title-services">Contact Details</h2>
              </div>
              <p className=" mt-2 p-styling">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn&apos;t anything embarrassing hidden in the middle of
                text.
              </p>
            </div>

            <div style={{ opacity: 1, transform: "none", willChange: "auto" }}>
              <div class=" max ms-4 d-flex flex-wrap gap-3 align-items-center justify-content-between mt-8 mt-md-15">
                <div class="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                  <i class="">
                    <svg
                      stroke="#5271ff"
                      fill="#5271ff"
                      stroke-width="0"
                      viewBox="0 0 256 256"
                      height="48px"
                      width="48px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z"></path>
                    </svg>
                  </i>
                  <div>
                    <span class="d-block mb-1 contact-title">Phone</span>
                    <a class="contact-info" href="tel:+6494461709">
                      +962792792606
                    </a>
                  </div>
                </div>
                <div class="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                  <i class="">
                    <svg
                      stroke="#5271ff"
                      fill="#5271ff"
                      stroke-width="0"
                      viewBox="0 0 256 256"
                      height="48px"
                      width="48px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
                    </svg>
                  </i>
                  <div>
                    <span class="d-block mb-1 contact-title">Location</span>
                    <span class="contact-info">
                      Khalda, Amman, Jordan
                    </span>
                  </div>
                </div>
                <div class="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                  <i class="">
                    <svg
                      stroke="#5271ff"
                      fill="#5271ff"
                      stroke-width="0"
                      viewBox="0 0 256 256"
                      height="48px"
                      width="48px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
                    </svg>
                  </i>
                  <div>
                    <span class="d-block mb-1 contact-title">Email</span>
                    <a class="contact-info" href="mailto:someone@example.com">
                      mohammadalfaure190@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ width: "80vw", height: "45vh", margin: 0, padding: 0 }}
              className="location-container ms-4 my-5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269190.55418764945!2d36.11243843621581!3d31.83594582566714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e1!3m2!1sar!2sjo!4v1735980129028!5m2!1sar!2sjo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="section-heading ms-4">
              <div className="d-flex align-items-center gap-2 mb-4 mb-md-10">
                <div className="title-line"></div>
                <h2 className="Title-services">Get In Touch</h2>
              </div>
              <p className="p-styling mt-2">
                If you have any inquiries or require further information, please
                do not hesitate to contact me via email.
              </p>
            </div>
            <div className="contact-form"
              style={{ width: "80vw", marginBottom: 60, padding: 0 }}
            >
              <form
                className="mt-8 mt-4 mt-md-15 p-3 rounded-5 "
                onSubmit={handleSubmit}
              >
                {/* Input Fields */}
                <div className="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6 mb-3 mb-md-6">
                  <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
                    <i className="ph ph-octagon p1-color fs-six mb-1"></i>
                    <input
                      className="input-styles py-3  ps-3"
                      placeholder="Your Name*"
                      id="name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
                    <i className="ph ph-envelope p1-color fs-six mb-1"></i>
                    <input
                      className="input-styles py-3  ps-3"
                      placeholder="Email address*"
                      id="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6">
                  <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
                    <i className="ph ph-device-mobile-camera p1-color fs-six mb-1"></i>
                    <input
                      className="input-styles py-3  ps-3"
                      placeholder="Phone*"
                      id="phone"
                      required
                      type="number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
                    <i className="ph ph-map-pin p1-color fs-six mb-1"></i>
                    <input
                      className="input-styles py-3  ps-3"
                      placeholder="Location*"
                      id="location"
                      required
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div className="mt-3 mt-md-6 ps-2">
                  <textarea
                    className="n5-color px-2 px-md-3 py-2 py-md-4 rounded-2 brn4 w-100 h-120  ps-3"
                    placeholder="Your Message:"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="d-flex gap-2 align-items-center mt-3 mt-md-5 ps-3">
                  <input
                    id="saveDetails"
                    className="cursor-pointer"
                    type="checkbox"
                    checked={formData.saveDetails}
                    onChange={handleChange}
                  />
                  <label htmlFor="saveDetails" className="contact-info">
                    Save my name, email, and website in this browser for the
                    next time.
                  </label>
                </div>

                {/* Submit Button */}
                <button className=" p-btn my-4  btn-primary px-4 py-4 rounded-pill d-flex gap-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
