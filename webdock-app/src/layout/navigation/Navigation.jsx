import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Navigation.scss";
import placeholderProfilePic from "../../content/images/placeholder_profile.webp";
import logo from "../../content/images/logo_200x200.png";
import roadmap_icon from "../../content/gfx/icons/roadmap-icon.svg";
import feature_icon from "../../content/gfx/icons/feature-request-icon.svg";
import search_icon from "../../content/gfx/icons/search-icon.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu visibility
  const toggleDropdownMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    console.log(isOpen);
  };

  return (
    <>
      <nav className="wrap">
        <div className="navigation-logo">
          <Link to="/">
            <img className="navigation-logo__img" src={logo} alt="Webdock logo" />
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
          <Hamburger direction="left" toggled={isOpen} toggle={toggleDropdownMenu} rounded />
        </div>

        {isOpen ? (
          <>
            <div className="dark-backdrop" />
            {/* Dropdown menu */}
            <div className="dropdown-menu">
              <ul className="dropdown-menu__items">
                <li>
                  {/* User profile picture and username in the dropdown */}
                  <img src={placeholderProfilePic} alt="username icon" className="navigation-profile-pic" />
                  <p>user_name</p>
                </li>

                {/* Dropdown navigation links */}
                <li>
                  <Link to="/roadmap"> {/* Update to the actual routes */}
                    <img src={roadmap_icon} alt="roadmap icon" />
                    Roadmap
                  </Link>
                </li>

                <li>
                  <Link to="/feature-request"> {/* Update to the actual routes */}
                    <img src={feature_icon} alt="feature icon" />
                    Feature Request
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}
