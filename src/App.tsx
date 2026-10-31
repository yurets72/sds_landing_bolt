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

// Импортируем компонент фона
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
      // Главная страница с фоном
      page = (
        <>
          <ScrollBackground />
          <Home />
        </>
      );
      break;
      
    case '/dsk':
      // Страница ДСК с тем же фоном (или можешь сделать отдельный фон для каждой!)
      page = (
        <>
          <ScrollBackground />
          <Direction content={dsk} />
        </>
      );
      break;
      
    case '/abz':
      // Страница АБЗ с фоном
      page = (
        <>
          <ScrollBackground />
          <Direction content={abz} />
        </>
      );
      break;
      
    case '/service':
      // Страница Сервиса с фоном
      page = (
        <>
          <ScrollBackground />
          <Direction content={service} />
        </>
      );
      break;
      
    case '/privacy':
      // Политика конфиденциальности обычно без красивого фона
      page = <Privacy />;
      break;
      
    default:
      page = <NotFound />;
  }

  return <>{page}</>;
}

export default App;
