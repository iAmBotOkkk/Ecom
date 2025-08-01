
import { useState } from "react"
import { ButtonComponent } from "../Components/Button"
import { Heading } from "../Components/Headers"
import { Inputfield } from "../Components/Input"
import { Subtext } from "../Components/Subtext"


export const LoginField = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  return (
    <div className="grid place-items-center h-screen">
      <div className="w-full max-w-sm p-4  bg-white rounded shadow">
       <Heading text = {"Login"}/>
       <Inputfield fields={[
        { label : "Email Address", type : "email" , placeholder:"Email Address",
         onChange:(e) => {
          setEmail(e.target.value)
         }
        },
        { label : "Password" , type : "password" , placeholder : "Password (min 6 characters)",
          onChange:(e) => {
            setPassword(e.target.value)
          }
         },
       ]} />
        <ButtonComponent btn={"Login"} onClick={ async() =>{
            const res = await axios.post("http://localhost:3000/user/signin",{
              email,
              password
            },)
            
        }}/>
        <Subtext link={"Don't have an account"} line={"signup"} to = {"/signup"} />
      </div>

       
    </div>
  )
}
