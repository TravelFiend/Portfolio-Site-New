import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import ProjectInfoModule from './ProjectInfoModule';

const WorkItems = ({ title, workItems }) => {
  const [isShowingInfo, setIsShowingInfo] = useState(false);

  return (
    <div className="workItems">
      <h2>{title}</h2>
      <div>
        {workItems.map(({ linkText, image, url, repoUrl, description }) => (
          <Fragment key={linkText}>
            <ProjectInfoModule
              shown={isShowingInfo}
              projectName={linkText}
              description={description}
              closeModule={() => setIsShowingInfo(false)}
            />

            <div>
              <div className="workItems__item">
                <div>
                  <p>{linkText}</p>
                  <button type="button" onClick={() => setIsShowingInfo(true)}>INFO</button>
                  <a href={repoUrl ? repoUrl : url} target="_blank" rel="noopener noreferrer">
                    {repoUrl ? (
                      <img src="/assets/github.png" alt={`Link to ${linkText} project repo`} />
                    ) : null}
                  </a>
                </div>

                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={linkText} />
                </a>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

WorkItems.propTypes = {
  title: PropTypes.string.isRequired,
  workItems: PropTypes.arrayOf(
    PropTypes.shape({
      linkText: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      repoUrl: PropTypes.string
    })
  ).isRequired
};

export default WorkItems;
