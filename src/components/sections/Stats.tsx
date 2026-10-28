import type { StatItem } from '@/content/types';

interface StatsProps {
  items: StatItem[];
}

export function Stats({ items }: StatsProps) {
  return (
    <section className="py-16 lg:py-20 border-t border-line">
      <div className="mx-auto w-full max-w-wrap px-5">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {items.map((s, i) => (
            <div
              key={s.label}
              className="reveal flex flex-col gap-2"
              style={{ '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="order-1 text-4xl md:text-5xl font-bold leading-none tracking-[-0.03em] text-accent-soft">
                {s.value}
              </dd>
              <dd className="order-2 text-sm text-muted leading-[1.4] [text-wrap:pretty]">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}