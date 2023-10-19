import { Link } from "react-router-dom";
import { useState } from "react";
import { Sling as Hamburger } from 'hamburger-react';

import "./Navigation.scss";

import logo from "../../content/images/logo_200x200.png";
import roadmap_icon from "../../content/gfx/roadmap-icon.svg";
import feature_icon from "../../content/gfx/feature-request-icon.svg";
import search_icon from "../../content/gfx/search-icon.svg";
// import username_icon from "../../content/gfx/username-icon.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="navigation-logo">
        <Link>
          <img className="navigation-logo__img" src={logo} alt="Webdock logo" />
        </Link>
      </div>
      <ul className="menu-items">
        <li>
          <img src={roadmap_icon} alt="roadmap icon" />
          <Link>  Roadmap </Link>
        </li>
        <li>
          <img src={feature_icon} alt="feature icon" />
          <Link>Feature Request</Link>
        </li>
        <li>
          <img src={search_icon} alt="search icon" />
          <Link>Profil</Link>
        </li>
        <li>
          <img src="#" alt="username icon" />
          <div>USER_NAME</div>
        </li>
      </ul>

      <Hamburger toggled={isOpen} toggle={setIsOpen}
        onToggle={toggled => {
          if (toggled) {
            console.log('first')
          }
        }}
      />
      
    </nav>
  );
}
