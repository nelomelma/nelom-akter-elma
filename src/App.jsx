import { useState } from "react";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const base = import.meta.env.BASE_URL;
const profileImg = `${base}images/profile.jpg`;

  const projects = [
    {
      id: 1,
      title: "KeenKeeper",
      image: "/images/project1.png",
      tech: "React, Tailwind CSS, JavaScript, JSON Data",
      description:
        "KeenKeeper is a responsive digital tools website designed with product cards, clean sections, and a modern user interface.",
      live: "https://nelomelma.github.io/keenkeeper/",
      github: "https://github.com/nelomelma/keenkeeper",
      challenges:
        "The main challenge was arranging the layout properly and making the website responsive on different screen sizes.",
      future:
        "In the future, I would like to add login, product filtering, payment features, and a better dashboard.",
    },
    {
      id: 2,
      title: "DigiTools",
      image: "/images/project2.png",
      tech: "HTML, CSS, JavaScript",
      description:
        "DigiTools is a clean landing page for presenting digital tools, services, and features in a professional layout.",
      live: "https://nelomelma.github.io/digi-tools-platform/",
      github: "https://github.com/nelomelma/digi-tools-platform",
      challenges:
        "The challenge was creating a polished design while keeping the code simple and easy to understand.",
      future:
        "Future improvements include animations, pricing cards, and more interactive sections.",
    },
    {
      id: 3,
      title: "GitHub Issue Tracker",
      image: "/images/project3.png",
      tech: "React, JavaScript, GitHub API, CSS",
      description:
        "GitHub Issue Tracker is a web application that helps users view and track GitHub repository issues in an organized way.",
      live: "https://github-issues-tracker-main.netlify.app/",
      github: "https://github.com/nelomelma/GitHub-Issues-Tracker",
      challenges:
        "The main challenge was working with API data and displaying the issue information clearly.",
      future:
        "Future plans include filtering, search history, dark mode, and better error handling.",
    },
  ];

  if (selectedProject) {
    return (
      <main className="detail-page">
        <button className="back-btn" onClick={() => setSelectedProject(null)}>
          ← Back to Portfolio
        </button>

        <div className="detail-card">
          <img src={selectedProject.image} alt={selectedProject.title} />

          <div>
            <h1>{selectedProject.title}</h1>
            <p><strong>Main Technology Stack:</strong> {selectedProject.tech}</p>
            <p><strong>Description:</strong> {selectedProject.description}</p>
            <p><strong>Challenges Faced:</strong> {selectedProject.challenges}</p>
            <p><strong>Future Improvements:</strong> {selectedProject.future}</p>

            <div className="detail-links">
              <a href={selectedProject.live} target="_blank" rel="noreferrer">
                Live Project
              </a>
              <a href={selectedProject.github} target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <header className="navbar">
        

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Qualification</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="intro">Hey, I'm</p>
          <h1>Nelom Akter Elma</h1>
          <h3>Computer Science Student & Web Developer</h3>
          <p>
            I enjoy creating clean, responsive, and user-friendly websites using
            HTML, CSS, JavaScript, React, and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">Say Hello</a>
            <a href="/resume.pdf" download className="btn outline">
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/nelomelma" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nelom-akter-elma" target="_blank" rel="noreferrer">
    LinkedIn
  </a>
  <a href="https://www.facebook.com/nelom.akter.elma/" target="_blank" rel="noreferrer">
    Facebook
  </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Nelom Akter Elma" />
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My Introduction</p>

        <div className="about-container">
          <img src={profileImg} alt="Profile" />

          <div>
            <div className="stats">
              <div>
                <h3>Learning</h3>
                <p>Web Development</p>
              </div>
              <div>
                <h3>3+</h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3>Study</h3>
                <p>Computer Science</p>
              </div>
            </div>

            <p>
              I am a Computer Science student with a strong interest in web
              development and problem solving. My programming journey started
              with HTML, CSS, and JavaScript. Over time, I have worked on
              academic and personal projects that helped me understand how real
              websites are planned, designed, and developed. I enjoy building
              responsive layouts, clean user interfaces, and simple applications
              that solve practical problems. Outside programming, I like
              learning new tools, exploring design ideas, and improving my
              technical skills step by step.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">My Technical Level</p>

        <div className="grid-three">
          <div className="card">
            <h3>Frontend</h3>
            <p>HTML5 - Expert</p>
            <p>CSS3 - Expert</p>
            <p>JavaScript - Intermediate</p>
            <p>React - Basic</p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>GitHub - Intermediate</p>
            <p>Figma - Basic</p>
            <p>Responsive Design - Intermediate</p>
          </div>

          <div className="card">
            <h3>Database & Other</h3>
            <p>SQL - Basic</p>
            <p>Oracle SQL - Basic</p>
            <p>Problem Solving - Intermediate</p>
            <p>UI Design - Intermediate</p>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Qualification</h2>
        <p className="section-subtitle">My Educational Journey</p>

        <div className="timeline">
          <div className="timeline-item">
            <h3>Bachelor of Information Technology</h3>
            <p>Murdoch University</p>
            <span>Current</span>
          </div>

          <div className="timeline-item">
            <h3>Higher Secondary Certificate</h3>
            <p>Completed HSC</p>
            
          </div>

          <div className="timeline-item">
            <h3>Secondary School Certificate</h3>
            <p>Completed SSC</p>
            
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Recent Projects</p>

        <div className="grid-three">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="btn" onClick={() => setSelectedProject(project)}>
                  View More / Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get in Touch</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="card">
              <h3>Email</h3>
              <p>nelomelma74@gmail.com</p>
            </div>

            <div className="card">
              <h3>Phone</h3>
              <p>+971547525450</p>
            </div>

            <div className="card">
              <h3>WhatsApp</h3>
              <p>+971547525450</p>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="button" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <h3>Nelom Akter Elma</h3>
        <p>Computer Science Student & Web Developer</p>
        <p>© 2026 Nelom Akter Elma. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;