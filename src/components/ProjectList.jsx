import ProjectCard from './ProjectCard.jsx';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <p className="empty-projects">
        No projects match this technology.
      </p>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          category={project.category}
          description={project.description}
          techStack={project.techStack}
          githubUrl={project.githubUrl}
          demoUrl={project.demoUrl}
        />
      ))}
    </div>
  );
}

export default ProjectList;
