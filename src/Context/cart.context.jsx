import { createContext, useEffect, useState } from "react";


export const CartContext = createContext([]);

const addItemsToCartHelper = ( cartItems, newCartItem ) => {
    const newCartItemAlreadyExists = cartItems.find( row =>  row.id === newCartItem.id );

    if(newCartItemAlreadyExists){
        return cartItems.map( row => {
            if(row.id === newCartItem.id){
                row.quantity++;
            }
            return row;
        } )
    }

    newCartItem = { ...newCartItem, "quantity": 1 };
    return [ ...cartItems, newCartItem ];
}


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemsToCart = ( newCartItem ) => {
        setCartItems( addItemsToCartHelper(cartItems, newCartItem) );
    }

    
    const value = {cartItems , setCartItems, addItemsToCart};

   

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}