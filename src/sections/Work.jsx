import WorkItems from '../components/WorkItems';
import TextBlock from '../components/TextBlock';

const workItems = [
  {
    linkText: 'Schoolhouse',
    image: '/assets/schoolhouse-homepage.png',
    url: 'https://www.schoolhouse.com/',
    description: ''
  }, {
    linkText: 'Food52',
    image: '/assets/food52-homepage.png',
    url: 'https://www.food52.com/',
    description: ''
  }, {
    linkText: 'Dansk',
    image: '/assets/dansk-homepage.png',
    url: 'https://www.dansk.com/',
    description: ''
  }, {
    linkText: 'NMConnect',
    image: '/assets/nmConnect.png',
    url: 'https://nmcrisisline.com/nmconnect-app/',
    description: `React - React Native Expo - Node.js - MongoDB - Mongoose - Express - Jest
    An app for the State of New Mexico that provides easy-access buttons to contact the New Mexico Crisis and Access Line (NMCAL) via phone or text.  The app also provides mental health/suicide prevention resources, as well as a COVID-19 info section and a podcast section.  This project was built by myself and 1 other developer and is continuing to grow in size due to interest from other governmental departments in New Mexico.  Available now on the Apple Store and the Google Play Store!`,
  }
];

const projectItems = [
  {
    linkText: 'CovrLettr',
    image: '/assets/covrLettr.jpg',
    url: 'https://covrlettr.netlify.app/userauth',
    description: `HTML - CSS - Vanilla JavaScript - MongoDB - Mongoose - Express - Jest - Node.js
    A cover letter generator aimed towards software developers!  The user is asked to enter answers for a series of basic questions.  Those answers are then used to create over a million unique cover letters and return the version with the highest sentiment score.  This project was completed with a group of 4 developers in a single week.  I had a heavy hand in both the front-end and backend, helping build not only the basic structure of the app, but also with static/instance methods used to generate the cover letters as well as the regex needed to replace keys with user answers.`,
    repoUrl: 'https://github.com/covrLettr'
  }, {
    linkText: 'KIT (Keep In Touch)',
    image: '/assets/kit.jpg',
    url: 'https://friendlier-staging.netlify.app/about',
    description: `React - Redux - Express - Node.js - MongoDB - Mongoose - Passport
    KIT is a tool for setting and tracking communication goals. Users enter contacts and select how frequently they'd like to contact each person.  The app will then send push notification reminders based on user settings. Contacts will appear in different colors depending on how close they are to the contact deadline previously set by the user.  Incorporated DateFNs library for time oriented state management and Cron Job for regular updating.  This project was completed with a group of 4 developers in one week.  I dipped my toes into a little bit of everything for this project.`,
    repoUrl: 'https://github.com/band-m'
  }, {
    linkText: 'Notable Notes',
    image: '/assets/notableNotes.jpg',
    url: '',
    description: `HTML - CSS - Vanilla Javascript - Node.js - Express - MongoDB - Mongoose - JWT - BCryptJS
    This is a solo project note taking app in which the user's notes and notebooks are persisted between sessions.  Users are able to create multiple notebooks for different subjects, as well as individual notes inside of each subject's notebook.  Each note and notebook are modifiable using each of the CRUD routes.`,
    repoUrl: 'https://github.com/TravelFiend/full-stack-with-mongo'
  }, {
    linkText: 'Offbeat',
    image: '/assets/offbeat.png',
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
          description="Recently my focus has been on building a site centered around music and art.  I've built a template using Next.js, Sanity.io for CMS, and Tailwind CSS.  I've gotten a robust CI/CD pipeline setup using Github Actions, automatically checking for linting errors and running tests on every push. I've also set up actions to automatically deploy to Vercel and Sanity staging/production environments, depending on whether it's a new PR or a push to main.<br /><br />Besides this, I've gotten husky set up to check for linting errors before a commit can even be completed, saving time for new devs who might not know the specific rules set up by any given client.  I've also gotten some Sanity schemas with corresponding React components that can be tweaked as needed for a sepecific project.<br /><br />All of this work is on a private repo on Github (yes, my github action allows me to automate Vercel deployments, even with a private repo.  I will happily grant temporary read access to share this work with any potential hiring manager or teammates, just shoot me an email, text, or Instagram message with any requests and I'll make it happen!  I also have a few other projects that I've worked on in the past that are listed below."
        />
      </div>
      <WorkItems workItems={projectItems} title="Personal Projects" />
    </section>
  );
};

export default Work;
