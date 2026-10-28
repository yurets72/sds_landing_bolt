import type { ProofItem } from '@/content/types';

interface ProofProps {
  proof: ProofItem[];
}

export function Proof({ proof }: ProofProps) {
  return (
    <section className="py-20 lg:py-24 border-t border-line">
      <div className="mx-auto w-full max-w-wrap px-5">
        <div className="reveal mb-12 lg:mb-16">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            История проектов
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] max-w-hero [text-wrap:balance]">
            Более 10 лет реальных запусков
          </h2>
        </div>

        <ol className="relative list-none p-0 m-0 ml-2 md:ml-4">
          {/* Вертикальная линия */}
          <span
            className="absolute left-[5px] top-2 bottom-2 w-px bg-line"
            aria-hidden="true"
          />

          {proof.map((p, i) => (
            <li
              key={p.year}
              className="reveal relative pl-8 pb-10 last:pb-0"
              style={{ '--reveal-delay': `${Math.min(i * 80, 400)}ms` } as React.CSSProperties}
            >
              {/* Точка */}
              <span
                className="absolute top-1.5 left-0 h-3 w-3 rounded-full bg-accent"
                aria-hidden="true"
              />
              <div className="text-sm font-bold text-accent-soft tracking-[0.08em] mb-1">
                {p.year}
              </div>
              <div className="text-base text-text leading-[1.6] [text-wrap:pretty]">
                {p.text}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}