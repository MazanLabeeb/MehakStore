import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";

const CartDropDown = () => {


    const cartItems = useSelector(cartSelector);

    const hideCartDropDown = () => {
        document.getElementById("toggle-cart-dropdown").checked = false;
    }

    return (
        <div className="cart-dropdown">
            <div className="cart-dropdown-body">
                {cartItems.length == 0 ? <div>Cart is empty</div> : ""}
                {cartItems.map(({ id, price, name, imageUrl, quantity }) => (
                    <div key={id} className="cart-dropdown-row"> <img width="50" height="50" src={imageUrl} alt="product" /> <div><div>{name}</div><div>{quantity} x {price}$</div></div> </div>
                ))}

            </div>
            <div className="button-container" onClick={hideCartDropDown}>
                <Link to={"/checkout"}><Button className="btn btn-secondary  checkoutBtn">Checkout</Button>
                </Link>


            </div>

        </div>
    )
}

export default CartDropDown;