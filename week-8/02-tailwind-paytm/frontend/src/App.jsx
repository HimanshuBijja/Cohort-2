import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Sighup } from "./pages/Signup"
import { Sighin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { Send } from "./pages/Send"
import axios from "axios"



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element = {<Sighup/>} />
      <Route path="/signin" element = {<Sighin/>} />
      <Route path="/dashboard" element = {<Dashboard/>} />
      <Route path="/send" element = {<Send/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
