import React, { useState } from "react";
import links from "./NavLinks";
import NavLink from "./NavLink";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  function createLink(link) {
    return <NavLink href={link.href} name={link.name} />;
  }
  return (
    <nav className="navContainer">
      <div className="menuIcon" onClick={handleClick}>
        <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      {click && <div className="sliderPlaceholder"></div>}
      <div
        className={click ? "navLinks navLinksActive" : "navLinks"}
        onClick={handleClick}
      >
        {links.map(createLink)}
      </div>
    </nav>
  );
};

export default Navbar;
