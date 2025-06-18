import { useEffect, useRef, useState, useCallback } from 'react';

export const useOptimizedScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);
  const velocity = useRef(0);

  const updateScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    velocity.current = currentScrollY - lastScrollY.current;
    lastScrollY.current = currentScrollY;
    setScrollY(currentScrollY);
    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateScroll]);

  return { scrollY, velocity: velocity.current };
};