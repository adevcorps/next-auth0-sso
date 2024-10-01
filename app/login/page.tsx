import React from "react";
import logo from '../../assets/img/logo.png';
import Image from "next/image";
import Link from "next/link";
import line from '../../assets/img/line.png';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function Login ({ }) {
    return (
        <div className="f-open">
            <div className="h-[100vh] bg-gradient-to-l from-[#14005F80] to-[#0042A880] grid place-items-center">
                <div className=" w-10/12 sm:w-[510px] box-content rounded-xl bg-authformbackground p-5 sm:p-[30px] h-max-[854px] lg:pb-[88px]">
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
                            <h1 className="text-[30px] sm:text-[40px] leading-[46.88px] font-[500] f-roboto-bold text-white">Client Login</h1>
                            {/* <h1 className="text-[40px] leading-10 font-medium">Login to VSE</h1> */}
                            <div className="relative z-0 w-full mt-10 lg:mt-[86.5px] group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-1 sm:py-[8px] px-0 w-full text-[16px]  bg-transparent border-0 border-b-2 border-gray-300  text-white dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="text-[12px] leading-[16.34px] f-open font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="relative z-0 w-full mt-3 lg:mt-[39.23px] mb-5 group">
                                <input type="password" name="floating_password" id="floating_password" className="block py-1 text-white sm:py-[8px] px-0 w-full text-[16px] bg-transparent border-0 border-b-2 border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_password" className="text-[12px] leading-[16.34px] f-open font-[700] peer-focus:font-medium absolute text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                            </div>
                            <div className="z-0 w-full flex justify-start mt-[10px] sm:mt-[30px]">
                                <Link href={`/`} className="text-[#FFD601] leading-[16.34px] f-open font-[700] text-[12px] underline left-0">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative z-0 w-full mt-[10px] sm:mt-[30px]">
                                <Link href={`/login/welcome`}>
                                    <button className="w-full f-lato h-[40px] sm:h-[61.5px] p-1 sm:p-[19px] text-[18px] font-lato font-bold text-black rounded-lg bg-[#FFD601]">Login</button>
                                </Link>
                            </div>
                        </div>
                        <p className="text-[13px] text-white f-open font-[700] leading-[25px] sm:leading-4 mt-[24px]">By signing, I agree to VSE <span className="text-[#FFD601] cursor-pointer">Privacy Statement</span> and <span className="text-[#FFD601] cursor-pointer">Terms of Service</span></p>
                        <p className="text-[13px] text-white f-open font-[700] leading-4 mt-[10px] sm:mt-[20px]">Do not have an account. &nbsp;
                            <Link href={`/register`}><span className="text-[#FFD601] cursor-pointer">Sign up</span></Link></p>
                        <div className="px-0 sm:px-12 mt-[15px] sm:mt-[30px] flex justify-between align-middle">
                            <div className="pt-1.5" style={{ height: `1px`, paddingRight: `10px` }}>
                                <Image
                                    src={line.src}
                                    alt={"Line image"}
                                    width={149}
                                    height={0}
                                />
                            </div>
                            <p className="text-xs font-bold leading-4 mb-5 text-white">OR</p>
                            <div className="pt-1.5" style={{ height: `1px`, paddingLeft: `10px` }}>
                                <Image
                                    src={line.src}
                                    alt={"Line image"}
                                    width={149}
                                    height={0}
                                />
                            </div>
                        </div>
                        <div className="px-0 sm:px-12 mt-[0px] sm:mt-[18px]">
                            <Link href={`/api/auth/login`}>
                                <button className="f-lato w-full h-[40px] sm:h-[61.5px] p-1 sm:p-[19px] text-[18px] font-lato font-bold text-black rounded-lg bg-white">
                                    Login with SSO
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withPageAuthRequired(Login);
