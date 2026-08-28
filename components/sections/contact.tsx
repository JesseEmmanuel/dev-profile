import { Pin } from 'lucide-react'
import { useState } from 'react';

export default function Contact() {
    const [copied, setCopied] = useState(false)
    const copyEmail = async () => { await navigator.clipboard?.writeText('jesseemmanuel@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1800) }
    return (
        <>
            <section id="contact" className="contact note note-orange tilt-right"><Pin /><p className="eyebrow">04 / THE NEXT CHAPTER</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><p>Have a project, an idea, or just want to say hello?</p><div className="contact-actions"><a className="email" href="mailto:jesseemmanuel@gmail.com">jesseemmanuel@gmail.com ↗</a><button onClick={copyEmail} className="copy-button">{copied ? 'COPIED' : 'COPY EMAIL'}</button></div></section>

            <footer><span>JESSE EMMANUEL BASCO</span><span>FULL-STACK SOFTWARE DEVELOPER</span><span>© 2026 / BUKIDNON MINDANAO, PH</span></footer>
        </>
    )
}
