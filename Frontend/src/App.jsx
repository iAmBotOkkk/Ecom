import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import { Homepage } from "./pages/home"
import { Login } from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
    <Homepage/>
    <Routes>
     <Route path="/signin" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App