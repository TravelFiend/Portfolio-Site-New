import PropTypes from 'prop-types';

const ProjectInfoModule = ({ projectName, description, closeModule }) => {
  return (
    <div className="project-info">
      <div className="project-info__close" onClick={closeModule}/>

      <div className="project-info__content">
        <h3>{projectName}</h3>
        <div onClick={closeModule}>
          {description.split('\n').map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectInfoModule.propTypes = {
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeModule: PropTypes.func.isRequired
};

export default ProjectInfoModule;
