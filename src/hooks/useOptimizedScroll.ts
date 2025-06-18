// Custom hook for optimized scroll position tracking
// Uses requestAnimationFrame and throttling for better performance
import { useState, useEffect, useRef } from 'react';

export const useOptimizedScroll = () => {
  // Current scroll position state
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for performance optimization
  const rafRef = useRef<number>(); // Stores requestAnimationFrame ID
  const lastScrollTime = useRef(0); // Tracks last scroll event time

  // Throttled scroll handler for better performance
  // Limits updates to ~60fps to prevent excessive re-renders
  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current < 16) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        lastScrollTime.current = now;
      });
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function to remove listener and cancel any pending frames
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return scrollY;
};
