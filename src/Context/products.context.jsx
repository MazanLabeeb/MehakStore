import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
    products : []
})



export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products, setProducts};


    return <ProductsContext.Provider value = {value} >{children}</ProductsContext.Provider>
}