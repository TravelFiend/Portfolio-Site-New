import SocialMenu from './SocialMenu';

const Footer = () => {
  return (
    <footer className='section-footer'>
      <SocialMenu />
      <div className="stage">
        <div className="traveler">
          <div className="bouncer"></div>
        </div>
        <div className="traveler2">
          <div className="bouncer2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
