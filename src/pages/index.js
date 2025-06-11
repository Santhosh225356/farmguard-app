// pages/index.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="hero">
      <nav className="navbar">
        <div className="logo">FarmGuard</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <button className="btn">Get Started</button>
      </nav>

      <div className="hero-content">
        <div className="text">
          <h1>Better Solutions For Your Farm</h1>
          <p>We help farmers detect crop diseases and get expert advice instantly.</p>
          <div className="buttons">
            <button className="btn">Get Started</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>
        <div className="image">
          <img
            src="/agriculture-illustration.png"
            alt="Farm illustration"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: #2e7d32;
          color: #f1f1f1;
          padding: 2rem;
          min-height: 100vh;
          font-family: sans-serif;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-weight: bold;
          font-size: 1.5rem;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        .nav-links li {
          cursor: pointer;
          transition: color 0.3s;
        }
        .nav-links li:hover {
          color: #a5d6a7;
        }
        .btn {
          background: #66bb6a;
          border: none;
          padding: 0.5rem 1rem;
          color: white;
          border-radius: 5px;
          transition: background 0.3s;
        }
        .btn:hover {
          background: #81c784;
        }
        .btn-outline {
          background: transparent;
          border: 1px solid #a5d6a7;
          padding: 0.5rem 1rem;
          margin-left: 1rem;
          color: white;
          border-radius: 5px;
          transition: background 0.3s, color 0.3s;
        }
        .btn-outline:hover {
          background: #a5d6a7;
          color: #2e7d32;
        }
        .hero-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 3rem;
          flex-wrap: wrap;
        }
        .text {
          flex: 1;
          max-width: 500px;
        }
        .text h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .text p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }
        .buttons {
          display: flex;
          align-items: center;
        }
        .image {
          flex: 1;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
