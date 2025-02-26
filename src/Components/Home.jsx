import React from "react";
import './home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-title">
        <h1>Welcome to <span className="highlight-text">Skill Exchange</span></h1>
        <p className="home-content">Connect with skilled individuals, exchange knowledge, and grow together.</p>
        <button className="btn-start">Get Started</button>
      </div>

      {/* Features Section */}
      <div className="features-container">
        <div className="feature-box">
          <h2>Learn Skills</h2>
          <p>Discover new skills from experts in various fields.</p>
        </div>
        <div className="feature-box">
          <h2>Share Knowledge</h2>
          <p>Teach what you know and help others grow.</p>
        </div>
        <div className="feature-box">
          <h2>Build Community</h2>
          <p>Join a network of passionate learners and mentors.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
