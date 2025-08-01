import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import { Homepage } from "./pages/home"
import {LoginField } from "./pages/Login"
import { Signup } from "./pages/signup"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
    {/* <Homepage/> */}
    <Routes>
     <Route path="/" element={<Homepage/>}/>
     <Route path="/signin" element={<LoginField/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/register" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App