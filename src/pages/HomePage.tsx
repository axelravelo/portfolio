import './HomePage.css'
import Header from "../components/Header/Header";

import { ContactUs } from '../components/Contact/ContactUs';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { webProjects } from "../data/webProjects";
import { gameProjects } from "../data/gameProjects";

import discord from "../assets/discord.svg";
import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";

const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <Header />
                <main>
                    <section id="hero" className="hero-section">

                        <div className="hero-content">
                            <p className="text-[#94A3B8] text-[25px]">Hey!</p>

                            <p className="hero-name">I'm Axel.</p>

                            <h1 className="hero-job-title">
                                Game Developer
                                <span> → </span>
                                Web Developer
                            </h1>

                            <p className="hero-description">
                                I’m a{" "}
                                <span className="hero-highlight">
                                    front-end
                                </span>{" "}
                                web developer and{" "}
                                <span className="hero-highlight">
                                    game developer.
                                </span>.
                            </p>

                            <p className="hero-description long-description">
                                My background in game development shaped how I approach the web:
                                with a focus on clean, efficient code and thoughtful, engaging design.
                            </p>

                            <div className="hero-links">
                                <a href="#work">View My Work</a>
                                <a href="#contact">Contact Me</a>
                            </div>
                        </div>
                    </section>

                    <section id="work" className='work-section'>
                        <h1 className='work-section-title'>My Work</h1>
                        <h2 className="work-section-subtitle">
                            <span className="w-12 h-[2px] bg-[#3B82F6]"></span>
                            Web Development
                        </h2>

                        <div className="project-cards-container">
                            <div className="project-cards-track">
                                {webProjects.map((project) => (
                                    <ProjectCard
                                        key={project.title}
                                        project={project}
                                    />
                                ))}
                            </div>
                        </div>
                        <h2 className="work-section-subtitle">
                            <span className="w-12 h-[2px] bg-[#3B82F6]"></span>
                            Game Development
                        </h2>
                        <div className="project-cards-container">
                            <div className="project-cards-track">
                                {gameProjects.map((project) => (
                                    <ProjectCard
                                        key={project.title}
                                        project={project}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="about" className='about-section'>
                        <h2 className='about-section-title'>About Me</h2>
                        <p className='about-introduction'>
                            I'm Axel Ravelo, a software engineer. I enjoy turning ideas into functional,
                            polished products and learning new things along the way.
                        </p>

                        <div className='about-details'>
                            <h3 className='about-details-subtitle'>Work interests:</h3>
                            <p className='about-details-text'>
                                I enjoy learning new technologies and applying them to my work while keeping my code clean,
                                scalable, and modular. I also enjoy coming up with new functionality and quality-of-life improvements
                                that enhance the overall user experience.
                            </p>

                            <h3 className='about-details-subtitle'>My Approach:</h3>
                            <p className='about-details-text'>
                                I enjoy hands-on work and getting to understand a system as I make changes to it.
                                I like brainstorming ideas for improvements and finding ways to make processes simpler
                                and more efficient. I also value my teammates' perspectives and enjoy hearing their
                                ideas and feedback, especially when it can lead to a better solution.
                            </p>

                            <h3 className='about-details-subtitle'>What I'm currently doing:</h3>
                            <p className='about-details-text'>
                                I'm currently working on expanding my knowledge of backend technologies and
                                improving my understanding of design. I'm also exploring how AI can be used to
                                streamline my workflow, make development more efficient, and help me iterate on ideas more quickly.
                            </p>
                        </div>


                    </section>

                    <section id="contact" className='contact-section'>
                        <h2 className='contact-section-title'>Contact</h2>
                        <div className='contact-info-container'>
                             <ContactUs />

                            <div className='contact-links-container'>
                                <a href="https://github.com/axelravelo" target="_blank">
                                    <img src={gitHub} alt="GitHub" className='link-icons' />
                                </a>
                                <a href="https://www.linkedin.com/in/axel-ravelo-8889532a5/" target="_blank">
                                    <img src={linkedIn} alt="GitHub" className='link-icons' />
                                </a>
                                <a href="https://discord.dog/1221224326003687534" target="_blank">
                                    <img src={discord} alt="GitHub" className='link-icons' />
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    );
}

export default HomePage;