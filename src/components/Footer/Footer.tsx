import "./Footer.css";

const Footer = () => (
    <footer className="site-footer">
        <p>© {new Date().getFullYear()} Axel Ravelo</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
);

export default Footer;
