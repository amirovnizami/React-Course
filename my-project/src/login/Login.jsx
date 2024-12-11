import Form from "../common/Form"
import {useNavigate} from "react-router"
const Login = () => {
    const navigate = useNavigate()
    const formInputs = [
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
            title: "Login",
            style: "bg-blue-700 text-white py-3 rounded-md",
            action: handleDataSubmit
        },
        {
            title: "Don't have an account?",
            style: "text-blue-700",
            action: () => { navigate("/register")}
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => { }
        }
    ]



    return (
        <Form image={{
            url: "https://cdn.stocksnap.io/img-thumbs/280h/cliff-clouds_IZB4SE5SRJ.jpg",
            position: "right", style: "w-[450px]"
        }} containerStyle='w-[850px] mt-12 mx-auto' formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md" formInputs={formInputs} formButtons={formButtons}/>
    )
}
export default Login