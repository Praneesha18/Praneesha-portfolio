import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react'

export default function ExperienceCard({ item, index }) {
  return (
    <article className="grid gap-5 border-t border-ink/15 py-8 md:grid-cols-[4rem_1fr_auto]">
      <span className="font-display text-base font-bold text-saffron">0{index + 1}</span>
      <div>
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-ink">
            {item.role}{' '}
            <span className="font-normal text-saffron">· {item.company}</span>
          </h3>
          {item.highlight && (
            <span className="inline-flex items-center gap-1 rounded-full border border-saffron/40 bg-saffron/10 px-2.5 py-0.5 text-xs font-semibold text-saffron">
              <CheckCircle2 size={12} /> {item.highlight}
            </span>
          )}
        </div>

        {item.place && (
          <p className="mt-1.5 flex items-center gap-1 text-xs sm:text-sm text-ink/60">
            <MapPin size={13} className="text-moss" />
            {item.place}
          </p>
        )}

        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink/75">
          {item.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron shrink-0" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {item.link && (
          <a
            href={item.link.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-moss hover:underline"
          >
            {item.link.label}
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>

      <time className="text-xs sm:text-sm font-mono font-medium text-moss md:text-right whitespace-nowrap">
        {item.date}
      </time>
    </article>
  )
}
