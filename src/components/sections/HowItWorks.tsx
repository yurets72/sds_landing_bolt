import type { StepItem } from '@/content/types';

interface HowItWorksProps {
  steps: StepItem[];
  title?: string;
}

const REVEAL_DELAYS = ['0ms', '100ms', '150ms', '200ms', '300ms', '500ms'];

export function HowItWorks({ steps, title = 'От запроса до запуска' }: HowItWorksProps) {
  return (
    <section className="py-20 lg:py-24 border-t border-line">
      <div className="mx-auto w-full max-w-wrap px-5">
        <div className="reveal mb-12 lg:mb-16">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Как мы работаем
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] max-w-hero [text-wrap:balance]">
            {title}
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 list-none p-0">
          {steps.map((s, i) => (
            <li
              key={s.number}
              className="reveal bg-panel border border-line rounded-2xl p-8 flex flex-col gap-4 hover:border-accent transition-colors duration-500"
              style={{ '--reveal-delay': REVEAL_DELAYS[i] ?? '0ms' } as React.CSSProperties}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-accent-soft leading-none">
                  {s.number}
                </span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] [text-wrap:balance]">
                {s.title}
              </h3>
              <p className="text-muted text-base leading-[1.65] [text-wrap:pretty]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}