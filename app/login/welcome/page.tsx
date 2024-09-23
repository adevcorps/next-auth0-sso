import React from "react";
import logo from '../../../assets/img/logo.png';
import Image from "next/image";

const Welcome = ({ }) => {
    return (
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
                        <h1 className="text-[40px] leading-10 font-medium">Welcome</h1>
                        <div className="relative z-0 w-full mt-16 mb-5 group">
                            <button className="w-full p-2.5 text-lg font-bold text-black rounded-lg bg-[#FFD601]">Go to VSE Dashboard</button>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <button className="w-full p-2.5 text-lg font-bold text-black rounded-lg bg-[#FFD601]">Go to My Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;