import { createContext, useState } from "react";


export const CartContext = createContext([]);

const addItemsToCartHelper = ( cartItems, newCartItem ) => {

    newCartItem = { ...newCartItem, "quantity": 1 };
    return [ ...cartItems, newCartItem ];
}


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);



    const addItemsToCart = ( newCartItem ) => {
        setCartItems( addItemsToCartHelper(cartItems, newCartItem) );
    }

    
    const value = {cartItems , setCartItems, addItemsToCart};

   

    console.log(cartItems);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}