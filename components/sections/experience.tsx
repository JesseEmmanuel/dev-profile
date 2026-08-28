import { Pin } from 'lucide-react'
import React from 'react'

export default function Experience() {
    const experience = [
        { role: 'Frontend Developer', company: 'Tidewrk', date: 'SEP 2025 — JUL 2026', color: 'yellow', body: 'Maintained and optimized client-facing web applications using Next.js and TypeScript across production environments. Built features with React Hook Form, Zod, React Query, and shadcn/ui.' },
        { role: 'Software Engineer', company: 'KodaKollectiv', date: 'OCT 2023 — SEP 2025', color: 'pink', body: 'Built RESTful APIs with Nest.js, Laravel, Django, and Prisma. Deployed and optimized backend applications on AWS Elastic Beanstalk and RDS for scalable production systems.' },
        { role: 'WordPress Developer', company: 'Human Incubator Inc.', date: 'JUL — SEP 2023', color: 'blue', body: 'Maintained and enhanced client WordPress sites, resolving performance bottlenecks and implementing security improvements. Customized themes and plugins to meet business requirements.' },
        { role: 'Tech Support & WordPress Developer', company: 'Govesmart Solutions Inc.', date: '2021 — 2023', color: 'green', body: 'Developed responsive WordPress websites with cross-browser compatibility, managed social media accounts, and helped increase brand visibility and web traffic.' },
        { role: 'Freelance Web Developer', company: 'Self-Employed', date: '2021 — 2022', color: 'orange', body: 'Designed responsive websites for small businesses using WordPress, React, and Laravel. Implemented custom API integrations that enhanced functionality and engagement.' },
    ]
    return (
        <section id="work" className="work ruled"><div className="section-heading"><div><p className="eyebrow">02 / THE TRAIL</p><h2>Where I&apos;ve been.</h2></div><p className="section-aside">A timeline of things<br />learned and shipped.</p></div>
            <div className="experience-grid">{experience.map((item, index) => <article className={`note note-${item.color} experience tilt-${index % 2 ? 'right' : 'left'}`} key={item.company}><Pin /><span className="index">0{index + 1}</span><p className="date">{item.date}</p><h3>{item.role}</h3><p className="company">{item.company}</p><p className="body">{item.body}</p></article>)}</div>
        </section>
    )
}

