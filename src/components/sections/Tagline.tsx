import { useEffect, useRef } from 'react';

interface TaglineProps {
  text: string;
}

export function Tagline({ text }: TaglineProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spans = Array.from(
      ref.current?.querySelectorAll<HTMLElement>('.tagline-word') ?? []
    );
    if (reduced || !('IntersectionObserver' in window) || spans.length === 0) {
      spans.forEach((s) => s.classList.add('lit'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('lit');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.8, rootMargin: '0px 0px -12% 0px' }
    );
    spans.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [text]);

  const words = text.split(' ');

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto w-full max-w-wrap px-5">
        <p
          ref={ref}
          aria-label={text}
          className="text-4xl md:text-5xl font-bold leading-[1.2] tracking-[-0.04em] max-w-hero [text-wrap:balance]"
        >
          {words.map((word, i) => (
            <span key={i} className="tagline-word">
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
