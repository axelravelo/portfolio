import { Link } from "react-router-dom";

import type { Project } from "../../types/Project";
import './ProjectCard.css'

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className="project-card group">
            <Link
                to={`/project/${project.slug}`}
                className="project-card-link"
                aria-label={`View ${project.title} case study`}
            >
                <img src={project.image} alt="" className="project-card-image" loading="lazy" />
                <div className="project-card-overlay">
                    <span className="project-card-category">{project.category}</span>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <span className="project-card-cta">View case study <span aria-hidden="true">↗</span></span>
                </div>
            </Link>
        </article>
    );
}

export default ProjectCard;
