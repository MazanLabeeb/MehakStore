import Button from "../button/button.component";
import "./product-card.style.scss";


const ProductCard = ({product}) => {
    const {price, name, imageUrl} = product;
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`Product ${name}`} />
            <div className="body">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
                <Button className="btn btn-secondary">ADD CART</Button>
            </div>
        </div>
    )
}

export default ProductCard;


// {
//     "id": 1,
//     "name": "Brown Brim",
//     "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
//     "price": 25
//   }