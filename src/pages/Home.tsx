import { home } from '@/content/home';
import { useMeta } from '@/lib/useMeta';
import { buildHref } from '@/lib/router';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/sections/Hero';
import { Tagline } from '@/components/sections/Tagline';
import { DirectionCards } from '@/components/sections/DirectionCards';

export function Home() {
  useMeta({ title: home.meta.title, description: home.meta.description });
  const ctaHref = buildHref('/', 'contacts');
  return (
    <PageShell accent={home.accent} accentSoft={home.accentSoft}>
      <Hero hero={home.hero} ctaHref={ctaHref} />
      <Tagline text={home.tagline} />
      <DirectionCards cards={home.directions} />
    </PageShell>
  );
}
