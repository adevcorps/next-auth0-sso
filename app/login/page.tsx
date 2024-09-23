import React from "react";
import logo from '../../assets/img/logo.png';
import Image from "next/image";
import Link from "next/link";
import line from '../../assets/img/line.png';
import google from '../../assets/img/google.png';

const Login = ({ }) => {
    return (
        <div className="h-[100vh] bg-gradient-to-r from-[#14005F80] to-[#0042A880] grid place-items-center">
            <div className="h-[85%] xl:w-4/12 lg:w-4/12 md:w-3/6 sm:w-9/12 rounded-lg bg-authformbackground p-2">
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
                        <h1 className="text-[40px] leading-10 font-medium">Client Login</h1>
                        <div className="relative z-0 w-full mt-10 mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="font-bold peer-focus:font-medium absolute text-xs text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                        </div>
                        <div className="relative z-0 w-full mt-5 mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="font-bold peer-focus:font-medium absolute text-xs text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  left-px rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password <span className="text-[#FFD601] peer-focus:text-blue-600">*</span></label>
                        </div>
                        <div className="relative z-0 w-full mt-5 mb-5 group">
                            <Link href={`/`} className="text-[#FFD601] font-bold text-xs absolute left-0">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative z-0 w-full mt-16 mb-5 group">
                            <button className="w-full p-2.5 text-lg font-bold text-black rounded-lg bg-[#FFD601]">Login</button>
                        </div>
                    </div>

                    <p className="text-xs font-bold leading-4 mb-5">By signing, I agree to VSE's <span className="text-[#FFD601] cursor-pointer">Privacy Statement</span> and <span className="text-[#FFD601] cursor-pointer">Terms of Service</span></p>
                    <p className="text-xs font-bold leading-4 mb-5">Don't have an account. <span className="text-[#FFD601] cursor-pointer">Sign up</span></p>
                    <div className="px-12 flex justify-between align-middle">
                        <div className="pt-1.5" style={{ height: `1px` }}>
                            <Image
                                src={line.src}
                                alt={"Line image"}
                                width={149}
                                height={0}
                            />
                        </div>
                        <p className="text-xs font-bold leading-4 mb-5">OR</p>
                        <div className="pt-1.5" style={{ height: `1px` }}>
                            <Image
                                src={line.src}
                                alt={"Line image"}
                                width={149}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="px-12 pt-4">
                        <button className="flex relative w-full p-2.5 text-lg font-bold text-black rounded-lg bg-white justify-center">
                            <div className="absolute left-2">
                                <Image
                                    src={google.src}
                                    width={32}
                                    height={32}
                                    alt="Google Icon"
                                />
                            </div>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;