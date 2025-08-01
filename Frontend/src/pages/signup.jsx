import { useNavigate } from "react-router-dom"
import { ButtonComponent } from "../Components/Button"
import { Heading } from "../Components/Headers"
import { Inputfield } from "../Components/Input"
import { useState } from "react"

export const Signup = () => {
    const [Name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center h-screen ">
         <div className="w-full max-w-sm p-4 bg-white rounded shadow" >
            <Heading text={"Sign Up"}  />
            <Inputfield fields={[
                { label:"Name" , placeholder:"Enter your name", type: "name", },
                { label:"Email", placeholder:"Enter your email", type:"email" },
                { label:"Password" , placeholder:"Enter yout password", type:"password" }
            ]}/>
            <ButtonComponent btn={"Submit"} onClick={async() => {
                const res = await axios.post("http://localhost:3000/User/signup",{
                    Name,
                    email,
                    password
                })
                localStorage.setItem("token" , res.data.token)
                navigate("/signin")
            }} />

        </div> 
        </div>
    )
}