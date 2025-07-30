import "./Navbar.css";
import { FaSearch, FaBars } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";
import NavbarCenterLink from "./NavbarCenterLink";
import { links } from "./data";

const Navbar = () => {
    return (
        <nav className="navbar">
            <section className="section-center">
                <ul className="left-links">
                    <li>
                        <h1>
                            <a href="#">
                                <SiCoffeescript />
                            </a>
                        </h1>
                    </li>
                </ul>
                <ul className="center-links">
                    {links.map((link) => {
                        return <NavbarCenterLink key={link.id} {...link} />;
                    })}
                </ul>
                <ul className="right-links">
                    <li>
                        <a href="#">
                            <FaSearch />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn btn-inline-brown">
                            register
                        </a>
                    </li>
                    <li className="show-sidebar">
                        <a href="#">
                            <FaBars />
                        </a>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
