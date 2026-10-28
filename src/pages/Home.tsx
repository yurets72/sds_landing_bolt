import { home } from '@/content/home';
import { useMeta } from '@/lib/useMeta';
import { buildHref } from '@/lib/router';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/sections/Hero';
import { Tagline } from '@/components/sections/Tagline';
import { DirectionCards } from '@/components/sections/DirectionCards';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Proof } from '@/components/sections/Proof';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { faqCommon } from '@/content/faq';
import { home } from '@/content/home';
import { useMeta } from '@/lib/useMeta';
import { buildHref } from '@/lib/router';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Tagline } from '@/components/sections/Tagline';
import { WhyUs } from '@/components/sections/WhyUs';
import { DirectionCards } from '@/components/sections/DirectionCards';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Proof } from '@/components/sections/Proof';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { faqCommon } from '@/content/faq';

export function Home() {
  useMeta({ title: home.meta.title, description: home.meta.description });
  const ctaHref = buildHref('/', 'contacts');
  return (
    <PageShell accent={home.accent} accentSoft={home.accentSoft}>
      <Hero hero={home.hero} ctaHref={ctaHref} />
      <Stats items={home.stats} />
      <Tagline text={home.tagline} />
      <WhyUs items={home.whyUs} />
      <DirectionCards cards={home.directions} />
      <HowItWorks steps={home.steps} />
      <Proof proof={home.proof} />
      <FAQ items={faqCommon} />
      <FinalCTA />
    </PageShell>
  );
}

export function Home() {
  useMeta({ title: home.meta.title, description: home.meta.description });
  const ctaHref = buildHref('/', 'contacts');
  return (
    <PageShell accent={home.accent} accentSoft={home.accentSoft}>
      <Hero hero={home.hero} ctaHref={ctaHref} />
      <Tagline text={home.tagline} />
      <DirectionCards cards={home.directions} />
      <HowItWorks steps={home.steps} />
      <Proof proof={home.proof} />
      <FAQ items={faqCommon} />
<FinalCTA />
    </PageShell>
  );
}