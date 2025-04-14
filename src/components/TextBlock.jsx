const TextBlock = ({ header, description }) => {
  return (
    <div className='text-block' style={{ color: '#fff' }}>
      <h2>{header}</h2>
      <p>{description}</p>
    </div>
  )
}

export default TextBlock;
