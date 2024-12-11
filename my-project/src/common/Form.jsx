import FormItem from '../common/FormItem'
import { useState } from 'react'

const Form = ({formInputs, formButtons, image, formStyle, containerStyle = ''} ) => {
    const [formData, setFormData] = useState({})

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    console.log(formButtons,formInputs);

    return (

        <div className={`${containerStyle} flex ${image?.position === "left" ? "flex" : "flex-row-reverse"}`}>
            {image ? <img className={image.style} src={image.url} />: null}
            <form className={formStyle} action="">
                {formInputs.map((item, index) => <FormItem key={index} label={item.label} name={item.name} type={item.type} handleInputChange={handleInputChange} placeholder={item.placeholder} />)}

                {formButtons.map((button, index) => <button key={index} className={button.style} onClick={button.action}>{button.title}</button>)}

            </form>
        </div>
    )
}

export default Form