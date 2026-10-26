import { useMeta } from '@/lib/useMeta';
import { PageShell } from '@/components/layout/PageShell';
import { Button } from '@/components/ui/Button';

export function NotFound() {
  useMeta({
    title: 'Страница не найдена | СпецДорСервис',
    description: 'Запрошенная страница не найдена.',
  });
  return (
    <PageShell accent="#F97316" accentSoft="#FB923C">
      <section className="py-20 lg:py-24">
        <div className="mx-auto w-full max-w-wrap px-5 max-w-narrow">
          <p className="eyebrow-rule text-accent-soft text-xs font-bold uppercase tracking-[0.12em] mb-5">
            Ошибка 404
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-[-0.035em] mb-6 [text-wrap:balance]">
            Эта страница не найдена.
          </h1>
          <p className="text-lg text-muted mb-6 [text-wrap:pretty]">
            Проверьте адрес или вернитесь к направлениям компании.
          </p>
          <Button href="#/" variant="primary">
            На главную
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
