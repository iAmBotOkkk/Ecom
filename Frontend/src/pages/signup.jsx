import { useNavigate } from "react-router-dom"
import { ButtonComponent } from "../Components/Button"
import { Heading } from "../Components/Headers"
import { Inputfield } from "../Components/Input"
import { useState } from "react"
import axios from "axios"

export const Signup = () => {
    const [Name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const navigate = useNavigate();
    
    return (
        <div className="flex justify-center items-center h-screen ">
         <div className="w-full max-w-sm p-4 bg-white rounded shadow" >
            <Heading text={"Sign Up"}  />
            <Inputfield fields={[
                { label:"Name" , placeholder:"Enter your name", type: "name", 
                    onChange:(e) => {
                        setName(e.target.value)
                    } },
                { label:"Email", placeholder:"Enter your email", type:"email",
                     onChange:(e) => {
                     setEmail(e.target.value)
                    }
                 },
                { label:"Password" , placeholder:"Enter yout password", type:"password",
                     onChange:(e) => {
                        setPassword(e.target.value)
                    }
                 }
            ]}/>
            <ButtonComponent btn={"Submit"} onClick={async () => {
                const res = await axios.post("http://localhost:3000/api/v1/User/signup",{
                    Name,
                    email,
                    password
                })
                console.log(res.data.message)
                 localStorage.setItem("token",res.data.token)
                navigate("/signin")
            }} />

        </div> 
        </div>
    )
}