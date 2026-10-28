import type { HeroContent } from '@/content/types';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  hero: HeroContent;
  ctaHref?: string;
}

const stages = ['Подбор', 'Поставка', 'Монтаж', 'Запуск', 'Сервис'];

export function Hero({ hero, ctaHref }: HeroProps) {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto w-full max-w-wrap px-5 grid gap-10 lg:gap-12 lg:grid-cols-2 items-center">
        {/* Левая колонка — текст */}
        <div className="reveal">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            {hero.eyebrow}
          </p>
          <h1 className="h1-gradient text-5xl md:text-6xl font-bold leading-[1.08] tracking-[-0.045em] max-w-hero mb-6 [text-wrap:balance]">
            {hero.h1Lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lg text-muted max-w-hero mb-6 [text-wrap:pretty]">
            {hero.lead}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button href={ctaHref ?? `#${hero.ctaHref}`} variant="primary">
              {hero.ctaLabel}
            </Button>
          </div>
          <p className="mt-6 pt-4 border-t border-line text-sm text-muted max-w-hero">
            {hero.proof}
          </p>
        </div>

        {/* Правая колонка — видео или картинка */}
        <div className="relative reveal">
          <div className="relative overflow-hidden rounded-2xl aspect-[1.06/1] bg-panel border border-line">
            {hero.video ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={hero.video}
                poster={hero.image?.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={hero.image?.alt ?? 'Промышленное оборудование'}
              />
            ) : hero.image ? (
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : null}

            {/* Тёплый оверлей, чтобы видео вписалось в палитру */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Полоса этапов поверх видео */}
            <div className="absolute inset-x-4 bottom-4 z-10">
              <div className="bg-bg/80 backdrop-blur-md rounded-xl p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-soft mb-3">
                  Один подрядчик на весь цикл
                </p>
                <ol className="flex items-center justify-between gap-1 list-none p-0 m-0">
                  {stages.map((stage, i) => (
                    <li key={stage} className="flex items-center gap-1 flex-1 min-w-0">
                      <span className="text-xs font-semibold text-text whitespace-nowrap truncate">
                        {stage}
                      </span>
                      {i < stages.length - 1 && (
                        <span
                          className="h-px flex-1 bg-line min-w-[8px]"
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}