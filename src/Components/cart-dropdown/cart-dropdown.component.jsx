import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown">
            <div className="cart-dropdown-body">
                {cartItems.length == 0 ? <div>Cart is empty</div> : "" }
                {cartItems.map(({ id,price,  name, imageUrl, quantity }) => (
                    <div key={id} className="cart-dropdown-row"> <img width="50" height="50" src={imageUrl} alt="product" /> <div><div>{name}</div><div>{quantity} x {price}$</div></div> </div>
                ))}

            </div>
            <div className="button-container">
                <Button className="btn btn-secondary  checkoutBtn">Checkout</Button>

            </div>

        </div>
    )
}

export default CartDropDown;