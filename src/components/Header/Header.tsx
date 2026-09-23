import './Header.css'
import { useLocation, useNavigate } from "react-router-dom";
import { navigateToSection } from "../../utils/sectionNavigation";

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <button
                        className="header-link"
                        onClick={() =>
                            navigateToSection("hero", location.pathname, navigate)
                        }
                    >
                        Axel Ravelo
                    </button>
                </div>

                <div className="middle-section"></div>

                <div className="right-section">
                    <button
                        className="header-link"
                        onClick={() =>
                            navigateToSection("work", location.pathname, navigate)
                        }
                    >
                        Work
                    </button>

                    <button
                        className="header-link ml-3"
                        onClick={() =>
                            navigateToSection("about", location.pathname, navigate)
                        }
                    >
                        About
                    </button>

                    <button
                        className="header-link ml-3"
                        onClick={() =>
                            navigateToSection("contact", location.pathname, navigate)
                        }
                    >
                        Contact
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;