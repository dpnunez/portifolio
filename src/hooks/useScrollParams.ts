import { useState, useEffect } from 'react';

type direction = 'up' | 'down';

interface useScrollParamsInterface {
  initialDirection?: direction;
  thresholdPixels?: number;
}

interface useScrollParamsOutput {
  direction: direction;
  isOnTop: boolean;
}

const useScrollParams = ({
  initialDirection,
  thresholdPixels
}: useScrollParamsInterface = {}): useScrollParamsOutput => {
  const [scrollDir, setScrollDir] = useState(initialDirection || 'down');
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setIsOnTop(scrollY <= threshold);
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return {
    direction: scrollDir,
    isOnTop
  };
};

export { useScrollParams };
