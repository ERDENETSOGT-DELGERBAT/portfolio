
import { useState } from 'react';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectList from './components/ProjectList.jsx';
import FilterBar from './components/FilterBar.jsx';
import projects from './data/projects.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="site-header">
        <nav className="navigation">
          <a className="brand" href="#home">Erdenetsogt Delgerbat</a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'Light mode' : 'Dark mode'}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">GACHON UNIVERSITY / COMPUTER ENGINEERING</p>
            <h1>Erdenetsogt<br />Delgerbat<span>.</span></h1>
            <p>
              Computer Engineering student at Gachon University.
              This portfolio presents selected coursework and projects
              developed during my studies.
            </p>
            <a className="primary-link" href="#projects">Explore projects</a>
          </div>

          <aside className="profile-panel">
            <p className="panel-label">STUDENT PROFILE</p>
            <h2>Erdenetsogt Delgerbat</h2>
            <div className="profile-detail">
              <span>UNIVERSITY</span>
              <strong>Gachon University</strong>
            </div>
            <div className="profile-detail">
              <span>MAJOR</span>
              <strong>Computer Engineering</strong>
            </div>
            <div className="profile-detail">
              <span>FOCUS</span>
              <strong>Programming and technology</strong>
            </div>
          </aside>
        </section>

        <section className="about-section" id="about">
          <p className="section-number">01 / ABOUT</p>
          <div className="section-content">
            <h2>About me</h2>
            <p>
              I study Computer Engineering at Gachon University.
              Through my Web Programming course, I have been developing
              practical skills in HTML, CSS, JavaScript, React, Git,
              and GitHub.
            </p>
            <p>
              This site brings together individual assignments and
              collaborative work completed during my studies.
            </p>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <p className="section-number">02 / SKILLS</p>
          <h2>Technologies and tools</h2>
          <div className="skills-grid">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'].map(skill => (
              <div className="skill-item" key={skill}>{skill}</div>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <p className="section-number">03 / SELECTED WORK</p>
          <h2>Projects</h2>
          <FilterBar projects={projects} />
          <ProjectList projects={projects} />
        </section>
      </main>

      <footer className="site-footer">
        <strong>Erdenetsogt Delgerbat</strong>
        <a
          href="https://github.com/ERDENETSOGT-DELGERBAT"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile ↗
        </a>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;
