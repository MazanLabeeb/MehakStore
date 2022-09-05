
const FormInput = ({label, ...formProps}) => {

    return (
        <div>
            <label htmlFor={formProps.name}>{label}</label>
            <input {...formProps} required />
        </div>
    );
}

export default FormInput;