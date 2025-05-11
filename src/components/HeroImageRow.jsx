import { useState } from 'react';
import chefchauen from '../../public/assets/chefchauen.jpg';
import angkor from '../../public/assets/angkor.jpg';
import palawan from '../../public/assets/palawan.jpg';
import bike from '../../public/assets/bike.jpg';
import sunset from '../../public/assets/sunset.jpg';
import cathedral from '../../public/assets/cathedral.jpg';

const HeroImageRow = () => {
  const [hoverClass, setHoverClass] = useState('');
  const hoverImages = [chefchauen, palawan, bike, sunset, angkor, cathedral];

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
              <img src={hoverImages[idx]} alt={`Hero Image ${idx}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroImageRow;
