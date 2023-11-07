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

        {/* <ul className="menu-items">
          <li>
            <Link to="/roadmap">
              <img src={roadmap_icon} alt="roadmap icon" />
              Roadmap
            </Link>
          </li>

          <li>
            <Link to="/feature-request">
              <img src={feature_icon} alt="feature icon" />
              Feature Request
            </Link>
          </li>

          <li>
            <Link to="/search">
              <img src={search_icon} alt="search icon" />
              Search
            </Link>
          </li>

          <li>
            <img src={placeholderProfilePic} alt="username icon" className="navigation-profile-pic" />
            <p>user_name</p>
          </li>
        </ul> */}

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
                  {/* User profile picture and username in the dropdown */}
                  <img
                    src={placeholderProfilePic}
                    alt="username icon"
                    className="navigation-profile-pic"
                  />
                  <p>user_name</p>
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
