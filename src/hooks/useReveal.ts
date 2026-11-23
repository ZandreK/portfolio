import { useEffect, useRef } from 'react';

/**
 * Hook that adds 'visible' class to an element when it enters the viewport.
 * Works with the .reveal CSS class defined in index.css.
 * 
 * @param threshold - How much of the element must be visible (0-1). Default 0.1
 * @param rootMargin - Margin around root. Default '0px 0px -60px 0px' to trigger slightly before fully visible
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -60px 0px'
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element); // Only animate once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Hook for observing multiple children elements with stagger effect.
 * Apply to a parent container. Children will animate in sequence.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.1
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}
