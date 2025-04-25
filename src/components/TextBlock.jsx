const TextBlock = ({ header, description }) => {
  return (
    <div className='text-block' style={{ color: '#fff' }}>
      <h2>{header}</h2>
      {description ? <p dangerouslySetInnerHTML={{ __html: description }} /> : null}
    </div>
  );
};

export default TextBlock;
