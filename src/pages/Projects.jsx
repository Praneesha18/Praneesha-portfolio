import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <>
      <section className="page-intro container">
        <p className="eyebrow">Selected work</p>
        <h1>
          Things I’ve<br />
          <em>made matter.</em>
        </h1>
        <p>
          Selected engineering projects where product thinking meets robust implementation — across autonomous AI agents, production web platforms, and computer vision systems.
        </p>
      </section>
      <section className="container pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, index) => (
            <ProjectCard key={p.title} project={p} index={index + 1} featured />
          ))}
        </div>
      </section>
    </>
  )
}
