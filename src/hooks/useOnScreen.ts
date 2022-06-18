import { useEffect, useState, RefObject } from 'react';

type hookReturn = 'in' | 'out';

export default function useOnScreen(
  ref: RefObject<HTMLDivElement>,
  threshold = 0.18
): hookReturn {
  const [hasAppear, setHasAppear] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasAppear(old => old || entry.isIntersecting);
      },
      {
        threshold
      }
    );
    if (ref?.current) {
      observer.observe(ref.current);
    }
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return hasAppear ? 'in' : 'out';
}
