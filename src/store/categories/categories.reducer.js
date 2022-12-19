import { USER_ACTION_TYPES } from "./categories.type.ts";

export const categoriesReducer = (oldState = null, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CATEGORIES_MAP:
            return payload;
            break;
        default:
            return oldState;
    }
}