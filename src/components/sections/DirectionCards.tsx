import type { HomeDirectionCard } from '@/content/types';
import { ArrowUpRight } from '@/components/ui/ArrowUpRight';

interface DirectionCardsProps {
  cards: HomeDirectionCard[];
}

export function DirectionCards({ cards }: DirectionCardsProps) {
  
  // Функция для автоматического исправления путей к картинкам на GitHub Pages
  const resolveImageSrc = (path: string | undefined) => {
    if (!path) return undefined;
    // Если это ссылка http или data:, оставляем как есть
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    
    // Берем базовый URL из настроек Vite (там будет /sds_landing_bolt/)
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanPath = path.replace(/^\//, '');
    
    // Склейка: база + слэш + путь без начального слэша
    return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
  };

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
          {cards.map((c, i) => {
            // Вызываем нашу функцию для получения правильного пути
            const correctImgSrc = resolveImageSrc(c.image);

            return (
              <li
                key={c.number}
                className="reveal"
                style={{ '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}
              >
                <a
                  href={`#${c.href}`}
                  className="group relative flex flex-col justify-end h-full min-h-[360px] bg-panel border border-line rounded-2xl overflow-hidden transition-colors duration-500 hover:border-accent"
                >
                  {correctImgSrc && (
                    <>
                      <img
                        src={correctImgSrc} // Используем исправленный путь здесь
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/10" aria-hidden="true" />
                    </>
                  )}
                  <div className="relative p-6 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-accent-soft text-sm font-bold tracking-[0.08em]">
                        {c.number} · {c.short}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted transition-all duration-500 group-hover:text-accent-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] [text-wrap:balance]">
                      {c.title}
                    </h3>
                    <p className="text-muted text-sm leading-[1.6] [text-wrap:pretty]">
                      {c.text}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
