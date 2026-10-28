import type { DirectionContent } from '@/content/types';
import { useMeta } from '@/lib/useMeta';
import { useRoute, buildHref } from '@/lib/router';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/sections/Hero';
import { Tagline } from '@/components/sections/Tagline';
import { Benefits } from '@/components/sections/Benefits';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Proof } from '@/components/sections/Proof';

interface DirectionProps {
  content: DirectionContent;
}

export function Direction({ content }: DirectionProps) {
  useMeta({ title: content.meta.title, description: content.meta.description });
  const route = useRoute();
  const ctaHref = buildHref(route, 'contacts');
  return (
    <PageShell accent={content.accent} accentSoft={content.accentSoft}>
      <Hero hero={content.hero} ctaHref={ctaHref} />
      <Tagline text={content.tagline} />
      <Benefits benefits={content.benefits} />
      <HowItWorks steps={content.steps} />
      <Proof proof={content.proof} />
    </PageShell>
  );
}