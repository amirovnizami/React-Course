
const FormItem = ({label, name, type, handleInputChange, placeholder} ) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor={name}>{label}</label>
            <input placeholder={placeholder} onChange={(e) => {
                handleInputChange(e.target.name, e.target.value)
            }} className='border p-2 rounded-md' name={name} type={type} />
        </div>
    )
}

export default FormItem