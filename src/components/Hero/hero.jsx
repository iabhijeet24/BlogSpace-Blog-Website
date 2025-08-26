import React, { useEffect, useState } from 'react';
import './hero.css';

export default function Hero() {   
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBlogs = () => {
    const element = document.querySelector('#blog');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1748209252552-30cf9cd32909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Modern laptop writing blog"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className={`hero-content ${isVisible ? 'show' : ''}`}>
        <h1>
          Welcome to <span className="highlight">BlogSpace</span>
        </h1>
        <p>
          Discover insights, tutorials, and stories about web development, design, and technology.
        </p>
        <button onClick={scrollToBlogs} className="explore-btn">
          Explore Blog Posts
        </button>

      </div>
    </section>
  );
}
