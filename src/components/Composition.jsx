import PropTypes from 'prop-types';

const Composition = ({ pic1, pic2, pic3 }) => {
  return (
    <div className="composition">
      {[pic1, pic2, pic3].map(({ image, alt }, idx) => (
        <picture
          key={alt}
          className="composition__photo"
        >
          <source srcSet={`/assets/${image}.webp`} type="image/webp" />
          <source srcSet={`/assets/${image}.jpg`} type="image/jpeg" />
          <img className={`composition__image composition__photo--p${idx + 1}`} src={`/assets/${image}.jpg`} alt={alt} />
        </picture>
      ))}
    </div>
  );
};

Composition.propTypes = {
  pic1: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  pic2: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  pic3: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
};

export default Composition;
