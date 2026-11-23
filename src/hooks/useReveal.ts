import { useEffect, useRef } from 'react';

/**
 * Hook that toggles 'visible' class on an element as it enters and leaves the viewport,
 * enabling smooth fade-in and fade-out transitions on scroll.
 * 
 * Works with CSS animation classes:
 * - .reveal
 * - .reveal-soft
 * - .reveal-left
 * - .reveal-right
 * - .reveal-scale
 * 
 * @param threshold - Minimum visible ratio to trigger (0-1). Default: 0.05
 * @param rootMargin - Viewport margins to buffer fade-in / fade-out. Default: '60px 0px -40px 0px'
 * @param once - If true, only fades in once and stays visible. Default: false (bidirectional fade in/out)
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.05,
  rootMargin: string = '60px 0px -40px 0px',
  once: boolean = false
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.classList.remove('visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Hook for parent containers whose child elements stagger their fade-in and fade-out.
 * Apply to a parent with class .stagger-children.
 * 
 * @param threshold - Default: 0.05
 * @param rootMargin - Default: '60px 0px -40px 0px'
 * @param once - Default: false
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.05,
  rootMargin: string = '60px 0px -40px 0px',
  once: boolean = false
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.classList.remove('visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return ref;
}
