export const cartReducer = (currentState = [], action = {}) => {
    const { type, payload, id } = action;
    switch (type) {
        case "ADD_ITEMS_TO_CART":
            return payload
            break;
            
        case "REMOVE_ITEMS_FROM_CART":
            return currentState.filter(cartItem => cartItem.id != id)
            break;

        case "INCREMENT_ITEM_FROM_CART":
            return currentState.map(cartItem => {
                if (cartItem.id == id) cartItem.quantity += 1;
                return cartItem;
            })
            break;
        case "DECREMENT_ITEM_FROM_CART":
            return currentState.filter(cartItem => {
                if (cartItem.id == id) cartItem.quantity -= 1;
                if (cartItem.quantity > 0) return cartItem;
            })

        break;
        
        default:
            return currentState
    }
}