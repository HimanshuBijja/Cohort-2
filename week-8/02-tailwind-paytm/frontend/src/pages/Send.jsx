import { useLocation } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { useState } from "react";
import axios from "axios";

export function Send() {

	const location = useLocation();
	const {to} = location.state || {};
	const [amount, setAmount] = useState(0);

	return (
		<div className="bg-slate-300 flex h-screen justify-center items-center p-4">
			<div className="bg-white w-full max-w-xs h-max p-4 text-center rounded-3xl">
				<Heading label={"Transfer Money"} />
				<User firstname={"tony"} lastname={"stark"} />
				<div className="flex justify-start font-medium ml-2">
					<SubHeading label={"Amount in Rs"} />
				</div>
				<input
				onChange={e =>{
					setAmount(e.target.value)
				}}
					className="border-2 rounded-2xl p-2 w-full my-2"
					placeholder="Enter Amount"
					type="number"
				/>
                <Button onClick={async ()=>{
					await axios.post("http://localhost:3000/api/v1/account/transaction", {
						to : to,
						amount : Number(amount)
					}, {
						headers : {
							authentication : "Bearer " + localStorage.getItem("token")
						}
					})
				}} label={"Send"}/>
			</div>
		</div>
	);
}

function User({ firstname, lastname }) {
	return (
		<div className="col-span-4 flex items-center gap-3 mt-20 ">
			<div className="flex ml-2 h-11 w-11 bg-slate-300 rounded-full justify-center items-center text-xl font-semibold">
				{firstname.charAt(0).toUpperCase()}
			</div>
			<div className="text-xl font-medium">
				{firstname.charAt(0).toUpperCase() +
					firstname.slice(1).toLowerCase() +
					" " +
					lastname.charAt(0).toUpperCase() +
					lastname.slice(1).toLowerCase()}
			</div>
		</div>
	);
}
