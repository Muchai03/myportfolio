import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Albert Muchai Gachuki</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ✅ Hero */}
      <header
        className="hero"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`
        }}
      >
        <div className="hero-overlay">
          <h1>Albert Muchai Gachuki</h1>
          <p>GIS & Remote Sensing Specialist | GIS Developer</p>
        </div>
      </header>

      <main>
        {/* ✅ About with World Map */}
        <section
          id="about"
          className="section about"
          style={{
            backgroundImage: `url('/world-map.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="about-overlay">
            <img
              src="/myprofile.jpg"
              alt="Albert Muchai Gachuki"
              className="profile-pic"
            />
            <div>
              <h2>About Me</h2>
              <p>
                Hello! I’m Albert Muchai Gachuki, a dedicated Geospatial Information Systems and Remote Sensing specialist from Kiambu, Kenya.
                I’m passionate about creating innovative geospatial solutions and developing modern web applications that help communities and organizations make better decisions.
              </p>

              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Dedan Kimathi University of Technology</strong><br />
                  BSc. Geospatial Information Science and Remote Sensing<br />
                  2021 – 2025<br />
                  Grade: Second Class Honour Upper Division
                </li>
              </ul>

              <h3>Experience</h3>
              <ul>
                <li>
                  <strong>Githunguri Water and Sanitation Company</strong><br />
                  GIS Intern<br />
                  June 2025 – Present
                </li>
              </ul>

              <a 
                href="/Albert_Muchai_CV.pdf" 
                download 
                className="cv-button"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* ✅ Skills */}
        <section id="skills" className="section skills">
          <h2>Skills & Tools</h2>
          <div className="skills-grid">
            <div className="skill">GIS & Remote Sensing</div>
            <div className="skill">Web Development (React, JavaScript, Flask, GeoDjango)</div>
            <div className="skill">PostgreSQL & Databases</div>
            <div className="skill">Data Analysis & Visualization</div>
            <div className="skill">Machine Learning for Geospatial Data</div>
            <div className="skill">Mobile GIS Apps (React Native)</div>
          </div>
        </section>

        {/* ✅ Projects */}
        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img 
                src="/mifugo.jpg" 
                alt="Mifugo App Screenshot"
                className="project-image"
              />
              <h3>Mifugo App</h3>
              <p>
                I headed the development of the Mifugo App, a mobile GIS application connecting livestock farmers in Kiambu County.
                Built with React Native and JavaScript, it enables livestock listings, veterinary services,
                and uses geolocation to empower farmers with better decision-making tools.
                <br /><br />
                🏆 Awarded <strong>Position 1</strong> by the <strong>Kiambu County Government</strong> under the <strong>Ministry of Youth and Sports Affairs</strong>.
              </p>
            </div>

            <div className="project-card">
              <h3>Final Year Project</h3>
              <p>
                Spatial-Temporal Modeling of Effects of Stormwater Drainage on Social Amenities Using HEC-RAS and Logistic Regression Model.
                This project models flood impacts and urban infrastructure vulnerability in Nairobi CBD,
                providing valuable insights for sustainable urban planning.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Contact */}
        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Email: albertgachuki02@gmail.com</p>
          <p>Phone: 0706430161</p>
          <p>Location: Kiambu, Kenya</p>
        </section>
      </main>

      {/* ✅ Footer */}
      <footer>
        <p>© 2025 Albert Muchai Gachuki</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/Albert Muchai" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {' | '}
          <a href="https://github.com/Muchai03" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
