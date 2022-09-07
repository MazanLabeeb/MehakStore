import { useContext } from "react";
import { ProductsContext } from "../../Context/products.context";




const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        products.map(({ id, name }) => {
            return (
                <div key={id}>{name}</div>
            );
        })
    );

}

export default Shop;