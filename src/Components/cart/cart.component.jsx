
import { Fragment } from "react";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import "./cart.style.scss";

const Cart = () => {

    return (
        <Fragment>
            <label htmlFor="toggle-cart-dropdown">
                <div className="cart-icon-container">
                    <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                    <span>0</span>
                </div>
            </label>
            <input type="checkbox"  id="toggle-cart-dropdown" />
            <CartDropDown />
        </Fragment>

    );
}

export default Cart;