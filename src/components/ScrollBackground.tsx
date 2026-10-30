import { useEffect, useRef } from 'react';

// Импортируем твою длинную картинку (положи её в src/assets/images/)
import stoneStoryImg from '@/public/stone-story.webp'; 

export function ScrollBackground() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Функция обработки скролла
        const handleScroll = () => {
            if (!bgRef.current) return;
            
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / docHeight, 1); // От 0 до 1
            
            // Считаем, насколько сдвинуть фон вверх.
            // Картинка вертикальная, поэтому двигаем по оси Y.
            // Множитель 50% означает, что фон сместится на половину своей высоты за весь скролл.
            // Можешь увеличить до 70-80%, если хочешь более резкого движения.
            const movePercent = progress * 50; 
            
            bgRef.current.style.transform = `translateY(-${movePercent}%)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            ref={bgRef}
            className="fixed inset-0 z-[-2] w-full h-[150vh] bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url(${stoneStoryImg})` }}
            aria-hidden="true"
        >
            {/* Затемнение, чтобы текст читался */}
            <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" />
        </div>
    );
}
