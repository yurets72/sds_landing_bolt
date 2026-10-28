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

        {/* Мобилка: простая линия слева. Десктоп: зигзаг */}
        <div className="relative">
          {/* Линия: на мобилке слева, на десктопе по центру */}
          <span
            className="absolute top-2 bottom-2 w-px bg-line left-[7px] md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="list-none p-0 m-0">
            {proof.map((p, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={p.year}
                  className="reveal relative pb-10 last:pb-0 pl-8 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-start"
                  style={{ '--reveal-delay': `${Math.min(i * 80, 400)}ms` } as React.CSSProperties}
                >
                  {/* Точка: на мобилке слева, на десктопе в центре */}
                  <span
                    className="absolute top-1.5 left-0 h-3 w-3 rounded-full bg-accent md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  />

                  {/* Левая часть (на десктопе — для чётных) */}
                  <div className={isLeft ? 'md:text-right' : 'md:invisible'}>
                    <div className="text-sm font-bold text-accent-soft tracking-[0.08em] mb-1">
                      {p.year}
                    </div>
                    <div className="text-base text-text leading-[1.6] [text-wrap:pretty]">
                      {p.text}
                    </div>
                  </div>

                  {/* Центральная колонка (пустая, держит точку на линии) */}
                  <div className="hidden md:block" aria-hidden="true" />

                  {/* Правая часть (на десктопе — для нечётных) */}
                  <div className={!isLeft ? 'md:text-left' : 'md:invisible'}>
                    <div className="text-sm font-bold text-accent-soft tracking-[0.08em] mb-1">
                      {p.year}
                    </div>
                    <div className="text-base text-text leading-[1.6] [text-wrap:pretty]">
                      {p.text}
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