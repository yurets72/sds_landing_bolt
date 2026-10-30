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

// 1. Импорт нового компонента
import { ScrollBackground } from '@/components/ScrollBackground';

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
      // 2. Оборачиваем домашнюю страницу в фон
      page = (
        <>
          <ScrollBackground />
          <Home />
        </>
      );
      break;
      
    case '/dsk':
      // Если хочешь историю камня и на странице ДСК, раскомментируй ниже:
      // page = (<><ScrollBackground /><Direction content={dsk} /></>);
      page = <Direction content={dsk} />;
      break;
      
    default:
      page = <NotFound />;
  }

  return <>{page}</>;
}

export default App;
