import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
            <ul className="navbar-nav">
                <li className="nav-brand text-white text-lg">
                    Employee Team Management
                </li>
                <li className="nav-item ">
                    <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li className="nav-item ">
                    <Link to = '/grouped-teams' className="nav-link text-white">Teams</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;