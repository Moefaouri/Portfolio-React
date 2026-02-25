import React, { useState } from "react";
import Nav from "./Nav";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", location: "", message: "", saveDetails: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, location, message } = formData;
    const subject = encodeURIComponent("Portfolio Contact Form");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\n\nMessage:\n${message}`);
    window.location.href = `mailto:moework190@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", phone: "", location: "", message: "", saveDetails: false });
  };

  return (
    <div className="page-shell">
      <Nav />
      <main className="main-pane">
        <div className="page-header">
          <h3>Get In Touch</h3>
        </div>

        <div className="contact-grid">
          {/* Info column */}
          <div className="contact-info-block">
            <div className="contact-detail-card">
              <div className="icon-wrap">
                <svg stroke="#5271ff" fill="#5271ff" viewBox="0 0 256 256"><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z"/></svg>
              </div>
              <div>
                <div className="info-label">Phone</div>
                <a className="info-value" href="tel:+962792792606">+962 79 279 2606</a>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="icon-wrap">
                <svg stroke="#5271ff" fill="#5271ff" viewBox="0 0 256 256"><path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"/></svg>
              </div>
              <div>
                <div className="info-label">Email</div>
                <a className="info-value" href="mailto:moework190@gmail.com">moework190@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="icon-wrap">
                <svg stroke="#5271ff" fill="#5271ff" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"/></svg>
              </div>
              <div>
                <div className="info-label">Location</div>
                <span className="info-value">Khalda, Amman, Jordan</span>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269190.55418764945!2d36.11243843621581!3d31.83594582566714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e1!3m2!1sar!2sjo!4v1735980129028!5m2!1sar!2sjo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map - Amman, Jordan"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-wrap">
            <div className="section-title-wrap" style={{ marginBottom: "1.5rem" }}>
              <div className="section-title">Send a Message</div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input id="name" type="text" placeholder="Mohammad Elfauri" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" placeholder="hello@example.com" required value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="+962..." value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Your Location</label>
                  <input id="location" type="text" placeholder="City, Country" value={formData.location} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} />
              </div>

              <div className="form-checkbox">
                <input id="saveDetails" type="checkbox" checked={formData.saveDetails} onChange={handleChange} />
                <label htmlFor="saveDetails">Save my details for next time</label>
              </div>

              <button type="submit" className="btn-primary-custom">
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 256 256"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68Z"/></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;