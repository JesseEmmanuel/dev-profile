'use client'

import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="topbar">
            <a href="#top" className="brand">JEB<span>.</span></a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? 'CLOSE' : 'MENU'}</button>
            <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
                <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a><a href="#work" onClick={() => setMenuOpen(false)}>EXPERIENCE</a><a href="#toolkit" onClick={() => setMenuOpen(false)}>TOOLKIT</a><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
            </nav>
            <span className="edition">VOL. 01 / 2026</span>
        </header>
    )
}
