import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../Context/categories.context";
import ProductCard from "../product-card/product-card.component";
import "./all-products.style.scss";

const AllProducts = () => {
    const { categoryName } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap);

    useEffect(
        () => {
            setProducts(categoriesMap);
        },
        [categoriesMap, AllProducts]
    )

    return (
        <>
            <div className="categories-container">

                {
                    products && categoriesMap[categoryName] && categoriesMap[categoryName].map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })
                }
            </div>
        </>
    )
}

export default AllProducts;
