import { Route, Routes } from "react-router-dom";
import AllProducts from "../../Components/all-products/all-products.component";
import ShopIndex from "../../Components/shop-index/shop-index.component";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<ShopIndex />} />
            <Route path=":categoryName" element={ <AllProducts /> } />
        </Routes>
    )
}

export default Shop;

