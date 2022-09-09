import { Fragment, useContext } from "react";
import ProductCard from "../product-card/product-card.component";
import "../directory/directory.style.scss";
import { CategoriesContext } from "../../Context/categories.context";



const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className="body-max-width">
            {
                Object.keys(categoriesMap).map((title, index) => {
                    return (
                        <Fragment key={index}>
                            <h1>
                                {title}
                            </h1>
                            <div className="categories-container">
                                {categoriesMap[title].map((product) => {
                                    return (
                                        <ProductCard key={product.id} product={product} />
                                    );
                                })}
                            </div>
                        </Fragment>
                    )

                }
                )
            }


        </div>
    );

}

export default Shop;