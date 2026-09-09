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
    <article className={`project-card surface-card group overflow-hidden rounded-[1.7rem] border border-ink/15 flex flex-col justify-between ${featured ? 'shadow-card' : ''}`}>
      <div>
        <div className={`project-visual ${project.visual}`}>
          <div className="visual-grid" />
          <span className="project-number">0{index}</span>
          <Icon aria-hidden="true" size={featured ? 52 : 40} />
          <span>{project.type}</span>
        </div>

        <div className="project-card-body p-6 sm:p-7">
          <div className="project-title-line">
            <p className="project-label">Selected build</p>
            <span aria-hidden="true">✦</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">{project.title}</h3>
          <p className="mt-3 leading-7 text-ink/65 text-sm sm:text-base">{project.desc}</p>
          {featured && <p className="mt-4 text-sm leading-6 text-ink/60">{project.details}</p>}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map(item => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 sm:p-7 sm:pt-0 flex flex-wrap items-center gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link inline-flex items-center gap-2 text-sm font-bold text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
          >
            <Code2 size={17} /> View repository <ArrowUpRight size={15} />
          </a>
        )}
        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-moss hover:underline"
          >
            {project.link.label} <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  )
}
