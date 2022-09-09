import { Fragment } from "react";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({title, categoriesMap}) => {
    return (
        <Fragment>
            <h1>
                {title}
            </h1>
            <div className="categories-container">
                {categoriesMap[title].filter((_,index)=> index < 4).map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    );
                })}
            </div>
        </Fragment>
    )

}
export default CategoryPreview;