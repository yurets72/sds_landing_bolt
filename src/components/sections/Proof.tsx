import type { ProofItem } from '@/content/types';

interface ProofProps {
  proof: ProofItem[];
}

export function Proof({ proof }: ProofProps) {
  return (
    <section className="py-20 lg:py-24 border-t border-line relative overflow-hidden">
      {/* Свечение */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-wrap px-5 relative z-10">
        <div className="reveal mb-16 text-center lg:text-left">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5 inline-block">
            История проектов
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] [text-wrap:balance]">
            Более 10 лет реальных запусков
          </h2>
        </div>

        <div className="relative">
          {/* Линия таймлайна */}
          <span
            className="absolute top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-line to-transparent 
                       left-4 md:left-1/2 md:-translate-x-1/2 opacity-60"
            aria-hidden="true"
          />

          <ol className="list-none p-0 m-0 space-y-12 md:space-y-0">
            {proof.map((p, i) => {
              const isLeft = i % 2 === 0;
              
              return (
                <li
                  key={`${p.year}-${i}`}
                  className="reveal relative pb-12 last:pb-0"
                  style={{ '--reveal-delay': `${Math.min(i * 80, 400)}ms` } as React.CSSProperties}
                >
                  {/* Точка */}
                  <span
                    className={`absolute top-1.5 h-3 w-3 rounded-full ring-4 ring-bg z-20
                               left-4 -translate-x-1/2 
                               md:left-1/2 md:-translate-x-1/2
                               ${isLeft ? 'bg-accent' : 'bg-accent-soft'}`}
                    aria-hidden="true"
                  />

                  {/* Контент */}
                  {/* На мобилке: всегда слева (pl-10). На десктопе: чередуем col-start */}
                  <div 
                    className={`
                      pl-10 md:pl-0
                      md:grid md:grid-cols-2 md:gap-12
                      ${isLeft ? 'md:col-start-1 md:text-right md:pr-12' : 'md:col-start-2 md:text-left md:pl-12'}
                    `}
                  >
                    <div className="inline-block max-w-md">
                      <span className="block text-2xl md:text-3xl font-black text-accent tracking-tight leading-none mb-2">
                        {p.year}
                      </span>
                      <p className="text-base text-muted leading-relaxed [text-wrap:pretty]">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
