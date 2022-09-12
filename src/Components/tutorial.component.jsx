import { useReducer } from "react";

const reducer = (previousState, action) => {
    const { type } = action;
    switch (type) {
        case "DECREMENT":
            return previousState - 1;
            break;
        case "INCREMENT":
            return previousState + 1;
            break;
        default:
            throw new Error("Unkown type has been parsed to the reducer function");
    }
}

const Tutorial = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    console.log(state);

    return (
        <div>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>DECREMENT</button>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>INCREMENT</button>
        </div>
    )
}

export default Tutorial;