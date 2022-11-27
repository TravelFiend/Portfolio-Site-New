import { useEffect, useRef } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import { MGLogo } from '../svgs/icons';
import MGColorResume from '../../public/assets/MGColorResume.pdf';


const Header = () => {
  const { isScrolled } = useScrollPosition(220);
  const renderCounter = useRef(0);

  useEffect(() => {
    if (renderCounter.current === 0) {
      renderCounter.current = renderCounter.current + 1;
    }
  }, [isScrolled])

  return (
    <header className={isScrolled ? 'header-opaque' : 'header-container'}>
      <MGLogo />

      <nav>
        <ul>
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
    </header>
  )
}

export default Header;
