import { Download, Mail, MapPin, Phone, ExternalLink, CheckCircle2 } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { links, skills, experiences, education } from '../data/portfolioData'

export default function Resume() {
  return (
    <>
      <section className="page-intro container">
        <p className="eyebrow">Résumé</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          The concise<br />
          <em>professional profile.</em>
        </h1>
        <p className="max-w-2xl text-ink/75 text-base sm:text-lg leading-relaxed mt-4">
          A comprehensive snapshot of my technical proficiencies, enterprise and startup internship experiences, academic distinctions, and project achievements.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={links.resume} download>
            <Download size={16} /> Download PDF Résumé
          </Button>
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-3 text-sm font-bold text-ink/80 hover:border-saffron hover:text-ink transition-colors"
          >
            Open in New Tab <ExternalLink size={14} />
          </a>
        </div>
      </section>

      <section className="container pb-28">
        <div className="resume-sheet">
          {/* Header */}
          <div className="flex flex-col gap-5 border-b border-ink/15 pb-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
                Bheemarasetty Praneesha
              </h2>
              <p className="mt-1 text-base sm:text-lg font-medium text-saffron">
                Software Development Engineer Intern
              </p>
              <p className="mt-1 text-xs sm:text-sm text-ink/70 max-w-xl">
                CSE undergraduate at Andhra University College of Engineering (CGPA 8.80 / 10). Solved 150+ problems on LeetCode. Specialized in Agentic AI & LangGraph, Prompt Engineering & RAG, System Design, and Enterprise Full-Stack Web Development.
              </p>
            </div>

            <div className="space-y-1.5 text-xs sm:text-sm text-ink/75 sm:text-right shrink-0">
              <a
                href={`mailto:${links.email}`}
                className="flex items-center sm:justify-end gap-1.5 hover:text-saffron transition-colors"
              >
                <Mail size={14} className="text-moss" />
                {links.email}
              </a>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone size={14} className="text-moss" />
                {links.phone}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin size={14} className="text-moss" />
                Bengaluru, Karnataka
              </p>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="mt-10">
            <SectionHeading eyebrow="Technical Competencies" title="Core Toolkit Across 8 Specialized Domains" />
            <div className="grid gap-4 md:grid-cols-2">
              {skills.map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-ink/10 bg-paper/50 p-4">
                  <h4 className="font-display text-sm font-bold text-saffron flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-saffron shrink-0" />
                    {title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink/80">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Timeline */}
          <div className="mt-14">
            <SectionHeading eyebrow="Professional Experience" title="Work History & Key Deliverables" />
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.company + exp.date}
                  className="rounded-2xl border border-ink/10 bg-paper/40 p-6 transition-all hover:border-saffron/40"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-ink/10 pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-ink flex flex-wrap items-center gap-2">
                        {exp.role}
                        <span className="font-normal text-saffron">· {exp.company}</span>
                        {exp.highlight && (
                          <span className="rounded-full bg-saffron/15 text-saffron border border-saffron/30 px-2 py-0.5 text-[0.7rem] font-bold">
                            {exp.highlight}
                          </span>
                        )}
                      </h3>
                      {exp.place && (
                        <p className="text-xs text-ink/60 mt-0.5 flex items-center gap-1">
                          <MapPin size={12} className="text-moss" /> {exp.place}
                        </p>
                      )}
                    </div>
                    <time className="font-mono text-xs font-semibold text-moss shrink-0">
                      {exp.date}
                    </time>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs sm:text-sm leading-relaxed text-ink/75">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.link && (
                    <a
                      href={exp.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3.5 inline-flex items-center gap-1 text-xs font-bold text-moss hover:underline"
                    >
                      {exp.link.label} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Snapshot */}
          <div className="mt-14">
            <SectionHeading eyebrow="Education & Academics" title="Formal Foundations" />
            <div className="grid gap-4 sm:grid-cols-3">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-xl border border-ink/10 bg-paper/50 p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-moss">{edu.date}</span>
                    <h4 className="mt-2 text-sm font-bold text-ink leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-xs text-ink/60">
                      {edu.school}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-ink/10">
                    <span className="inline-block rounded-md bg-saffron/15 px-2 py-1 text-xs font-bold text-saffron">
                      {edu.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
