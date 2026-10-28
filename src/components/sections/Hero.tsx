import type { HeroContent } from '@/content/types';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  hero: HeroContent;
  ctaHref?: string;
}

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

        {/* Правая колонка — видео фоном */}
        <div className="relative reveal rounded-2xl overflow-hidden aspect-[1.06/1] bg-panel border border-line">
          {hero.video ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={hero.video}
              poster={hero.image?.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : hero.image ? (
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : null}

          {/* Затемнение снизу, чтобы видео вписалось в тёмную тему */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

          {/* Подпись поверх видео */}
          <div className="absolute inset-x-4 bottom-4 bg-bg/80 backdrop-blur-md p-4 rounded-xl text-sm">
            <strong className="block text-text text-base mb-0.5">
              СпецДорСервис
            </strong>
            <span className="text-muted">
              Подбор, поставка, монтаж и сервис в одних руках
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}