'use client'

import AboutMe from '@/components/sections/about-me'
import Contact from '@/components/sections/contact'
import Experience from '@/components/sections/experience'
import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'

export default function Page() {

  return (
    <main className="board-shell">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
