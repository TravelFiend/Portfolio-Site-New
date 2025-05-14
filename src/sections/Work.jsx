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
    description: ''
  }
];

const projectItems = [
  {
    linkText: 'CovrLettr',
    image: '/assets/covrLettr.jpg',
    url: 'https://covrlettr.netlify.app/userauth',
    description: '',
    repoUrl: 'https://github.com/covrLettr'
  }, {
    linkText: 'KIT (Keep In Touch)',
    image: '/assets/kit.jpg',
    url: 'https://friendlier-staging.netlify.app/about',
    description: '',
    repoUrl: 'https://github.com/band-m'
  }, {
    linkText: 'Notable Notes',
    image: '/assets/notableNotes.jpg',
    url: '',
    description: '',
    repoUrl: 'https://github.com/TravelFiend/full-stack-with-mongo'
  }, {
    linkText: 'Offbeat',
    image: '/assets/offbeat.png',
    url: 'https://travelfiend.github.io/offbeat/',
    description: '',
    repoUrl: 'https://github.com/TravelFiend/offbeat'
  }
];

const Work = () => {
  return (
    <section id="work" className="section-work">
      <WorkItems workItems={workItems} title="Professional Work" />
      <div className="work-text">
        <TextBlock header="Stuff I'm working on" description="Talk about the tech being used in current side projects" />
      </div>
      <WorkItems workItems={projectItems} title="Personal Projects" />
    </section>
  );
};

export default Work;
