import { useReducer } from "react";

const initialState = 0;

const reducer = (  state, action ) => {
    console.log(action);
    return 5;
}

const Tutorial = () => {
    

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <button onClick={()=>{dispatch({type:"HELLO"})}}>Click Me</button>
        </div>
    )
}

export default Tutorial;