
import { ButtonComponent } from "../Components/Button"
import { Heading } from "../Components/Headers"
import { Inputfield } from "../Components/Input"
import { Subtext } from "../Components/Subtext"


export const LoginField = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="w-full max-w-sm p-4  bg-white rounded shadow">
       <Heading text = {"Login"}/>
       <Inputfield fields={[
        { label : "Email Address", type : "email" , placeholder:"Email Address" },
        { label : "Password" , type : "password" , placeholder : "Password (min 6 characters)" },
       ]} />
        <ButtonComponent btn={"Login"}/>
        <Subtext link={"Don't have an account"} line={"signup"} to = {"/signup"} />
      </div>

       
    </div>
  )
}
