import PropTypes from 'prop-types';

const TextBlock = ({ header, description }) => {
  return (
    <div className='text-block' style={{ color: '#fff' }}>
      <h2>{header}</h2>
      {description ? <p dangerouslySetInnerHTML={{ __html: description }} /> : null}
    </div>
  );
};

TextBlock.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string
};

export default TextBlock;
