import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // We'll create this CSS file

function About(props) {
    useEffect(() => {
    document.title = "TextUtils - About"; 
  }, []);
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About TextUtils</h1>
        <p className="tagline">Your simple text transformation toolkit</p>
      </header>

      <main className="about-content">
        <section className="about-section">
          <h2>What is TextUtils?</h2>
          <p>
            TextUtils is a lightweight web application built with React that helps you manipulate and analyze text quickly and efficiently. 
            All processing happens directly in your browser - your data never leaves your device.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul className="features-list">
            <li>Convert text between uppercase and lowercase</li>
            <li>Remove extra spaces and line breaks</li>
            <li>Count words, characters, and reading time</li>
            <li>Copy transformed text to clipboard</li>
            <li>Light/dark mode support</li>
            <li>Responsive design for all devices</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>How to Use</h2>
          <div className="usage-steps">
            <div className="step">
              <span className="step-number">1</span>
              <p>Type or paste your text into the input area</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <p>Click the action buttons to transform your text</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <p>Copy the results or clear the input as needed</p>
            </div>
          </div>
        </section>

        <section className="about-section tech-section">
          <h2>Built With</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <div className="tech-icon react-icon"></div>
              <span>React</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon javascript-icon"></div>
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon css-icon"></div>
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon html-icon"></div>
              <span>HTML5</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <Link to="/Text/" className="back-button">← Back to TextUtils</Link>
        <p className="version-info">TextUtils v1.0.0</p>
      </footer>
    </div>
  );
}

export default About;