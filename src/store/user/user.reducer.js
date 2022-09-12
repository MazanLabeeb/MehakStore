const initialState = {
    currentUser: null
};
const USER_ACTION_TYPES = {
    SET_CURRENT_USER : "SET_CURRENT_USER"
}



export const userReducer = (oldState = initialState, action) => {
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