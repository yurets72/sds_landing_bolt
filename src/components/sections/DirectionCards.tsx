import type { HomeDirectionCard } from '@/content/types';
import { ArrowUpRight } from '@/components/ui/ArrowUpRight';

interface DirectionCardsProps {
  cards: HomeDirectionCard[];
}

export function DirectionCards({ cards }: DirectionCardsProps) {
  return (
    <section className="py-20 lg:py-24 border-t border-line">
      <div className="mx-auto w-full max-w-wrap px-5">
        <div className="reveal mb-12 lg:mb-16">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Направления
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] max-w-hero [text-wrap:balance]">
            Три направления работы
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3 list-none p-0">
          {cards.map((c, i) => (
            <li key={c.number} className="reveal">
              <a
                href={`#${c.href}`}
                className="group flex flex-col gap-5 h-full bg-panel border border-line rounded-2xl p-6 transition-colors duration-500 hover:border-accent"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-accent-soft text-sm font-bold tracking-[0.08em]">
                    {c.number} · {c.short}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted transition-all duration-500 group-hover:text-accent-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] [text-wrap:balance]">
                  {c.title}
                </h3>
                <p className="text-muted text-base leading-[1.65] [text-wrap:pretty]">
                  {c.text}
                </p>
                <span className="mt-auto pt-4 border-t border-line text-sm font-semibold text-accent-soft">
                  Перейти к направлению
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
