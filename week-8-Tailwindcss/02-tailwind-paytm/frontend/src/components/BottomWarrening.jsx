import { Link } from "react-router-dom";

export function BottomWarrening({label, to, buttonText}){
    return (
        <div className="pt-1 text-sm">
            {label}
            <Link className="text-blue-600 underline cursor-pointer" to={to}>
                {buttonText}
            </Link>
        </div>
    )
}