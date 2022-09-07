
import "./cart.style.scss";

const Cart = () => {

    return (
        <a className="cart-icon-container">
            <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
            <span>0</span>
        </a>
    );
}

export default Cart;