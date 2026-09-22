import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        Axel Ravelo
                    </NavLink>
                </div>

                <div className="middle-section"></div>

                <div className="right-section">
                    
                    <a href="#work" className="header-link">Work</a>
                    <a href="#about" className="header-link">About</a>
                    <a href="#contact" className="header-link">Contact</a>
                </div>
            </div>
        </>
    );
}

export default Header;