export interface Project {
    slug: string;
    title: string;
    image: string;
    category: "Web Development" | "Game Development";
    role: string;
    tools: string[];
    status: string;
    repositoryUrl?: string;
    externalLinks?: { label: string; url: string }[];

    description: string;
    responsibilities: string;
    challenges: string;

    longDescription: string;
    longResponsibilities: string;
    longChallenges: string;
    highlights: { title: string; description: string }[];
    gallery?: { src: string; alt: string; caption: string }[];
};
