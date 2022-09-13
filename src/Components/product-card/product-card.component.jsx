import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../store/cart/cart.action";
import Button from "../button/button.component";
import "./product-card.style.scss";


const ProductCard = ({ product }) => {
    const { id, price, name, imageUrl } = product;

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart);



    const addToCart = () => {
        dispatch(addItemsToCart(({ id, price, name, imageUrl }), cartItems));
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`Product ${name}`} />
            <Button className="btn btn-light btn-large addCart" onClick={addToCart}>Add to Cart</Button>
            <div className="body">
                <span className="name">{name}</span>
                <span className="price">{price}$</span>
            </div>
        </div>
    )
}

export default ProductCard;
