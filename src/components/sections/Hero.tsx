import type { HeroContent } from '@/content/types';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  hero: HeroContent;
  ctaHref?: string;
}

export function Hero({ hero, ctaHref }: HeroProps) {
  return (
    // Делаем глубокий премиальный темный фон на весь экран с технологичной сеткой на бэкграунде
    <section className="relative min-h-[90vh] flex items-center py-20 lg:py-28 bg-zinc-950 text-white overflow-hidden selection:bg-orange-600 selection:text-white">
      {/* Технологичный фоновый паттерн (Grid) и радиальный градиент */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative mx-auto w-full max-w-wrap px-5 grid gap-12 lg:gap-16 lg:grid-cols-2 items-center z-10">
        {/* Левая колонка — массивный брутальный текст */}
        <div className="reveal flex flex-col justify-center">
          <p className="inline-flex items-center gap-2 text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-6 bg-orange-500/10 px-3 py-1.5 rounded-full w-fit border border-orange-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            {hero.eyebrow}
          </p>
          
          {/* Делаем заголовок огромным и ультражирным */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight max-w-hero mb-6 [text-wrap:balance]">
            {hero.h1Lines.map((line, i) => (
              <span key={i} className={`block ${i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600' : 'text-zinc-100'}`}>
                {line}
              </span>
            ))}
          </h1>
          
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-hero mb-8 [text-wrap:pretty]">
            {hero.lead}
          </p>
          
          {/* Интерактивная кнопка с мягким неоновым свечением при наведении */}
          <div className="flex gap-4 flex-wrap">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300 group-hover:duration-200" />
              <Button 
                href={ctaHref ?? `#${hero.ctaHref}`} 
                variant="primary"
                className="relative px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center shadow-lg shadow-orange-950/50"
              >
                {hero.ctaLabel}
              </Button>
            </div>
          </div>
          
          {/* Строгая индустриальная линия-разделитель */}
          <p className="mt-10 pt-5 border-t border-zinc-800 text-xs sm:text-sm text-zinc-500 max-w-hero font-medium tracking-wide">
            {hero.proof}
          </p>
        </div>

        {/* Правая колонка — мощное видео в стиле Glassmorphism */}
        <div className="relative reveal rounded-2xl overflow-hidden aspect-[1.1/1] bg-zinc-900 border border-zinc-800/80 shadow-2xl shadow-black/80 group">
          {/* Мягкий свет по контуру видео */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl z-20 pointer-events-none group-hover:border-orange-500/20 transition-colors duration-500" />
          
          {hero.video ? (
            <video
              className="absolute inset-0 w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
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
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : null}

          {/* Затемнение снизу для идеального вписывания в глубокие темные тона */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none z-10" aria-hidden="true" />

          {/* Подпись поверх видео — эффект матового стекла (Glassmorphism) */}
          <div className="absolute inset-x-4 bottom-4 bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-xl text-sm z-20 shadow-xl">
            <strong className="block text-zinc-100 text-base font-bold mb-1 tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              СпецДорСервис
            </strong>
            <span className="text-zinc-400 font-medium">
              Подбор, поставка, монтаж и сервис в одних руках
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
