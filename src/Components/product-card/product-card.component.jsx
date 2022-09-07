import Button from "../button/button.component";
import "./product-card.style.scss";


const ProductCard = ({product}) => {
    const {price, name, imageUrl} = product;
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`Product ${name}`} />
            <Button className="btn btn-secondary btn-large addCart">Add to Cart</Button>
            <div className="body">
                <span className="name">{name}</span>
                <span className="price">{price}$</span>
            </div>
        </div>
    )
}

export default ProductCard;
