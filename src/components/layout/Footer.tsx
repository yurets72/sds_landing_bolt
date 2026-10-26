import { contacts } from '@/content/contacts';

export function Footer() {
  return (
    <footer className="border-t border-line text-muted text-xs py-6">
      <div className="mx-auto w-full max-w-wrap px-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="text-text font-bold">{contacts.company}</div>
          <div>
            ИНН {contacts.inn} · ОГРН {contacts.ogrn}
          </div>
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Подвал">
          <a href="#/dsk" className="hover:text-accent-soft transition-colors duration-300">
            ДСК
          </a>
          <a href="#/abz" className="hover:text-accent-soft transition-colors duration-300">
            АБЗ
          </a>
          <a href="#/service" className="hover:text-accent-soft transition-colors duration-300">
            Сервис
          </a>
          <a href="#/privacy" className="hover:text-accent-soft transition-colors duration-300">
            Конфиденциальность
          </a>
        </nav>
      </div>
    </footer>
  );
}
