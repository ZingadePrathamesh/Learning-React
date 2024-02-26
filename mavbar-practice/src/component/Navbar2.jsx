import { Link } from "react-router-dom";
import logo from "../images/green-harbour-logo.svg";
import '../styles/navbar2.css'
import { useState} from "react";

export default function Navbar2(){
    const [menuClicked, setMenuClicked] = useState(false);
    const [navClicked, setNavClicked] = useState("home");
    return(
        <nav className="flex flex-row">
            <div className="flex flex-row items-center">
                <img src={logo} alt="green harbour logo" height={80} width={80}/>
                <h1 className="text-4xl mx-3 text-black font-bold">GREEN HARBOUR</h1>
            </div>
            <div className="nav-elements-2">
                <ul className={menuClicked? "nav-elements-ul2 active": "nav-elements-ul2"}>
                    <li><Link className={navClicked ==="home"? "nav-elements-ul-link active": "nav-elements-ul-link"} onClick={()=> setNavClicked("home")} to='/'>Home</Link></li>
                    <li><Link className={navClicked ==="map"? "nav-elements-ul-link active": "nav-elements-ul-link"} onClick={()=> setNavClicked("map")} to='/'>Map</Link></li>
                    <li><Link className={navClicked ==="profile"? "nav-elements-ul-link active": "nav-elements-ul-link"} onClick={()=> setNavClicked("profile")} to='/profile'>Profile</Link></li>
                    <li><Link className={navClicked ==="logout"? "nav-elements-ul-link active": "nav-elements-ul-link"} onClick={()=> setNavClicked("logout")} to='/logout'>Logout</Link></li>
                </ul>
            </div>
            <div className="menu-div" onClick={()=> setMenuClicked(!menuClicked)}>
                <i id="menu-icon" className={menuClicked ? "fas fa-times": "fas fa-bars"}></i>
            </div>
        </nav>
    );
}