import { PageShell } from '@/components/layout/PageShell';
import { contacts } from '@/content/contacts';

const sections = [
  {
    title: '1. Общие положения',
    text: 'Настоящая Политика определяет порядок обработки персональных данных пользователей сайта sdors.ru (далее — Сайт), оператором которых является ООО «СпецДорСервис».',
  },
  {
    title: '2. Какие данные собираются',
    text: 'Через форму обратной связи на Сайте собираются: имя, номер телефона, название компании (при заполнении), текст задачи. Данные передаются добровольно.',
  },
  {
    title: '3. Цель обработки',
    text: 'Обработка персональных данных осуществляется с целью обратной связи с пользователем, консультирования по вопросам оборудования и подготовки коммерческого предложения.',
  },
  {
    title: '4. Правовые основания',
    text: 'Обработка осуществляется на основании согласия пользователя, выраженного путём проставления отметки в чекбоксе при отправке формы.',
  },
  {
    title: '5. Хранение и защита',
    text: 'Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа.',
  },
  {
    title: '6. Права пользователя',
    text: 'Пользователь вправе запросить информацию об обработке своих данных, потребовать их уточнения или удаления, направив запрос на info@sdors.ru.',
  },
  {
    title: '7. Контакты оператора',
    text: `ООО «СпецДорСервис», г. Иркутск, ул. Рабочего Штаба, 1/7, info@sdors.ru, +7 (3952) 43-67-23.`,
  },
];

export function Privacy() {
  return (
    <PageShell accent="#F97316" accentSoft="#FB923C">
      <section className="py-20 lg:py-24">
        <div className="mx-auto w-full max-w-wrap px-5">
          <div className="max-w-prose">
            <a
              href="#/"
              className="inline-block text-sm text-muted hover:text-accent-soft mb-8 transition-colors duration-300"
            >
              ← На главную
            </a>
            <h1 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-[-0.035em] mb-4 [text-wrap:balance]">
              Политика обработки персональных данных
            </h1>
            <p className="text-sm text-muted mb-10">
              Оператор: {contacts.company} · ИНН {contacts.inn} · ОГРН {contacts.ogrn}
            </p>

            <div className="space-y-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                  <p className="text-base text-muted leading-[1.65] [text-wrap:pretty]">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}