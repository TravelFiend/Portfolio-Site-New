import { useState } from 'react';

const HeroImageRow = () => {
  const [hoverClass, setHoverClass] = useState('');
  const hoverImages = ['chefchauen', 'palawan', 'bike', 'sunset', 'angkor', 'cathedral'];

  return (
    <div className='hero-bottom'>
      <div></div>
      <ul className='hero-bottom__images'>
        {[0, 1, 2, 3, 4, 5].map(idx => {
          return (
            <li key={idx}
              className={hoverClass.slice(-1) === idx.toString() ? hoverClass : ''}
              onMouseEnter={() => setHoverClass(`hovered${idx}`)}
              onMouseLeave={() => setHoverClass('')}
            >
              <picture>
                <source srcSet={`/assets/${hoverImages[idx]}.webp`} type="image/webp" />
                <source srcSet={`/assets/${hoverImages[idx]}.jpg`} type="image/jpeg" />
                <img src={`/assets/${hoverImages[idx]}.jpg`} alt={`Image of Mike: ${hoverImages[idx]}`} />
              </picture>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroImageRow;
