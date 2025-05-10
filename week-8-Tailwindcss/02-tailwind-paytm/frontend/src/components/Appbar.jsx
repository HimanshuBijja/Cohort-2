import { Link } from "react-router-dom";

export function AppBar({ username, logo }) {
	return (
		<div className="border-2 rounded-2xl grid grid-cols-14 my-3 p-1 items-center gap-5 relative">
			<Link
				to={"/dashboard"}
				className="col-span-8 pl-3 text-start text-2xl font-bold"
			>
				Paytm
			</Link>
			<div className="col-span-5 text-end font-medium text-lg">{username}</div>
			<div className="col-span-1 flex justify-self-start items-center">
				<div className="flex  h-10 w-10 bg-slate-300 rounded-full justify-center items-center text-xl">
					{logo ? logo : username.charAt(0)}
				</div>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				className="size-6 absolute right-5"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</div>
	);
}
