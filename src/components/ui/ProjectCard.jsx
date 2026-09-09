import { ArrowUpRight, Code2, Video, ShoppingBag, Globe, GraduationCap, Bot, Sparkles } from 'lucide-react'

const iconMap = {
  cctv: { icon: Video, label: 'Vision AI' },
  pickles: { icon: ShoppingBag, label: 'E-Commerce' },
  matric: { icon: Globe, label: 'Live Platform' },
  tracker: { icon: GraduationCap, label: 'Live App' },
  agent: { icon: Bot, label: 'Agentic AI' },
}

export default function ProjectCard({ project, featured = false, index = 1 }) {
  const meta = iconMap[project.visual] || { icon: Code2, label: 'Project' }
  const Icon = meta.icon

  return (
    <article className={`project-card surface-card group border border-ink/15 rounded-[1.35rem] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.18)] hover:border-saffron/60 ${featured ? 'shadow-card' : ''}`}>
      <div>
        {/* Cute Top Visual Banner */}
        <div className={`project-visual ${project.visual} h-16 sm:h-20 px-4 flex items-center justify-between`}>
          <div className="visual-grid" />
          <div className="relative z-10 flex items-center gap-2">
            <span className="project-number">0{index}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/80 backdrop-blur-md px-2.5 py-0.5 text-[10.5px] font-bold tracking-wide uppercase border border-ink/10 shadow-sm text-ink">
              <Icon size={12} className="text-saffron" />
              {meta.label}
            </span>
          </div>

          {project.link && (
            <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className="project-card-body p-4 sm:p-5">
          <div className="project-title-line mb-1.5">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-moss">
              {project.type}
            </span>
            <span aria-hidden="true" className="text-saffron text-xs">✦</span>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-saffron transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-ink/70 leading-relaxed">
            {project.desc}
          </p>

          {featured && (
            <p className="mt-2 text-xs text-ink/60 leading-relaxed border-l-2 border-saffron/40 pl-2.5 py-0.5">
              {project.details}
            </p>
          )}

          {/* Cute Tag Pills */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.stack.map(item => (
              <span key={item} className="tag transition-transform hover:scale-105">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cute Footer Action Buttons */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 mt-3 pt-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 hover:bg-saffron/15 text-saffron px-3 py-1 text-xs font-bold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-saffron"
          >
            <Code2 size={13} /> Code <ArrowUpRight size={12} />
          </a>
        ) : <div />}

        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-moss/15 hover:bg-moss/25 text-moss px-3 py-1 text-xs font-bold transition-all hover:scale-105"
          >
            {project.link.label} <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </article>
  )
}


