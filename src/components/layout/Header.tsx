import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/content/nav';

export function Header() {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState<string>(() => window.location.hash || '#/');

  useEffect(() => {
    const on = () => {
      setRoute(window.location.hash || '#/');
      setOpen(false);
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

  const currentPath = route.replace(/^#/, '').split('#')[0] || '/';

  return (
    <header className="sticky top-0 z-40 pt-4 px-4">
      <div className="mx-auto w-full max-w-wrap">
        <nav
          aria-label="Основная навигация"
          className="flex items-center justify-between gap-6 rounded-full border border-line bg-bg/92 backdrop-blur-md px-4 py-3 md:px-5"
        >
          <a
            href="#/"
            className="brand flex items-center gap-3 font-bold tracking-[0.02em]"
            aria-label="СпецДорСервис, все направления"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-bg text-xs font-bold">
              СДС
            </span>
            <span className="hidden sm:block leading-tight">
              СПЕЦДОРСЕРВИС
              <small className="block text-muted text-xs font-medium tracking-[0.08em]">
                ОБОРУДОВАНИЕ И СЕРВИС С 2011 ГОДА
              </small>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-6 text-sm text-muted">
            {navItems.map((item) => {
              const isActive =
                item.to === currentPath ||
                (item.to.startsWith('/#') && currentPath === '/');
              return (
                <li key={item.to}>
                  <a
                    href={`#${item.to}`}
                    className={
                      isActive
                        ? 'text-accent-soft font-semibold'
                        : 'hover:text-accent-soft transition-colors duration-300'
                    }
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="tel:+73952436723"
            className="hidden md:block text-sm font-bold whitespace-nowrap hover:text-accent-soft transition-colors duration-300"
          >
            +7 (3952) 43 67 23
          </a>

          <button
            type="button"
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-line bg-panel text-text"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-0 top-0 z-30 bg-black/80 backdrop-blur-3xl"
        >
          <div className="flex flex-col items-stretch gap-4 px-6 pt-24">
            {navItems.map((item, i) => (
              <a
                key={item.to}
                href={`#${item.to}`}
                className="text-2xl font-semibold text-text hover:text-accent-soft"
                style={{
                  animation: `reveal-fade-up 600ms cubic-bezier(0.32,0.72,0,1) ${100 + i * 80}ms forwards`,
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+73952436723"
              className="mt-4 text-xl font-bold text-accent-soft"
            >
              +7 (3952) 43 67 23
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
