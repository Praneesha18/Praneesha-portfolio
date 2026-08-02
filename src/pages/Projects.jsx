import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/portfolioData'
export default function Projects(){ return <><section className="page-intro container"><p className="eyebrow">Selected work</p><h1>Things I’ve<br/><em>made matter.</em></h1><p>Two focused projects where product thinking meets engineering detail.</p></section><section className="container pb-24"><div className="grid gap-8">{projects.map(p=><ProjectCard key={p.title} project={p} featured/>)}</div></section></> }
