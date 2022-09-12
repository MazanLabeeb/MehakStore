import "../directory/directory.style.scss";
import CategoryPreview from "../category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { categoriesMapSelector } from "../../store/categories/categories.selector";


const ShopIndex = () => {
    const categoriesMap = useSelector(categoriesMapSelector);
  
    return (
        <div className="">
            {
                categoriesMap && Object.keys(categoriesMap).map((title, index) => {
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