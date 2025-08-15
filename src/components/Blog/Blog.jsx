import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import './BlogCard.css';

export function BlogCard({ title, excerpt, image, date, readTime, category, author }) {
  return (
    <Card className="blog-card">
      <div className="blog-card-image-wrapper">
        <ImageWithFallback
          src={image}
          alt={title}
          className="blog-card-image"
        />
        <div className="blog-card-overlay"></div>
        <Badge className="blog-card-badge">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="blog-card-header">
        <h3 className="blog-card-title">{title}</h3>
      </CardHeader>
      
      <CardContent className="blog-card-content">
        <p className="blog-card-excerpt">{excerpt}</p>
        
        <div className="blog-card-footer">
          <div className="blog-card-meta">
            <div className="meta-item">
              <Calendar className="meta-icon" />
              <span>{date}</span>
            </div>
            <div className="meta-item">
              <Clock className="meta-icon" />
              <span>{readTime}</span>
            </div>
          </div>
          <span className="blog-card-author">By {author}</span>
        </div>
      </CardContent>
    </Card>
  );
}
