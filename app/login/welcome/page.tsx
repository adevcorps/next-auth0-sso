'use client'
// import React from 'react';
import React, { useState, useEffect } from "react";
import logo from '../../../assets/img/logo.png';
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';
export default function Welcome ({ }){
    const { user } = useUser();
    const router = useRouter();
    const [email, setEmail] = useState("asdfsssaastsdaasdf@outlook.com");
    // const [contact, setContact] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setEmail(user.email!);
        }
    }, [user])

    const getContactByEmail = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/hubspot/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                const data = await res.json();

                if (data.total == 0) {
                    console.log(data.total);
                    // addContactByEmail();
                }
                else {
                    console.log(data);

                    const contactData = {
                        contactId: data.results[0].id,
                        firstname: data.results[0].properties.firstname,
                        lastname: data.results[0].properties.lastname,
                        jobtitle: data.results[0].properties.jobtitle,
                        company: data.results[0].properties.company,
                        email: email
                    };
                    // router.push(`/dashboard`);
                    router.push(`/dashboard/profile?queryData=${encodeURIComponent(JSON.stringify(contactData))}`)
                    // setContact(data);
                }

            } else {
                // setContact(null);
            }
        } catch (error) {
            console.log(error)
            // setError(JSON.stringify(error))
        }
        setIsLoading(false)
    }

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
    //             contactId: data.id,
    //             firstname: "",
    //             lastname: "",
    //             jobtitle: "",
    //             company: "",
    //             email: email
    //         };
    //         router.push(`/dashboard/profile?queryData=${encodeURIComponent(JSON.stringify(contactData))}`)
    //     } else {
    //         console.log("User creation failed!!!");
    //     }
    // }

    const checkUserInfoAndGetContact = () => {
        if (email !== "") {
            getContactByEmail();
        }
    }

    // if(isLoading) return(<div>Loading...</div>)
    return (
        <div className='h-[100vh]'>
            <div className="h-full bg-gradient-to-r from-[#14005F80] to-[#0042A880] grid place-items-center">
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
                                {/* <Link href={'/dashboard/profile'}> */}
                                {
                                    !isLoading ? <button className="w-full p-2.5 h-[45px] sm:h-[61.5px] text-[18px] f-lato font-bold text-black rounded-lg bg-[#FFD601]" onClick={checkUserInfoAndGetContact}>Go to My Account</button> :                                  <button className="w-full p-2.5 h-[45px] sm:h-[61.5px] text-[18px] f-lato font-bold flex items-center justify-center rounded-lg bg-[#ecdc89]">
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
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default withPageAuthRequired(Welcome);