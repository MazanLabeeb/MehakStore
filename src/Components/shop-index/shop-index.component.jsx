import { Fragment, useContext } from "react";
import ProductCard from "../product-card/product-card.component";
import "../directory/directory.style.scss";
import { CategoriesContext } from "../../Context/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";



const ShopIndex = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className="body-max-width">
            {
                Object.keys(categoriesMap).map((title, index) => {
                    return (
                        <CategoryPreview key={index} title={title} categoriesMap={categoriesMap}   />
                    )

                }
                )
            }
        </div>
    );

}

export default ShopIndex;