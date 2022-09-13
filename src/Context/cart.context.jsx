import { useReducer } from "react";
import { createContext } from "react";


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
    const { type, payload, id } = action;
    switch (type) {
        case "ADD_ITEMS_TO_CART":
            return payload
            break;
        case "REMOVE_ITEMS_FROM_CART":
            return payload.filter(cartItem => cartItem.id != id)
            break;

        case "INCREMENT_ITEM_FROM_CART":
            console.log("HEllo");
            return payload.map(cartItem => {
                if (cartItem.id == id) cartItem.quantity += 1;
                return cartItem;
            })
            break;
        case "DECREMENT_ITEM_FROM_CART":
            return payload.filter(cartItem => {
                if (cartItem.id == id) cartItem.quantity -= 1;
                if (cartItem.quantity > 0) return cartItem;
            })

        break;
        
        default:
            throw new Error("Unknown type has been passed to the cartReducer");
    }
}


export const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const addItemsToCart = (newCartItem) => {
        dispatch({ type: "ADD_ITEMS_TO_CART", payload: addItemsToCartHelper(cartItems, newCartItem) });
    }

    const removeItemFromCart = (id) => {
        dispatch({ type: "REMOVE_ITEMS_FROM_CART", payload: cartItems, id });
    }

    const incrementItemFromCart = (id) => {
        dispatch({
            type: "INCREMENT_ITEM_FROM_CART", payload: cartItems, id
        });
    }

    const decrementItemFromCart = (id) => {
        dispatch({
            type: "DECREMENT_ITEM_FROM_CART", payload: cartItems, id
        });
    }


    const value = { cartItems,  addItemsToCart, removeItemFromCart, incrementItemFromCart, decrementItemFromCart };



    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}