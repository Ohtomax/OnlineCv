import { useState } from 'react'
import { analyticsTasks } from './data/analytics'
import './cssfiles/portfolio.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const projects = [
  { number: '01', type: 'ANDROID DEVELOPMENT', title: 'FitJourneySync', description: 'An Android development project built with Java, bringing together my interests in fitness and technology.', tags: ['Java', 'Android'], url: 'https://github.com/Ohtomax/FITJOURNEYSYNCFINAL' },
  { number: '02', type: 'FRONT-END DEVELOPMENT', title: 'Purrfectly Stitched', description: 'A school e-commerce project where I developed the customer-facing front end as part of a team.', tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], url: 'https://github.com/TrustTheGuardian/Web-based-E-commerce-platform-for-Purrfectly-Stitched-' },
]

const certificates = [
  ['IT Essentials: PC Hardware and Software', 'Cisco · 2024', 'certfolder/ciscocert.pdf'],
  ['CCNAv7: Introduction to Networks', 'Cisco · 2024', 'certfolder/net1cert.pdf'],
  ['Privacy by Design in Software Development', 'Servo · 2025', 'certfolder/dataprivacy.pdf'],
  ['Cybersecurity Essentials LFC108', 'The Linux Foundation · 2025', 'certfolder/cyberseccert.pdf'],
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const filteredTasks = analyticsTasks.filter((task) => filter === 'all' || task.category === filter)
  const visibleTasks = showAll ? filteredTasks : filteredTasks.slice(0, 4)

  function changeFilter(value) {
    setFilter(value)
    setShowAll(false)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Wesly Cunanan, home"><span className="brand-mark">W<span>.</span></span><span>WESLY CUNANAN</span></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
          <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
            {[['Work', '#work'], ['About', '#about'], ['Experience', '#experience'], ['Analytics', '#analytics']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> PORTFOLIO / WEB DEVELOPER</div>
            <h1>Thoughtful<br />digital <em>experiences.</em></h1>
            <p className="hero-intro">Hey, I’m <strong>Wesly Cunanan.</strong> A developer and computer science student who enjoys turning ideas into useful, approachable digital experiences.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Arrow /></a><a className="text-link" href={asset('certfolder/Wesly_Cunanan_CV.pdf')} target="_blank" rel="noopener noreferrer">View my CV <Arrow diagonal /></a></div>
            <div className="hero-meta"><span>BASED IN</span><strong>Angeles City, Philippines</strong><span className="meta-divider" /><span>FOCUSED ON</span><strong>Web &amp; digital experiences</strong></div>
          </div>
          <div className="hero-visual" aria-label="Portrait of Wesly Cunanan">
            <div className="visual-grid" aria-hidden="true" />
            <span className="visual-top">SYS // PROFILE_01 <span>◈</span></span>
            <div className="portrait-circle"><img src={asset('cssfiles/images/2x2picture.png')} alt="Wesly Cunanan" /></div>
            <div className="visual-bottom"><span>DEVELOPER<br />&amp; CREATIVE THINKER</span><span className="visual-symbol">◈</span></div>
          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a>
        </section>

        <div className="ticker" aria-label="Areas of interest"><div className="container ticker-inner"><span>WEB DEVELOPMENT</span><b>◈</b><span>CREATIVE PROBLEM SOLVING</span><b>◈</b><span>DATA ANALYTICS</span><b>◈</b><span>ALWAYS LEARNING</span></div></div>

        <section id="work" className="section container">
          <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK / 01</p><h2>A few things<br /><em>I’ve built.</em></h2></div><p>From mobile applications to the web, I enjoy building projects that make ideas tangible.</p></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
            <div className={`project-art project-art-${project.number}`} aria-hidden="true"><span className="art-index">{project.number} // SELECTED PROJECT</span>{project.number === '01' ? <div className="fitness-art"><span>FIT</span><span>JOURNEY</span><span>SYNC<span className="art-dot">.</span></span></div> : <div className="commerce-art"><span className="commerce-star">◈</span><span>purrfectly<br /><i>stitched.</i></span></div>}<span className="art-bottom">DESIGNED TO MAKE AN IDEA REAL <span>↗</span></span></div>
            <div className="project-info"><div className="project-meta">{project.type} <span>{project.number} / 02</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>VIEW PROJECT <Arrow diagonal /></a></div></div>
          </article>)}</div>
          <a className="more-link" href="https://github.com/Ohtomax" target="_blank" rel="noopener noreferrer">More on GitHub <Arrow diagonal /></a>
        </section>

        <section id="about" className="about-section"><div className="container about-grid"><div><p className="eyebrow"><span className="eyebrow-line" /> THE PERSON BEHIND THE CODE / 02</p><h2>Curious by nature.<br /><em>Developer by choice.</em></h2></div><div className="about-copy"><p className="about-lead">I’m a computer science student with a love for building things that work well and feel good to use.</p><p>Based in Angeles City, I’m constantly learning through coursework, personal projects, and hands-on experience. Outside of code, fitness and coaching have taught me the value of consistency, communication, and showing up ready to improve.</p><a className="text-link dark-link" href="#contact">Get to know me <Arrow /></a></div><div className="skills-block"><span className="small-label">THE TOOLKIT</span><div className="skill-list"><span>HTML &amp; CSS</span><span>JavaScript</span><span>React</span><span>Tailwind CSS</span><span>Node.js</span><span>Python</span><span>Java</span><span>SQL</span><span>Power BI</span></div></div></div></section>

        <section id="experience" className="section container"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> THE JOURNEY / 03</p><h2>Learning through<br /><em>doing.</em></h2></div><p>Every experience adds a new perspective to how I solve problems and work with people.</p></div>
          <div className="experience-grid"><div><h3 className="column-heading">Education &amp; experience <span>↘</span></h3><div className="timeline-item"><span className="timeline-date">2023 — 2027</span><div><h4>BS Computer Science</h4><p>City College of Angeles</p><p>Building a foundation in development and analytical thinking through study and practical projects.</p></div></div><div className="timeline-item"><span className="timeline-date">JUN 2025 — JAN 2026</span><div><h4>Language Assessor</h4><p>GNGN Eikaiwa Philippines</p><p>Evaluated language skills and provided feedback to support students’ progress.</p></div></div><div className="timeline-item"><span className="timeline-date">FROM OCT 2023</span><div><h4>Cashier &amp; Fitness Instructor</h4><p>Vibes Fitness Gym</p><p>Developed communication and leadership skills through part-time work and coaching.</p></div></div></div><div><h3 className="column-heading">Certifications <span>↗</span></h3><div className="cert-list">{certificates.map(([title, issuer, path]) => <a key={path} href={asset(path)} target="_blank" rel="noopener noreferrer"><span><strong>{title}</strong><small>{issuer}</small></span><Arrow diagonal /></a>)}</div></div></div>
        </section>

        <section id="analytics" className="analytics-section"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> BEYOND THE CODE / 04</p><h2>Exploring data,<br /><em>finding clarity.</em></h2></div><p>A collection of coursework exploring data preparation, SQL, Excel, and Power BI.</p></div><div className="filters" aria-label="Filter analytics work">{[['all', 'All work'], ['midterm', 'Midterm'], ['finals', 'Finals']].map(([value, label]) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => changeFilter(value)}>{label}</button>)}</div><div className="analytics-grid">{visibleTasks.map((task) => <article className="analytics-card" key={task.id}><div className="analytics-meta"><span>{task.category.toUpperCase()}</span><span>{task.date}</span></div><h3>{task.title}</h3><p>{task.description}</p><div className="analytics-links">{task.pdf && <a href={asset(task.pdf)} target="_blank" rel="noopener noreferrer">VIEW PDF <Arrow diagonal /></a>}{task.excel && <a href={task.excel} target="_blank" rel="noopener noreferrer">SPREADSHEET <Arrow diagonal /></a>}{task.sql && <a href={asset(task.sql)} download>SQL FILE ↓</a>}{task.powerbi && <a href={asset(task.powerbi)} download>POWER BI FILE ↓</a>}</div></article>)}</div>{filteredTasks.length > 4 && <button type="button" className="show-more" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show less' : `Explore all ${filteredTasks.length} entries`} <span aria-hidden="true">{showAll ? '↑' : '↓'}</span></button>}</div></section>

        <section id="contact" className="contact-section"><div className="container"><p className="eyebrow"><span className="eyebrow-line" /> HAVE AN IDEA? / 05</p><div className="contact-main"><h2>Let’s make<br /><em>something good.</em></h2><div><p>Have a project in mind or just want to connect? I’d love to hear from you.</p><a className="button button-light" href="mailto:omegawesly3@gmail.com">Get in touch <Arrow diagonal /></a></div></div><div className="contact-bottom"><a href="mailto:omegawesly3@gmail.com">omegawesly3@gmail.com</a><div><a href="https://github.com/Ohtomax" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.instagram.com/wygncn" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.facebook.com/weslygcunanan123" target="_blank" rel="noopener noreferrer">Facebook ↗</a></div></div></div></section>
      </main>
      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} WESLY CUNANAN</span><span>MADE WITH CURIOSITY &amp; CARE</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </>
  )
}

export default App
