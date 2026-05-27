const skills = [
  'HTML',
  'Python',
  'SQL',
  'Programming Fundamentals',
  'Networking Basics',
  'System Analysis',
];

const projects = [
  {
    title: 'Online Bus Booking System',
    description:
      'Built a full booking experience for web and mobile with seat selection, QR e-ticketing, secure payments, and admin/operator management.',
  },
  {
    title: 'Sun Tracking Solar Panel IoT',
    description:
      'Designed a solar tracking system that automatically adjusts panel angle to follow the sun, improving power generation efficiency with sensor-driven control.',
  },
];

const education = [
  {
    role: 'Diploma in Computer Science',
    company: 'TamilNadu Government Polytechnic College',
    period: '2023 - 2026',
    details: 'Diploma with strong focus on programming, networking, and systems analysis. CGPA: 83%.',
  },
  {
    role: 'Higher Secondary School (SSLC)',
    company: 'Seventh Day Adventist HR. Sec. School',
    period: '2022 - 2023',
    details: 'Completed SSLC with a solid academic foundation and practical problem-solving skills. Percentage: 66.2%.',
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand">Akshay Kumar</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science Graduate</p>
            <h1>Engineering creative, modern web solutions with strong technical fundamentals.</h1>
            <p className="hero-text">
              Motivated and detail-oriented computer science graduate from Tamil Nadu, focused on programming, networking, and system analysis.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">See Projects</a>
              <a className="button button-secondary" href="#contact">Contact Me</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <h2>Entry-level Developer</h2>
              <p>Seeking a challenging role to apply technical skills and grow professionally while delivering measurable results.</p>
            </div>
          </div>
        </section>

        <section id="about" className="section-panel about-section">
          <div>
            <p className="section-label">About</p>
            <h2>Focused on strong fundamentals and continuous improvement</h2>
            <p>
              A motivated and detail-oriented computer science graduate seeking an entry-level position to apply skills in programming, networking, and system analysis. Eager to contribute to organizational success while continuously learning and advancing professional development.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Technical Strengths</h3>
              <p>Practical experience with web systems, database queries, and IoT solutions powered by real-time sensor data.</p>
            </div>
            <div className="about-card">
              <h3>Professional Focus</h3>
              <p>Deliver reliable systems with attention to detail, clear communication, and a strong desire to keep learning.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section-panel skills-section">
          <p className="section-label">Skills</p>
          <h2>Core strengths</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-pill">{skill}</div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-panel projects-section">
          <p className="section-label">Projects</p>
          <h2>Key projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <span className="project-tag">Academic Project</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-panel experience-section">
          <p className="section-label">Education</p>
          <h2>Academic background</h2>
          <div className="timeline-list">
            {education.map((item) => (
              <div key={item.role} className="timeline-item">
                <div className="timeline-meta">
                  <p className="timeline-role">{item.role}</p>
                  <p className="timeline-company">{item.company}</p>
                </div>
                <div>
                  <p className="timeline-period">{item.period}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-panel contact-section">
          <div>
            <p className="section-label">Contact</p>
            <h2>Ready to collaborate</h2>
            <p>Connect to discuss internships, entry-level roles, or academic collaborations in software development and IoT.</p>
          </div>
          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea rows="5" placeholder="Describe your opportunity"></textarea>
            </label>
            <button type="button" className="button button-primary">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>Based in Tamil Nadu, India — built with React and Vite.</p>
      </footer>
    </div>
  );
}
