import type { BenefitCard } from '@/content/types';
import { ArrowUpRight } from '@/components/ui/ArrowUpRight';

interface BenefitsProps {
  benefits: BenefitCard[];
}

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="py-20 lg:py-24 border-t border-line">
      <div className="mx-auto w-full max-w-wrap px-5">
        <div className="reveal mb-12 lg:mb-16">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Что входит
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] max-w-hero [text-wrap:balance]">
            Состав работ по направлению
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 list-none p-0">
          {benefits.map((b, i) => (
            <li
              key={b.number}
              className="reveal bg-panel border border-line rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-500 hover:border-accent"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-accent-soft text-sm font-bold tracking-[0.08em]">
                  {b.number}
                </span>
                <span className="h-px w-10 bg-line" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] [text-wrap:balance]">
                {b.title}
              </h3>
              <p className="text-muted text-base leading-[1.65] [text-wrap:pretty]">
                {b.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
