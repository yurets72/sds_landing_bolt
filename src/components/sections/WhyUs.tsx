import type { WhyUsItem } from '@/content/types';

interface WhyUsProps {
  items: WhyUsItem[];
}

export function WhyUs({ items }: WhyUsProps) {
  return (
    <section className="py-20 lg:py-24 border-t border-line">
      <div className="mx-auto w-full max-w-wrap px-5">
        <div className="reveal mb-12 lg:mb-16">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Почему СДС
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] max-w-hero [text-wrap:balance]">
            Китайское оборудование без китайских рисков
          </h2>
        </div>

        <ol className="grid gap-8 md:grid-cols-3 list-none p-0">
          {items.map((item, i) => (
            <li
              key={item.number}
              className="reveal flex flex-col gap-4"
              style={{ '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}
            >
              <span className="text-3xl md:text-4xl font-bold text-accent-soft leading-none">
                {item.number}
              </span>
              <h3 className="text-xl font-semibold leading-[1.2] tracking-[-0.02em] [text-wrap:balance]">
                {item.title}
              </h3>
              <p className="text-muted text-base leading-[1.65] [text-wrap:pretty]">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}