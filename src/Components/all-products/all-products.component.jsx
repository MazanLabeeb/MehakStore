import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categoriesMapSelector } from "../../store/categories/categories.selector";
import ProductCard from "../product-card/product-card.component";
import { Spinner } from "../spinner/spinner.component";
import "./all-products.style.scss";

const AllProducts = () => {
    const { categoryName } = useParams();
    const categoriesMap = useSelector(categoriesMapSelector);


    const [products, setProducts] = useState(categoriesMap);

    useEffect(
        () => {
            setProducts(categoriesMap);
        },
        [categoriesMap, AllProducts]
    )

    return (
        <>
            <div className="categorie-title-container">
                <span className="categorie-title text-gradient">{categoryName.toUpperCase()}</span>
            </div>
            {(!categoriesMap)?<Spinner />:""}

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
