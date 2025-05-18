"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";

export default function SignIn() {
    const username = useRef("");
    const password = useRef("");
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await signIn("credentials", {
            username : username.current,
            password : password.current,
            redirect : true,
            callbackUrl : "http://localhost:3000/restricted"
        })
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <form onSubmit={ onSubmit} className="flex flex-col mt-4">
        <input
        onChange={(e) => {
            username.current = e.target.value;}
        }
          type="text"
          placeholder="Username"
          className="mb-2 p-2 border border-gray-300 rounded"
        />
        <input
        onChange={(e) => {
            password.current = e.target.value;} 
        }
          type="password"
          placeholder="Password"
          className="mb-2 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}