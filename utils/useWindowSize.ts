import { useState, useEffect } from 'react';

export default function useWindowSize(
  isMobile: boolean
): {
  width: number;
  height: number | undefined;
} {
  const isClient = typeof window === 'object';

  function getSize(isMobile) {
    let initData = isMobile ? 350 : 1280;
    console.log(initData);
    return {
      width: isClient ? window.innerWidth : initData,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize(isMobile));

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize(isMobile));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
