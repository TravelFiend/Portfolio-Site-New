import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current){
      observer.current.disconnect();
    }

    observer.current = new window.IntersectionObserver(([entry]) => setEntry(entry), { root, rootMargin, threshold });

    const { current: currentObserver } = observer;

    if (node){
      currentObserver.observe(node);
    }

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return { entry, setNode };
};

export default useIntersectionObserver;
