import { stats } from '../data/site'
import { Reveal } from './Reveal'

export function Stats() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-y divide-mauve/15 border-x border-b border-mauve/15 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="flex flex-col items-center px-4 py-8 text-center sm:py-10"
            >
              <div className="font-serif text-4xl text-plum sm:text-5xl">{s.value}</div>
              <div className="editorial-label mt-2">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
