const FormField = ({ label, type, name, value, onChange }) => {
    return (
        <div className='form-field'>
            <label htmlFor={name}>{label || name}</label>
            <input type={type} id={name} name={name} value={value} onChange={onChange} />
        </div>
    );
};

export default FormField;
