import {ImSpinner3} from "react-icons/im";
import "./spinner.style.scss";

export const Spinner = () => {
    return (
        <div className="spinner-container">
            <ImSpinner3 className="spinner" />
        </div>
    );
}