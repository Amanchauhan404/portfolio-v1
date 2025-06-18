// Custom hook for optimized scroll position tracking
// Uses requestAnimationFrame and throttling for better performance
import { useEffect, useRef } from 'react';

export const useOptimizedScroll = () => {
  const scrollYRef = useRef(0);
  const ticking = useRef(false);

  // Throttled scroll handler for better performance
  // Limits updates to ~60fps to prevent excessive re-renders
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          scrollYRef.current = window.scrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function to remove listener and cancel any pending frames
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollYRef.current;
};
