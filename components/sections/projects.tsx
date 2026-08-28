'use client'

import { Pin } from "lucide-react"

export default function Projects() {

    const projects = [
        {
            name: 'Iloilo Directory Website',
            image: 'visitiloilo.png',
            type: 'Wordpress Website',
            color: 'yellow',
            techStack: ['wordpress', 'elementor'],
            body: 'A project from LGU that aims to empower tourism and introduce locals culture such as delicacies, events, tourist spots and etc. Made with wordpress and elementor',
            link: 'https://visitiloilocity.com/'
        },
        {
            name: 'We are Stellar',
            image: 'wearestellar.png',
            type: 'Full stack web application',
            color: 'pink',
            techStack: ['React', 'Laravel', 'Bootstrap', 'Axios', 'Postgresql'],
            body: 'A web application built for pyramid type of business. Built this project with React JS on frontend + Laravel on backend. The application allows users to register and login to their account, view their profile, and view their downlines. Users can also view their earnings and withdraw their earnings.',
            link: 'https://github.com/JesseEmmanuel/stellarweb'
        },
        {
            name: 'Parkfinder WIP (unofficial)',
            image: 'parkfinder.png',
            type: 'Full stack web application',
            color: 'blue',
            techStack: ['Laravel', 'Inertiajs', 'React', 'Tailwind', 'Maplibre GL', 'Postgresql'],
            body: 'A startup project aimed at helping users find parking spots in real-time. Built with RILT (React + Inertia + Laravel + Tailwind) stack, it features a user-friendly interface and integrates with MapLibre GL API (for now) for location services.',
            link: 'https://github.com/JesseEmmanuel/park-finder'
        },
        {
            name: 'Bullpup Landing Page',
            image: 'bullpup.png',
            type: 'Landing page',
            color: 'green',
            techStack: ['React', 'Tailwind', 'Resend'],
            body: 'A professional landing page designed for a local business to showcase its services, establish a strong online presence, and make it easy for potential customers to learn more and get in touch.',
            link: 'https://bullpupptyltd.com/'
        },
    ]

    return (

        <section id="toolkit" className="projects ruled" data-parallax data-parallax-speed="0.045">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">
                        03 / SELECTED WORK
                    </p>
                    <h2>
                        Things I&apos;ve<br /><em>made or I'm part of.</em>
                    </h2>
                </div>
                <p className="section-aside">
                    A few projects<br />worth a closer look.
                </p>
            </div>
            <div className="experience-grid project-grid">{projects.map((project, index) => <article className={`note note-${project.color} experience tilt-${index % 2 ? 'right' : 'left'}`} key={project.name}>
                <Pin />
                <span className="index">
                    0{index + 1}
                </span>
                <p className="date">
                    {project.type}
                </p>
                <div className="skill-list mb-4">
                    {project.techStack.map(stack => <span key={stack}>{stack}</span>)}
                </div>
                <h3>{project.name}</h3>
                <div className="project-frame">
                    <img src={project.image} alt={`project ${index}`} />
                </div>
                <p className="body">
                    {project.body}
                </p>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    VIEW PROJECT ↗
                </a>
            </article>
            )}
            </div>
        </section>
    )
}
