import { Link } from "react-router-dom";
import "./Navigation.scss";
import logo from "../../content/images/logo_200x200.png";

export default function Navigation() {
  return (
    <nav>
      <div className="navigation-logo">
        <Link>
          <img className="navigation-logo__img" src={logo} alt="Webdock logo" />
        </Link>
      </div>
      <ul className="">
        <li>
          <Link>Roadmap</Link>
        </li>
        <li>
          <Link>Feature Request</Link>
        </li>
        <li>
          <Link>Profil</Link>
        </li>
        <li>
          <div>USER_NAME</div>
        </li>
      </ul>
    </nav>
  );
}
