import './css/Card.css';

const Card = ({ imageSrc, title, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="view-button">
        View
      </a>
    </div>
  );
};

export default Card;
