import { useState } from 'react'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/portfolioData'
import { Sparkles, Layout, Database, Bot, Globe } from 'lucide-react'

const filterCategories = [
  { id: 'all', label: 'All Projects (7)' },
  { id: 'genai', label: 'Agentic AI & LLMs', icon: Bot },
  { id: 'live', label: 'Live Platforms', icon: Globe },
  { id: 'ai', label: 'Computer Vision', icon: Sparkles },
  { id: 'fullstack', label: 'Full-Stack & Microservices', icon: Layout },
  { id: 'data', label: 'Data Engineering & ML', icon: Database },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'live'
    ? projects.filter(p => p.isLive)
    : projects.filter(p => p.category === filter)

  return (
    <>
      <section className="page-intro container">
        <p className="eyebrow">Selected Work</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          Things I’ve<br />
          <em>architected & shipped.</em>
        </h1>
        <p className="max-w-2xl text-ink/75 text-base sm:text-lg leading-relaxed mt-4">
          A showcase of 7 distinct projects spanning autonomous multi-agent code generation, live web applications (Matric Services, Study Tracker, Varahi Pickles), semantic video search, and distributed data pipelines.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2.5" role="tablist" aria-label="Project category filters">
          {filterCategories.map(cat => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={filter === cat.id}
                onClick={() => setFilter(cat.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-saffron ${
                  filter === cat.id
                    ? 'bg-saffron text-[#080510] shadow-[2px_2px_0_rgb(var(--detail))]'
                    : 'border border-ink/20 bg-paper/60 text-ink/75 hover:border-saffron hover:text-ink'
                }`}
              >
                {Icon && <Icon size={14} />}
                {cat.label}
              </button>
            )
          })}
        </div>
      </section>

      <section className="container pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((p, index) => (
            <ProjectCard key={p.id} project={p} index={index + 1} />
          ))}
        </div>
      </section>
    </>
  )
}
