import { useReducer } from "react";
import { createContext, useState } from "react";


export const CartContext = createContext([]);

const addItemsToCartHelper = (cartItems, newCartItem) => {
    const newCartItemAlreadyExists = cartItems.find(row => row.id === newCartItem.id);

    if (newCartItemAlreadyExists) {
        return cartItems.map(row => {
            if (row.id === newCartItem.id) {
                row.quantity++;
            }
            return row;
        })
    }

    newCartItem = { ...newCartItem, "quantity": 1 };
    return [...cartItems, newCartItem];
}

const cartReducer = (currentState = [], action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_ITEMS_TO_CART":
            return payload
            break;
        default:
            throw new Error("Unknown type has been passed to the cartReducer");
    }
}


export const CartProvider = ({ children }) => {
    // const [cartItems, setCartItems] = useState([]);
    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const addItemsToCart = (newCartItem) => {
        dispatch({type:"ADD_ITEMS_TO_CART", payload : addItemsToCartHelper(cartItems, newCartItem)});
    }

    const removeItemFromCart = (id) => {
        dispatch({type:"ADD_ITEMS_TO_CART", payload : cartItems.filter(cartItem => cartItem.id != id)});
    }

    const incrementItemFromCart = (id) => {
        dispatch({type:"ADD_ITEMS_TO_CART", payload : cartItems.map(cartItem => {
            if (cartItem.id == id) cartItem.quantity += 1;
            return cartItem;
        }) });
    }

    const decrementItemFromCart = (id) => {
        dispatch({type:"ADD_ITEMS_TO_CART", payload : cartItems.filter(cartItem => {
            if (cartItem.id == id) cartItem.quantity -= 1;
            if (cartItem.quantity > 0) return cartItem;
        })});        
    }


    const value = { cartItems, dispatch, addItemsToCart, removeItemFromCart, incrementItemFromCart, decrementItemFromCart };



    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}