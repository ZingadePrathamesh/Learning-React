import { Link } from "react-router-dom";
import pexel_logo from "../images/pexels-svgrepo-com.svg"
import "../styles/navbar.css";
import { useState } from "react";

export default function Navbar(){
    const [navClicked, setNavClicked] = useState(false);
    
    const handleNavClick = ()=> setNavClicked(!navClicked);

    return(
        <>
            <nav>
                <Link to="/">
                    <img src={pexel_logo} alt="pexel_logo" height={80} width={80} className="logo-img"/>
                </Link>

                <div className="nav-elements">
                    <ul className="nav-elements-ul">
                        <li><Link className="nav-elements-link active" to="/">Explore</Link></li>
                        <li><Link className="nav-elements-link" to="/">License</Link></li>
                        <li><Link className="nav-elements-link" to="/">Upload</Link></li>
                        <li><Link className="nav-elements-link" to="/">&#x2022;&#x2022;&#x2022;</Link></li>
                        <li><Link className="nav-elements-link" to="/">Join</Link></li>
                    </ul>
                </div>
                <div className="mobile" onClick={handleNavClick}>
                    <i id="bar" className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        </>
    );
}