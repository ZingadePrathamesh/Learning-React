import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body p-2">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <h4 className="navbar-brand text-white ">Employee Team Management</h4>
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