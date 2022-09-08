
import { Fragment, useContext } from "react";
import { CartContext } from "../../Context/cart.context";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import "./cart.style.scss";

const Cart = () => {

    const {cartItems} = useContext( CartContext );
    var count = 0;
    cartItems.forEach(row => {
        count += row.quantity;
    });

    return (
        <Fragment>
            <label htmlFor="toggle-cart-dropdown">
                <div className="cart-icon-container">
                    <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                    <span>{count}</span>
                </div>
            </label>
            <input type="checkbox"  id="toggle-cart-dropdown" />
            <CartDropDown />
        </Fragment>

    );
}

export default Cart;