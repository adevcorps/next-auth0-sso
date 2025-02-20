'use client'

import React, { useState } from 'react';
import Image from "next/image";
import logo from '../../assets/img/logo.png';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0/client';
import NotifyAlert from './notifyAlert';

interface ModalProps {
    onClose: () => void;
}
 
const issuerDomain = `${process.env.NEXT_PUBLIC_AUTH0_ISSUERD_DOMAIN}`;
const bearerToken = `${process.env.NEXT_PUBLIC_AUTH0_API_MANAGEMENT_TOKEN}`;
const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export function ChangePassword({ onClose }: ModalProps) {
    const { user } = useUser();
    const [isPasswordTrue, setIsPasswordTrue] = useState(true);
    const [isConfirm, setIsConfirm] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    const toggleAlert = () => setAlertVisible(!isAlertVisible);
    const [changePassword, setChangePassword] = useState({
        newPass: "",
        confirmPass: ""
    })
    const handleCloseToggler = () => {
        onClose();
    }
    const handleChangePassword = (type: string, event: React.FormEvent<HTMLInputElement>) => {
        const e = event.currentTarget.value;
        setChangePassword({ ...changePassword, [type]: e });
        if (type == "newPass") {
            if (regex.test(e)) {
                setIsPasswordTrue(true);
                if (e === changePassword.confirmPass) {
                    setIsConfirm(true);
                } else {
                    setIsConfirm(false);
                }
            } else {
                setIsPasswordTrue(false)
            }
        } else {
            if (changePassword.newPass !== e) {
                setIsConfirm(false)
            } else {
                setIsConfirm(true);
            }
        }
    }
    const handlePasswordCompare = () => {
        if (isPasswordTrue && isConfirm) {
            setIsError(false);
            setIsLoading(true);
            axios.patch(
                `https://${issuerDomain}/api/v2/users/${user?.sub}`,
                {
                    password: changePassword.newPass
                },
                {
                    headers: {
                        'Authorization': `Bearer ${bearerToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            ).then(function (response) {
                if (response.status == 200) {
                    setIsLoading(false)
                    setChangePassword({
                        newPass: "",
                        confirmPass: ""
                    })
                    setIsError(false);
                    setAlertVisible(true);
                    setTimeout(()=>{
                        onClose();
                    }, 2000)
                }
            }).catch(function (error) {
                console.log(error);
            })
        } else {
            setIsError(true);
            setAlertVisible(true);
        }
    }
    return (
        <>
            <NotifyAlert
                message={!isError ? `You've changed your password successfully!` : `Error occured!`}
                isVisible={isAlertVisible}
                onClose={toggleAlert}
                status={!isError ? `success` : `failed`}
            />
            <div className="fixed inset-0 z-[90] md:z-[110] h-[100vh] bg-black bg-opacity-50 grid place-items-center">
                <div className="relative w-10/12 min-h-[513px] box-content sm:w-[510px] rounded-lg bg-authformbackground p-2">
                    <button className="absolute top-8 right-10 text-white" onClick={handleCloseToggler}>
                        ✕
                    </button>
                    <div className="w-full flex justify-center py-4">
                        <Image
                            src={logo.src}
                            alt={"logo image"}
                            width={116}
                            height={85}
                        />
                    </div>
                    <div className="text-center">
                        <div className=" p-6 md:px-[84.5px] pt-[42px]">
                            <h1 className="text-[40px] f-roboto leading-[46.88px] font-[500] text-white">Change Password</h1>
                            <div className="w-full mt-[27.5px] mb-5 group">
                                <div className="relative z-0 w-full group text-left">
                                    <input type="password" name="floating_email" id="floating_email" className="block py-[9.54px] px-0 w-full f-open text-[12px] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => handleChangePassword("newPass", e)} required />
                                    {isPasswordTrue == false ? <span className='f-open text-[#FF0000] text-xs leading-[16pz] '>* Password should be at least 8 characters and contain a special character and a number.</span> : ''}
                                    <label htmlFor="floating_email" className="font-bold f-open text-[12px] peer-focus:font-medium absolute leading-[16.34px] text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                                </div>
                                <div className="relative z-0 w-full mt-[27.5px] group text-left">
                                    <input type="password" name="floating_email" id="floating_email" className="block py-[9.54px] px-0 w-full f-open text-[12px] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => handleChangePassword("confirmPass", e)} required />
                                    {isConfirm == false ? <span className='f-open text-[#FF0000] text-xs leading-[16pz] '>* Password should be matched.</span> : ''}
                                    <label htmlFor="floating_email" className="font-bold peer-focus:font-medium absolute text-xs text-white leading-[16.34px] dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 f-open">Confirm Password <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                                </div>
                                {/* <button onClick={checkUserInfoAndGetContact} className="w-full p-2.5 text-lg font-bold text-black rounded-lg bg-[#FFD601]">Go to VSE Dashboard</button> */}
                                {
                                    !isLoading ? <button className="w-full h-[61.54px] mt-[32.69px] p-4.5 text-[18px] font-bold text-black rounded-lg transition-transform duration-300  f-lato active:bg-[#ffd5018a] bg-[#FFD601] hover:bg-[#ffd501cb]" onClick={handlePasswordCompare}>Change Password</button> : <button className="w-full mt-[32.69px] p-4.5 h-[45px] sm:h-[61.5px] text-[18px] f-lato font-bold flex items-center justify-center rounded-lg bg-[#ecdc89]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
                                            <g stroke="currentColor">
                                                <circle cx="12" cy="12" r="9.5" fill="none" strokeLinecap="round" strokeWidth="1.55">
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
        </>
    )
}
