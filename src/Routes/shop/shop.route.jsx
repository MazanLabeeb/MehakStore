import { Route, Routes } from "react-router-dom";
import PageNotFound from "../../Components/PageNotFound/PageNotFound.component";
import ShopIndex from "../../Components/shop-index/shop-index.component";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<ShopIndex />} />
        </Routes>
    )
}

export default Shop;

