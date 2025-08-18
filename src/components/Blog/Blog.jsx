import React from "react";
import "./Blog.css";

export default function BlogCard({ title, excerpt, image, date, readTime, category, author }) {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-image" />
      <div className="blog-card-content">
        <span className="blog-card-category">{category}</span>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-meta">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
          <span>•</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}
