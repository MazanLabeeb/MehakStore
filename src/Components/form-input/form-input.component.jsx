import "./form-input.style.scss";

const FormInput = ({label, ...formProps}) => {

    return (
        <div>
            <label htmlFor={formProps.id}>{label}</label>
            <input {...formProps} className={"inputField"}   />
        </div>
    );
}

export default FormInput;