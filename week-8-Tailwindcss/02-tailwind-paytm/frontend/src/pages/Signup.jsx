import { useState } from "react";
import { BottomWarrening } from "../components/BottomWarrening";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";
import axios from "axios";
import { Link } from "react-router-dom";

export function Sighup(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    return <div className="bg-slate-400 flex h-screen justify-center items-center">
        <div className="bg-white w-full max-w-xs h-max p-4 text-center rounded-3xl">

        <Heading label = 'Sign up'/>
        <SubHeading label = 'Enter Details to create an account' />
        <InputBox onChange={e =>{
            setUsername(e.target.value)
        }} label = "Username" placeholder="abc@gmail.com"/>
        <InputBox onChange={e =>{
            setPassword(e.target.value)
        }} label = "Password" placeholder="Xyz"/>
        <InputBox onChange={e =>{
            setFirstname(e.target.value)
        }} label = "Firstname" placeholder="Max"/>
        <InputBox onChange={e =>{
            setLastname(e.target.value)
        }} label = "Lastname" placeholder="Verstappen"/>
        <Link to={'/dashboard'}>
        <Button onClick={async()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                username,
                password,
                firstname,
                lastname
            });
            try{
                
                localStorage.setItem("token",response.data.token);
            }
            catch(err){
                console.log(err.message)
            }
            
            
        }} label = 'Sign up'/>
        </Link>
        <BottomWarrening label={"Already have an account?  "} buttonText= 'Sign in'  to={'/signin'}/>
        </div>
        {/* {console.log(username)}   */}
    </div>
}