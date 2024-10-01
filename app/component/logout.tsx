import Link from "next/link"
export default function LogOut() {
    return (
        <Link href={`api/auth/logout`}>
            <button className="absolute font-[600] text-[16px] f-lato top-3 right-3 p-3 h-[45px] rounded-lg bg-[#0D0040] active:bg-[#0D0040] hover:bg-[#0d0040e7] text-white">Sign out</button>
            {/* <button>Log out</button> */}
        </Link>
    )
} 