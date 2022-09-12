import { useReducer } from "react";
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

const reducer = (oldState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "CATEGORIES_MAP":
            return payload;
            break;
        default:
            throw new Error("Unknown type has been passed to the reducer function in categories.context");
    }
}


export const CategoriesProvider = ({ children }) => {
    // const [categoriesMap, setCategoriesMap] = useState(null);
    const [state, dispatch] = useReducer(reducer, null);

    const setCategoriesMap = (categoryMap) => {
        dispatch({type:"CATEGORIES_MAP", payload:categoryMap});
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
    // console.log(state);

    const value = { categoriesMap: state };


    return <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
}