import type { Project } from "../types/Project";
import ecommerce from "../assets/ecomerce-project.png";

export const webProjects: Project[] = [
    {
        title: "Chatbot Project",
        image: "/path/to/image.png",
        description: "A project developed as part of a JavaScript course, which I recreated using TypeScript to strengthen my understanding of typed JavaScript and apply TypeScript concepts in a practical project.",
        responsibilities: "A chatbot application developed as part of a JavaScript course. I recreated the project using TypeScript and extended its functionality by integrating an AI API to generate dynamic responses instead of relying on predefined replies.",
        challenges: "Learning how to work with an external API, handle asynchronous requests, process responses, and integrate dynamically generated content into the existing chatbot interface."
    },
    {
        title: "E-commerce project",
        image: ecommerce,
        description: "An e-commerce storefront developed as part of a JavaScript course and recreated using TypeScript and Tailwind CSS.",
        responsibilities: "Converted the JavaScript implementation to TypeScript, creating reusable types for components, props, and application data, while replacing the original CSS with Tailwind CSS.",
        challenges: "Learning to define and share types across components, particularly when handling props and API data, and understanding how TypeScript can help prevent type-related errors."
    },
];