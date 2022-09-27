import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";
import PaymentForm from "../payment-form/payment-form.component";
import "./checkout-table.style.scss";

const CheckoutTable = () => {
    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch({ type: "REMOVE_ITEMS_FROM_CART", id });
    }

    const incrementItemFromCart = (id) => {
        dispatch({
            type: "INCREMENT_ITEM_FROM_CART", id
        });
    }

    const decrementItemFromCart = (id) => {
        dispatch({
            type: "DECREMENT_ITEM_FROM_CART",  id
        });
    }

    const cartItems = useSelector(cartSelector);
    const totalPrice = cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price;
    }, 0);


    return (
        <div>
            <table className="checkout-table" >
                <thead className="test">
                    <tr className="test">
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cartItems.map(({ id, price, name, imageUrl, quantity }) => {
                            return (
                                <tr key={id}>
                                    <td><img src={imageUrl} width="50" height="50" alt="Product" /></td>
                                    <td>{name}</td>
                                    <td className="disable-selection">
                                        <i className="fa fa-chevron-left increment" aria-hidden="true" onClick={() => { decrementItemFromCart(id) }} ></i>
                                        &nbsp;{quantity}&nbsp;
                                        <i className="fa fa-chevron-right decrement" aria-hidden="true" onClick={() => { incrementItemFromCart(id) }} ></i>
                                    </td>
                                    <td>{price}$</td>
                                    <td><i className="fa fa-times remove" aria-hidden="true" onClick={() => { removeItemFromCart(id) }} ></i></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div className="null-cart">
                {(cartItems.length === 0) ? "You have not added any item to cart yet." : ""}

            </div>
            <div className="total">
                TOTAL: {totalPrice}$
            </div>

            <h2>Credit Card Payment</h2>
            <br />

            <PaymentForm />

        </div>

    )
}

export default CheckoutTable;