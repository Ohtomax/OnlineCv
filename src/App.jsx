import { useState, useEffect, useRef } from 'react'
import './cssfiles/portfolio.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const projects = [
  {
    number: '01',
    type: 'FULL-STACK / AI PLATFORM',
    title: 'Smile Check',
    subtitle: 'Dental Clinic Management System',
    description: 'Modular PostgreSQL and Prisma ORM clinic platform featuring an NLP chatbot that automates patient reservations, schedule blocking, conflict resolution, and AES-256 encrypted EMR records.',
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'NLP', 'Firebase'],
    url: 'https://github.com/Ohtomax',
  },
  {
    number: '02',
    type: 'FULL-STACK ARCHITECTURE',
    title: 'Gitfolio',
    subtitle: 'Developer Platform',
    description: 'Full-stack React, TypeScript, and Express platform built with Zustand, TanStack Query (autosaved editor with 50-step undo/redo), and an async BullMQ/Redis deployment pipeline to GitHub Pages.',
    tags: ['React', 'TypeScript', 'Express', 'Zustand', 'TanStack Query', 'BullMQ', 'Redis', 'Prisma'],
    url: 'https://github.com/Ohtomax',
  },
  {
    number: '03',
    type: 'FRONT-END DEVELOPMENT',
    title: 'Purrfectly Stitched',
    subtitle: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce platform engineered with modular Admin and User interfaces, real-time inventory management, Point of Sale (POS), and a custom CMS.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    url: 'https://github.com/TrustTheGuardian/Web-based-E-commerce-platform-for-Purrfectly-Stitched-',
  },
  {
    number: '04',
    type: 'CLIENT-SIDE APP',
    title: 'Virtual Cooking Web App',
    subtitle: 'Simulation Experience',
    description: 'Client-side React and TypeScript cooking simulator with multi-stage interactive recipes and a zero-backend architecture utilizing in-browser SQLite (sql.js), Zustand, and Framer Motion.',
    tags: ['React', 'TypeScript', 'Zustand', 'sql.js', 'Framer Motion'],
    url: 'https://github.com/Ohtomax',
  },
  {
    number: '05',
    type: 'AUTOMATION & BACKEND',
    title: 'DOST Web Scraper & Alert System',
    subtitle: 'Automated Scraper',
    description: 'Engineered an n8n workflow to continuously scrape time-sensitive DOST data and dynamically route location-based alerts via Discord, Telegram, and SMS chatbots.',
    tags: ['n8n', 'Node.js', 'Web Scraping', 'Chatbots', 'REST APIs'],
    url: 'https://github.com/Ohtomax',
  },
  {
    number: '06',
    type: 'MOBILE DEVELOPMENT',
    title: 'FitJourneySync',
    subtitle: 'Fitness & Nutrition Tracker',
    description: 'Native Android application built in Java with full CRUD to manage daily macro tracking, calorie deficits, nutritional logs, and personal training metrics.',
    tags: ['Java', 'Android Studio', 'Mobile CRUD'],
    url: 'https://github.com/Ohtomax/FITJOURNEYSYNCFINAL',
  },
]

const certificates = [
  ['CCNA: Enterprise Networking, Security & Automation', 'Cisco · 2026', 'certfolder/ciscocert.pdf'],
  ['CCNA: Switching, Routing & Wireless Essentials', 'Cisco · 2026', 'certfolder/ciscocert.pdf'],
  ['CCNAv7: Introduction to Networks', 'Cisco · 2025', 'certfolder/net1cert.pdf'],
  ['Cybersecurity Essentials: LFC108', 'The Linux Foundation · 2025', 'certfolder/cyberseccert.pdf'],
  ['Privacy by Design in Software Development', 'Servo · 2025', 'certfolder/dataprivacy.pdf'],
  ['IT Essentials: PC Hardware and Software', 'Cisco · 2024', 'certfolder/ciscocert.pdf'],
]

const tickerItems = [
  'REACT & TYPESCRIPT',
  'NODE.JS · EXPRESS · PRISMA',
  'POSTGRESQL · SUPABASE · FIREBASE · REDIS',
  'AWS CLOUD · DOCKER · N8N',
  'FULL-STACK ARCHITECTURE',
  'DEAN’S LISTER · CCA',
]

const toolkit = [
  'TypeScript',
  'JavaScript',
  'React',
  'TanStack Query',
  'Zustand',
  'Node.js',
  'Express.js',
  'Prisma ORM',
  'PostgreSQL',
  'Supabase',
  'Redis',
  'AWS',
  'Firebase',
  'Docker',
  'Postman',
  'n8n',
  'Tailwind CSS',
  'Power BI',
]

const typedPhrases = [
  'React, TypeScript & Zustand Frontends',
  'Node.js, Express & Prisma REST APIs',
  'PostgreSQL, Supabase & Redis Databases',
  'AWS Cloud, Docker & n8n Automation',
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className={diagonal ? 'arrow arrow-diag' : 'arrow'}>{diagonal ? '↗' : '→'}</span>
}

function handleCardTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -6
  const rotateY = ((x - centerX) / centerX) * 6
  card.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`)
  card.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`)
  card.style.setProperty('--mx', `${((x / rect.width) * 100).toFixed(1)}%`)
  card.style.setProperty('--my', `${((y / rect.height) * 100).toFixed(1)}%`)
}

function resetCardTilt(e) {
  const card = e.currentTarget
  card.style.setProperty('--rx', '0deg')
  card.style.setProperty('--ry', '0deg')
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const canvasRef = useRef(null)
  const spotlightRef = useRef(null)

  // Typewriter animation
  useEffect(() => {
    const currentPhrase = typedPhrases[phraseIndex]
    const speed = isDeleting ? 35 : 70

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1400)
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % typedPhrases.length)
      } else {
        setTypedText(
          currentPhrase.substring(0, typedText.length + (isDeleting ? -1 : 1))
        )
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, phraseIndex])

  // Interactive 60FPS monochrome particle & constellation network canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = { x: -9999, y: -9999 }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const count = Math.min(70, Math.floor((width * height) / 18000))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.65,
      vy: (Math.random() - 0.5) * 0.65,
      size: Math.random() * 1.8 + 0.7,
      alpha: Math.random() * 0.55 + 0.2,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Draw particle dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.hypot(dx, dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 130) * 0.14})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }

        // Connect to mouse cursor
        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const mDist = Math.hypot(mdx, mdy)
        if (mDist < 180) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - mDist / 180) * 0.35})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Scroll reveal observer
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
      <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />

      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Wesly Cunanan, home"><span className="brand-mark">W<span>.</span></span><span>WESLY CUNANAN</span></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
          <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
            {[['Work', '#work'], ['About', '#about'], ['Experience', '#experience']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow hero-anim hero-anim-1"><span className="eyebrow-line" /> PORTFOLIO // FULL-STACK DEVELOPER</div>
            <h1 className="hero-anim hero-anim-2">Thoughtful<br />digital <em>experiences.</em></h1>
            <div className="typewriter-bar hero-anim hero-anim-3" aria-live="polite">
              <span className="typewriter-prompt">&gt;</span>
              <span className="typewriter-text">{typedText}</span>
              <span className="typewriter-cursor" aria-hidden="true">_</span>
            </div>
            <p className="hero-intro hero-anim hero-anim-3">Hey, I’m <strong>Wesly Cunanan.</strong> A full-stack developer and computer science student building modern web applications with React, TypeScript, Node.js, and cloud infrastructure.</p>
            <div className="hero-actions hero-anim hero-anim-4"><a className="button button-primary" href="#work">Explore my work <Arrow /></a><a className="text-link" href={asset('certfolder/Wesly_Cunanan_CV.pdf')} target="_blank" rel="noopener noreferrer">View my CV <Arrow diagonal /></a></div>
            <div className="hero-meta hero-anim hero-anim-5"><span>BASED IN</span><strong>Angeles City, Philippines</strong><span className="meta-divider" /><span>STACK</span><strong>React · TypeScript · Node.js · PostgreSQL</strong></div>
          </div>
          <div
            className="hero-visual hero-anim hero-anim-visual tilt-card"
            aria-label="Portrait of Wesly Cunanan"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
          >
            <div className="visual-grid" aria-hidden="true" />
            <div className="visual-orbit visual-orbit-1" aria-hidden="true" />
            <div className="visual-orbit visual-orbit-2" aria-hidden="true" />
            <div className="visual-glow" aria-hidden="true" />
            <div className="visual-scanline" aria-hidden="true" />
            <span className="visual-top">SYS // PROFILE_01 <span>◈</span></span>
            <div className="portrait-circle"><img src={asset('cssfiles/images/2x2picture.png')} alt="Wesly Cunanan" /></div>
            <div className="visual-bottom"><span>FULL-STACK<br />&amp; CLOUD DEVELOPER</span><span className="visual-symbol">◈</span></div>
          </div>
          <a className="scroll-cue hero-anim hero-anim-5" href="#work"><span>SCROLL TO EXPLORE</span><span className="scroll-arrow" aria-hidden="true">↓</span></a>
        </section>

        <div className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {[0, 1, 2].map((dup) => (
              <div className="ticker-group" key={dup} aria-hidden={dup > 0}>
                {tickerItems.map((item) => (
                  <span className="ticker-item" key={`${dup}-${item}`}>
                    <span>{item}</span>
                    <b>◈</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="work" className="section container">
          <div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK / 01</p><h2>A few things<br /><em>I’ve built.</em></h2></div><p>From mobile applications to the web, I enjoy building projects that make ideas tangible.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article
            className="project-card reveal tilt-card"
            style={{ '--delay': `${index * 120}ms` }}
            key={project.number}
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
          >
            <div className={`project-art project-art-${project.number}`} aria-hidden="true">
              <span className="art-index">{project.number} // SELECTED PROJECT</span>
              {project.number === '01' ? (
                <div className="fitness-art"><span>SMILE</span><span>CHECK<span className="art-dot">.</span></span></div>
              ) : project.number === '02' ? (
                <div className="fitness-art"><span>GIT</span><span>FOLIO<span className="art-dot">.</span></span></div>
              ) : project.number === '03' ? (
                <div className="commerce-art"><span className="commerce-star">◈</span><span>purrfectly<br /><i>stitched.</i></span></div>
              ) : project.number === '04' ? (
                <div className="fitness-art"><span>VIRTUAL</span><span>COOKING<span className="art-dot">.</span></span></div>
              ) : project.number === '05' ? (
                <div className="fitness-art"><span>DOST</span><span>SCRAPER<span className="art-dot">.</span></span></div>
              ) : (
                <div className="fitness-art"><span>FIT</span><span>TRACKER<span className="art-dot">.</span></span></div>
              )}
              <span className="art-bottom">DESIGNED TO MAKE AN IDEA REAL <span>↗</span></span>
            </div>
            <div className="project-info">
              <div className="project-meta">{project.type} <span>{project.number} / 06</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>VIEW PROJECT <Arrow diagonal /></a>
              </div>
            </div>
          </article>)}</div>
          <a className="more-link reveal" href="https://github.com/Ohtomax" target="_blank" rel="noopener noreferrer">More on GitHub <Arrow diagonal /></a>
        </section>

        <section id="about" className="about-section"><div className="container about-grid"><div className="reveal"><p className="eyebrow"><span className="eyebrow-line" /> THE PERSON BEHIND THE CODE / 02</p><h2>Curious by nature.<br /><em>Developer by choice.</em></h2></div><div className="about-copy reveal" style={{ '--delay': '120ms' }}><p className="about-lead">I’m a computer science student with a love for building full-stack systems that work reliably and feel great to use.</p><p>Based in Angeles City, I build end-to-end applications using React, TypeScript, Node.js, Express, and PostgreSQL with Prisma ORM—backed by cloud platforms like AWS, Supabase, and Firebase, Docker containerization, and n8n workflow automation.</p><a className="text-link dark-link" href="#contact">Get to know me <Arrow /></a></div><div className="skills-block reveal" style={{ '--delay': '200ms' }}><span className="small-label">THE TOOLKIT // TECH STACK</span><div className="skill-list">{toolkit.map((skill, idx) => <span key={skill} style={{ '--skill-delay': `${idx * 45}ms` }}>{skill}</span>)}</div></div></div></section>

        <section id="experience" className="section container"><div className="section-heading reveal"><div><p className="eyebrow"><span className="eyebrow-line" /> THE JOURNEY / 03</p><h2>Learning through<br /><em>doing.</em></h2></div><p>Every experience adds a new perspective to how I solve problems and work with people.</p></div>
          <div className="experience-grid">
            <div className="reveal">
              <h3 className="column-heading">Education &amp; experience <span>↘</span></h3>
              <div className="timeline-item">
                <span className="timeline-date">2023 — PRESENT</span>
                <div>
                  <h4>BS Computer Science — Dean's Lister</h4>
                  <p>City College of Angeles · Angeles City, Pampanga</p>
                  <p>Building a solid foundation in software engineering, full-stack web architectures, distributed systems, and analytical problem-solving.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">1 YEAR</span>
                <div>
                  <h4>Freelance Web Development</h4>
                  <p>Freelance &amp; Client Projects</p>
                  <p>Engineered responsive web applications, secure REST APIs, custom CMS platforms, and automated workflow pipelines.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">ACHIEVEMENTS</span>
                <div>
                  <h4>1st Place — Capture the Flag (CTF)</h4>
                  <p>Software Freedom Day at CCA (2023)</p>
                  <p>Participant, AI Hackathon — Cloudstaff (2026).</p>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ '--delay': '140ms' }}>
              <h3 className="column-heading">Certifications <span>↗</span></h3>
              <div className="cert-list">{certificates.map(([title, issuer, path]) => <a key={`${title}-${path}`} href={asset(path)} target="_blank" rel="noopener noreferrer"><span><strong>{title}</strong><small>{issuer}</small></span><Arrow diagonal /></a>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> HAVE AN IDEA? / 04</p>
            <div className="contact-main">
              <h2>Let’s make<br /><em>something good.</em></h2>
              <div>
                <p>Have a project in mind, open roles, or just want to connect? I’d love to hear from you.</p>
                <a className="button button-light" href="mailto:weslycunanan12304@gmail.com">Get in touch <Arrow diagonal /></a>
              </div>
            </div>
            <div className="contact-bottom">
              <a href="mailto:weslycunanan12304@gmail.com">weslycunanan12304@gmail.com</a>
              <div>
                <a href="https://github.com/Ohtomax" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href="https://ph.jobstreet.com/profiles/wesly-cunanan-vNP8g3rxJY" target="_blank" rel="noopener noreferrer">JobStreet ↗</a>
                <a href="https://www.instagram.com/wygncn" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                <a href="https://www.facebook.com/weslygcunanan123" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} WESLY CUNANAN</span><span>MADE WITH CURIOSITY &amp; CARE</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </>
  )
}

export default App
