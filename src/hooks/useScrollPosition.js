import { useState, useEffect } from 'react';


const getScrollPosition = () => {
  const { scrollX: xPos, scrollY: yPos } = window;
  return { xPos, yPos };
}

const useScrollPosition = pxScrolled => {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    if (getScrollPosition().yPos < 100) {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      setScrollPosition(getScrollPosition());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    scrollPosition.yPos > pxScrolled ? setIsScrolled(true) : setIsScrolled(false);
  }, [scrollPosition]);

  return {scrollPosition, isScrolled};
}

export default useScrollPosition;
