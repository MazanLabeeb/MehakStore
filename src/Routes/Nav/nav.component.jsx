import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../Context/user.context";
import "./nav.style.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    return (
        <Fragment>
            <header className="navbar">
                <Link to="/"><h1><i className="fa fa-archive" aria-hidden="true"></i> </h1></Link>
                <nav>
                    <ul className="navMenu">
                        <li>
                            <Link to={"/shop"} ><i className="fa fa-shopping-bag" aria-hidden="true"></i> Shop</Link>
                        </li>
                        <li>
                            <Link to={"/auth"} ><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </Fragment>
    );
}


export default Navigation;