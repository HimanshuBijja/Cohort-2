import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Users({ placeholder }) {
	const [search, setSearch] = useState("");
	const [user, setUser] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/user/bulk", {
				params: { filter: search },
			})
			.then((response) => {
				setUser(response.data.users);
			});
	}, [search]);

	return (
		<div>
			<div className="mx-50 mt-5 mb-2 relative">
				<input
					onChange={(e) => {
						setSearch(e.target.value.toLowerCase());
					}}
					className="border-2 w-full rounded-2xl p-2 pl-15 text-lg font-medium"
					placeholder={placeholder}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="size-6 absolute left-7 top-1/2 transform -translate-y-1/2 "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
			</div>
			<div className="overflow-y-auto  h-[50vh] w-[65vw] mt-5 absolute left-65 ">
				{user.map((x) => (
					<User user={x} />
				))}
			</div>
		</div>
	);
}

function User({ user }) {
	const navigate = useNavigate();
	return (
		<div className="grid grid-cols-6 px-1 items-center  gap-10">
			<div className="col-span-4 flex items-center gap-3  border-2 my-2 p-2 rounded-3xl">
				<div className="flex ml-3 h-8 w-8 bg-slate-300 rounded-full justify-center items-center text-sm font-semibold">
					{user.firstname.charAt(0).toUpperCase()}
				</div>
				<div className="text-lg font-medium">
					{user.firstname.charAt(0).toUpperCase() +
						user.firstname.slice(1).toLowerCase() +
						" " +
						user.lastname.charAt(0).toUpperCase() +
						user.lastname.slice(1).toLowerCase()}
				</div>
			</div>
			<div className="col-span-2 justify-self-center">
				<div className="w-max">
					<Button
						onClick={() => {
							navigate("/send",{
								state :{
									to : user.username
								}
							});
						}}
						label={"Send money"}
					/>
				</div>
			</div>
		</div>
	);
}
