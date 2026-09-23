import { useState } from "react";
import { NavLink } from "react-router-dom";

import type { Project } from "../../types/Project";
import './ProjectCard.css'

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((isSelected) => !isSelected);
    };

    return (
        <>
            <div
                className="group relative shrink-0 w-[85vw] lg:w-[720px] rounded-2xl aspect-[16/10] mb-3 snap-center"
                onClick={handleClick}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />

                {/* Normal state */}
                <div
                    className={`unselected-project-title ${isSelected ? "mobile-hidden" : ""
                        }`}
                >
                    <h3 className="text-2xl font-bold text-white">
                        {project.title}
                    </h3>
                </div>

                {/* Selected state */}
                <div
                    className={`selected-project-title ${isSelected ? "mobile-visible" : ""
                        }`}
                >
                    <h3 className="text-2xl font-bold text-white">
                        {project.title}
                    </h3>

                    <p className="card-description">
                        {project.description}
                    </p>

                    <h4 className="mt-5 font-semibold text-white">
                        My Responsibilities:
                    </h4>

                    <p className="card-responsibilities">
                        {project.responsibilities}
                    </p>

                    <h4 className="mt-5 font-semibold text-white">
                        Challenges:
                    </h4>

                    <p className="card-challenges">
                        {project.challenges}
                    </p>

                    <NavLink to='/' className='learn-more-link'>Learn more</NavLink>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
