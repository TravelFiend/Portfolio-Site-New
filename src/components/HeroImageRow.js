import React, { useState } from 'react';


const HeroImageRow = React.forwardRef((props, ref) => {
  // const [isCoverShowing, setIsCoverShowing] = useState(true);

  // const handleMouseOver = () => setIsCoverShowing(false);
  // const handleMouseOut = () => setIsCoverShowing(true);

  return (
    <div ref={ref} className='hero-bottom'>
      {/* {isCoverShowing && <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='hero-bottom__cover'></div>} */}
      <div></div>
      <ul className='hero-bottom__images'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
});

export default HeroImageRow;
