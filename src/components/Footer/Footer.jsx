import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-brand">
          <h3>BlogSpace</h3>
          <p>
            A platform dedicated to sharing knowledge about web development, 
            design, and technology. Join our community of developers and designers.
          </p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} aria-label={link.label} className="social-link">
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <button onClick={() => scrollToSection(link.href)}>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-categories">
          <h4>Categories</h4>
          <ul>
            {['Development', 'Design', 'Performance', 'JavaScript', 'CSS', 'Accessibility'].map((category) => (
              <li key={category}>
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {currentYear} BlogSpace. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
