import type { NavigateFunction } from "react-router-dom";

export const scrollToSection = (sectionId: string) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(sectionId)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
    });
};

export const navigateToSection = (
    sectionId: string,
    locationPath: string,
    navigate: NavigateFunction
) => {
    if (locationPath === "/" || locationPath === "/portfolio/") {
        scrollToSection(sectionId);

        return;
    }

    navigate(`/#${sectionId}`);
};
