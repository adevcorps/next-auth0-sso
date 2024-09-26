'use client'; // Needed for client-side components in Next.js App Router (v13+)
import React from "react";
// import { useSearchParams } from 'next/navigation';

const Profile = () => {
    // const searchParams = useSearchParams();
    // const queryData = searchParams.get('queryData');
    // const contactData = queryData ? JSON.parse(decodeURIComponent(queryData)) : null;

    // console.log(contactData)
    return (
        <>
            <div className="p-[68px] border-l-[1px] border-l-[#E1E1E1] border-b border-b-[#E1E1E1]">
                <h1 className="text-[40px] font-bold leading-[52.8px] text-[#0D0040]">Hi David</h1>
                {/* <h1 className="text-4xl font-bold text-[#0D0040]">Hi {contactData.name ? contactData.name : contactData.email}</h1> */}
                <div className="flex items-center mt-4">
                    <p className="text-[16px] font-[600] text-[#0D0040] leading-[25.2px]">Subscription status &nbsp; &nbsp;
                        <span className="text-[#00A651] leading-[25.2px] text-[16px] font-[600]">Active</span>&nbsp;
                    </p>
                    <div className="w-2 h-2 bg-[#00A651] rounded-full"></div>
                </div>
            </div>

            <div className="py-[68px] pl-[68px] pr-[184px] border-l-[1px] lg:pr-[68px] md:pr-[68px] sm:pr-[68px] xs:pr-[68px] xxs:pr-[68px] border-l-[#E1E1E1] border-b border-b-[#E1E1E1]">
                <p className="text-xl font-semibold text-[#0D0040]">Account Profile</p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-[27px]">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 font-lato">First Name</label>
                        <div className="mt-[11px]">
                            <input type="text" id="first-name" autoComplete="given-name"
                                className="block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 font-lato">Last Name</label>
                        <div className="mt-[11px]">
                            <input type="text" id="last-name" autoComplete="given-name"
                                className="block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-[27px]">
                    <div className="sm:col-span-3">
                        <label htmlFor="company-name" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900 font-lato">Company Name</label>
                        <div className="mt-[11px]">
                            <input type="text" id="company-name" autoComplete="given-name"
                                className="block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="job-title" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900">Job Title</label>
                        <div className="mt-[11px]">
                            <input type="text" id="job-title" autoComplete="given-name"
                                className="block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6 mb-[36px]">
                    <div className="sm:col-span-3">
                        <label htmlFor="email-address" className="block text-[16px] font-[600] leading-[19.2px] text-gray-900">Email Address</label>
                        <div className="mt-[11px]">
                            <input type="text" id="email-address" autoComplete="given-name"
                                className="block w-full h-[64px] outline-0 p-[23px] rounded-md border-0 py-1.5 text-[#898988e8] shadow-sm ring-1 bg-[#E1E1E0CC] ring-inset text-[16px] font-[600] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-6">
                        <button
                            className="w-[219px] h-[61px] p-2 rounded-lg bg-[#0D0040] active:bg-[#0D0040] hover:bg-[#0d0040e7] text-white">
                            Save
                        </button>
                </div>
            </div>

            <div className="border-b flex justify-between border-l-[1px] border-l-[#E1E1E1] border-b-[#E1E1E1] py-[68px] pl-[68px] pr-[184px] lg:pr-[68px] md:pr-[68px] sm:pr-[68px] xs:pr-[68px] xxs:pr-[68px]">
                <p className="text-xl font-semibold text-[#0D0040]">Password Management</p>
                <p className="text-sm font-semibold text-[#171100] underline cursor-pointer">Change Password</p>
            </div>

            <div className="p-4 md:p-12 border-l border-l-[#E1E1E1] flex justify-between">
            </div>
        </>
    );
};

export default Profile;