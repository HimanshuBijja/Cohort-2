export default function signup(){
    return (
        <div className="flex items-center justify-center min-h-screen text-center">

            <div className="w-[50%] lg:w-[30%] h-max bg-white flex flex-col gap-2 py-6 px-4 rounded-2xl">
                <h1 className="text-4xl mb-10">Sign up</h1>
                <InputBox label={"Username"} placeholder="abc@123"/>
                <InputBox label={"Password"} placeholder="Xyz"/>
                <InputBox label={"Firstname"} placeholder="Max"/>
                <InputBox label={"Lastname"} placeholder="Verstappen"/>
                <button className="border-2 p-2 rounded-2xl bg-slate-900 text-amber-100">Sign up</button>

            </div>
        </div>
            
    )
}

interface InputBoxtype {
    label : string,
    placeholder? : string
}

function InputBox( {label, placeholder} : InputBoxtype) {
    return(
        <div className="py-1">
            <div className="text-start pl-2">
                {label}
            </div>
            <div>
            <input className="w-full border-2 p-2 rounded-2xl" type="text" placeholder={placeholder}/>

            </div>
        </div>
    )
}