import { useReducer } from "react";
import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

const initialState = {
    currentUser: null
};
const USER_ACTION_TYPES = {
    SET_CURRENT_USER : "SET_CURRENT_USER"
}



export const reducer = (oldState, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...oldState,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type in reducer function`);

    }

}



export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);

    const [{ currentUser }, dispatch] = useReducer(reducer, initialState);

    const setCurrentUser = (user) => {
        dispatch({ type: "SET_CURRENT_USER", payload: user });
    }


    const value = { currentUser, setCurrentUser };


    useEffect(
        () => {
            const unsubscribe = onAuthStateChangedListener((user) => {
                if (user) {
                    createUserDocumentFromAuth(user);
                }
                setCurrentUser(user);
            });

            return unsubscribe;
        }
        ,
        []
    )

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}