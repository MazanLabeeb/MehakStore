import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";
import "./checkout-table.style.scss";

const CheckoutTable = () => {
    const { cartItems, removeItemFromCart } = useContext(CartContext);
    const totalPrice = cartItems.reduce((total, cartItem)=>{
        return total + cartItem.quantity*cartItem.price;
    },0);


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
                                    <td>{quantity}</td>
                                    <td>{price}</td>
                                    <td><i className="fa fa-times remove" aria-hidden="true" onClick={()=>{removeItemFromCart(id)}} ></i></td>
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

        </div>

    )
}

export default CheckoutTable;