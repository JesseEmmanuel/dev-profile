import { Pin } from 'lucide-react'

export default function AboutMe() {
    const skills = ['React.js', 'Next.js', 'Nest.js', 'Laravel', 'Django', 'PHP', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zod', 'shadcn/ui', 'MySQL', 'PostgreSQL', 'Prisma', 'AWS', 'Linux', 'WebSockets', 'Git', 'Wordpress', 'Elementor']
    return (
        <section id="about" className="about section-grid ruled" data-parallax data-parallax-speed="0.04">
            <div className="about-heading">
                <p className="eyebrow">01 / THE PERSON</p>
                <h2>
                    Hi, I&apos;m Jesse.
                </h2>
                <a className="resume-link" href="/jesse-emmanuel-basco-resume.pdf" target="_blank" rel="noreferrer">VIEW MY RESUME <span>↗</span>
                </a>
                <div className="skill-note note note-green tilt-left mt-4">
                    <Pin />
                    <div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}
                    </div>
                </div>
            </div>
            <div className="about-note note note-pink tilt-right">
                <Pin />
                <div className="portrait-frame">
                    <img src="/me.jpg" alt="Jesse Emmanuel Basco smiling at an event" />
                </div>
                <p>I&apos;m a full-stack developer based in the Philippines, focused on building scalable applications and thoughtful interfaces. I enjoy the messy middle: translating a hard problem into something clear, useful, and a little delightful.
                </p>
                <p className="signature">
                    — Jesse
                </p>
            </div>
        </section>
    )
}
