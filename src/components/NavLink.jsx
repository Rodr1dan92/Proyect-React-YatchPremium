// react-scroll

import { Link } from "react-scroll";

const NavLink = ({ children, to }) => {
  return (
    <Link className="Navlink" to={to} spy={true} smooth={true}>
      {children}
    </Link>
  );
};

export default NavLink;
