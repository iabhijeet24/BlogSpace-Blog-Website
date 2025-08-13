import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="logo">My Blog</h1>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
