import html from '../../public/assets/html5.png';
import css from '../../public/assets/css.png';
import js from '../../public/assets/js.png';
import node from '../../public/assets/node.png';
import express from '../../public/assets/express.png';
import git from '../../public/assets/git.png';
import github from '../../public/assets/github.png';
import heroku from '../../public/assets/heroku.png';
import jest from '../../public/assets/jest.png';
import liquid from '../../public/assets/liquid.png';
import mongodb from '../../public/assets/mongodb.png';
import nextjs from '../../public/assets/nextjs.png';
import postman from '../../public/assets/postman.png';
import python from '../../public/assets/python.png';
import qunit from '../../public/assets/qunit.png';
import react from '../../public/assets/react.png';
import redux from '../../public/assets/redux.png';
import sanity from '../../public/assets/sanity.png';
import shopify from '../../public/assets/redux.png';
import tailwind from '../../public/assets/tailwind.png';
import travis from '../../public/assets/travis.png';


const Technologies = () => {
  const techIcons = [
    { icon: html, text: 'HTML' },
    { icon: css, text: 'CSS'} ,
    { icon: js, text: 'Javascript' },
    { icon: node, text: 'Node.js' },
    { icon: express, text: 'Express.js'},
    { icon: git, text: 'Git'},
    { icon: github, text: 'Github' },
    { icon: heroku, text: 'Heroku' },
    { icon: jest, text: 'Jest' },
    { icon: liquid, text: 'Liquid' },
    { icon: mongodb, text: 'MongoDB' },
    { icon: nextjs, text: 'NextJS' },
    { icon: postman, text: 'Postman' },
    { icon: python, text: 'Python' },
    { icon: qunit, text: 'QUnit' },
    { icon: react, text: 'React' },
    { icon: redux, text: 'Redux' },
    { icon: sanity, text: 'Sanity' },
    { icon: shopify, text: 'Shopify' },
    { icon: tailwind, text: 'Tailwind' },
    { icon: travis,  text: 'Travis CI' }
  ];

  return (
    <div id="technologies" className="section-technologies">
      {techIcons.map(({icon, text}, index) => {
        return (
          <div key={index}>
            <img
              src={icon}
              alt={`${text} icon`}
              className={`${text === 'Tailwind' ? 'tailwindIcon' : ''}${text === 'Node.js' ? 'nodeIcon' : ''}`}
              style={{ animationDelay: `${index * .06}s`,  }}
            />
            <p style={{ animationDelay: `${index * .06}s` }}>{text}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Technologies;
