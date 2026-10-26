import { useMeta } from '@/lib/useMeta';
import { PageShell } from '@/components/layout/PageShell';
import { Button } from '@/components/ui/Button';

export function Privacy() {
  useMeta({
    title: 'Конфиденциальность | СпецДорСервис',
    description: 'Политика конфиденциальности и информация об обработке обращений.',
  });
  return (
    <PageShell accent="#F97316" accentSoft="#FB923C">
      <section className="py-20 lg:py-24">
        <article className="mx-auto w-full max-w-wrap px-5 max-w-prose">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Информация о форме
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-[-0.035em] mb-6 [text-wrap:balance]">
            Конфиденциальность
          </h1>
          <p className="text-muted mb-6 [text-wrap:pretty]">
            Наполнение страницы появится на Этапе 6.
          </p>
          <Button href="#/" variant="primary">
            Вернуться на сайт
          </Button>
        </article>
      </section>
    </PageShell>
  );
}
