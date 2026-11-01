import { Link, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { gameProjects } from "../data/gameProjects";
import { webProjects } from "../data/webProjects";
import "./ProjectPage.css";

const allProjects = [...webProjects, ...gameProjects];

const ProjectPage = () => {
    const { slug } = useParams();
    const projectIndex = allProjects.findIndex((project) => project.slug === slug);
    const project = allProjects[projectIndex];

    if (!project) {
        return (
            <div className="project-page">
                <Header />
                <main className="project-detail project-missing">
                    <p className="project-eyebrow">Project not found</p>
                    <h1>We couldn’t find that case study.</h1>
                    <Link to="/#work" className="project-back-link">← Back to all projects</Link>
                </main>
            </div>
        );
    }

    const previousProject = allProjects[(projectIndex - 1 + allProjects.length) % allProjects.length];
    const nextProject = allProjects[(projectIndex + 1) % allProjects.length];

    return (
        <div className="project-page" id="top">
            <Header />
            <main className="project-detail">
                <Link to="/#work" className="project-back-link">← Back to all projects</Link>

                <section className="project-detail-hero">
                    <div className="project-detail-copy">
                        <p className="project-eyebrow">{project.category} · {project.status}</p>
                        <h1>{project.title}</h1>
                        <p className="project-detail-intro">{project.longDescription || project.description}</p>
                        <div className="project-meta-grid">
                            <div>
                                <span className="project-meta-label">My role</span>
                                <p>{project.role}</p>
                            </div>
                            <div>
                                <span className="project-meta-label">Tools</span>
                                <ul className="project-tool-list">
                                    {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                                </ul>
                            </div>
                        </div>
                        {project.repositoryUrl && (
                            <a
                                className="project-repository-link"
                                href={project.repositoryUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View source on GitHub <span aria-hidden="true">↗</span>
                            </a>
                        )}
                        {project.externalLinks?.map((link) => (
                            <a
                                className="project-repository-link"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={link.url}
                            >
                                {link.label} <span aria-hidden="true">↗</span>
                            </a>
                        ))}
                    </div>
                    <img className="project-hero-image" src={project.image} alt={`${project.title} gameplay`} />
                </section>

                <section className="project-story-grid" aria-label="Project details">
                    <article className="project-story-card">
                        <span className="project-section-index">01 / OVERVIEW</span>
                        <h2>Project overview</h2>
                        <p>{project.longDescription || project.description}</p>
                    </article>
                    <article className="project-story-card">
                        <span className="project-section-index">02 / CONTRIBUTION</span>
                        <h2>My contribution</h2>
                        <p>{project.longResponsibilities || project.responsibilities}</p>
                    </article>
                    <article className="project-story-card project-story-wide">
                        <span className="project-section-index">03 / CHALLENGE</span>
                        <h2>Systems &amp; challenges</h2>
                        <p>{project.longChallenges || project.challenges}</p>
                    </article>
                </section>

                {project.highlights.length > 0 && (
                    <section className="project-highlights">
                        <div className="project-section-heading">
                            <span className="project-section-index">04 / SELECTED WORK</span>
                            <h2>Systems I worked on</h2>
                        </div>
                        <div className="project-highlight-grid">
                            {project.highlights.map((highlight, index) => (
                                <article className="project-highlight" key={highlight.title}>
                                    <span className="project-highlight-number">0{index + 1}</span>
                                    <h3>{highlight.title}</h3>
                                    <p>{highlight.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {project.gallery && project.gallery.length > 0 && (
                    <section className="project-gallery">
                        <div className="project-section-heading">
                            <span className="project-section-index">05 / IN-GAME</span>
                            <h2>Project gallery</h2>
                        </div>
                        <div className="project-gallery-grid">
                            {project.gallery.map((image) => (
                                <figure key={image.src}>
                                    <img src={image.src} alt={image.alt} loading="lazy" />
                                    <figcaption>{image.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                )}

                <nav className="project-pagination" aria-label="Other projects">
                    <Link to={`/project/${previousProject.slug}`}>
                        <span>Previous project</span>
                        <strong>← {previousProject.title}</strong>
                    </Link>
                    <Link to={`/project/${nextProject.slug}`} className="project-next-link">
                        <span>Next project</span>
                        <strong>{nextProject.title} →</strong>
                    </Link>
                </nav>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectPage;
