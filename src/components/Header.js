import React, { useState, useEffect } from 'react';
import { MGLogo } from '../svgs/icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const fillBackground = () => {
    return window.scrollY <= 150 ? setScrolled(true) : setScrolled(false);
  }

  useEffect(() => {
    fillBackground();
    // adding the event when scroll change Logo
    window.addEventListener('scroll', () => {
      window.scrollY <= 150 ? setScrolled(true) : setScrolled(false);
    });

    return window.removeEventListener('scroll', fillBackground);
  }, [])

  return (
    <header className={scrolled ? 'header-container' : 'header-opaque'}>
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
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
