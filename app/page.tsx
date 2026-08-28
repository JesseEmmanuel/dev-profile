'use client'

import { useEffect, useState } from 'react'

function useParallax() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const narrowScreen = window.matchMedia('(max-width: 700px)')
    let frame = 0

    const update = () => {
      frame = 0
      if (reduceMotion.matches || narrowScreen.matches) return
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((section) => {
        const speed = Number(section.dataset.parallaxSpeed ?? 0.04)
        const distance = (window.innerHeight / 2 - section.getBoundingClientRect().top - section.offsetHeight / 2) * speed
        section.style.setProperty('--parallax-y', `${Math.max(-18, Math.min(18, distance))}px`)
      })
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    reduceMotion.addEventListener('change', onScroll)
    narrowScreen.addEventListener('change', onScroll)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      reduceMotion.removeEventListener('change', onScroll)
      narrowScreen.removeEventListener('change', onScroll)
    }
  }, [])
}

const skills = ['React.js', 'Next.js', 'Nest.js', 'Laravel', 'Django', 'PHP', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zod', 'shadcn/ui', 'MySQL', 'PostgreSQL', 'Prisma', 'AWS', 'Linux', 'WebSockets', 'Git']

const projects = [
  { name: 'Project One', type: 'PLACEHOLDER PROJECT', color: 'yellow', body: 'A concise description of the product, your role, and the problem it solves.', link: '#' },
  { name: 'Project Two', type: 'PLACEHOLDER PROJECT', color: 'pink', body: 'A short case study summary highlighting the strongest technical choices.', link: '#' },
  { name: 'Project Three', type: 'PLACEHOLDER PROJECT', color: 'blue', body: 'A quick note about the outcome, users, or impact of this project.', link: '#' },
]

const experience = [
  { role: 'Frontend Developer', company: 'Tidewrk', date: 'SEP 2025 — JUL 2026', color: 'yellow', body: 'Maintained and optimized client-facing web applications using Next.js and TypeScript across production environments. Built features with React Hook Form, Zod, React Query, and shadcn/ui.' },
  { role: 'Software Engineer', company: 'KodaKollectiv', date: 'OCT 2023 — SEP 2025', color: 'pink', body: 'Built RESTful APIs with Nest.js, Laravel, Django, and Prisma. Deployed and optimized backend applications on AWS Elastic Beanstalk and RDS for scalable production systems.' },
  { role: 'WordPress Developer', company: 'Human Incubator Inc.', date: 'JUL — SEP 2023', color: 'blue', body: 'Maintained and enhanced client WordPress sites, resolving performance bottlenecks and implementing security improvements. Customized themes and plugins to meet business requirements.' },
  { role: 'Tech Support & WordPress Developer', company: 'Govesmart Solutions Inc.', date: '2021 — 2023', color: 'green', body: 'Developed responsive WordPress websites with cross-browser compatibility, managed social media accounts, and helped increase brand visibility and web traffic.' },
  { role: 'Freelance Web Developer', company: 'Self-Employed', date: '2021 — 2022', color: 'orange', body: 'Designed responsive websites for small businesses using WordPress, React, and Laravel. Implemented custom API integrations that enhanced functionality and engagement.' },
]

function Pin() { return <span aria-hidden="true" className="pin" /> }

export default function Page() {
  useParallax()
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => { await navigator.clipboard?.writeText('jesseemmanuel@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1800) }

  return (
    <main className="board-shell">
      <header className="topbar">
        <a href="#top" className="brand">JEB<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? 'CLOSE' : 'MENU'}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a><a href="#work" onClick={() => setMenuOpen(false)}>EXPERIENCE</a><a href="#toolkit" onClick={() => setMenuOpen(false)}>TOOLKIT</a><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
        </nav>
        <span className="edition">VOL. 01 / 2026</span>
      </header>

      <section id="top" className="hero section-grid" data-parallax data-parallax-speed="0.025">
        <div className="hero-copy note note-yellow tilt-left">
          <Pin /><p className="eyebrow">THE DEVELOPER GAZETTE</p>
          <h1>Building digital<br /><em>things</em> with care.</h1>
          <p className="intro">Full-stack software developer crafting robust, user-centric web experiences from frontend finesse to backend reliability.</p>
          <a className="ink-link" href="#work">READ MY STORY <span>↘</span></a>
        </div>
        <div className="hero-side">
          <div className="stamp">AVAILABLE<br /><strong>FOR WORK</strong></div>
          <div className="hero-fact note note-blue tilt-right"><Pin /><p className="eyebrow">FAST FACT</p><p className="fact-number">3<span>+</span></p><p>years turning ideas<br />into shipped software</p></div>
        </div>
      </section>

<section id="about" className="about section-grid ruled" data-parallax data-parallax-speed="0.04">
  <div className="about-heading"><p className="eyebrow">01 / THE PERSON</p><h2>Hi, I&apos;m Jesse.</h2><a className="resume-link" href="/jesse-emmanuel-basco-resume.pdf" target="_blank" rel="noreferrer">VIEW MY RESUME <span>↗</span></a><div className="about-skills"><p className="eyebrow">THE TOOLKIT</p><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></div>
  <div className="about-note note note-pink tilt-right"><Pin /><div className="portrait-frame"><img src="/me.jpg" alt="Jesse Emmanuel Basco smiling at an event" /></div><p>I&apos;m a full-stack developer based in the Philippines, focused on building scalable applications and thoughtful interfaces. I enjoy the messy middle: translating a hard problem into something clear, useful, and a little delightful.</p><p className="signature">— Jesse</p></div>
  </section>

      <section id="work" className="work ruled" data-parallax data-parallax-speed="0.055"><div className="section-heading"><div><p className="eyebrow">02 / THE TRAIL</p><h2>Where I&apos;ve been.</h2></div><p className="section-aside">A timeline of things<br />learned and shipped.</p></div>
        <div className="experience-grid">{experience.map((item, index) => <article className={`note note-${item.color} experience tilt-${index % 2 ? 'right' : 'left'}`} key={item.company}><Pin /><span className="index">0{index + 1}</span><p className="date">{item.date}</p><h3>{item.role}</h3><p className="company">{item.company}</p><p className="body">{item.body}</p></article>)}</div>
      </section>

      <section id="toolkit" className="projects ruled" data-parallax data-parallax-speed="0.045"><div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Things I&apos;ve<br /><em>made.</em></h2></div><p className="section-aside">A few projects<br />worth a closer look.</p></div><div className="experience-grid project-grid">{projects.map((project, index) => <article className={`note note-${project.color} experience tilt-${index % 2 ? 'right' : 'left'}`} key={project.name}><Pin /><span className="index">0{index + 1}</span><p className="date">{project.type}</p><h3>{project.name}</h3><p className="body">{project.body}</p><a className="project-link" href={project.link}>VIEW PROJECT ↗</a></article>)}</div></section>

      <section id="contact" className="contact note note-orange tilt-right" data-parallax data-parallax-speed="0.035"><Pin /><p className="eyebrow">04 / THE NEXT CHAPTER</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><p>Have a project, an idea, or just want to say hello?</p><div className="contact-actions"><a className="email" href="mailto:jesseemmanuel@gmail.com">jesseemmanuel@gmail.com ↗</a><button onClick={copyEmail} className="copy-button">{copied ? 'COPIED' : 'COPY EMAIL'}</button></div></section>

      <footer><span>JESSE EMMANUEL BASCO</span><span>FULL-STACK SOFTWARE DEVELOPER</span><span>© 2026 / BUKIDNON MINDANAO, PH</span></footer>
    </main>
  )
}
