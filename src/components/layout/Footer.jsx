import { Code2, BriefcaseBusiness, ArrowUp, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { links } from '../../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 py-10 bg-paper/80">
      <div className="container flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-ink">
            Bheemarasetty Praneesha
          </p>
          <p className="text-xs text-ink/60 mt-0.5">
            Software Development Engineer Intern · Bengaluru, Karnataka
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-semibold text-ink/75">
          <Link to="/" className="hover:text-saffron transition-colors">
            Home
          </Link>
          <Link to="/projects" className="hover:text-saffron transition-colors">
            Projects (7)
          </Link>
          <Link to="/resume" className="hover:text-saffron transition-colors">
            Résumé
          </Link>
          <a
            aria-label="GitHub Profile"
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-saffron transition-colors"
          >
            <Code2 size={18} />
          </a>
          <a
            aria-label="LinkedIn Profile"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-saffron transition-colors"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a
            className="inline-flex items-center gap-1 font-bold text-moss hover:text-saffron transition-colors"
            href="#top"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
