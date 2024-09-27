'use client'
// import React, { useState, useEffect } from "react";
import React from 'react';
import logo from '../../../assets/img/logo.png';
import Image from "next/image";
import Link from "next/link";
import HomeHeader from '@/app/component/homHeaderBar';
// import { useRouter } from "next/navigation";
// import { useUser } from '@auth0/nextjs-auth0/client';

const Welcome = ({ }) => {
    // const { user } = useUser();
    // const router = useRouter();
    // const [email, setEmail] = useState("asdfsssaastsdaasdf@outlook.com");
    // const [contact, setContact] = useState<any>(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     if (user) {
    //         // setEmail(user.email!);
    //     }
    // }, [user])

    // const getContactByEmail = async () => {
    //     setIsLoading(true);
    //     try {
    //         const res = await fetch('/api/hubspot/search', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ email }),
    //         });
    //         if (res.ok) {
    //             const data = await res.json();

    //             if (data.total == 0)
    //             {
    //                 addContactByEmail();
    //             }
    //             else {
    //                 const contactData = {
    //                     id: data.results[0].id,
    //                     firstname: data.results[0].firstname,
    //                     lastname: data.results[0].lastname,
    //                     jobtitle: data.results[0].jobtitle,
    //                     company: data.results[0].company,
    //                     email: email
    //                 };
    //                 // router.push(`/dashboard`);
    //                 router.push(`/dashboard/profile?queryData=${encodeURIComponent(JSON.stringify(contactData))}`)
    //                 setContact(data);
    //             }

    //         } else {
    //             setContact(null);
    //         }
    //     } catch (error) {
    //         setError(JSON.stringify(error))
    //     }
    //     setIsLoading(false)
    // }

    // const addContactByEmail = async () => {
    //     const res = await fetch('/api/hubspot/create', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ email }),
    //     });
    //     if (res.ok) {
    //         const data = await res.json();
    //         const contactData = {
    //             id: data.id,
    //             firstname: "",
    //             lastname: "",
    //             jobtitle: "",
    //             company: "",
    //             email: email
    //         };
    //         router.push(`/dashboard`);
    //         router.push(`/dashboard/profile?queryData=${encodeURIComponent(JSON.stringify(contactData))}`)
    //     } else {
    //         console.log("User creation failed!!!");
    //     }
    // }

    // const checkUserInfoAndGetContact = () => {
    //     if (email !== "") {
    //         getContactByEmail();
    //     }
    // }

    // if(isLoading) return(<div>Loading...</div>)
    return (
        <>
            <HomeHeader />
            <div className="h-[100vh] bg-gradient-to-r from-[#14005F80] to-[#0042A880] grid place-items-center">
                <div className="h-[482px] xl:w-4/12 lg:w-4/12 md:w-3/6 sm:w-9/12 rounded-lg bg-authformbackground p-2 max-h-[680px]">
                    <div className="w-full flex justify-center py-4">
                        <Image
                            src={logo.src}
                            alt={"logo image"}
                            width={116}
                            height={85}
                        />
                    </div>
                    <div className="px-2 text-center">
                        <div className="px-12 pt-4">
                            <h1 className="text-[40px] leading-10 font-medium text-white">Welcome</h1>
                            <div className="relative z-0 w-full mt-16 mb-5 group">
                                    {/* <button onClick={checkUserInfoAndGetContact} className="w-full p-2.5 text-lg font-bold text-black rounded-lg bg-[#FFD601]">Go to VSE Dashboard</button> */}
                                    <button className="w-full font-lato p-2.5 text-lg font-bold text-black rounded-lg bg-[#FFD601]">Go to VSE Dashboard</button>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <Link href={'/dashboard/profile'}>
                                <button className="w-full p-2.5 text-lg font-lato font-bold text-black rounded-lg bg-[#FFD601]">Go to My Account</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome;