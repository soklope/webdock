import { Link } from "react-router-dom"
import "./Navigation.scss"

export default function Navigation() {
    return ( 
        <div>
            <Link>Webdock logo</Link>
            <Link>Roadmap</Link>
            <Link>Feature Request</Link>
            <Link>Profil</Link>
            <div>
                USER_NAME
            </div>
        </div>
    )
}