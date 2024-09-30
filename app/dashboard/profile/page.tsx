'use client'
// Needed for client-side components in Next.js App Router (v13+)
import React, { useState, useEffect} from "react";
import { ChangePassword } from "@/app/component/changePassword";
// import { useUser } from '@auth0/nextjs-auth0/client';

import { useSearchParams } from 'next/navigation';

const Profile = () => {
    // const { user } = useUser();
    const [isPass, setIsPass] = useState<boolean>(false);
    const [hubspotUserInfo, setHubSpotUserInfo] = useState({
        contactId:"",
        firstname:"",
        lastname:"",
        email:"",
        jobtitle:"",
        company:"",
    });
    const searchParams = useSearchParams();
    const queryData = searchParams.get('queryData');
    

    useEffect(() => {
        // console.log(queryData);
        if(queryData != null) {
            const contactData = queryData ? JSON.parse(decodeURIComponent(queryData)) : null;
            localStorage.setItem('contactInfo', JSON.stringify(contactData));
            setHubSpotUserInfo(contactData);
        }else {
            setHubSpotUserInfo(JSON.parse(localStorage.getItem('contactInfo')!));
        }
    }, [])

    const changeProfileHandler = (type:string, e:React.ChangeEvent<HTMLInputElement>)=> {
        const value = e.target.value;
        setHubSpotUserInfo({...hubspotUserInfo, [type] :value})
    }

    const saveHubspotInfo = async () => {

        console.log(hubspotUserInfo);
        const editRes = await fetch('/api/hubspot/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hubspotUserInfo),
        });
        const data = await editRes.json();
        if(editRes.ok ){
            if(data.createdAt && data.createdAt != '') {
                alert("Data changed successfully!!");
            }
        } else {
            console.log("Error occurred!!!");
        }
    }
    // console.log(contactData)

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
            <div className="mt-[113px] md:mt-0 lg:p-[68px] sm:p-[40px] xs:p-[40px] xxs:p-[40px] border-l-[1px] border-l-[#E1E1E1] border-b border-b-[#E1E1E1] border-r border-r-[#E1E1E1]">
                <div className="max-w-[1000px]">
                    <h1 className="text-[40px] f-open font-bold leading-[52.8px] text-[#0D0040]">Hi David</h1>
                    {/* <h1 className="text-4xl font-bold text-[#0D0040]">Hi {contactData.name ? contactData.name : contactData.email}</h1> */}
                    <div className="flex items-center mt-4">
                        <p className="text-[16px] font-[600] text-[#0D0040] leading-[25.2px]">Subscription status &nbsp; &nbsp;
                            <span className="text-[#00A651] leading-[25.2px] text-[16px] font-[600]">Active</span>&nbsp;
                        </p>
                        <div className="w-2 h-2 bg-[#00A651] rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="py-[68px] pl-[68px] pr-[184px] border-l-[1px] xl:pr-[184px] lg:px-[68px] md:px-[40px] sm:px-[20px] xs:px-[20px] xxs:px-[20px] border-l-[#E1E1E1] border-b border-b-[#E1E1E1] border-r border-r-[#E1E1E1]">
                <div className="max-w-[1000px]">
                    <p className="text-xl font-semibold text-[#0D0040]">Account Profile</p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-[27px]">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="f-lato block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">First Name</label>
                            <div className="mt-[11px]">
                                <input type="text" id="first-name" autoComplete="given-name"
                                    className="block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" value={hubspotUserInfo.firstname!} onChange={(e) => changeProfileHandler('firstname', e)}/>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">Last Name</label>
                            <div className="mt-[11px]">
                                <input type="text" id="last-name" autoComplete="given-name"
                                    className="f-lato block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" value={hubspotUserInfo.lastname!} onChange={(e) => changeProfileHandler('lastname', e)} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-[27px]">
                        <div className="sm:col-span-3">
                            <label htmlFor="company-name" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">Company Name</label>
                            <div className="mt-[11px]">
                                <input type="text" id="company-name" autoComplete="given-name"
                                    className="f-lato block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" value={hubspotUserInfo.company!} onChange={(e) => changeProfileHandler('company', e)}/>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="job-title" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">Job Title</label>
                            <div className="mt-[11px]">
                                <input type="text" id="job-title" autoComplete="given-name"
                                    className="f-lato block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" value={hubspotUserInfo.jobtitle!} onChange={(e) => changeProfileHandler('jobtitle', e)}/>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-[36px]">
                        <div className="sm:col-span-3">
                            <label htmlFor="email-address" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 f-lato">Email Address</label>
                            <div className="mt-[11px]">
                                <input type="text" id="email-address" autoComplete="given-name"
                                    className="f-lato block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" disabled value={hubspotUserInfo.email!}/>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6">
                        <div className="md:w-[219px]">
                            <button
                                className="w-full h-[61px] rounded-lg bg-[#0D0040] active:bg-[#0D0040] hover:bg-[#0d0040e7] text-white" onClick={saveHubspotInfo}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-l-[1px] border-l-[#E1E1E1] border-b-[#E1E1E1] py-[68px] pl-[68px] pr-[184px] xl:pr-[184px] lg:px-[68px] md:px-[40px] sm:px-[20px] xs:px-[20px] xxs:px-[20px] border-r border-r-[#E1E1E1]">
            <div className="w-full xl:max-w-[1000px] flex justify-between">
                    <p className="text-xl font-semibold text-[#0D0040]">Password Management</p>
                    <p className="text-sm font-semibold text-[#171100] underline cursor-pointer" onClick={handleTogglePasswordModal}>Change Password</p>
                </div>
            </div>

            <div className="p-6 md:p-12 border border-[#E1E1E1] border-t-0 flex justify-between">
            </div>
            {isPass ? <ChangePassword onClose={onClose} /> : ''}
        </div>
    );
};

export default Profile;