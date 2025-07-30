import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="section-center">
                <p> &copy; all rights reserved by {new Date().getFullYear()}</p>
            </section>
        </footer>
    );
};

export default Footer;
