import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaPalette, FaBolt, FaUsers } from "react-icons/fa";   // using react-icons
import './About.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Deep dives into modern web technologies, frameworks, and best practices."
    },
    {
      icon: FaPalette,
      title: "Design Insights",
      description: "UI/UX design principles, trends, and creative inspiration for developers."
    },
    {
      icon: FaBolt,
      title: "Performance Tips",
      description: "Optimization techniques to make your web applications lightning fast."
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "Join a community of developers sharing knowledge and experiences."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Content */}
          <div className={`about-content ${isVisible ? 'fade-in-left' : 'fade-hidden-left'}`}>
            <h2>About BlogSpace</h2>
            <p>
              BlogSpace is a platform dedicated to sharing knowledge about web development, 
              design, and technology. Our goal is to provide high-quality content that helps 
              developers and designers stay up-to-date with the latest trends and best practices.
            </p>
            <p>
              Whether you're a beginner looking to learn the basics or an experienced 
              developer seeking advanced techniques, you'll find valuable insights and 
              practical tutorials here.
            </p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card ${isVisible ? 'fade-in-up' : 'fade-hidden-up'}`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}  // nice stagger effect
                >
                  <div className="feature-icon">
                    <feature.icon className="icon" />
                  </div>
                  <div>
                    <h4 className='featureHeading'>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`about-image-wrapper ${isVisible ? 'fade-in-right' : 'fade-hidden-right'}`}>
            <div className="image-bg"></div>
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Creative workspace"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
