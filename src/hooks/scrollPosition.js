import { useState, useEffect } from 'react';

const getScrollPosition = () => {
  const { scrollX: xPos, scrollY: yPos } = window;
  return { xPos, yPos };
}

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(getScrollPosition());
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
