import { useStore } from 'zustand'
import Form from '../common/Form'
import { useNavigate } from "react-router"
import { Store } from "../common/Store"
import { useState } from 'react'
import { toast } from "react-toastify"
const Register = () => {
    const [formData, setFormData] = useState({})

    const { theme, toggle } = useStore(Store)
    const navigate = useNavigate()


    const register = async () => {
        try {
            console.log(formData);
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()

            if (response.ok) {
                toast.success(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate('/login')
            } else {
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
            console.error(error)
        }



    }
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

        // console.log(formData)
    }

    const formButtons = [
        {
            title: "Register",
            style: "bg-blue-700 text-white py-3 rounded-md",
            action: () => { register() }
        },
        {
            title: "Already have an account?",
            style: "text-blue-700",
            action: () => { navigate("/login") }
        }
    ]

    return (
        <div className={`w-full pt-12 h-screen ${theme === "light" ? "bg-white" : "bg-zinc-500"}`}>
            <Form
                image={{
                    url: "https://media.stockimg.ai/image/nWT8u_YOQjx5.png",
                    position: "right", style: "w-[450px]"
                }}
                containerStyle='w-[850px]  mx-auto'
                formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md"
                setFormData={setFormData}
                formInputs={formInputs} formButtons={formButtons} onSubmit={(e) => {
                    e.preventDefault();
                    
                }} />
        </div>

    )
}

export default Register