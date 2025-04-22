import { useEffect, useState } from "react";
import { AppBar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Button } from "../components/Button";
import { Users } from "../components/Users";
import axios from "axios";

export function Dashboard() {
	return (
		<div className="bg-slate-500 h-screen  align-top p-4 ">
			<div className=" bg-white p-6 border-2 rounded-4xl h-full relative">
				<AppBar username={"Max"} logo={""} />
				<Balance amount={"10000"} />
				<Users placeholder={"Search users"} />
			</div>
		</div>
	);
}
