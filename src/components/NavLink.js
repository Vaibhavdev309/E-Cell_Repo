import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <li>
      <Link className="navLink" to={props.href} target="_blank">
        {props.name}
      </Link>
    </li>
  );
};

export default NavLink;
