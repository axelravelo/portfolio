import type { Project } from "../types/Project";
import mariachiLegends from "../assets/mariachi-legends.png";
import projectSurvivors from "../assets/project-survivors.png";
import unreleasedTitle from "../assets/unreleased-title.png";

export const gameProjects: Project[] = [
    {
        title: "Project Survivors",
        image: projectSurvivors,
        description: "A horror-themed UEFN island where players must complete a series of objectives before escaping the area. Once the objectives are completed, players must return to the initial spawn zone and escape before the exit door closes.",
        responsibilities: "As Project Lead, I was responsible for overseeing the general game concept and contributing to the core design and gameplay systems. My primary responsibilities included UI/UX design, NPC behavior, objective systems, and player progression.",
        challenges: "Implemented custom Scene Graph UI elements such as cast bars, player portraits, and enemy indicators while learning the system from the ground up. This allowed me to create more customized UI and gameplay interactions than the standard tools provided."
    },
    {
        title: "Mariachi Legends",
        image: mariachiLegends,
        description: "An action-platformer inspired by Mexican folklore, featuring fast-paced combat, exploration, and supernatural elements.",
        responsibilities: "Implemented UI functionality for the Settings and Inventory screens, including dynamic keybind displays based on player input settings. VFX and SFX functionality for interactable objects.",
        challenges: "Developing and implementing a reusable system for triggering multiple VFX and SFX from a single interaction, including Niagara effects and sprite animations while maintaining a high frame rate."
    },
    {
        title: "Unreleased title",
        image: unreleasedTitle,
        description: "An idle clicker where the objective is to defeat enemies with heroes and upgrade them to clear difficult levels.",
        responsibilities: "Implemented a custom system that allowed GAS to process very large numbers. Implemented UI and functionality for upgrading and purchasing heroes and the settings menu.",
        challenges: "Learning how to interact with GAS to properly implement a number system that allowed for the game to scale indefinitely."
    }
];