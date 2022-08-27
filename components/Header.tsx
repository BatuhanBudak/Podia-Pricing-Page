import Image from "next/image";
import Nav from "./Nav";
import podiaLogo from "../public/icons/podia-logo.svg";
import useScreenSize from "../hooks/useScreenSize";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const windowWidth = useScreenSize();
  const breakPoint = 1000;

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <header className={`header ${navOpen ? "nav-open" : ""}`}>
      <div className="header-bar">
        <a className="logo-link" href="">
          <Image src={podiaLogo} alt="" />
        </a>
        <div className="header-right-links-container">
          <a className="header-right-link" href="">
            Login
          </a>
          <button
            className="nav-toggle"
            aria-expanded={navOpen}
            onClick={toggleNav}
            aria-controls="navigation"
          >
            <span className="menu-span">Menu</span>
          </button>
        </div>
        <Nav closeNav={closeNav} />
        {windowWidth > breakPoint && (
          <button className="trial-button">Start Free Trial</button>
        )}
      </div>
    </header>
  );
}
