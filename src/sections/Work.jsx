import WorkItems from '../components/WorkItems';

const workItems = [
  {
    linkText: 'Schoolhouse',
    image: '/assets/schoolhouse-homepage.png',
    url: 'https://www.schoolhouse.com/'
  }, {
    linkText: 'Food52',
    image: '/assets/food52-homepage.png',
    url: 'https://www.food52.com/'
  }, {
    linkText: 'Dansk',
    image: '/dansk-homepage.png',
    url: 'https://www.dansk.com/'
  }, {
    linkText: 'NMConnect',
    image: '/assets/nmConnect.png',
    url: 'https://nmcrisisline.com/nmconnect-app/'
  }
];

const projectItems = [
  {
    linkText: 'CovrLettr',
    image: '/assets/covrLettr.jpg',
    url: 'https://covrlettr.netlify.app/userauth',
    repoUrl: 'https://github.com/covrLettr'
  }, {
    linkText: 'KIT (Keep In Touch)',
    image: '/assets/kit.jpg',
    url: 'https://friendlier-staging.netlify.app/about',
    repoUrl: 'https://github.com/band-m'
  }, {
    linkText: 'Notable Notes',
    image: '/assets/notableNotes.jpg',
    url: '',
    repoUrl: 'https://github.com/TravelFiend/full-stack-with-mongo'
  }, {
    linkText: 'Offbeat',
    image: '/assets/offbeat.png',
    url: 'https://travelfiend.github.io/offbeat/',
    repoUrl: 'https://github.com/TravelFiend/offbeat'
  }
];

const Work = () => {
  return (
    <section id="work" className="section-work">
      <WorkItems workItems={workItems} title="Professional Work" />
      <WorkItems workItems={projectItems} title="Personal Projects" />
    </section>
  );
};

export default Work;
