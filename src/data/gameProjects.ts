import type { Project } from "../types/Project";
import mariachiLegends from "../assets/mariachi-legends.png";
import projectSurvivors from "../assets/project-survivors.png";
import unreleasedTitle from "../assets/unreleased-title.png";

export const gameProjects: Project[] = [
    {
        slug: "project-survivors",
        title: "Project Survivors",
        image: projectSurvivors,
        category: "Game Development",
        role: "Project Lead · Gameplay Design & Systems",
        tools: ["Unreal Editor for Fortnite", "Verse", "UEFN devices"],
        status: "Previously published on Fortnite",

        description: "A horror-themed UEFN island where players must complete a series of objectives before escaping the area. Once the objectives are completed, players must return to the initial spawn zone and escape before the exit door closes.",
        responsibilities: "As project lead at Hammerbyte Games, I shaped the game design and mechanics, balanced gameplay, and built UI and custom player systems for health, stamina, and action-specific stats.",
        challenges: "The project combined several connected gameplay systems: objective machines with timed skill checks, player progression and stats, and NPCs with sensing, patrol, chase, and custom ability behaviors.",

        longDescription: "Project Survivors is a horror-themed Fortnite island built around completing objectives under pressure. Players repair completion machines and cleanse totems, then return to the starting area and escape before the exit closes. The project was published on Fortnite. After my employment at Hammerbyte Games ended and I stopped supporting it, the island was later removed from Fortnite's game browser.",
        longResponsibilities: "As project lead at Hammerbyte Games, I contributed to the overall design and gameplay direction, balancing, and UI. I designed and implemented custom systems for player health, stamina, and action-specific stats, connecting player progression to the core objective loop.",
        longChallenges: "A central challenge was coordinating objective interactions, player state, and NPC pressure into one readable gameplay loop. The completion machines used a timing skill check: a line moved across the UI and players pressed a button while it crossed a valid zone. NPC behavior was built with UEFN devices and Verse, with sensing, patrols, chase decisions, chase termination, and custom abilities.",
        highlights: [
            {
                title: "Player stats and progression",
                description: "Created custom health, stamina, and action-specific stat systems, then balanced how those values supported player decisions during a match."
            },
            {
                title: "Completion machines and skill checks",
                description: "Designed a core objective interaction where players time a button press as a moving UI marker crosses a valid zone to make progress."
            },
            {
                title: "NPC behavior",
                description: "Built NPC behavior with UEFN devices and Verse, including sensing, patrols, chase and stop-chase decisions, and custom abilities."
            },
            {
                title: "Project leadership",
                description: "Led the project’s game design and mechanics work, UI, and balancing at Hammerbyte Games."
            }
        ],
        gallery: [
            {
                src: "/portfolio/enemy_chasing_pjct_svvs.png",
                alt: "An enemy chasing a player in Project Survivors",
                caption: "An NPC encounter during a match."
            },
            {
                src: "/portfolio/upgrade_ui_pjct_svvs.png",
                alt: "Project Survivors player upgrade interface showing health, speed, stamina, repair speed, and cleanse speed stats",
                caption: "The upgrade interface for player stats."
            }
        ]
    },
    {
        slug: "mariachi-legends",
        title: "Mariachi Legends",
        image: mariachiLegends,
        category: "Game Development",
        role: "UI / Game Programmer / VFX · Halberd Games",
        tools: ["Unreal Engine 5", "C++"],
        status: "Unreleased · Details limited",
        externalLinks: [
            { label: "View on Steam", url: "https://store.steampowered.com/app/2376260/Mariachi_Legends/" }
        ],

        description: "An action-platformer inspired by Mexican folklore, featuring fast-paced combat, exploration, and supernatural elements.",
        responsibilities: "Implemented UI functionality for the Settings and Inventory screens, including dynamic keybind displays based on player input settings. VFX and SFX functionality for interactable objects.",
        challenges: "Developing and implementing a reusable system for triggering multiple VFX and SFX from a single interaction, including Niagara effects and sprite animations while maintaining a high frame rate.",

        longDescription: "Mariachi Legends is an unreleased action-platformer inspired by Mexican folklore. To respect the project's confidentiality, this case study focuses on my responsibilities and technical work without sharing unreleased game details or additional images.",
        longResponsibilities: "At Halberd Games, I worked across departments as a UI / Game Programmer / VFX contributor. My work included UI and gameplay logic, visual effects, and optimizing asset configuration. I configured sprites and textures to load before they appeared on screen, avoiding the visibly pixelated transition that could occur the first time a spritesheet loaded.",
        longChallenges: "The engine's built-in keybind display did not support the project's needs, so I implemented a custom system that detects whether the player is using a keyboard or controller and displays the corresponding input. I also extended an existing effects system that had only allowed one effect of each type at a time, so multiple effects could play together. This meant learning a larger codebase and its conventions before making changes safely.",
        highlights: []
    },
    {
        slug: "unreleased-title",
        title: "Unreleased title",
        image: unreleasedTitle,
        category: "Game Development",
        role: "Game Programmer / UI & Currency / Hammerbyte Games",
        tools: ["Unreal Engine 5", "C++", "Gameplay Ability System"],
        status: "Unreleased",

        description: "An idle clicker where the objective is to defeat enemies with heroes and upgrade them to clear difficult levels.",
        responsibilities: "Worked on currency and UI as a game programmer at Hammerbyte Games. Built UI and parts of the systems for hero upgrades, hero purchases, and a weapon shop where players could equip weapons for stats or abilities.",
        challenges: "Designed a logarithmic representation for very large values used with GAS: values were stored in transformed form, converted to regular numbers for calculations and display, then transformed back before being passed to GAS.",

        longDescription: "An unreleased idle clicker developed at Hammerbyte Games. Players use heroes to defeat enemies, improve their roster, and progress through increasingly difficult levels. The project remains unreleased; this case study focuses on my technical contributions.",
        longResponsibilities: "As a Game Programmer focused on UI and currency, I built UI and contributed to the systems behind three shop screens: a hero shop for purchasing heroes, a hero upgrade shop for unlocking abilities, and a weapon shop for equippable weapons that grant stats or abilities.",
        longChallenges: "The project used the Gameplay Ability System (GAS), which could not directly accept the very large currency values the game needed. I used a logarithmic method to keep a transformed value in GAS, convert it to a regular number for math and UI presentation, then convert it back before passing it into GAS. This allowed the displayed currency and gameplay value to work together at a much larger scale.",
        highlights: [
            {
                title: "Large-number currency handling",
                description: "Used logarithmic value conversion to support very large currency values across GAS, gameplay calculations, and UI display."
            },
            {
                title: "Hero upgrades and purchases",
                description: "Built UI and parts of the systems for purchasing heroes and upgrading them to unlock new abilities."
            },
            {
                title: "Weapon shop",
                description: "Created the weapon shop UI and contributed to its system for equipping weapons that grant player stats or abilities."
            }
        ],
        gallery: [
            {
                src: "/portfolio/hero_shop_urlsd_ttl.png",
                alt: "Hero shop interface for the unreleased idle clicker project",
                caption: "Hero shop interface."
            },
            {
                src: "/portfolio/hero_upgrd_urlsd_ttl.png",
                alt: "Hero upgrade interface for the unreleased idle clicker project",
                caption: "Hero upgrade interface."
            }
        ]
    }
];
