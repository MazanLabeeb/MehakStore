import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap : {}
})



export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState(null);
    
    useEffect(
        ()=>{
            const getCategoriesMap = async () => {
                const categoryMap = await getCategoriesAndDocuments();
                setCategoriesMap(categoryMap);
            }
            getCategoriesMap();
        },
        []
    )

    const value = {categoriesMap};


    return <CategoriesContext.Provider value = {value} >{children}</CategoriesContext.Provider>
}