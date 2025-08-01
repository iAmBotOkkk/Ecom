import { useNavigate } from "react-router-dom"
import { ButtonComponent } from "../Components/Button"
import { Heading } from "../Components/Headers"
import { Inputfield } from "../Components/Input"

export const Signup = () => {
    const navigate = useNavigate();
    return (
        <div>
         <div>
            <Heading text={"Sign Up"}  />
            <Inputfield fields={[
                { label:"Name" , placeholder:"Enter your name", type: "name", },
                { label:"Email", placeholder:"Enter your email", type:"email" },
                { label:"Password" , placeholder:"Enter yout password", type:"password" }
            ]}/>
            <ButtonComponent btn={"Submit"} onClick={() => {
                navigate("/signin")
            }} />
           
        </div> 
        </div>
    )
}