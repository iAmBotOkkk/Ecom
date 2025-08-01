import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import { Homepage } from "./pages/home"
import {LoginField } from "./pages/Login"
import { Signup } from "./pages/signup"

function App() {
  return (
    <BrowserRouter>
    <Homepage/>
    <Routes>
     
     <Route path="/signin" element={<LoginField/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App