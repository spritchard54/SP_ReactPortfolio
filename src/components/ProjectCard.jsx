import { FaGithub } from "react-icons/fa";

function ProjectCard({ project, variant = "standard" }) {
  return (
    <div className="card ps-0 h-100">
      <div className="row g-0 h-100">
        <div className={variant === "featured" ? "col-md-4" : "col-md-12"}>
          <img
            src={project.image}
            className={
              variant === "standard"
                ? "card-img-top img-fluid standard-project-image"
                : "card-img-top img-fluid featured-project-image"
            }
            alt={`${project.title} project`}
          />
        </div>
        <div className={variant === "featured" ? "col-md-8" : "col-md-12"}>
          <div className="card-body h-100 d-flex flex-column">
            <h4 className="card-title">{project.title}</h4>
            <p className="card-text">{project.description}</p>
            <div className="mb-3">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="badge text-bg-secondary me-2 mb-2"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="d-flex gap-2 mb-3 mt-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="btn home-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn home-button d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <FaGithub size="20" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
