import { USER_ACTION_TYPES } from "./user.types";

const initialState = {
    currentUser: null
};



export const userReducer = (oldState = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...oldState,
                currentUser: payload
            }
        default:
            return oldState;

    }

}