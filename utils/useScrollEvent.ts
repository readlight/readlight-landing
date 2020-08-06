import { useState, useEffect } from 'react';
import { ScrollDirection } from '../types/ScrollDirection';

export default function useScollEvent(): {
  scrollPosition: number | undefined;
  scrollDirection: ScrollDirection;
} {
  const isClient = typeof window === 'object';
  function getScrollEvent(scrollPosition) {
    return {
      scrollPosition: isClient ? scrollPosition : undefined,
      scrollDirection: ScrollDirection.UP,
    };
  }

  const [scrollEvent, setScrollEvent] = useState(getScrollEvent(0));

  function handleScroll() {
    let scrollPosition = document.documentElement.scrollTop;
    setScrollEvent(getScrollEvent(scrollPosition));
  }

  useEffect(() => {
    if (!isClient) {
      return;
    }

    window.addEventListener('scroll', handleScroll);
    //return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollEvent;
}
