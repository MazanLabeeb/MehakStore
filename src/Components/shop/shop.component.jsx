import { useContext } from "react";
import { ProductsContext } from "../../Context/products.context";
import ProductCard from "../product-card/product-card.component";




const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        products.map(( product ) => {
            console.log(product)
            return (
                <ProductCard key={product.id} product={product} /> 
            );
        })
    );

}

export default Shop;