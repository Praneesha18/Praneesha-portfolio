import { useState } from 'react'
import { Sparkles, Layout, Server, Database, Wrench, CheckCircle2 } from 'lucide-react'
import { skillCategories } from '../../data/portfolioData'

const categoryIcons = {
  genai: Sparkles,
  frontend: Layout,
  backend: Server,
  data: Database,
  engineering: Wrench,
}

export default function SkillCluster() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab)

  return (
    <div className="mt-8 space-y-8">
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
        <button
          role="tab"
          aria-selected={activeTab === 'all'}
          onClick={() => setActiveTab('all')}
          className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-saffron ${
            activeTab === 'all'
              ? 'bg-saffron text-[#080510] shadow-[2px_2px_0_rgb(var(--detail))]'
              : 'border border-ink/20 bg-paper/60 text-ink/75 hover:border-saffron hover:text-ink'
          }`}
        >
          All Skills (25 Topics)
        </button>
        {skillCategories.map(cat => {
          const Icon = categoryIcons[cat.id] || Sparkles
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-saffron ${
                activeTab === cat.id
                  ? 'bg-saffron text-[#080510] shadow-[2px_2px_0_rgb(var(--detail))]'
                  : 'border border-ink/20 bg-paper/60 text-ink/75 hover:border-saffron hover:text-ink'
              }`}
            >
              <Icon size={14} />
              {cat.name}
            </button>
          )
        })}
      </div>

      {/* Domain Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredCategories.map(category => {
          const Icon = categoryIcons[category.id] || Sparkles
          return (
            <div
              key={category.id}
              className="surface-card rounded-2xl border border-ink/15 p-6 transition-all hover:border-saffron/50"
            >
              <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-saffron/15 text-saffron">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">{category.name}</h3>
                </div>
                <span className="rounded-full border border-ink/15 bg-white/5 px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-moss">
                  {category.badge}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {category.skills.map(group => (
                  <div key={group.title} className="rounded-xl bg-paper/40 p-3.5 border border-ink/5">
                    <h4 className="text-sm font-bold text-saffron flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-saffron shrink-0" />
                      {group.title}
                    </h4>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {group.items.map(item => (
                        <span
                          key={item}
                          className="inline-block rounded-md border border-ink/10 bg-white/5 px-2.5 py-1 text-xs text-ink/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
