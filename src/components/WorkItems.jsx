import schoolhouse from '../../public/assets/schoolhouse-homepage.png';
import dansk from '../../public/assets/dansk-homepage.png';
import food52 from '../../public/assets/food52-homepage.png';
import nmconnect from '../../public/assets/postman.png';

const WorkItems = () => {
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
      image: dansk,
      url: 'https://play.google.com/store/apps/details?id=com.nmcrisisline.app&hl=en-US'
    }
  ];

  return (
    <div className="workItems">
      <h2>Professional Work</h2>
      <div >
        {workItems.map(({ linkText, image, url}) => (
          <div key={linkText}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <p>{linkText}</p>
              <img src={image} alt={linkText} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkItems;
