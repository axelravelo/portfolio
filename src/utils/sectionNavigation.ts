import type { NavigateFunction } from "react-router-dom";

export const navigateToSection = (
    sectionId: string,
    locationPath: string,
    navigate: NavigateFunction
) => {
    if (locationPath === "/") {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
        });

        return;
    }

    navigate(`/#${sectionId}`);
};