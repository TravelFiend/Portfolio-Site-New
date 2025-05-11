import covrLettr from '../../public/assets/covrLettr.jpg';
import dansk from '../../public/assets/dansk-homepage.png';
import food52 from '../../public/assets/food52-homepage.png';
import kit from '../../public/assets/kit.jpg';
import nmConnect from '../../public/assets/nmConnect.png';
import notableNotes from '../../public/assets/notableNotes.jpg';
import offbeat from '../../public/assets/offbeat.png';
import schoolhouse from '../../public/assets/schoolhouse-homepage.png';
import Carousel from '../components/emblaCarousel/Carousel';
import WorkItems from '../components/WorkItems';

const workItems = [
  {
    linkText: 'Schoolhouse',
    image: schoolhouse,
    url: 'https://www.schoolhouse.com/'
  },{
    linkText: 'Food52',
    image: food52,
    url: 'https://www.food52.com/'
  },{
    linkText: 'Dansk',
    image: dansk,
    url: 'https://www.dansk.com/'
  },{
    linkText: 'NMConnect',
    image: nmConnect,
    url: 'https://nmcrisisline.com/nmconnect-app/'
  }
];

const projectItems = [
  {
    linkText: 'CovrLettr',
    image: covrLettr,
    url: 'https://covrlettr.netlify.app/userauth',
    repoUrl: 'https://github.com/covrLettr'
  },{
    linkText: 'KIT (Keep In Touch)',
    image: kit,
    url: 'https://friendlier-staging.netlify.app/about',
    repoUrl: 'https://github.com/band-m'
  },{
    linkText: 'Notable Notes',
    image: notableNotes,
    url: '',
    repoUrl: 'https://github.com/TravelFiend/full-stack-with-mongo'
  },{
    linkText: 'Offbeat',
    image: offbeat,
    url: 'https://travelfiend.github.io/offbeat/',
    repoUrl: 'https://github.com/TravelFiend/offbeat'
  }
]

const Work = () => {
  return (
    <section id="work" className="section-work">
      <WorkItems workItems={workItems} title="Professional Work" />
      <WorkItems workItems={projectItems} title="Personal Projects" />
    </section>
  );
};

export default Work;
