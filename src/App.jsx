import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero"
import BlogGrid from "./components/Bloggrid/Bloggrid"; 
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <BlogGrid />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
