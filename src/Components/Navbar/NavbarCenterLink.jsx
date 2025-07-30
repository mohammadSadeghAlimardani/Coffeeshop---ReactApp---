const NavbarCenterLink = (props) => {
    const { textLink, href } = props;
    return (
        <li>
            <a href={href}>{textLink}</a>
        </li>
    );
};

export default NavbarCenterLink;
