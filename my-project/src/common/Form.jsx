import { useEffect, useState, useContext } from "react";
import FormItem from '../common/FormItem';

const Form = ({ setFormData, formInputs, formButtons, image, formStyle, containerStyle = '', onSubmit }) => {

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className={`${containerStyle} flex ${image?.position === "left" ? "flex" : "flex-row-reverse"}`}>
            {image ? <img className={image.style} src={image.url} alt="form" /> : null}
            <form className={formStyle} onSubmit={onSubmit}>
                {formInputs.map((item, index) => (
                    <FormItem
                        key={index}
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        handleInputChange={handleInputChange}
                        placeholder={item.placeholder}
                    />
                ))}

                {formButtons.map((button, index) => (
                    <button
                        key={index}
                        className={button.style}
                        type="submit" // Ensure button is of type submit
                        onClick={button.action} // Custom action for button
                    >
                        {button.title}
                    </button>
                ))}
            </form>
        </div>
    );
}

export default Form;
