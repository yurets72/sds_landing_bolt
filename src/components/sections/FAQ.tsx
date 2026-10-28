import type { FaqItem } from '@/content/faq';

interface FAQProps {
  items: FaqItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <section className="py-20 lg:py-24 border-t border-line">
      <div className="mx-auto w-full max-w-wrap px-5">
        <div className="reveal mb-12 lg:mb-16">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Вопросы и ответы
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] max-w-hero [text-wrap:balance]">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-hero space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="reveal group bg-panel border border-line rounded-2xl overflow-hidden transition-colors duration-500 hover:border-accent"
              style={{ '--reveal-delay': `${Math.min(i * 80, 400)}ms` } as React.CSSProperties}
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-semibold leading-[1.3] [text-wrap:pretty]">
                  {item.q}
                </span>
                <span className="shrink-0 text-2xl font-bold text-accent leading-none" aria-hidden="true">
                  <span className="faq-marker-closed">+</span>
                  <span className="faq-marker-open">−</span>
                </span>
              </summary>
              <div className="px-6 pb-6 -mt-1">
                <p className="text-muted text-base leading-[1.65] [text-wrap:pretty]">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}