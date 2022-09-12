import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../../Components/all-products/all-products.component";
import ShopIndex from "../../Components/shop-index/shop-index.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {

    const dispatch = useDispatch();

    const setCategoriesMap = (categoryMap) => {
        dispatch({type:"SET_CATEGORIES_MAP", payload:categoryMap});
    }

    useEffect(
        () => {
            const getCategoriesMap = async () => {
                const categoryMap = await getCategoriesAndDocuments();
                setCategoriesMap(categoryMap);
            }
            getCategoriesMap();
        },
        []
    )


    return (
        <Routes>
            <Route index element={<ShopIndex />} />
            <Route path=":categoryName" element={ <AllProducts /> } />
        </Routes>
    )
}

export default Shop;

