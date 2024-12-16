import { useState } from "react"
import { useStore } from "zustand"
import Form from "../common/Form"
import { useNavigate } from "react-router"
import { Store } from "../common/Store"
import { toast } from "react-toastify";
const Login = () => {
    const [formData, setFormData] = useState({})

    const {addAccessToken,addRefreshToken } = useStore(Store)

    const nav = useNavigate()
    const login = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            if (response.ok) {
                console.log(data);
                addAccessToken(data.accessToken)
                addRefreshToken(data.refreshToken)
                nav('/')
            }
            else{
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }

        } catch (error) {
            // console.error(error)
        }



    }
    const { theme, toggle } = useStore(Store)
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



    const formButtons = [
        {
            title: "Login",
            style: "bg-blue-700 text-white py-3 rounded-md",
            action: ()=>{
                login()}
        },
        {
            title: "Don't have an account?",
            style: "text-blue-700",
            action: () => { navigate("/register") }
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => { }
        }
    ]

    return (
        <div className={`w-full pt-12 h-screen ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
            <Form image={{
                url: "https://cdn.stocksnap.io/img-thumbs/280h/cliff-clouds_IZB4SE5SRJ.jpg",
                position: "right", style: "w-[450px]"
            }} containerStyle='w-[850px]  mx-auto' formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md"
            setFormData={setFormData}
            formInputs={formInputs} formButtons={formButtons} onSubmit={(e) => {
                e.preventDefault();
                }}
            />
        </div>

    )
}
export default Login