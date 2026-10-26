import type { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface PageShellProps {
  children: ReactNode;
  accent: string;
  accentSoft: string;
}

export function PageShell({ children, accent, accentSoft }: PageShellProps) {
  return (
    <div
      style={
        {
          '--accent': accent,
          '--accent-soft': accentSoft,
        } as React.CSSProperties
      }
    >
      <a className="skip" href="#main">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
