import './Header.css'
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/sectionNavigation";

const Header = () => {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"dark" | "light">(() =>
        localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark"
    );
    const menuToggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        setMenuOpen(false);
        if (location.pathname === "/") {
            event.preventDefault();
            scrollToSection(sectionId);
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
    };

    return (
        <>
            <header className="header">
                <div className="left-section">
                    <Link
                        to="/#hero"
                        className="header-link"
                        onClick={(event) => handleSectionClick(event, "hero")}
                    >
                        Axel Ravelo
                    </Link>
                </div>

                <div className="middle-section"></div>

                <button
                    ref={menuToggleRef}
                    type="button"
                    className="header-menu-toggle"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                    onKeyDown={(event) => {
                        if (event.key === "Escape" && menuOpen) closeMenu();
                    }}
                >
                    <span className={`header-menu-icon ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </span>
                </button>

                <nav
                    id="main-navigation"
                    className={`right-section ${menuOpen ? "is-open" : ""}`}
                    aria-label="Main navigation"
                    onKeyDown={(event) => {
                        if (event.key === "Escape" && menuOpen) closeMenu();
                    }}
                >
                    <Link
                        to="/#work"
                        className="header-link"
                        onClick={(event) => { handleSectionClick(event, "work"); if (window.innerWidth <= 640) menuToggleRef.current?.focus(); }}
                    >
                        Work
                    </Link>

                    <Link
                        to="/#about"
                        className="header-link"
                        onClick={(event) => { handleSectionClick(event, "about"); if (window.innerWidth <= 640) menuToggleRef.current?.focus(); }}
                    >
                        About
                    </Link>

                    <Link
                        to="/#contact"
                        className="header-link"
                        onClick={(event) => { handleSectionClick(event, "contact"); if (window.innerWidth <= 640) menuToggleRef.current?.focus(); }}
                    >
                        Contact
                    </Link>
                    <button
                        type="button"
                        className="theme-toggle"
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        aria-pressed={theme === "light"}
                        onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
                    >
                        <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Header;
