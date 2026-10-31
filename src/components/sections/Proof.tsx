import type { ProofItem } from '@/content/types';

interface ProofProps {
  proof: ProofItem[];
}

export function Proof({ proof }: ProofProps) {
  return (
    <section className="py-20 lg:py-24 border-t border-line relative">
      {/* Фоновое свечение для глубины */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="mx-auto w-full max-w-wrap px-5 relative z-10">
        <div className="reveal mb-12 lg:mb-16 text-center lg:text-left">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5 inline-block">
            История проектов
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] max-w-hero [text-wrap:balance] mx-auto lg:mx-0">
            Более 10 лет реальных запусков
          </h2>
        </div>

        <div className="relative">
          {/* Вертикальная линия таймлайна */}
          <span
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-line to-transparent left-[7px] md:left-1/2 md:-translate-x-1/2 opacity-50"
            aria-hidden="true"
          />

          <ol className="list-none p-0 m-0 space-y-12 md:space-y-0">
            {proof.map((p, i) => {
              const isLeft = i % 2 === 0;
              
              return (
                <li
                  key={`${p.year}-${i}`} // Добавили индекс к ключу для уникальности
                  className="reveal relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start pb-12 last:pb-0"
                  style={{ '--reveal-delay': `${Math.min(i * 100, 500)}ms` } as React.CSSProperties}
                >
                  
                  {/* Точка на линии */}
                  <span
                    className={`absolute top-1.5 left-0 h-3 w-3 rounded-full ring-4 ring-bg z-10 transition-colors duration-500 ${
                      isLeft ? 'bg-accent' : 'bg-accent-soft'
                    } md:left-1/2 md:-translate-x-1/2`}
                    aria-hidden="true"
                  />

                  {/* 
                    КОНТЕНТ БЛОКА 
                    Используем grid-column для позиционирования влево или вправо на десктопе.
                    На мобилке всё будет слева (col-span-3).
                  */}
                  <div 
                    className={`
                      col-span-3 md:col-span-1
                      pl-8 md:pl-0
                      ${isLeft ? 'md:text-right md:pr-12' : 'md:col-start-3 md:text-left md:pl-12'}
                    `}
                  >
                    {/* Карточка события */}
                    <div className="group">
                      <div className="text-2xl md:text-3xl font-black text-accent mb-2 tracking-tight group-hover:text-white transition-colors duration-300">
                        {p.year}
                      </div>
                      <div className="text-base text-muted leading-relaxed [text-wrap:pretty] group-hover:text-text transition-colors duration-300">
                        {p.text}
                      </div>
                      
                      {/* Декоративная линия, соединяющая точку с текстом (только десктоп) */}
                      <div className={`hidden md:block absolute top-3 h-px bg-line/50 w-8 ${isLeft ? '-right-8' : '-left-8'}`} />
                    </div>
                  </div>
                  
                  {/* Пустой спейсер для средней колонки (где точка), чтобы не ломать сетку */}
                  <div className="hidden md:block w-0" /> 

                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
