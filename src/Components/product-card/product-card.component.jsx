import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";
import Button from "../button/button.component";
import "./product-card.style.scss";


const ProductCard = ({product}) => {
    const {id, price, name, imageUrl} = product;
    const {addItemsToCart} = useContext(CartContext);
    const addToCart = () => {
        addItemsToCart({id, price, name, imageUrl})
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
