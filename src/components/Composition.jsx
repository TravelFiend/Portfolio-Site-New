import PropTypes from 'prop-types';

const Composition = ({ pic1, pic2, pic3 }) => {
  return (
    <div className="composition">
      {[pic1, pic2, pic3].map(({ image, alt }, idx) => (
        <img
          key={alt}
          src={image}
          alt={alt}
          className={`composition__photo composition__photo--p${idx + 1}`}
        />
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
