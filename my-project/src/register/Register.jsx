import Form from '../common/Form'
import {useNavigate} from "react-router"
const Register = () => {
    const navigate = useNavigate()
    const formInputs = [
        {
            name: "firstname",
            label: "Firstname:",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            name: "lastname",
            label: "Lastname:",
            type: "text",
            placeholder: "Enter your lastname"
        },
        {
            name: "email",
            label: "Email:",
            type: "email",
            placeholder: "Enter your email"

        },

        {
            name: "password",
            label: "Password:",
            type: "password",
            placeholder: "Enter a password"

        },
    ]

    const handleDataSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    const formButtons = [
        {
            title: "Register",
            style: "bg-blue-700 text-white py-3 rounded-md",
            action: handleDataSubmit
        },
        {
            title: "Already have an account?",
            style: "text-blue-700",
            action: () => { navigate("/login") }
        }
    ]

    return (
        <Form
            image={{
                url: "https://media.stockimg.ai/image/nWT8u_YOQjx5.png",
                position: "right", style: "w-[450px]"
            }}
            containerStyle='w-[850px] mt-12 mx-auto'
            formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md"
            formInputs={formInputs} formButtons={formButtons} />
    )
}

export default Register