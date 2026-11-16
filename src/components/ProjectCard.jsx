function ProjectCard({
  title,
  category,
  description,
  techStack,
  githubUrl,
  demoUrl
}) {
  return (
    <article className="project-card">
      <div className="project-card-heading">
        <span>{category}</span>
        <span className="project-indicator" aria-hidden="true">↗</span>
      </div>

      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      <div className="project-technologies" aria-label="Technologies">
        {techStack.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>

        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          Live Demo ↗
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
