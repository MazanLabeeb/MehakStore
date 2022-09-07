import "./cart-dropdown.style.scss";
import Button from "../button/button.component";

const CartDropDown = () => {

    return (
        <div className="cart-dropdown">
            <div className="cart-dropdown-body">
                Your Cart is empty.

            </div>
            <Button className="btn btn-primary btn-max-width">Checkout</Button>
        
        </div>
    )
}

export default CartDropDown;