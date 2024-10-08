import Link from "next/link"
export default function LogOut() {
    const removeLocalStorage = () => {
        localStorage.clear();
    }
    return (
        <Link className="absolute top-3 right-3" href={`api/auth/logout`}>
            <button className=" font-[600] text-[16px] f-lato p-3 h-[45px] rounded-lg bg-[#0D0040] active:bg-[#0D0040] hover:bg-[#0d0040e7] text-white" onClick={removeLocalStorage}>Sign out</button>
            {/* <button>Log out</button> */}
        </Link>
    )
} 