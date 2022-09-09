import { Fragment, useContext } from "react";
import ProductCard from "../product-card/product-card.component";
import "../directory/directory.style.scss";
import { CategoriesContext } from "../../Context/categories.context";



const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    return (
                        <Fragment>
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


        </Fragment>
    );

}

export default Shop;