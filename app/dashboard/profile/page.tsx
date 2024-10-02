'use client'
import React, { useState, useEffect } from "react";
import { ChangePassword } from "@/app/component/changePassword";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import NotifyAlert from "@/app/component/notifyAlert";

const Profile = () => {
    const [isPass, setIsPass] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoggedUser, setIsLoggedUser] = useState(false);
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    const toggleAlert = () => setAlertVisible(!isAlertVisible);
    const [hubspotUserInfo, setHubSpotUserInfo] = useState({
        contactId: "",
        firstname: "",
        lastname: "",
        email: "",
        jobtitle: "",
        company: "",
    });

    useEffect(() => {
        if (localStorage.getItem('contactData') != null) {
            setHubSpotUserInfo(JSON.parse(localStorage.getItem('contactData')!));
        }
        if (localStorage.getItem("loggedUser") === null) {
            setIsLoggedUser(false);
        } else {
            setIsLoggedUser(true)
        }
    }, [])

    const changeProfileHandler = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setHubSpotUserInfo({ ...hubspotUserInfo, [type]: value })
    }

    const saveHubspotInfo = async () => {
        setIsLoading(true);
        const editRes = await fetch('/api/hubspot/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hubspotUserInfo),
        });
        const data = await editRes.json();
        if (editRes.ok) {
            setIsError(false)
            if (data.createdAt && data.createdAt != '') {
                localStorage.setItem('contactData', JSON.stringify(hubspotUserInfo));
                // alert("Data changed successfully!!");
                setAlertVisible(true)
                setIsLoading(false)
            }
        } else {
            setIsError(true)
            console.log("Error occurred!!!");
        }
    }

    const handleTogglePasswordModal = () => {
        setIsPass(true)

    }
    // const handleToResultForm = () => {
    //     if (user) {
    //         const resetPasswordUrl = `https://dev-f21n5m3ogrqn451x.us.auth0.com/dbconnections/change_password?client_id=kKk8xvu5bdSKUEMswaPJdiX4tWfLJ7UR&email=${user.email}&connection=Username-Password-Authentication`;
    //         window.location.href = resetPasswordUrl;
    //     }
    // }
    const onClose = () => {
        setIsPass(false)
    }
    return (
        <div className="f-open">
            <NotifyAlert
                message={ !isError? `You've changed your data successfully!` : `Error occured!`}
                isVisible={isAlertVisible}
                onClose={toggleAlert}
                status={!isError ? `success` : `failed`}
            />
            <div className="mt-[65px] md:mt-0 p-5 lg:p-[68px] border-l-[1px] border-l-[#E1E1E1] border-b border-b-[#E1E1E1] border-r border-r-[#E1E1E1]">
                <div className="max-w-[1000px]">
                    <h1 className="text-[30px] md:text-[40px] f-open font-bold leading-[52.8px] text-[#0D0040]">Hi {hubspotUserInfo.firstname}</h1>
                    {/* <h1 className="text-4xl font-bold text-[#0D0040]">Hi {contactData.name ? contactData.name : contactData.email}</h1> */}
                    <div className="flex items-center mt-0 md:mt-4">
                        <p className="text-[16px] font-[600] text-[#0D0040] leading-[25.2px]">Subscription status &nbsp; &nbsp;
                            <span className="text-[#00A651] leading-[25.2px] text-[16px] font-[600]">Active</span>&nbsp;
                        </p>
                        <div className="w-2 h-2 bg-[#00A651] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="p-5 lg:py-[68px] lg:pl-[68px] lg:pr-[184px] border-l-[1px] border-l-[#E1E1E1] border-b border-b-[#E1E1E1] border-r border-r-[#E1E1E1]">
                <div className="max-w-[1000px]">
                    <p className="text-xl font-semibold text-[#0D0040]">Account Profile</p>
                    <div className="mt-5 md:mt-10 grid grid-cols-1 gap-x-6 gap-y-4 md:gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-0 md:mb-[27px]">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="f-lato block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">First Name</label>
                            <div className="mt-[5px] md:mt-[11px]">
                                <input type="text" id="first-name" autoComplete="given-name"
                                    className="f-lato block w-full outline-0 h-[50px] md:h-[64px] p-[18px] rounded-md py-1.5 text-[#898988e8] bg-[#E1E1E0CC] text-[16px] font-[600] placeholder:text-gray-400" value={hubspotUserInfo.firstname!} onChange={(e) => changeProfileHandler('firstname', e)} />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">Last Name</label>
                            <div className="mt-[5px] md:mt-[11px]">
                                <input type="text" id="last-name" autoComplete="given-name"
                                    className="f-lato block w-full outline-0 h-[50px] md:h-[64px] p-[23px] rounded-md py-1.5 text-[#898988e8] bg-[#E1E1E0CC] text-[16px] font-[600] placeholder:text-gray-400" value={hubspotUserInfo.lastname!} onChange={(e) => changeProfileHandler('lastname', e)} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 md:mt-10 grid grid-cols-1 gap-x-6 gap-y-4 md:gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-0 md:mb-[27px]">
                        <div className="sm:col-span-3">
                            <label htmlFor="company-name" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">Company Name</label>
                            <div className="mt-[5px] md:mt-[11px]">
                                <input type="text" id="company-name" autoComplete="given-name"
                                    className="f-lato block w-full outline-0 h-[50px] md:h-[64px] p-[23px] rounded-md py-1.5 text-[#898988e8] bg-[#E1E1E0CC] text-[16px] font-[600] placeholder:text-gray-400" value={hubspotUserInfo.company!} onChange={(e) => changeProfileHandler('company', e)} />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="job-title" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">Job Title</label>
                            <div className="mt-[5px] md:mt-[11px]">
                                <input type="text" id="job-title" autoComplete="given-name"
                                    className="f-lato block w-full outline-0 h-[50px] md:h-[64px] p-[23px] rounded-md py-1.5 text-[#898988e8] bg-[#E1E1E0CC] text-[16px] font-[600] placeholder:text-gray-400" value={hubspotUserInfo.jobtitle!} onChange={(e) => changeProfileHandler('jobtitle', e)} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 md:mt-10 grid grid-cols-1 gap-x-6 gap-y-4 md:gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-0 md:mb-[27px]">
                        <div className="sm:col-span-3">
                            <label htmlFor="email-address" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">Email Address</label>
                            <div className="mt-[5px] md:mt-[11px]">
                                <input type="text" id="email-address" autoComplete="given-name"
                                    className="f-lato block w-full outline-0 h-[50px] md:h-[64px] p-[23px] rounded-md py-1.5 text-[#898988e8] bg-[#E1E1E0CC] text-[16px] font-[600] placeholder:text-gray-400" disabled value={hubspotUserInfo.email!} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 md:mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6">
                        <div className="md:w-[219px]">
                            {!isLoading ? <button
                                className="w-full h-[61px] rounded-lg bg-[#0D0040] active:bg-[#0D0040] hover:bg-[#0d0040e7] text-white" onClick={saveHubspotInfo}>
                                Save
                            </button> :
                                <button
                                    className="w-full h-[61px] rounded-lg text-white bg-[#0D0040] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
                                        <g stroke="currentColor">
                                            <circle cx="12" cy="12" r="9.5" fill="none" strokeLinecap="round" strokeWidth="1.55">
                                                <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.2s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" />
                                                <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.2s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" />
                                            </circle>
                                            <animateTransform attributeName="transform" dur="1.6s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                                        </g>
                                    </svg>
                                </button>}
                        </div>
                    </div>
                </div>
            </div>
            {
                isLoggedUser ? <div className="border-b border-l-[1px] p-5 border-l-[#E1E1E1] border-b-[#E1E1E1] lg:py-[68px] lg:pl-[68px] lg:pr-[184px] border-r border-r-[#E1E1E1]">
                    <div className="w-full xl:max-w-[1000px] items-center flex justify-between">
                        <p className="text-xl font-semibold text-[#0D0040]">Password Management</p>
                        <p className="text-sm font-semibold text-[#171100] underline cursor-pointer hover:text-[#17110073] transition-colors duration-300 " onClick={handleTogglePasswordModal}>Change Password</p>
                    </div>
                </div> : ''
            }


            <div className="p-5 md:p-12 border border-[#E1E1E1] border-t-0 flex justify-between">
            </div>
            {isPass ? <ChangePassword onClose={onClose} /> : ''}
        </div>
    );
};
export default withPageAuthRequired(Profile, {
    returnTo: '/'
});