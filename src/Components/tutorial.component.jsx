import { useReducer } from "react";

const reducer = (oldState, action) => {
    const { type } = action;
    switch (type) {
        case 'INCREMENT':
            return oldState + 1;
        case 'DECREMENT':
            return oldState - 1;
            break;

        default:
            throw new Error("Invalid Type pass to the reducer function");
    }
}

const Tutorial = () => {
    const [currentState, dispatch] = useReducer(reducer, 0);
    console.log(currentState);

    return (
        <div>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>Click Me</button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>Click Me</button>
        </div>
    )
}

export default Tutorial;