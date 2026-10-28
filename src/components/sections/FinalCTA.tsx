import { ContactForm } from './ContactForm';

interface FinalCTAProps {
  title?: string;
  lead?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export function FinalCTA({
  title = 'Обсудим ваш проект?',
  lead = 'Бесплатно подберём оборудование и подготовим КП под вашу задачу.',
  phone = '+7 (3952) 43-67-23',
  email = 'info@sdors.ru',
  address = 'Иркутск, ул. Рабочего Штаба, 1/7, пн–пт 9:30–18:00',
}: FinalCTAProps) {
  return (
    <section id="contacts" className="py-20 lg:py-24 border-t border-line">
      <div className="mx-auto w-full max-w-wrap px-5 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Следующий шаг
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] mb-5 [text-wrap:balance]">
            {title}
          </h2>
          <p className="text-lg text-muted mb-8 max-w-hero [text-wrap:pretty]">
            {lead}
          </p>
          <div className="space-y-3 text-base">
            <p><span className="text-muted">Телефон:</span> {phone}</p>
            <p><span className="text-muted">Email:</span> {email}</p>
            <p><span className="text-muted">Адрес:</span> {address}</p>
          </div>
        </div>

        <div className="reveal" style={{ '--reveal-delay': '150ms' } as React.CSSProperties}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}