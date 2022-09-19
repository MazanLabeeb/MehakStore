import { createSelector } from "reselect";

const cartSelectorState = state => state.cart;

export const cartSelector = createSelector(
    [cartSelectorState],
    cart => {
        console.log("triggered");
        return cart
    }
)