'use client'

import { Pin } from 'lucide-react'
import { useEffect, useState } from 'react'

const experience = [
  { role: 'Frontend Developer', company: 'Tidewrk', date: 'SEP 2025 — JUL 2026', color: 'yellow', body: 'Maintained and optimized client-facing web applications using Next.js and TypeScript across production environments. Built features with React Hook Form, Zod, React Query, and shadcn/ui.' },
  { role: 'Software Engineer', company: 'KodaKollectiv', date: 'OCT 2023 — SEP 2025', color: 'pink', body: 'Built RESTful APIs with Nest.js, Laravel, Django, and Prisma. Deployed and optimized backend applications on AWS Elastic Beanstalk and RDS for scalable production systems.' },
  { role: 'WordPress Developer', company: 'Human Incubator Inc.', date: 'JUL — SEP 2023', color: 'blue', body: 'Maintained and enhanced client WordPress sites, resolving performance bottlenecks and implementing security improvements. Customized themes and plugins to meet business requirements.' },
  { role: 'Tech Support & WordPress Developer', company: 'Govesmart Solutions Inc.', date: '2021 — 2023', color: 'green', body: 'Developed responsive WordPress websites with cross-browser compatibility, managed social media accounts, and helped increase brand visibility and web traffic.' },
  { role: 'Freelance Web Developer', company: 'Self-Employed', date: '2021 — 2022', color: 'orange', body: 'Designed responsive websites for small businesses using WordPress, React, and Laravel. Implemented custom API integrations that enhanced functionality and engagement.' },
  { role: 'Junior Systems Engineer', company: 'Apollo Technologies Inc.', date: '2020 — 2021', color: 'yellow', body: 'Configured and maintained Linux servers with high-availability setups, supporting enterprise-level systems and critical infrastructure. Implemented MySQL database synchronization and replication protocols.' },
]

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [turnDirection, setTurnDirection] = useState<'next' | 'prev'>('next')
  const active = experience[activeIndex]
  const canGoBack = activeIndex > 0
  const canGoForward = activeIndex < experience.length - 1

  const goTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, experience.length - 1))
    if (nextIndex === activeIndex) return
    setTurnDirection(nextIndex > activeIndex ? 'next' : 'prev')
    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goTo(activeIndex - 1)
      if (event.key === 'ArrowRight') goTo(activeIndex + 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex])

  return (
    <section id="work" className="work ruled">
      <div className="section-heading">
        <div><p className="eyebrow">02 / THE TRAIL</p><h2>Where I&apos;ve been.</h2></div>
        <p className="section-aside">A timeline of things<br />learned and shipped.</p>
      </div>
      <div className="experience-book" aria-label="Experience timeline">
        <div className={`book-spread book-spread--${turnDirection}`} key={active.company}>
          <article className="book-page book-page-left note note-yellow">
            <Pin aria-hidden="true" />
            <span className="index">0{activeIndex + 1}</span>
            <p className="page-label">CHAPTER {activeIndex + 1}</p>
            <div className="page-meta"><p className="date">{active.date}</p><span className="page-rule" /></div>
            <h3>{active.role}</h3>
            <p className="company">{active.company}</p>
            <span className="page-mark">THE TRAIL</span>
          </article>
          <article className="book-page book-page-right note note-yellow">
            <Pin aria-hidden="true" />
            <p className="page-label">FIELD NOTES / {String(activeIndex + 1).padStart(2, '0')}</p>
            <h3>What I shipped</h3>
            <p className="body">{active.body}</p>
            <p className="turn-cue">Use the arrows to turn the page <span aria-hidden="true">→</span></p>
          </article>
        </div>
        <div className="book-controls">
          <button type="button" className="book-arrow" onClick={() => goTo(activeIndex - 1)} disabled={!canGoBack} aria-label="Previous experience">← <span>PREV</span></button>
          <div className="book-progress" aria-label={`Experience ${activeIndex + 1} of ${experience.length}`}>
            <span className="progress-track"><span style={{ width: `${((activeIndex + 1) / experience.length) * 100}%` }} /></span>
            <span aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(experience.length).padStart(2, '0')}</span>
          </div>
          <button type="button" className="book-arrow" onClick={() => goTo(activeIndex + 1)} disabled={!canGoForward} aria-label="Next experience"><span>NEXT</span> →</button>
        </div>
      </div>
    </section>
  )
}
