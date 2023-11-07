import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Navigation.scss";
import placeholderProfilePic from "../../content/images/placeholder_profile.webp";
import logo from "../../content/images/logo_200x200.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu visibility
  const toggleDropdownMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log(isOpen);
  };

  return (
      <nav className="wrap">
        <div className="navigation-logo">
          <Link to="/">
            <img
              className="navigation-logo__img"
              src={logo}
              alt="Webdock logo"
            />
          </Link>

          <div className="navigation-logo__company-name">Webdock.io</div>
        </div>

        <ul className="menu-items">
          <li>
            <Link className="menu-items__log-out" to="/" />
          </li>

          <li>
            <Link className="menu-items__profile" to="/" />
          </li>
        </ul>

        <div className="burger-menu-icon">
          {/* Hamburger menu icon */}
          <Hamburger
            direction="left"
            toggled={isOpen}
            toggle={toggleDropdownMenu}
            rounded
          />
        </div>

        {/* Short hand if/else statement "If isOpen === true, then show the dropdown menu"*/}
        {isOpen ? (
          <>
            <div className="dark-backdrop" />
            {/* Dropdown menu */}
            <div className="nav-dropdown-menu">
              <ul className="nav-dropdown-menu__items">

                <li>
                  <Link className="nav-dropdown-menu__items__flex" to="/">
                    <p>Log Out</p>
                    <span className="menu-items__log-out"></span>
                  </Link>
                </li>

                <li>
                  <Link className="nav-dropdown-menu__items__flex" to="/">
                    <p>Profile</p>
                    <span className="menu-items__profile"></span>
                  </Link>
                </li>

              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </nav>
  );
}
