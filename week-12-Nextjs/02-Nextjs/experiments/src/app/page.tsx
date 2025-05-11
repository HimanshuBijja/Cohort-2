import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>

      Todo application
      </div> 
      <Link className="hover:text-blue-500" href={'/signup'}> To signup page</Link>
      <Link className="hover:text-blue-500" href={'/signin'}> To signin page</Link>
    </div>
  );
}
