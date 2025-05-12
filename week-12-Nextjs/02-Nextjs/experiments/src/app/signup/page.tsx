"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3">
      <div className="text-4xl pb-6">Sign In</div>
      <InputBox
        setValue={setUsername}
        label="Username"
        placeholder="Jhon@abc"
      />
      <InputBox setValue={setPassword} label="Password" placeholder="Xyz@123" />
      <InputBox setValue={setFirstname} label="Firstname" placeholder="Jhon" />
      <InputBox setValue={setLastname} label="Lastname" placeholder="Doe" />
      <button
        className="text-amber-200 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:3000/api/v1/user/ret",
            {
              username,
              password,
              firstname,
              lastname,
            }
        );
        // router.push('/');
    }}
      >
        Sign in
      </button>
    </div>
  );
}

type InputBoxType = {
  label: string;
  placeholder: string;
  setValue: (value: string) => void;
};

function InputBox({ placeholder, label, setValue }: InputBoxType) {
  return (
    <div className="">
      <div className="pl-3 text-lg">{label}</div>
      <div>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="border-2 rounded-2xl p-2"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
