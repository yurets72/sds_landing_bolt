import { useEffect } from 'react';
import { useRoute, useHashAnchor, parseHash } from '@/lib/router';
import { useReveal } from '@/lib/useReveal';
import { Home } from '@/pages/Home';
import { Direction } from '@/pages/Direction';
import { Privacy } from '@/pages/Privacy';
import { NotFound } from '@/pages/NotFound';
import { dsk } from '@/content/dsk';
import { abz } from '@/content/abz';
import { service } from '@/content/service';

function App() {
  const route = useRoute();
  useReveal();
  useHashAnchor();

  useEffect(() => {
    const { anchor } = parseHash(window.location.hash);
    if (anchor) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [route]);

  let page;
  switch (route) {
    case '/':
      page = <Home />;
      break;
    case '/dsk':
      page = <Direction content={dsk} />;
      break;
    case '/abz':
      page = <Direction content={abz} />;
      break;
    case '/service':
      page = <Direction content={service} />;
      break;
    case '/privacy':
      page = <Privacy />;
      break;
    default:
      page = <NotFound />;
  }

  return <>{page}</>;
}

export default App;
