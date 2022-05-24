const FormField = ({ label, type, name, value, onChange, options }) => {
    return (
        <div className='form-field'>
            <label htmlFor={name}>{label || name}</label>
            {!options ? (
                <input type={type} id={name} name={name} value={value} onChange={onChange} />
            ) : (
                <select id={name} name={name} value={value} onChange={onChange}>
                    {options.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    })}
                </select>
            )}
        </div>
    );
};

export default FormField;
