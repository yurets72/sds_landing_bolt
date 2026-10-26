import { useEffect, useState } from 'react';

export interface ParsedHash {
  path: string;
  anchor: string | null;
}

export function parseHash(rawHash: string): ParsedHash {
  const stripped = rawHash.replace(/^#/, '');
  if (!stripped) return { path: '/', anchor: null };
  const [path, anchor] = stripped.split('#');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return { path: normalized, anchor: anchor || null };
}

export function useRoute(): string {
  const [path, setPath] = useState<string>(() => parseHash(window.location.hash).path);
  useEffect(() => {
    const on = () => setPath(parseHash(window.location.hash).path);
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return path;
}

export function useHashAnchor(): void {
  useEffect(() => {
    const scrollToAnchor = () => {
      const { anchor } = parseHash(window.location.hash);
      if (!anchor) return;
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    window.addEventListener('hashchange', scrollToAnchor);
    const t = window.setTimeout(scrollToAnchor, 0);
    return () => {
      window.removeEventListener('hashchange', scrollToAnchor);
      window.clearTimeout(t);
    };
  }, []);
}

export function buildHref(path: string, anchor?: string): string {
  if (anchor) return `#${path}#${anchor}`;
  return `#${path}`;
}
