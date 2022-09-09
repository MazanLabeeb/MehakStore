import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.style.scss";

const CategoryPreview = ({title, categoriesMap}) => {
    return (
        <Fragment>
            <div className="categorie-title-container">
                <Link className="categorie-title-link" to={`/shop/${title}`}><i className="fa fa-arrow-right" aria-hidden="true"></i> {title.toUpperCase()}</Link>
            </div>
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