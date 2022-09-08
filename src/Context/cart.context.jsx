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

    const removeItemFromCart = (id) => {
        setCartItems(cartItems.filter(cartItem=>cartItem.id != id));

    }

    const incrementItemFromCart = (id) => {
        setCartItems(cartItems.map( cartItem => {
            if(cartItem.id == id)cartItem.quantity += 1;
            return cartItem;
        } ));
    }

    const decrementItemFromCart = (id) => {
        setCartItems(cartItems.filter( cartItem => {
            if(cartItem.id == id) cartItem.quantity -= 1;
            if(cartItem.quantity > 0)return cartItem;
        } ));
    }

    
    const value = {cartItems , setCartItems, addItemsToCart,removeItemFromCart, incrementItemFromCart, decrementItemFromCart};

   

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}