import { useState } from 'react';
import ProjectList from './components/ProjectList.jsx';
import FilterBar from './components/FilterBar.jsx';
import projects from './data/projects.js';

const skills = [
  {
    name: 'HTML',
    description: 'Semantic structure and page content.'
  },
  {
    name: 'CSS',
    description: 'Layouts, styling, and visual design.'
  },
  {
    name: 'JavaScript',
    description: 'Interactive features and programming logic.'
  },
  {
    name: 'Responsive Design',
    description: 'Layouts for different screen sizes.'
  },
  {
    name: 'React',
    description: 'Reusable components and user interfaces.'
  },
  {
    name: 'Git and GitHub',
    description: 'Version control and project management.'
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  const technologies = [
    ...new Set(projects.flatMap((project) => project.techStack))
  ].sort();

  const filteredProjects =
    selectedTechnology === 'All'
      ? projects
      : projects.filter((project) =>
          project.techStack.includes(selectedTechnology)
        );

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="navigation">
          <a className="brand" href="#home">
            Erdenetsogt <span>Delgerbat</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            aria-pressed={darkMode}
          >
            {darkMode ? 'Light mode' : 'Dark mode'}
          </button>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              GACHON UNIVERSITY / COMPUTER ENGINEERING
            </p>

            <h1>
              Erdenetsogt
              <br />
              Delgerbat<span>.</span>
            </h1>
            <p className="hero-description">
              Computer Engineering student at Gachon University.
              This portfolio presents selected coursework and projects
              developed during my studies in web programming.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore projects <span>↗</span>
              </a>
              <a className="underlined-link" href="#about">
                More about me
              </a>
            </div>
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

        <section className="fact-strip" aria-label="Portfolio overview">
          <div className="fact">
            <span className="fact-number">03</span>
            <div>
              <strong>Selected projects</strong>
              <span>Coursework and development</span>
            </div>
          </div>
          <div className="fact">
            <span className="fact-number">06</span>
            <div>
              <strong>Core skill areas</strong>
              <span>Web technologies and tools</span>
            </div>
          </div>

          <div className="fact">
            <span className="fact-number">01</span>
            <div>
              <strong>Team project</strong>
              <span>Collaborative development</span>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div>
            <p className="section-number">01 / ABOUT</p>
            <h2>About me</h2>
          </div>

          <div className="section-content">
            <p>
              I am a Computer Engineering student at Gachon University,
              interested in programming, web development, and technology.
            </p>
            <p>
              Through my Web Programming coursework, I have been developing
              practical skills in HTML, CSS, JavaScript, and React.
              This portfolio brings together individual assignments and
              collaborative projects completed during my studies.
            </p>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setShowMoreAbout((current) => !current)}
              aria-expanded={showMoreAbout}
              aria-controls="about-extra"
            >
              {showMoreAbout ? 'Hide details' : 'Show more details'}
            </button>
            {showMoreAbout && (
              <p id="about-extra">
                This portfolio is updated as I complete new coursework and
                develop additional projects. It includes examples of my
                progress with interactive web applications and React state.
              </p>
            )}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <p className="section-number">02 / SKILLS</p>
          <h2>Technologies and tools</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-item" key={skill.name}>
                <strong>{skill.name}</strong>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-section">
          <div>
            <p className="section-number">FEATURED PROJECT</p>
            <h2>What's Cooking?</h2>
            <p>
              A collaborative recipe website developed with classmates,
              featuring recipe discovery, search, and favourites.
            </p>
          </div>
          <a
            className="featured-link"
            href="https://erdenetsogt-delgerbat.github.io/team-Project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View team project ↗
          </a>
        </section>

        <section className="projects-section" id="projects">
          <p className="section-number">03 / SELECTED WORK</p>
          <h2>Projects</h2>
          <FilterBar
            technologies={technologies}
            selectedTechnology={selectedTechnology}
            onTechnologyChange={setSelectedTechnology}
          />

          <ProjectList projects={filteredProjects} />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <strong>Erdenetsogt Delgerbat</strong>
          <a
            href="https://github.com/ERDENETSOGT-DELGERBAT"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile ↗
          </a>

          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
