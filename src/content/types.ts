export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroContent {
  eyebrow: string;
  h1Lines: string[];
  lead: string;
  ctaLabel: string;
  ctaHref: string;
  proof: string;
  image?: HeroImage;
}

export interface BenefitCard {
  number: string;
  title: string;
  text: string;
}

export interface HomeDirectionCard {
  number: string;
  short: string;
  title: string;
  text: string;
  href: string;
}

export interface DirectionContent {
  slug: 'dsk' | 'abz' | 'service';
  number: string;
  short: string;
  title: string;
  accent: string;
  accentSoft: string;
  meta: { title: string; description: string };
  hero: HeroContent;
  tagline: string;
  benefits: BenefitCard[];
  // Этапы 4–5:
  // steps, projects, faq, finalCta
}

export interface HomeContent {
  meta: { title: string; description: string };
  accent: string;
  accentSoft: string;
  hero: HeroContent;
  tagline: string;
  directions: HomeDirectionCard[];
}
