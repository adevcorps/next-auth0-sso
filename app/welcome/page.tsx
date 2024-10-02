'use client'
// import React from 'react';
import React from "react";
import logo from '../../assets/img/logo.png';
import Image from "next/image";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
// import { useRouter } from "next/navigation";
// import { useUser } from '@auth0/nextjs-auth0/client';
import LogOut from "../component/logout";

function Welcome({ }) {
    return (
        <div className='h-[100vh] relative'>
            <div className="h-full bg-gradient-to-r from-[#14005F80] to-[#0042A880] grid place-items-center">
                <LogOut/>
                <div className="w-10/12 sm:w-[510px] h-[482px] rounded-lg bg-authformbackground p-2 max-h-[680px]">
                    <div className="w-full flex justify-center py-4">
                        <Image
                            src={logo.src}
                            alt={"logo image"}
                            width={116}
                            height={85}
                        />
                    </div>
                    <div className="px-2 text-center">
                        <div className="px-2 md:px-12 pt-4">
                            <h1 className="text-[40px] leading-10 f-roboto font-[500] text-white">Welcome</h1>
                            <div className="relative z-0 w-full mt-16 mb-5 group">
                                <button className="w-full f-lato p-2.5 text-[18px] font-bold text-black rounded-lg bg-[#FFD601] h-[45px] sm:h-[61.5px]">Go to VSE Dashboard</button>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Link href={'/dashboard/profile'}>
                                <button className="w-full p-2.5 h-[45px] sm:h-[61.5px] text-[18px] f-lato font-bold text-black rounded-lg bg-[#FFD601]">Go to My Account</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withPageAuthRequired(Welcome,{
    returnTo: '/'
});