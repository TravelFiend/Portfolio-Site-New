import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import ProjectInfoModule from './ProjectInfoModule';
import { GithubButton, InfoButton } from './icons';

const WorkItems = ({ title, workItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="workItems">
      <h2>{title}</h2>
      <div>
        {workItems.map(({ linkText, image, url, repoUrl, description }) => (
          <Fragment key={linkText}>
            {selectedItem === linkText ? (
              <ProjectInfoModule
                projectName={linkText}
                description={description}
                closeModule={() => setSelectedItem(null)}
              />
            ) : null}

            <div>
              <div className="workItems__item">
                <div>
                  <p>{linkText}</p>
                  <div onClick={() => setSelectedItem(linkText)}>
                    <InfoButton />
                  </div>

                  {repoUrl ? (
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                      <GithubButton />
                    </a>
                  ) : null}
                </div>

                <a href={url} target="_blank" rel="noopener noreferrer">
                  {/* <img src={image} alt={linkText} /> */}
                  <picture
                    key={linkText}
                  >
                    <source srcSet={`/assets/${image}.webp`} type="image/webp" />
                    <source srcSet={`/assets/${image}.jpg`} type="image/jpeg" />
                    <img src={`/assets/${image}.jpg`} alt={`Screenshot of ${linkText} site`} />
                  </picture>
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
