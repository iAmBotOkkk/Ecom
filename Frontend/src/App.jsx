import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import { Homepage } from "./pages/home"



function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App