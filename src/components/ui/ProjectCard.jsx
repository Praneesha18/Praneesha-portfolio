import { ArrowUpRight, Code2, Video, ShoppingBag, Bot, Server, Database, Globe, ExternalLink } from 'lucide-react'

const iconMap = {
  agent: Bot,
  cctv: Video,
  enterprise: Server,
  data: Database,
  pickles: ShoppingBag,
  web: Globe,
}

export default function ProjectCard({ project, spotlight = false, index = 1 }) {
  const Icon = iconMap[project.visual] || Code2
  const hasLiveLink = Boolean(project.link?.url)

  return (
    <article
      className={`project-card flex flex-col justify-between overflow-hidden transition-all duration-300 ${
        spotlight ? 'border-saffron/40 lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Clean top visual strip */}
        <div className={`project-visual-strip ${project.visual || 'web'}`}>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-paper/40 border border-ink/10 text-current">
              <Icon size={20} />
            </span>
            <div>
              <span className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-current opacity-85">
                {project.type}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {hasLiveLink && (
              <span className="live-badge">
                <span className="pulse-dot" /> Live Platform
              </span>
            )}
            <span className="font-mono text-xs font-bold opacity-60 text-current">
              0{index}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-7">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-ink/75">
            {project.desc}
          </p>

          {spotlight && project.details && (
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink/65 border-l-2 border-saffron/60 pl-3">
              {project.details}
            </p>
          )}

          {/* Clean tech stack pills */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 sm:p-7 sm:pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 mt-2">
        <div className="flex flex-wrap items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-saffron hover:underline focus:outline-none focus:ring-2 focus:ring-saffron"
            >
              <Code2 size={15} /> Source Code <ArrowUpRight size={13} />
            </a>
          )}
        </div>

        {hasLiveLink && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 text-saffron border border-saffron/35 px-3.5 py-1.5 text-xs font-bold hover:bg-saffron hover:text-[#080510] transition-colors"
          >
            <ExternalLink size={13} /> {project.link.label || 'Launch Live'}
          </a>
        )}
      </div>
    </article>
  )
}
