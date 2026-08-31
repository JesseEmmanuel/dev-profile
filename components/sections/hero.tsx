import { Pin } from 'lucide-react'

export default function Hero() {
    return (
        <section id="top" className="hero section-grid">
            <div className="hero-copy note note-yellow tilt-left">
                <Pin /><p className="eyebrow">THE DEVELOPER GAZETTE</p>
                <h1>Building the web, <br /> one <em>thoughtful</em> solution at a time.</h1>
                <p className="intro">Full-stack web developer crafting robust, user-centric web experiences from frontend finesse to backend reliability.</p>
                <a className="ink-link" href="#work">READ MY STORY <span>↘</span></a>
            </div>
            <div className="hero-side">
                <div className="stamp">AVAILABLE<br /><strong>FOR WORK</strong></div>
                <div className="hero-fact note note-blue tilt-right"><Pin /><p className="eyebrow">FAST FACT</p><p className="fact-number">3<span>+</span></p><p>years turning ideas<br />into shipped software</p></div>
            </div>
        </section>
    )
}
