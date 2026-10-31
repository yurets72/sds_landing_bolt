import { useEffect, useRef } from 'react';

// Импортируем картинку напрямую из assets
// Vite сам обработает этот путь, сожмет картинку и даст ей уникальный имя
import stoneStoryImg from '@/assets/images/stone-story.webp';

export function ScrollBackground() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return;
            
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0; 
            
            // Двигаем фон вверх. 
            // 60% означает, что за весь скролл страницы фон сместится на 60% своей высоты.
            const movePercent = progress * 60; 
            
            bgRef.current.style.transform = `translateY(-${movePercent}%)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            ref={bgRef}
            className="fixed inset-0 z-[-2] w-full h-[150vh] bg-cover bg-center will-change-transform"
            /* Используем переменную из импорта */
            style={{ backgroundImage: `url(${stoneStoryImg})` }}
            aria-hidden="true"
        >
            {/* Затемнение, чтобы текст читался поверх горы */}
            <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" />
        </div>
    );
}
