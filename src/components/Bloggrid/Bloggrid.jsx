import React, { useEffect, useRef, useState } from 'react';
import { BlogCard } from './BlogCard';
import './BlogGrid.css';

export function BlogGrid() {
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

  const blogPosts = [
    {
      title: "Building Modern Web Applications with React and TypeScript",
      excerpt: "Learn how to create scalable and maintainable web applications using React 18 and TypeScript. We'll cover best practices, performance optimization, and modern development patterns.",
      image: "https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "Development",
      author: "Sarah Chen"
    },
    {
      title: "The Future of Web Design: Trends to Watch in 2025",
      excerpt: "Explore the latest design trends that are shaping the web in 2025. From AI-powered design tools to immersive user experiences, discover what's next in web design.",
      image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      category: "Design",
      author: "Alex Rodriguez"
    },
    {
      title: "Optimizing Web Performance: A Developer's Guide",
      excerpt: "Discover essential techniques for optimizing web performance. From code splitting to image optimization, learn how to create lightning-fast web experiences.",
      image: "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      category: "Performance",
      author: "Michael Kim"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt: "Understanding the differences between CSS Grid and Flexbox is crucial for modern web development. Learn when and how to use each layout system effectively.",
      image: "https://images.unsplash.com/photo-1748209252552-30cf9cd32909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      category: "CSS",
      author: "Emily Davis"
    },
    {
      title: "JavaScript ES2024: New Features and Updates",
      excerpt: "Explore the latest JavaScript features introduced in ES2024. From new array methods to improved async/await patterns, stay up-to-date with modern JavaScript.",
      image: "https://images.unsplash.com/photo-1595623654300-b27329804025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Jan 5, 2025",
      readTime: "9 min read",
      category: "JavaScript",
      author: "David Thompson"
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "Learn how to create web applications that are accessible to all users. We'll cover ARIA labels, keyboard navigation, and screen reader compatibility.",
      image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Jan 3, 2025",
      readTime: "11 min read",
      category: "Accessibility",
      author: "Lisa Johnson"
    }
  ];

  return (
    <section id="blog" ref={sectionRef} className={`blog-grid-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="blog-grid-header">
          <h2>Latest Blog Posts</h2>
          <p>Insights, tutorials, and stories from the world of web development and design.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`blog-grid-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
