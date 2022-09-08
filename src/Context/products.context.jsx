import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    products : []
})



export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    
    useEffect(
        ()=>{
            const getCategoriesMap = async () => {
                const categoryMap = await getCategoriesAndDocuments();
                console.log(categoryMap);
            }
            getCategoriesMap();
        },
        []
    )

    const value = {products, setProducts};


    return <ProductsContext.Provider value = {value} >{children}</ProductsContext.Provider>
}