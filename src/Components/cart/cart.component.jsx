
import { Fragment, useContext, useEffect } from "react";
import { CartContext } from "../../Context/cart.context";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import "./cart.style.scss";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    

    let count = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);



    return (
        <Fragment>
            <label htmlFor="toggle-cart-dropdown">
                <div className="cart-icon-container">
                    <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                    <span>{count}</span>
                </div>
            </label>
            <input type="checkbox" id="toggle-cart-dropdown" />
            <CartDropDown />
        </Fragment>

    );
}

export default Cart;