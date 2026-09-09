import { Code2, BriefcaseBusiness, Mail, MapPin, ArrowDown, Sparkles, ExternalLink, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import ExperienceCard from '../components/ui/ExperienceCard'
import SkillCluster from '../components/ui/SkillCluster'
import { links, experiences, projects, education } from '../data/portfolioData'

function SparkleStar({ className = '', size = 56, color1 = '#FDE047', color2 = '#F472B6', id = 'star' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`sparkle-star ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
      <path
        d="M50 0 C50 28, 72 50, 100 50 C72 50, 50 72, 50 100 C50 72, 28 50, 0 50 C28 50, 50 28, 50 0 Z"
        stroke={`url(#${id})`}
        strokeWidth="4"
        fill={`url(#${id})`}
        fillOpacity="0.2"
      />
    </svg>
  )
}

export default function Home() {
  // Flagship spotlights & live production platforms
  const spotlightProjects = projects.filter(p => p.spotlight)
  const liveProjects = projects.filter(p => p.isLive)

  return (
    <div id="top" className="min-h-screen">
      {/* Hero Section with Template Card */}
      <section className="container pt-8 pb-14 md:pt-12 md:pb-20">
        <div className="template-card relative p-6 sm:p-10 md:p-14 lg:p-16">
          {/* Top Row: Avatar on Left, Sparkles on Right */}
          <div className="flex items-start justify-between">
            {/* Circular Avatar with Gradient Ring */}
            <div className="avatar-ring inline-block">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 overflow-hidden rounded-full bg-[#170e28]">
                <img
                  src="/images/praneesha-avatar.svg"
                  alt="Illustrated portrait of Bheemarasetty Praneesha"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Sparkle Stars matching the template */}
            <div className="relative flex items-center gap-4 sm:gap-8 pr-2 sm:pr-6">
              <SparkleStar size={64} className="hidden sm:block" id="sparkle-top" color1="#FEF08A" color2="#F472B6" />
              <SparkleStar size={44} id="sparkle-bottom" color1="#FDE047" color2="#C084FC" />
            </div>
          </div>

          {/* Center Display Typography */}
          <div className="mt-8 sm:mt-11">
            <h1 className="template-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              Portfolio
            </h1>
            <p className="template-subtitle mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-mono font-bold tracking-tight">
              Bheemarasetty Praneesha
            </p>
          </div>

          {/* Value Statement: Highlighting GenAI, System Design & Full Stack */}
          <div className="mt-7 sm:mt-9 pt-6 border-t border-ink/15 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block rounded-full bg-saffron/15 text-saffron border border-saffron/30 px-3 py-0.5 text-xs font-mono font-bold uppercase tracking-wider">
                  Agentic AI & LangGraph
                </span>
                <span className="inline-block rounded-full bg-moss/15 text-moss border border-moss/30 px-3 py-0.5 text-xs font-mono font-bold uppercase tracking-wider">
                  Prompt Engineering & RAG
                </span>
                <span className="inline-block rounded-full bg-ink/10 text-ink border border-ink/20 px-3 py-0.5 text-xs font-mono font-bold uppercase tracking-wider">
                  System Design & Full-Stack
                </span>
              </div>
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                Software Development Engineer Intern. Recently completed intensive software engineering internship at <strong className="text-ink font-semibold">HashedIn by Deloitte</strong> (Bellandur, Bengaluru). Solved <strong className="text-saffron">150+ LeetCode problems</strong>, specializing in autonomous multi-agent systems, scalable system design, enterprise Angular 17+ and React web apps, Java Spring Boot microservices, and distributed PySpark pipelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button href="#projects">Explore Work</Button>
              <Button href={links.resume} download secondary>
                Download Résumé
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Social & Status Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-2 text-xs sm:text-sm text-ink/70">
          <div className="flex items-center gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold hover:text-saffron transition-colors"
            >
              <Code2 size={16} /> GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold hover:text-saffron transition-colors"
            >
              <BriefcaseBusiness size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-1.5 font-bold hover:text-saffron transition-colors"
            >
              <Mail size={16} /> Email
            </a>
          </div>
          <a href="#about" className="inline-flex items-center gap-1 text-moss hover:text-saffron font-semibold">
            Scroll to explore <ArrowDown size={14} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section container border-t border-ink/15 pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            eyebrow="01 / About"
            title="Practical engineering from autonomous agents to scalable backends."
          />
          <div className="max-w-2xl space-y-5 text-base sm:text-lg leading-relaxed text-ink/80">
            <p>
              I’m <strong className="text-ink">Praneesha</strong>, a Computer Science & Systems Engineering undergraduate from Andhra University College of Engineering (CGPA 8.80 / 10) who recently completed an engineering internship at <strong className="text-saffron">HashedIn by Deloitte</strong> in Bellandur, Bengaluru (April 27 — August 24).
            </p>
            <p>
              My expertise spans the modern AI and full-stack spectrum: from designing <strong className="text-ink">autonomous agent workflows with LangGraph & LangChain</strong>, production RAG with hybrid search and vector databases (ChromaDB, Pinecone, Qdrant), to architecting <strong className="text-ink">scalable distributed backends</strong> in Java (Spring Boot, Spring Batch, Kafka event streaming) and Python (FastAPI, Asyncio, Pydantic).
            </p>
            <p>
              I have hands-on experience building production web platforms like <a href="https://www.matricservices.in/" target="_blank" rel="noreferrer" className="text-saffron font-bold hover:underline">Matric Services (FixMyMill)</a> and the <a href="https://study-tracker-app-e37o.vercel.app/" target="_blank" rel="noreferrer" className="text-saffron font-bold hover:underline">Study Tracker App</a>, as well as distributed ELT data pipelines with PySpark and Pandas.
            </p>
            <p className="text-sm font-mono text-moss">
              Solid algorithmic grounding with 150+ problems solved on LeetCode & deep interest in System Design (Scalability, Caching, Load Balancing, Sharding).
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills / Capabilities Section */}
      <section id="skills" className="section tinted">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="02 / Capabilities"
              title="Prompt Engineering, Agentic AI, System Design & Full-Stack"
              text="Comprehensive skill depth across 25 focus areas mastered during HashedIn by Deloitte internship, production projects, and LeetCode problem solving."
            />
            <div className="mb-12 hidden md:block">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-xs font-bold text-saffron">
                <Sparkles size={14} /> Interactive Skill Explorer
              </span>
            </div>
          </div>

          <SkillCluster />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section container">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Learning by shipping in the real world."
          text="Hands-on experience delivering enterprise features, production portals, and data workflows."
        />
        <div className="mt-8">
          {experiences.map((item, index) => (
            <ExperienceCard key={item.company + item.date} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* De-cluttered Projects Section */}
      <section id="projects" className="section project-section">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-10">
            <SectionHeading
              eyebrow="04 / Selected Work"
              title="Architectural builds & live production platforms."
              text="De-cluttered view of core AI agent systems, live web deployments, and distributed architectures."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-saffron hover:underline whitespace-nowrap mb-6 sm:mb-12"
            >
              Explore all 7 project case studies →
            </Link>
          </div>

          {/* Sub-heading: Flagship AI Systems Spotlight */}
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-moss">
              01 · Flagship AI & Agentic Systems
            </span>
            <div className="h-px flex-1 bg-ink/10" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mb-12">
            {spotlightProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 1} spotlight />
            ))}
          </div>

          {/* Sub-heading: Live Production Platforms */}
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-moss">
              02 · Live Web Platforms & Portals
            </span>
            <div className="h-px flex-1 bg-ink/10" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {liveProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section container">
        <SectionHeading
          eyebrow="05 / Education"
          title="Foundation first."
          text="A path shaped by steady curiosity, strong computer science fundamentals, and academic distinction."
        />
        <div className="learning-path">
          {education.map((item, index) => (
            <article key={item.degree} className="learning-stop">
              <div className="learning-orbit">
                <span>0{index + 1}</span>
              </div>
              <p className="learning-date">{item.date}</p>
              <h3>{item.degree}</h3>
              <p className="learning-school">{item.school}</p>
              <p className="learning-result">{item.result}</p>
              {item.highlights && (
                <p className="mt-3 text-xs leading-relaxed text-ink/65">
                  {item.highlights}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container">
        <div className="contact-panel">
          <p className="eyebrow text-saffron">06 / Contact</p>
          <h2>
            Let’s build<br />
            <em>something impactful.</em>
          </h2>
          <p>
            Open to software engineering opportunities, Generative AI challenges, and collaborative teams.
          </p>

          <a className="contact-email" href={`mailto:${links.email}`}>
            <Mail size={20} />
            {links.email}
          </a>

          <div className="flex flex-wrap gap-5 text-sm font-bold pt-4 border-t border-ink/15">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-saffron transition-colors"
            >
              <BriefcaseBusiness size={16} /> LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-saffron transition-colors"
            >
              <Code2 size={16} /> GitHub
            </a>
            <span className="inline-flex items-center gap-1.5 text-ink/75">
              <MapPin size={16} className="text-moss" /> Bengaluru, Karnataka
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
