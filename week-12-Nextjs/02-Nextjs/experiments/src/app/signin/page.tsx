export default function signin() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3">
        <div className="text-4xl pb-6">
            Sign In
        </div>
       <InputBox label="Username" placeholder="Jhon@abc" />
       <InputBox label="Password" placeholder="Xyz@123" />
       <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2">Sign in</button>
    </div>
  );
}

type InputBoxType = {
    label : string,
    placeholder : string
}

function InputBox({placeholder, label } : InputBoxType){
    return (
        <div className="">
            <div className="pl-3 text-lg">
                {label}
            </div>
            <div>
                <input className="border-2 rounded-2xl p-2" type="text" placeholder={placeholder} />
            </div>
        </div>
    )
}
