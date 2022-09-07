import { useContext } from "react";
import { ProductsContext } from "../../Context/products.context";
import ProductCard from "../product-card/product-card.component";
import "../directory/directory.style.scss";



const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="categories-container">
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} />
                );
            })}
        </div>
    );

}

export default Shop;