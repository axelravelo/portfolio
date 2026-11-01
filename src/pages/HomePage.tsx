import './HomePage.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroBackground from '../components/Render/HeroBackground';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { navigateToSection, scrollToSection } from "../utils/sectionNavigation";

import { ContactUs } from '../components/Contact/ContactUs';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { webProjects } from "../data/webProjects";
import { gameProjects } from "../data/gameProjects";

import backdrop from '../assets/webpage-backdrop.png'

const HomePage = () => {
    const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
        const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;

        const targetRotationX = normalizedY * (Math.PI / 6);
        const targetRotationY = normalizedX * (Math.PI / 6);

        setTargetRotation({ x: targetRotationX, y: targetRotationY });

        console.log(normalizedY);
        // console.log(event.clientY);
    };

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const sectionId = location.hash.slice(1);
        if (!sectionId) return;

        const frame = window.requestAnimationFrame(() => {
            scrollToSection(sectionId);
        });

        return () => window.cancelAnimationFrame(frame);
    }, [location.hash]);

    const [copied, setCopied] = useState(false);

    const email: string = 'axel8ravelo@outlook.com'

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <>
            <div className="home-page" id="top">
                <Header />
                <main>
                    <section
                        id="hero"
                        className="hero-section"
                        onMouseMove={handleMouseMove}
                    >
                        <div className="hero-content">
                            <p className="text-[#94A3B8] text-[25px]">Hey!</p>

                            <h1 className="hero-name">I'm Axel.</h1>

                            <h2 className="hero-job-title">
                                Game Developer
                                <span> → </span>
                                Web Developer
                            </h2>

                            <p className="hero-description">
                                I’m a{" "}
                                <span className="hero-highlight">
                                    front-end
                                </span>{" "}
                                web developer and{" "}
                                <span className="hero-highlight">
                                    game developer
                                </span>.
                            </p>

                            <p className="hero-description long-description">
                                My background in game development shaped how I approach the web:
                                with a focus on clean, efficient code and thoughtful, engaging design.
                            </p>

                            <div className="hero-links">
                                <button
                                    className="cursor-pointer"
                                    onClick={() =>
                                        navigateToSection("work", location.pathname, navigate)
                                    }
                                >
                                    View My Work
                                </button>
                                <button
                                    className="cursor-pointer"
                                    onClick={() =>
                                        navigateToSection("contact", location.pathname, navigate)
                                    }
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <HeroBackground targetRotation={targetRotation} />
                        </div>
                    </section>

                    <section id="work" className='work-section'>
                        <h2 className='work-section-title'>My Work</h2>
                        <h3 className="work-section-subtitle">
                            <span className="w-12 h-[2px] bg-[#3B82F6]"></span>
                            Web Development
                        </h3>

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
                        <h3 className="work-section-subtitle">
                            <span className="w-12 h-[2px] bg-[#3B82F6]"></span>
                            Game Development
                        </h3>
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

                        <div className="about-content">
                            <img src={backdrop} alt="" className="about-image" />

                            <div className="about-details">
                                <h3 className="about-details-subtitle">Work interests:</h3>
                                <p className="about-details-text">
                                    I enjoy learning new technologies and applying them to my work while keeping my code clean,
                                    scalable, and modular. I also enjoy coming up with new functionality and quality-of-life improvements
                                    that enhance the overall user experience.
                                </p>

                                <h3 className="about-details-subtitle">My Approach:</h3>
                                <p className="about-details-text">
                                    I enjoy hands-on work and getting to understand a system as I make changes to it.
                                    I like brainstorming ideas for improvements and finding ways to make processes simpler
                                    and more efficient. I also value my teammates' perspectives and enjoy hearing their
                                    ideas and feedback, especially when it can lead to a better solution.
                                </p>

                                <h3 className="about-details-subtitle">What I'm currently doing:</h3>
                                <p className="about-details-text">
                                    I'm currently working on expanding my knowledge of backend technologies and
                                    improving my understanding of design. I'm also exploring how AI can be used to
                                    streamline my workflow, make development more efficient, and help me iterate on ideas more quickly.
                                </p>
                            </div>
                        </div>

                        <div className="about-highlights">
                            <div className="about-skills">
                                <h3 className="about-details-subtitle">Tools &amp; technologies</h3>
                                <ul className="about-skills-list" aria-label="Tools and technologies">
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Unreal Engine</li>
                                    <li>Verse</li>
                                    <li>Niagara</li>
                                    <li>Codex</li>
                                    <li>GitHub Copilot</li>
                                </ul>
                            </div>

                            <div className="about-accomplishments">
                                <h3 className="about-details-subtitle">Selected accomplishments</h3>
                                <article className="about-accomplishment">
                                    <h4>Large-number progression system</h4>
                                    <p>
                                        Designed a system for handling values beyond GAS's supported input range by
                                        separating the displayed value from the value used by the gameplay system.
                                    </p>
                                </article>
                                <article className="about-accomplishment">
                                    <h4>Game replication documentation</h4>
                                    <p>
                                        Contributed documentation about replicated timers to a game development blog.
                                    </p>
                                    <a href="https://manuelotheo.com/posts/replicated_timer/" target="_blank" rel="noopener noreferrer">
                                        Read the replicated timer article <span aria-hidden="true">↗</span>
                                    </a>
                                </article>
                                <article className="about-accomplishment">
                                    <h4>Concurrent effects in Mariachi Legends</h4>
                                    <p>
                                        Updated the sound and visual effects system so multiple effects can play together,
                                        creating richer feedback when objects such as walls and boxes are destroyed.
                                    </p>
                                </article>
                            </div>
                        </div>

                    </section>

                    <section id="contact" className='contact-section'>
                        <h2 className='contact-section-title'>Contact</h2>
                        <div className='contact-info-container'>
                            <ContactUs />

                            <div className="contact-links-container">
                                <a
                                    href="https://github.com/axelravelo"
                                    aria-label="GitHub profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-github"></i>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/axel-ravelo-8889532a5/"
                                    aria-label="LinkedIn profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>

                                <a
                                    href="https://discord.dog/1221224326003687534"
                                    aria-label="Contact me on Discord"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-discord"></i>
                                </a>
                                <span className="contact-email-tooltip-wrap">
                                    <a href={`mailto:${email}`} aria-label={`Email ${email}`} aria-describedby="contact-email-tooltip">
                                        <i className="bi bi-envelope"></i>
                                    </a>
                                    <span className="contact-email-tooltip" id="contact-email-tooltip" role="tooltip">
                                        Opens your default email app. If you don’t have one set up, use the contact form above.
                                    </span>
                                </span>
                                <span className="contact-email-tooltip-wrap">
                                    <button type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"} aria-describedby="copy-email-tooltip">
                                        <i className={`bi ${copied ? "bi-check-lg text-green-400" : "bi-envelope-at-fill"}`}></i>
                                    </button>
                                    <span className="contact-email-tooltip" id="copy-email-tooltip" role="tooltip">
                                        {copied ? "Email address copied to clipboard." : "Copy my email address to your clipboard."}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>

        </>
    );
}

export default HomePage;
