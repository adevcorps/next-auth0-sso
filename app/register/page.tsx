'use client'
import React, { useState } from "react";
import logo from '../../assets/img/logo.png';
import Image from "next/image";
import v1 from '../../assets/img/Vector1.png'
import v2 from '../../assets/img/Vector2.png'
import v3 from '../../assets/img/Vector3.png'
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

function RegisterPage() {
    const { user } = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobtitle: "",
        company: "",
    })

    const hanleChangeUserName = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserName({ ...userName, [type]: value })
    }

    const handleRegUserToHubSpot = async () => {
        setIsLoading(true);
        if (userName.firstName !== "" || userName.lastName !== "") {
            if (user?.email) {
                const email = user.email;
                const createdRes = await fetch('/api/hubspot/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email }),
                });

                const data = await createdRes.json();
                if (createdRes.ok) {
                    const editRes = await fetch('/api/hubspot/edit', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            contactId: data.id,
                            firstname: userName.firstName,
                            lastname: userName.lastName,
                            email: email,
                            jobtitle: "",
                            company: "",
                        }),
                    });
                    const editData = await editRes.json();
                    if (editRes.ok) {
                        if (editData.createdAt && editData.createdAt != '') {
                            localStorage.setItem('contactData', JSON.stringify({
                                contactId: data.id,
                                firstname: userName.firstName,
                                lastname: userName.lastName,
                                email: email,
                                jobtitle: "",
                                company: "",
                            }));
                            router.push('/dashboard/profile');
                        }
                    } else {
                        console.log("Error occurred!!!");
                    }
                } else {
                    console.log("Error occurred!!!");
                }
            }
        } else {
            console.log("Please input user name correctly!");
        }
        setIsLoading(false);
    }

    return (
        <div className="relative f-open">
            <div className="absolute hidden xl:block left-[84px] top-[366px] box-border w-[219.91px] ">
                <div className="w-full flex justify-between mb-[10px]">
                    <Image
                        src={v1.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                    <Image
                        src={v2.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>

                <div className="w-full flex justify-between mb-[10px]">
                    <Image
                        src={v1.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                    <Image
                        src={v3.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>
                <div className="w-full flex justify-between mb-[10px]">
                    <Image
                        src={v2.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                    <Image
                        src={v3.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>
                <div className="w-full flex justify-between mb-[10px]">
                    <Image
                        src={v2.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                    <Image
                        src={v3.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>
            </div>
            <div className="absolute hidden xl:block right-[96.09px] top-[384px]  box-border w-[219.91px] ">
                <div className="w-full flex justify-end mb-[10px]">
                    <Image
                        src={v1.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>
                <div className="w-full flex justify-end mb-[10px]">
                    <Image
                        src={v1.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>
                <div className="w-full flex justify-start mb-[10px]">
                    <Image
                        src={v2.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>
                <div className="w-full flex justify-between mb-[10px]">
                    <Image
                        src={v2.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                    <Image
                        src={v2.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>
                <div className="w-full flex justify-end mb-[10px]">
                    <Image
                        src={v3.src}
                        width={101.65}
                        height={23.27}
                        alt="v"
                    />
                </div>
            </div>
            <div className="h-[100vh] bg-gradient-to-l from-[#14005F80] to-[#0042A880] grid place-items-center">
                <div className=" w-10/12 sm:w-[510px] box-content rounded-lg bg-authformbackground p-5 sm:p-[30px] h-max-[854px] lg:pb-[88px]">
                    <div className="w-full flex justify-center py-1 sm:py-5 sm:pb-10">
                        <Image
                            src={logo.src}
                            alt={"logo image"}
                            width={116}
                            height={85}
                        />
                    </div>
                    <div className="px-2 text-center">
                        <div className="px-0 sm:px-12">
                            <h1 className="text-[30px] sm:text-[40px] leading-10 font-[500] font-roboto text-white">Create Account</h1>
                            {/* <h1 className="text-[40px] leading-10 font-medium">Login to VSE</h1> */}
                            <div className="relative z-0 w-full mt-3 md:mt-[86.5px] group">
                                <input type="text" name="first_name" id="first_name" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-white bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { hanleChangeUserName('firstName', e) }} required />
                                <label htmlFor="first_name" className="text-[12px] leading-[16.34px] f-open font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="relative z-0 w-full mt-3 md:mt-[39.23px] group">
                                <input type="text" name="last_name" id="last_name" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-white bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" onChange={(e) => { hanleChangeUserName('lastName', e) }} required />
                                <label htmlFor="last_name" className="text-[12px] text-white leading-[16.34px] f-open font-[700] peer-focus:font-medium absolute dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            {/* <div className="relative z-0 w-full mt-3 md:mt-[39.23px] group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-white bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                <label htmlFor="floating_email" className="text-[12px] leading-[16.34px] f-open font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="relative z-0 w-full mt-3 md:mt-[39.23px] group">
                                <input type="password" name="password" id="password" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-white bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                <label htmlFor="password" className="text-[12px] leading-[16.34px] f-open font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div> */}
                            <div className="flex w-full mt-3 md:mt-[39.23px]">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 bg-transparent border-gray-300 rounded" />
                                <p className="text-[13px] f-open font-[700] leading-[25px] sm:leading-[20px] tracking-[1px] text-white">Click box to acknowledge <span className="text-[#FFD601] cursor-pointer">Privacy Statement</span> and <span className="text-[#FFD601] cursor-pointer">Terms of Service</span></p>
                            </div>

                            <div className="relative z-0 w-full mt-[10px] sm:mt-[32px]">
                            {
                                    !isLoading ? <button className="w-full h-[40px] sm:h-[61.5px] p-1 sm:p-[19px] text-[18px] font-bold f-lato text-black rounded-lg bg-[#FFD601] tracking-wide" onClick={handleRegUserToHubSpot}>Create Account</button> : <button className="w-full mt-[32.69px] p-4.5 h-[40px] sm:h-[61.5px] sm:p-[19px] text-[18px] f-lato font-bold flex items-center justify-center rounded-lg bg-[#ecdc89]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
                                        <g stroke="currentColor">
                                            <circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="1.55">
                                                <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.2s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" />
                                                <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.2s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" />
                                            </circle>
                                            <animateTransform attributeName="transform" dur="1.6s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                                        </g>
                                    </svg>
                                </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withPageAuthRequired(RegisterPage, {
    returnTo: '/register'
});