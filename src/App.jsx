import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogGrid from './components/BlogGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toaster from './components/ui/sonner';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <BlogGrid />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
