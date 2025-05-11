import { useEffect, useRef, useState } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import { MGLogo } from '../svgs/icons';
import MGColorResume from '../../public/assets/MGColorResume.pdf';
import useDimensions from '../hooks/useDimensions';


const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const { isScrolled } = useScrollPosition(100);
  const { width } = useDimensions();
  const renderCounter = useRef(0);
  const burger = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    if (renderCounter.current === 0) {
      renderCounter.current = renderCounter.current + 1;
    }
  }, [isScrolled]);

  const handleClick = ({ target }) => {
    if (burger.current.contains(target)) {
      return;
    }
    return setIsShown(false);
  };

  return (
    <header className={isScrolled ? 'header-opaque' : 'header-container'}>
      <MGLogo />

      <nav>
        <ul className={isShown && width < 640 ? 'mobile-nav-open' : ''}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href={MGColorResume} target='_blank' rel='noopener noreferrer'>Resume</a>
          </li>
        </ul>
      </nav>

      <div className="burger" onClick={() => setIsShown(!isShown)} ref={burger}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;
