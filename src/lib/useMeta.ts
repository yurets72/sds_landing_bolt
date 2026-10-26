import { useEffect } from 'react';

interface MetaInput {
  title: string;
  description: string;
}

export function useMeta({ title, description }: MetaInput): void {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMetaProp('og:title', title);
    setMetaProp('og:description', description);
  }, [title, description]);
}

function setMeta(name: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProp(property: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
