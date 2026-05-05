import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Sahil.dev</h2>
        <ul>
          <li>Home</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>
          Full Stack Developer <span>(MERN)</span>
        </h1>
        <p>
          Building scalable web applications with modern technologies.
        </p>
        <button className="btn">View My Work</button>
      </section>

      {/* Experience */}
      <section className="glass">
        <h2>Experience</h2>

        <div className="timeline">
          <div className="card">
            <h3>Full Stack Developer - Darshan Digital Solution</h3>
            <p>
              Developed scalable MERN applications, built REST APIs,
              optimized MongoDB, and collaborated with clients to deliver
              production-ready solutions.
            </p>
          </div>

          <div className="card">
            <h3>Intern - Numetry Technology</h3>
            <p>
              Built responsive React apps, integrated APIs, used Redux
              for state management, and improved UI performance.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
  <h2>Projects</h2>

  <div className="projects-scroll">

    {/* Project 1 */}
    <div className="project-card">
      <img src="https://via.placeholder.com/300x200" alt="project" />

      <div className="overlay">
        <h3>Fruit Shop</h3>
        <a href="https://luckyshop.blogbeast.in/" target="_blank" rel="noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <img src="https://via.placeholder.com/300x200" alt="project" />

      <div className="overlay">
        <h3>News App</h3>
        <a href="#" target="_blank" rel="noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <img src="https://via.placeholder.com/300x200" alt="project" />

      <div className="overlay">
        <h3>SugarTrack</h3>
        <a href="#" target="_blank" rel="noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>


     {/* Project 3 */}
    <div className="project-card">
      <img src="https://via.placeholder.com/300x200" alt="project" />

      <div className="overlay">
        <h3>SugarTrack</h3>
        <a href="#" target="_blank" rel="noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>


     {/* Project 3 */}
    <div className="project-card">
      <img src="https://via.placeholder.com/300x200" alt="project" />

      <div className="overlay">
        <h3>SugarTrack</h3>
        <a href="#" target="_blank" rel="noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>


     {/* Project 3 */}
    <div className="project-card">
      <img src="https://via.placeholder.com/300x200" alt="project" />

      <div className="overlay">
        <h3>SugarTrack</h3>
        <a href="#" target="_blank" rel="noreferrer">
          <button>View Live</button>
        </a>
      </div>
    </div>

  </div>
</section>
      {/* Skills */}
      <section className="glass">
        <h2>Skills</h2>

        <div className="skills">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>
          <span>Git</span>
          <span>Postman</span>
        </div>
      </section>

      {/* Contact */}
     <section className="contact-section">
  <div className="contact-container">

    <h2>Let's Work Together 🚀</h2>
    <p>Have a project in mind? Send me a message.</p>

    <form className="contact-form">
      <div className="input-group">
        <input type="text" required />
        <label>Your Name</label>
      </div>

      <div className="input-group">
        <input type="email" required />
        <label>Your Email</label>
      </div>

      <div className="input-group">
        <textarea rows="4" required></textarea>
        <label>Your Message</label>
      </div>

      <button type="submit" className="btn">Send Message</button>
    </form>

  </div>
</section>

    </div>
  );
}

export default App;