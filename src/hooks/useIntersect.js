import { useEffect, useState, useRef } from 'react';

const useIntersect = ref => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    ), { root: document.querySelector('.header-container'), rootMargin: 0, thresholds: 0 };

    console.log({ BLAH: observerRef.current.root });
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => observerRef.current.disconnect();
  }, [ref]);

  return isOnScreen;
}

export default useIntersect;
