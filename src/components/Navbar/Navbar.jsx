import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {   
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Blogs', href: '#blog' },
    { name: 'About us', href: '#about' },
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
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">BlogSpace</div>

        {/* Desktop Navigation */}
<div className="navbar-links">
  {navItems.map((item) => (
    <button
      key={item.name}
      onClick={() => scrollToSection(item.href)}
      className={`nav-link ${scrolled ? "nav-link-scrolled" : ""}`}
    >
      {item.name}
      <span className="nav-underline"></span>
    </button>
  ))}
</div>


        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="mobile-link"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
