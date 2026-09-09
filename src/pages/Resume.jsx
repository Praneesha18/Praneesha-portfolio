import { Download, Mail, MapPin } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { links, skills, experiences, education } from '../data/portfolioData'

export default function Resume() {
  return (
    <>
      <section className="page-intro container">
        <p className="eyebrow">Résumé</p>
        <h1>
          The concise<br />
          <em>version.</em>
        </h1>
        <p>A snapshot of my technical focus, experience, and education.</p>
        <Button className="mt-8" href={links.resume} download>
          Download PDF
        </Button>
      </section>
      <section className="container pb-24">
        <div className="resume-sheet">
          <div className="flex flex-col gap-4 border-b border-ink/15 pb-8 sm:flex-row sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold">Bheemarasetty Praneesha</h2>
              <p className="mt-1 text-ink/60">Software Development Engineer Intern</p>
            </div>
            <div className="text-sm text-ink/65">
              <a href={`mailto:${links.email}`} className="block hover:text-saffron">
                <Mail className="mr-1 inline" size={14} />
                {links.email}
              </a>
              <span>
                <MapPin className="mr-1 inline" size={14} />
                Bengaluru, Karnataka
              </span>
            </div>
          </div>

          <div className="mt-10">
            <SectionHeading eyebrow="Technical skills" title="Core toolkit" />
            <div className="grid gap-5 md:grid-cols-2">
              {skills.map(([n, v]) => (
                <p key={n}>
                  <strong>{n}</strong>
                  <br />
                  <span className="text-ink/65">{v}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Experience" title="Work history" />
            <div className="space-y-7">
              {experiences.map(e => (
                <div key={e.company + e.role}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-bold text-base text-ink">
                      {e.role} · <span className="text-ink/75">{e.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-ink/50">{e.date}</span>
                  </div>
                  {e.place && <p className="text-xs text-ink/45 mt-0.5">{e.place}</p>}
                  <ul className="mt-2 space-y-1.5 text-sm text-ink/70">
                    {e.points.map(pt => (
                      <li key={pt} className="before:mr-2 before:text-saffron before:content-['—']">
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {e.link && (
                    <a
                      href={e.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-xs font-bold text-moss hover:underline"
                    >
                      {e.link.label} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Education" title="Academic record" />
            {education.map(e => (
              <p key={e.degree} className="mb-4">
                <strong>{e.degree}</strong> · {e.result}
                <br />
                <span className="text-sm text-ink/60">
                  {e.school}, {e.date}
                </span>
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
