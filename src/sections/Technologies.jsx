import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useEffect, useRef, useState } from 'react';

const Technologies = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const techRef = useRef(null);
  const { entry, setNode } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  useEffect(() => {
    setNode(techRef.current);

    if (entry.isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [entry.isIntersecting, hasAnimated, setNode]);

  const techIcons = [
    { icon: 'html5', text: 'HTML' },
    { icon: 'css', text: 'CSS' },
    { icon: 'js', text: 'Javascript' },
    { icon: 'node', text: 'Node.js' },
    { icon: 'express', text: 'Express.js' },
    { icon: 'git', text: 'Git' },
    { icon: 'github', text: 'Github' },
    { icon: 'heroku', text: 'Heroku' },
    { icon: 'jest', text: 'Jest' },
    { icon: 'liquid', text: 'Liquid' },
    { icon: 'mongodb', text: 'MongoDB' },
    { icon: 'nextjs', text: 'NextJS' },
    { icon: 'postman', text: 'Postman' },
    { icon: 'python', text: 'Python' },
    { icon: 'qunit', text: 'QUnit' },
    { icon: 'react', text: 'React' },
    { icon: 'redux', text: 'Redux' },
    { icon: 'sanity', text: 'Sanity' },
    { icon: 'shopify', text: 'Shopify' },
    { icon: 'tailwind', text: 'Tailwind' },
    { icon: 'travis',  text: 'Travis CI' }
  ];

  return (
    <div id="technologies" className="section-technologies" ref={techRef}>
      {techIcons.map(({ icon, text }, index) => {
        return (
          <div key={index}>
            <picture>
              <source srcSet={`/assets/${icon}.webp`} type="image/webp" />
              <source srcSet={`/assets/${icon}.png`} type="image/png" />
              <img
                className={`${text === 'Tailwind' ? 'tailwindIcon' : ''}${text === 'Node.js' ? 'nodeIcon' : ''} ${hasAnimated ? 'animate' : ''}`}
                style={{ animationDelay: `${index * .06}s` }}
                src={`/assets/${icon}.png`}
                alt={`${text} icon`}
                loading="lazy"
              />
            </picture>
            <p
              className={hasAnimated ? 'animate' : ''}
              style={{ animationDelay: `${index * .06}s` }}
            >
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
