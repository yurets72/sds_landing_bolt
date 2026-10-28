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
  video?: string;
}

export interface BenefitCard {
  number: string;
  title: string;
  text: string;
}

export interface StepItem {
  number: string;
  title: string;
  text: string;
}

export interface ProofItem {
  year: string;
  text: string;
}

export interface HomeDirectionCard {
  number: string;
  short: string;
  title: string;
  text: string;
  href: string;
  image?: string;
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
  steps: StepItem[];
  proof: ProofItem[];
  // Этап 5:
  // faq, finalCta
}

export interface HomeContent {
  meta: { title: string; description: string };
  accent: string;
  accentSoft: string;
  hero: HeroContent;
  tagline: string;
  stats: StatItem[];
  whyUs: WhyUsItem[];
  directions: HomeDirectionCard[];
  steps: StepItem[];
  proof: ProofItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WhyUsItem {
  number: string;
  title: string;
  text: string;
}