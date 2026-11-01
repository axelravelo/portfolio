import type { Project } from "../types/Project";
import ecommerce from "../assets/ecomerce-project.png";
import chatbot from "../assets/chatbot.png";
import portfolio from "../assets/hero.png";

export const webProjects: Project[] = [
    {
        slug: "site-creator",
        title: "Site Creator",
        image: "/portfolio/page_wbpages.png",
        category: "Web Development",
        role: "Open-source Contributor · React / TypeScript",
        tools: ["React", "TypeScript", "Vinext", "Cloudflare Workers", "Supabase", "D1"],
        status: "Open-source contribution",
        repositoryUrl: "https://github.com/Rodolfo0/WebPages",

        description: "Contributed to an open-source app for creating and publishing websites, including reusable React blocks, portfolio templates, and editor functionality.",
        responsibilities: "Implemented parts of the React block system, the initial portfolio template, validated block property editing, and accessible controls for rearranging page sections.",
        challenges: "Connected block schemas, defaults, rendering, and document validation so editor changes remain valid and can be saved reliably.",

        longDescription: "Site Creator is an open-source application for creating and publishing websites. It uses React blocks to assemble pages and provides an editor for customizing content and page structure.",
        longResponsibilities: "Contributed to the shared React block contract and registry, implemented the initial set of portfolio blocks and a navigable template, and added validated property editing with draft persistence. I also opened a pull request for accessible block ordering controls with drag-and-drop and keyboard support.",
        longChallenges: "The editor depends on blocks keeping a consistent contract across rendering, editing, and saved documents. I worked on schema-validated properties and defaults, draft persistence, and document validation so edits remain valid throughout that flow. The ordering controls are submitted in an open pull request and are still under review.",
        highlights: [
            {
                title: "Reusable block system",
                description: "Helped define the React block contract and registry used to validate and render page sections."
            },
            {
                title: "Portfolio template",
                description: "Built the first portfolio block set and a navigable template with section anchors and complete default content."
            },
            {
                title: "Validated editor properties",
                description: "Added schema-based property editing, field validation, temporary drafts, save recovery, and server-side document validation."
            },
            {
                title: "Accessible block ordering · in review",
                description: "Submitted drag-and-drop and keyboard controls for reordering, duplicating, and deleting page sections."
            }
        ]
    },
    {
        slug: "portfolio",
        title: "Developer Portfolio",
        image: portfolio,
        category: "Web Development",
        role: "Design & Frontend Development",
        tools: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS", "Three.js"],
        status: "Live website",
        repositoryUrl: "https://github.com/axelravelo/portfolio",

        description: "A responsive portfolio presenting my web and game development work through dedicated project case studies, an interactive 3D hero, and light and dark themes.",
        responsibilities: "Designed and built the portfolio in React and TypeScript. Created reusable project cards and case study pages, responsive navigation, theme switching, and contact options.",
        challenges: "Learned Three.js to build and render the interactive 3D hero visual, then integrated it into the React experience. Also built project detail pages from shared data so each case study could present tailored content while staying consistent across the site.",

        longDescription: "A personal portfolio for presenting my work across web and game development. Visitors can browse project previews, open detailed case studies, and learn about my background and selected accomplishments.",
        longResponsibilities: "Built the site with React, TypeScript, and Vite. Implemented responsive layouts, reusable project cards, React Router case study pages, accessible navigation, light and dark themes, contact options, and an interactive Three.js hero visual.",
        longChallenges: "I had to learn Three.js to create and render the portfolio’s interactive 3D hero, then connect that scene to React and make its movement respond to pointer input. The site also brings projects from different disciplines into one consistent presentation: shared project data drives each preview and detail page, while tailored case study content, galleries, responsive behavior, and theme colors keep the experience cohesive.",
        highlights: [
            {
                title: "Reusable case studies",
                description: "Created data-driven project detail pages for roles, tools, responsibilities, challenges, selected work, galleries, and external links."
            },
            {
                title: "Interactive 3D hero",
                description: "Added a Three.js scene to the landing section with motion that responds to pointer movement."
            },
            {
                title: "Responsive, accessible experience",
                description: "Built mobile navigation, theme switching, reduced-motion support, and clear contact options for different devices and preferences."
            }
        ]
    },
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
