const WorkItems = ({ title, workItems }) => {
  return (
    <div className="workItems">
      <h2>{title}</h2>
      <div >
        {workItems.map(({ linkText, image, url }) => (
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
