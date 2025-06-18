// Custom hook for optimized scroll position tracking
// Uses requestAnimationFrame and throttling for better performance
import { useState, useEffect, useRef, useCallback } from 'react';

export const useOptimizedScroll = () => {
  // Current scroll position state
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for performance optimization
  const rafRef = useRef<number>(); // Stores requestAnimationFrame ID
  const lastScrollTime = useRef(0); // Tracks last scroll event time

  // Throttled scroll handler for better performance
  // Limits updates to ~60fps to prevent excessive re-renders
  const handleScroll = useCallback(() => {
    const now = performance.now();
    
    // Throttle scroll events to 60fps (16.67ms between updates)
    if (now - lastScrollTime.current < 16.67) return;
    
    // Cancel any pending animation frame to avoid queuing
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Schedule scroll position update for next frame
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      lastScrollTime.current = now;
    });
  }, []);

  // Set up scroll event listener with cleanup
  useEffect(() => {
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function to remove listener and cancel any pending frames
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return scrollY;
};
