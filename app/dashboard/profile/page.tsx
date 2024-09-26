'use client'
import React from "react";
// import { useSearchParams } from 'next/navigation';

const Profile = ({ }) => {
    // const searchParams = useSearchParams();
    // const queryData = searchParams.get('queryData');
    // const contactData = queryData ? JSON.parse(decodeURIComponent(queryData)) : null;

    // console.log(contactData)
    return (
        // <div>
        //     <h1>Welcome dashboard</h1>
        //     {contactData && (
        //         <div>
        //             <p>Email: {contactData.email}</p>
        //         </div>
        //     )}
        // </div>
        <>
            <div className="p-12 border-b-[1px] border-b-[#E1E1E1]">
                <h1 className="text-4xl font-bold text-[#0D0040]">Hi David</h1>
                {/* <h1 className="text-4xl font-bold text-[#0D0040]">Hi {contactData.name ? contactData.name : contactData.email}
    </h1> */}
                <div className="flex item-center mt-5">
                    <p className="text-base font-[600] text-[#0D0040]">Subscription status &nbsp; &nbsp;
                        <span className="text-[#00A651]">Active
                        </span>&nbsp;
                    </p>
                    <div style={{ width: '7px', height: '7px', background: '#00A651', borderRadius: '50%' }}></div>
                </div>
            </div>
            <div className="p-12 border-b-[1px] border-b-[#E1E1E1]">
                <p className="text-xl font-[600] text-[#0D0040]">Account Profile</p>
                <div className="w-8/12 mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-[14px] font-[600] leading-6 text-gray-900">First
                            Name</label>
                        <div className="mt-2">
                            <input type="text" id="first-name" autoComplete="given-name"
                                className="block w-full h-10 outline-0 p-6 rounded-md border-0 py-1.5 text-[#898988] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-[14px] font-[600] leading-6 text-gray-900">Last
                            Name</label>
                        <div className="mt-2">
                            <input type="text" id="last-name" autoComplete="given-name"
                                className="block w-full h-10 outline-0 p-6 rounded-md border-0 py-1.5 text-[#898988] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div className="w-8/12 mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="company-name" className="block text-[14px] font-[600] leading-6 text-gray-900">Company
                            Name</label>
                        <div className="mt-2">
                            <input type="text" id="company-name" autoComplete="given-name"
                                className="block w-full h-10 outline-0 p-6 rounded-md border-0 py-1.5 text-[#898988] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="job-title" className="block text-[14px] font-[600] leading-6 text-gray-900">Job
                            Title</label>
                        <div className="mt-2">
                            <input type="text" id="job-title" autoComplete="given-name"
                                className="block w-full h-10 outline-0 p-6 rounded-md border-0 py-1.5 text-[#898988] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div className="w-8/12 mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="email-address" className="block text-[14px] font-[600] leading-6 text-gray-900">Email
                            Address</label>
                        <div className="mt-2">
                            <input type="text" id="email-address" autoComplete="given-name"
                                className="block w-full h-10 outline-0 p-6 rounded-md border-0 py-1.5 text-[#898988] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div className="w-8/12 mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3 w-6/12">
                        <button
                            className="w-full p-2.5 rounded-lg bg-[#0D0040] active:bg-[#0D0040] hover:bg-[#0d0040e7] text-white">
                            Save</button>
                    </div>
                </div>
                {/* <h1 className="text-4xl font-bold text-[#0D0040]">Hi {contactData.name ? contactData.name : contactData.email}
    </h1> */}
            </div>
            <div className="p-10 border-b-[1px] flex justify-between border-b-[#E1E1E1]">
                <p className="text-xl font-[600] text-[#0D0040]">Password Management</p>
                <p className="text-[14px] font-[600] text-[#171100] underline cursor-pointer">Change Password</p>
            </div>
            <div className="p-12 border-l-[1px] border-l-[#E1E1E1] flex justify-between" style={{ marginLeft: '-1px' }}>
            </div>
        </>
    );
};

export default Profile;

