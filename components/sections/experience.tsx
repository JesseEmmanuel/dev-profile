'use client'

import HTMLFlipBook from 'react-pageflip'
import { Pin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const experience = [
  { role: 'Frontend Developer', company: 'Tidewrk', date: 'SEP 2025 — JUL 2026', body: 'Maintained and optimized client-facing web applications using Next.js and TypeScript across production environments. Built features with React Hook Form, Zod, React Query, and shadcn/ui.' },
  { role: 'Software Engineer', company: 'KodaKollectiv', date: 'OCT 2023 — SEP 2025', body: 'Built RESTful APIs with Nest.js, Laravel, Django, and Prisma. Deployed and optimized backend applications on AWS Elastic Beanstalk and RDS for scalable production systems.' },
  { role: 'WordPress Developer', company: 'Human Incubator Inc.', date: 'JUL — SEP 2023', body: 'Maintained and enhanced client WordPress sites, resolving performance bottlenecks and implementing security improvements. Customized themes and plugins to meet business requirements.' },
  { role: 'Tech Support & WordPress Developer', company: 'Govesmart Solutions Inc.', date: '2021 — 2023', body: 'Developed responsive WordPress websites with cross-browser compatibility, managed social media accounts, and helped increase brand visibility and web traffic.' },
  { role: 'Freelance Web Developer', company: 'Self-Employed', date: '2021 — 2022', body: 'Designed responsive websites for small businesses using WordPress, React, and Laravel. Implemented custom API integrations that enhanced functionality and engagement.' },
  { role: 'Junior Systems Engineer', company: 'Apollo Technologies Inc.', date: '2020 — 2021', body: 'Configured and maintained Linux servers with high-availability setups, supporting enterprise-level systems and critical infrastructure. Implemented MySQL database synchronization and replication protocols.' },
]

type PageProps = { children: React.ReactNode }

function RolePage({ children }: PageProps) { return <div className="book-page note note-yellow">{children}</div> }

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const bookRef = useRef<any>(null)
  const active = experience[activeIndex]

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') bookRef.current?.pageFlip().flipPrev()
      if (event.key === 'ArrowRight') bookRef.current?.pageFlip().flipNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section id="work" className="work ruled">
      <div className="section-heading">
        <div><p className="eyebrow">02 / THE TRAIL</p><h2>Where I&apos;ve been.</h2></div>
        <p className="section-aside">A timeline of things<br />learned and shipped.</p>
      </div>

      <div className="experience-book" aria-label="Experience timeline">
        <div className="experience-desktop-book">
          <HTMLFlipBook ref={bookRef} width={430} height={390} size="stretch" minWidth={280} maxWidth={480} minHeight={320} maxHeight={500} drawShadow showCover={false} flippingTime={850} mobileScrollSupport={false} useMouseEvents onFlip={(event: any) => setActiveIndex(Math.floor(event.data / 2))}>
            {experience.flatMap((item, index) => [
              <RolePage key={`${item.company}-role`}>
                <Pin aria-hidden="true" /><span className="index">0{index + 1}</span><p className="page-label">CHAPTER {index + 1}</p>
                <div className="page-meta"><p className="date">{item.date}</p><span className="page-rule" /></div><h3>{item.role}</h3><p className="company">{item.company}</p><span className="page-mark">THE TRAIL</span>
              </RolePage>,
              <RolePage key={`${item.company}-notes`}>
                <Pin aria-hidden="true" /><p className="page-label">FIELD NOTES / {String(index + 1).padStart(2, '0')}</p><h3>What I shipped</h3><p className="body">{item.body}</p><p className="turn-cue">Turn the page <span aria-hidden="true">→</span></p>
              </RolePage>,
            ])}
          </HTMLFlipBook>
        </div>

        <div className="experience-mobile-ticker">
          <div className="ticker-spring" aria-hidden="true"><span /><span /><span /><span /><span /></div>
          <div className="ticker-card note note-yellow"><Pin aria-hidden="true" /><span className="index">0{activeIndex + 1}</span><p className="page-label">THE TRAIL / CHAPTER {activeIndex + 1}</p><p className="date">{active.date}</p><h3>{active.role}</h3><p className="company">{active.company}</p><p className="body">{active.body}</p></div>
          <div className="ticker-controls"><button type="button" onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))} disabled={!activeIndex} aria-label="Previous experience">←</button><span aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / 06</span><button type="button" onClick={() => setActiveIndex(Math.min(5, activeIndex + 1))} disabled={activeIndex === 5} aria-label="Next experience">→</button></div>
        </div>
      </div>
    </section>
  )
}
