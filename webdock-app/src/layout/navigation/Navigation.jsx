import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Navigation.scss";
import logo from "../../content/images/logo_200x200.png";
import userStore from "../../stores/loginStore";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loginAsUser, logout } = userStore()

  const toggleDropdownMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
      <nav>
        <div className="nav-wrap">
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

          {
            user ?
              <>
                <ul className="menu-items">
                  <li>
                    <Link className="menu-items__profile" />
                  </li>

                  <li>
                    <Link className="menu-items__log-out" onClick={logout}/>
                  </li>
                </ul>
              </>

              : 

              <div className="nav-button-container">
                <button onClick={loginAsUser} className="nav-button-container__log-in">Login</button>
                <button className="nav-button-container__sign-up">Sign Up</button>
              </div>
          }

          <div className="burger-menu-icon">
            <Hamburger
              direction="left"
              toggled={isOpen}
              toggle={toggleDropdownMenu}
              rounded
              />
          </div>

          {isOpen && (
            <>
              <div className="dark-backdrop" />
              <div className="nav-dropdown-menu">
                <ul className="nav-dropdown-menu__items">

                  <li>
                    <Link className="nav-dropdown-menu__items__flex" onClick={logout}>
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
          )}

        </div>
      </nav>
  );
}
