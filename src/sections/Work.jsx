import WorkItems from '../components/WorkItems';
import TextBlock from '../components/TextBlock';

const workItems = [
  {
    linkText: 'Schoolhouse',
    image: 'schoolhouse-homepage',
    url: 'https://www.schoolhouse.com/',
    description: `Shopify Liquid, CSS, JavaScript, jQuery, Shopify API, GraphQL, PHP, Ruby, Python
    As a full-stack developer for Schoolhouse, a Shopify Plus store, I initially contributed to both front-end and back-end development. My role later focused on front-end tasks, where I built new pages, resolved bugs, implemented features, and integrated third-party apps. I also collaborated with the back-end team to enhance reporting features and address technical issues.
    **One of three brands migrated to a headless CMS (Next.js, Tailwind CSS, Sanity.io, AWS). I helped architect a monorepo with shared and brand-specific configurations, designing highly reusable components to streamline development across all three brands.**`
  },
  {
    linkText: 'Food52',
    image: 'food52-homepage',
    url: 'https://www.food52.com/',
    description: `React, CSS, JavaScript, GraphQL, Ruby
    At Food52, following their acquisition of Schoolhouse, I focused primarily on front-end development within a larger, structured team. My responsibilities included building new pages, fixing bugs, and implementing features. Working with a complex legacy codebase and a custom-built CMS, I gained valuable experience mastering advanced concepts and navigating intricate systems.
    **One of three brands migrated to a headless CMS (Next.js, Tailwind CSS, Sanity.io, AWS). I contributed to a monorepo with shared and brand-specific configurations, creating reusable components to ensure consistency and efficiency across all three brands.**`
  },
  {
    linkText: 'Dansk',
    image: 'dansk-homepage',
    url: 'https://www.dansk.com/',
    description: `Shopify Liquid, CSS, JavaScript, jQuery, Shopify API
    While at Schoolhouse/Food52, I contributed to Dansk, a smaller-scale project. My role involved resolving bugs, applying minor styling adjustments, and ensuring compliance with regulations such as CCPA, GDPR, and ADA standards, keeping the site accessible and up to date.
    **One of three brands migrated to a headless CMS (Next.js, Tailwind CSS, Sanity.io, AWS). I helped develop a monorepo with shared and brand-specific configurations, building reusable components to support seamless development across all three brands.**`
  },
  {
    linkText: 'NMConnect',
    image: 'nmConnect',
    url: 'https://nmcrisisline.com/nmconnect-app/',
    description: `React, React Native Expo, Node.js, MongoDB, Mongoose, Express, Jest
    I co-developed NMConnect, a mobile app for the State of New Mexico, with one other developer. The app provides quick-access buttons to contact the New Mexico Crisis and Access Line (NMCAL) via phone or text, alongside mental health resources, suicide prevention tools, COVID-19 information, and a podcast section. Due to growing interest from other New Mexico government departments, the app continues to expand. It’s available on the Apple App Store and Google Play Store.`
  }
];

const projectItems = [
  {
    linkText: 'CovrLettr',
    image: 'covrLettr',
    url: 'https://covrlettr.netlify.app/userauth',
    description: `HTML - CSS - Vanilla JavaScript - MongoDB - Mongoose - Express - Jest - Node.js
    A cover letter generator aimed towards software developers!  The user is asked to enter answers for a series of basic questions.  Those answers are then used to create over a million unique cover letters and return the version with the highest sentiment score.  This project was completed with a group of 4 developers in a single week.  I had a heavy hand in both the front-end and backend, helping build not only the basic structure of the app, but also with static/instance methods used to generate the cover letters as well as the regex needed to replace keys with user answers.`,
    repoUrl: 'https://github.com/covrLettr'
  }, {
    linkText: 'KIT (Keep In Touch)',
    image: 'kit',
    url: 'https://friendlier-staging.netlify.app/about',
    description: `React - Redux - Express - Node.js - MongoDB - Mongoose - Passport
    KIT is a tool for setting and tracking communication goals. Users enter contacts and select how frequently they'd like to contact each person.  The app will then send push notification reminders based on user settings. Contacts will appear in different colors depending on how close they are to the contact deadline previously set by the user.  Incorporated DateFNs library for time oriented state management and Cron Job for regular updating.  This project was completed with a group of 4 developers in one week.  I dipped my toes into a little bit of everything for this project.`,
    repoUrl: 'https://github.com/band-m'
  }, {
    linkText: 'Notable Notes',
    image: 'notableNotes',
    url: '',
    description: `HTML - CSS - Vanilla Javascript - Node.js - Express - MongoDB - Mongoose - JWT - BCryptJS
    This is a solo project note taking app in which the user's notes and notebooks are persisted between sessions.  Users are able to create multiple notebooks for different subjects, as well as individual notes inside of each subject's notebook.  Each note and notebook are modifiable using each of the CRUD routes.`,
    repoUrl: 'https://github.com/TravelFiend/full-stack-with-mongo'
  }, {
    linkText: 'Offbeat',
    image: 'offbeat',
    url: 'https://travelfiend.github.io/offbeat/',
    description: `HTML - CSS - Vanilla Javascript
    A sound sampler using Web Audio API that allows users to choose from multiple sound banks.  Once logged in, the user can record note combinations and play the same sequence back using different sound banks.  Users are also able to choose from a number of themes.  This project was completed with a team of 6 developers in a single week.  My role for this project was mainly in styling as well as handling event listeners for the sampler.`,
    repoUrl: 'https://github.com/TravelFiend/offbeat'
  }
];

const Work = () => {
  return (
    <section id="work" className="section-work">
      <WorkItems workItems={workItems} title="Professional Work" />
      <div className="work-text">
        <TextBlock
          header="Side Projects"
          description="Recently, I've been developing a music and art-focused website, leveraging Next.js, Sanity.io for CMS, and Tailwind CSS. I’ve established a robust CI/CD pipeline with GitHub Actions, which automatically runs linting checks and tests on every push. Additionally, I’ve configured actions to seamlessly deploy to Vercel and Sanity’s staging or production environments, depending on whether it’s a pull request or a push to the main branch.</br></br>To streamline development, I’ve integrated Husky to enforce linting checks before commits, saving time for new developers unfamiliar with client-specific rules. I’ve also created flexible Sanity schemas paired with React components, easily adaptable for specific project needs.</br></br>This work resides in a private GitHub repository, with GitHub Actions enabling automated Vercel deployments despite the repo’s privacy. I’m happy to provide temporary read access to share this project with potential hiring managers or teammates—just reach out via email, text, or Instagram, and I’ll make it happen! Below, I’ve listed a few other projects I’ve worked on in the past."
        />
      </div>
      <WorkItems workItems={projectItems} title="Personal Projects" />
    </section>
  );
};

export default Work;
