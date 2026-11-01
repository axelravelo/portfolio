import type { Project } from "../types/Project";
import ecommerce from "../assets/ecomerce-project.png";
import chatbot from "../assets/chatbot.png";

export const webProjects: Project[] = [
    {
        slug: "chatbot-project",
        title: "Chatbot Project",
        image: chatbot,
        category: "Web Development",
        role: "Frontend & API Integration",
        tools: ["React", "TypeScript", "Node.js", "Express", "DeepSeek API"],
        status: "Personal project",
        repositoryUrl: "https://github.com/axelravelo/chatbot-project",

        description: "A project developed as part of a JavaScript course, which I recreated using TypeScript to strengthen my understanding of typed JavaScript and apply TypeScript concepts in a practical project.",
        responsibilities: "Recreated the course project in TypeScript and added a small Express endpoint configured to send prompts to DeepSeek. The original chat components and structure were largely retained.",
        challenges: "Added a server-side API layer for the DeepSeek request so its API key can be read from an environment variable rather than embedded in the frontend. The repository's current chat input still displays a placeholder response while the service call is disabled.",

        longDescription: "A simple chatbot project based on an application from a JavaScript course. I recreated the project in TypeScript and added a Node.js/Express backend endpoint configured to request responses from DeepSeek.",
        longResponsibilities: "Kept the original chat components and overall structure largely intact. My main additions were adapting the project to TypeScript and setting up the server endpoint that connects to DeepSeek using a server-side environment variable for the API key.",
        longChallenges: "The project separates the chat UI from the AI request through an Express API endpoint. In the repository's current state, the service helper and backend integration are present, but ChatInput still returns a placeholder response because the helper call is commented out. The case study describes the integration work without presenting the current UI as a live DeepSeek chat.",
        highlights: []
    
    },
    {
        slug: "ecommerce-project",
        title: "E-commerce project",
        image: ecommerce,
        category: "Web Development",
        role: "Frontend Development",
        tools: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Sequelize", "SQLite", "Axios"],
        status: "Personal project",
        repositoryUrl: "https://github.com/axelravelo/ecommerce-project",

        description: "A full-stack storefront with searchable products, a cart, checkout, order history, and delivery tracking, recreated with a typed React frontend and API backend.",
        responsibilities: "Recreated the storefront frontend in TypeScript and Tailwind CSS, then connected its product, cart, checkout, order, and tracking flows to an Express API.",
        challenges: "Organized shared typed data across the frontend and API, including products, cart items, delivery options, orders, and payment summaries.",

        longDescription: "A full-stack e-commerce learning project with a React and TypeScript storefront backed by an Express API. Shoppers can browse and search products, manage cart quantities, review delivery options and a payment summary, place orders, view order history, and follow delivery status.",
        longResponsibilities: "Recreated the storefront from a JavaScript course project using TypeScript and Tailwind CSS. Connected the frontend flows to backend endpoints for products, cart items, delivery options, orders, and payment summaries. The backend uses Sequelize and defaults to SQLite, with configuration options for MySQL or PostgreSQL.",
        longChallenges: "The main work was carrying typed data across a multi-step shopping flow: product selection, cart updates, checkout, order creation, and tracking. Keeping the frontend state refreshed after cart and order actions was part of connecting the pages to the API.",
        highlights: []
    },
];
