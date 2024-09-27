import React from "react";
import logo from '../../assets/img/logo.png';
import Image from "next/image";
import Link from "next/link";
import v1 from '../../assets/img/Vector1.png'
import v2 from '../../assets/img/Vector2.png'
import v3 from '../../assets/img/Vector3.png'

const vArray1 = [v1, v2, v1, v3, v2, v3, v2, v3];
const vArray2 = [null, v1, null, v1, v2, null, v2, v2, null, v3];

const RegisterPage = () => {
    return (
        <div className="relative">
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
            <div className="absolute hidden xl:block right-[96.09px] top-[384px] box-border w-[219.91px] ">
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
                            <h1 className="text-[30px] sm:text-[40px] leading-10 font-[500] font-roboto">Client Login</h1>
                            {/* <h1 className="text-[40px] leading-10 font-medium">Login to VSE</h1> */}
                            <div className="relative z-0 w-full mt-3 md:mt-[86.5px] group">
                                <input type="text" name="first_name" id="first_name" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="first_name" className="text-[12px] leading-[16.34px] font-sans font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="relative z-0 w-full mt-3 md:mt-[39.23px] group">
                                <input type="text" name="last_name" id="last_name" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                <label htmlFor="last_name" className="text-[12px] leading-[16.34px] font-sans font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="relative z-0 w-full mt-3 md:mt-[39.23px] group">
                                <input type="password" name="floating_password" id="floating_password" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_password" className="text-[12px] leading-[16.34px] font-sans font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="relative z-0 w-full mt-3 md:mt-[39.23px] group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                <label htmlFor="floating_email" className="text-[12px] leading-[16.34px] font-sans font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="relative z-0 w-full mt-3 md:mt-[39.23px] group">
                                <input type="password" name="password" id="password" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                <label htmlFor="password" className="text-[12px] leading-[16.34px] font-sans font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="relative z-0 w-full mt-3 md:mt-[39.23px] group">
                                <input type="password" name="confirm_password" id="confirm_password" className="block py-1 sm:py-[8px] px-0 w-full text-[16px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                <label htmlFor="confirm_password" className="text-[12px] leading-[16.34px] font-sans font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="flex w-full mt-3 md:mt-[39.23px]">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 bg-transparent border-gray-300 rounded" />
                                <p className="text-[13px] font-sans font-[700] leading-[25px] sm:leading-[20px] tracking-[1px]">Click box to acknowledge <span className="text-[#FFD601] cursor-pointer">Privacy Statement</span> and <span className="text-[#FFD601] cursor-pointer">Terms of Service</span></p>
                            </div>

                            <div className="relative z-0 w-full mt-[10px] sm:mt-[32px]">
                                <Link href={`/dashboard/profile`}>
                                    <button className="w-full h-[40px] sm:h-[61.5px] p-1 sm:p-[19px] text-[18px] font-lato font-bold text-black rounded-lg bg-[#FFD601] tracking-wide">Create Account</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;