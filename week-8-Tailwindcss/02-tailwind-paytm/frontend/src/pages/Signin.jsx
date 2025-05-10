import { BottomWarrening } from "../components/BottomWarrening";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";

export function Sighin(){
    return <div className="bg-slate-400 flex h-screen justify-center items-center p-4">
        {/* <div>
abc
        </div> */}
        <div className="bg-white w-full max-w-xs h-max p-4 text-center rounded-3xl">

        <Heading label = 'Sign in'/>
        <SubHeading label = 'Enter Details to login' />
        <InputBox label = "Username" placeholder="abc@gmail.com"/>
        <InputBox label = "Password" placeholder="Xyz"/>
        <Button label = 'Sign in'/>
        <BottomWarrening label={"Dont have an account?  "} buttonText= 'Sign up'  to={'/signup'}/>
        </div>
    </div>
}