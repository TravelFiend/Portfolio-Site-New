const WorkItems = ({ title, workItems }) => {
  return (
    <div className="workItems">
      <h2>{title}</h2>
      <div>
        {workItems.map(({ linkText, image, url, repoUrl }) => (
          <div key={linkText}>
            <div className="workItems__item">
              <a href={repoUrl ? repoUrl : url} target="_blank" rel="noopener noreferrer">
                <p>{linkText}</p>
                {repoUrl ? (
                  <img src="/assets/github.png" alt={`Link to ${linkText} project repo`} />
                ) : null}
              </a>

              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={linkText} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkItems;
