import { ArrowUpRight, Code2, Video, ShoppingBag, Globe, GraduationCap, Bot } from 'lucide-react'

const iconMap = {
  cctv: Video,
  pickles: ShoppingBag,
  matric: Globe,
  tracker: GraduationCap,
  agent: Bot,
}

export default function ProjectCard({ project, featured = false, index = 1 }) {
  const Icon = iconMap[project.visual] || Code2

  return (
    <article className={`project-card surface-card group border border-ink/15 flex flex-col justify-between ${featured ? 'shadow-card' : ''}`}>
      <div>
        <div className={`project-visual ${project.visual}`}>
          <div className="visual-grid" />
          <span className="project-number">0{index}</span>
          <Icon aria-hidden="true" size={featured ? 28 : 24} />
          <span>{project.type}</span>
        </div>

        <div className="project-card-body p-4 sm:p-5">
          <div className="project-title-line">
            <p className="project-label">Selected build</p>
            <span aria-hidden="true">✦</span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink">{project.title}</h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/70">{project.desc}</p>
          {featured && <p className="mt-2.5 text-xs leading-relaxed text-ink/60">{project.details}</p>}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.stack.map(item => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 mt-3 pt-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
          >
            <Code2 size={15} /> Code <ArrowUpRight size={13} />
          </a>
        )}
        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-moss hover:underline"
          >
            {project.link.label} <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </article>
  )
}

