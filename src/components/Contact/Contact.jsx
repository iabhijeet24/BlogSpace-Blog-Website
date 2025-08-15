import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);

    e.target.reset();
  };

  return (
    <section id="contact" ref={sectionRef} className={`contact-section ${isVisible ? "visible" : ""}`}>
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? "visible" : ""}`}>
          <h2>Get In Touch</h2>
          <p>
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className={`contact-info ${isVisible ? "visible" : ""}`}>
            <h3>Let's Connect</h3>
            <p>
              We're always excited to connect with fellow developers, designers, and tech enthusiasts.
            </p>
            <div className="contact-links">
              <div>📧 hello@blogspace.dev</div>
              <div>💬 Join our community</div>
              <div>👤 Follow us on social media</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact-form-wrapper ${isVisible ? "visible" : ""}`}>
            <div className="contact-card">
              <h3>Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" required placeholder="What's this about?" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="6" required placeholder="Tell us more..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
