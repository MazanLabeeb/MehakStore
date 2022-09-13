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


export const addItemsToCart = (newCartItem , cartItems) =>  ({ type: "ADD_ITEMS_TO_CART", payload: addItemsToCartHelper(cartItems, newCartItem) });
