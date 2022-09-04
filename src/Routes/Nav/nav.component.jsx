import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.style.scss";

const Navigation = () => (
    <Fragment>
        <nav className="navbar">
            <Link to="/"><h1><i className="fa fa-archive" aria-hidden="true"></i> MehakStore</h1></Link>
            <ul className="navMenu">
                <li>
                    <Link to={"/"} ><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                </li>
                <li>
                    <Link to={"/shop"} ><i className="fa fa-shopping-bag" aria-hidden="true"></i> Shop</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </Fragment>
)

export default Navigation;