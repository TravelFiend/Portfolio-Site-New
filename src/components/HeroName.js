import React from 'react';
import useDimensions from '../hooks/useDimensions';
import { NameSmall, NameRegular, NameBig } from '../svgs/name';

const HeroName = () => {
  const { width } = useDimensions();

  return (
    <>
      {width >= 850 ? <NameBig />
      : width < 850 && width > 600 ? <NameRegular />
      : <NameSmall /> }
    </>
  )
};

export default HeroName;
