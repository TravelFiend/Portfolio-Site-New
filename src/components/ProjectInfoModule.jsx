import PropTypes from 'prop-types';

const ProjectInfoModule = ({ shown, projectName, description, closeModule }) => {
  if (!shown) {
    return null;
  }

  return (
    <div className="project-info">
      <div className="project-info__close" onClick={closeModule}/>

      <div className="project-info__content">
        <h3>{projectName}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

ProjectInfoModule.propTypes = {
  shown: PropTypes.bool.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeModule: PropTypes.func.isRequired
};

export default ProjectInfoModule;
