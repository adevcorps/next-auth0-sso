'use client'
import React, {FunctionComponent} from 'react';
import Image from 'next/image';
import imgLogo from '../../../assets/img/logo.png'
import { FiMenu, FiX } from 'react-icons/fi'; // For mobile menu toggle icons


// background: linear-gradient(270deg, #FF9B04 0%, #FFD601 13.5%, #BBB42D 23%, #6F8E5F 33%, #0057A8 47%, #3806FA 63%, #0D0040 90.15%);

interface HeaderBarProps {
    toggleVisibility: () => void,
    isOpen : boolean
}
const HeaderBar: FunctionComponent<HeaderBarProps> = ({toggleVisibility, isOpen}) => {
    const hanlder = () => {
        toggleVisibility();
    }
    return (
        <div className="w-full h-[113px] relative flex items-center justify-between bg-[url('../assets/img/Background.png')] lg:pl-[71px] md:pl-[20px] sm:pl-[20px] xs:pl-[20px]">
            <Image
                src={imgLogo.src}
                width="122"
                height="73"
                alt={`header`}
                style={{zIndex:`1000`, cursor: `pointer`, width: "122px", height: "73px"}}
            />
            <div className="lg:hidden p-4">
                <button onClick={hanlder}>
                    {isOpen ? <FiX className='text-white' size={24} /> : <FiMenu className='text-white' size={24} />} {/* Toggle between menu and close icons */}
                </button>
            </div>
            {/* Overlay for mobile sidebar when open */}
            {isOpen && <div onClick={hanlder} className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"></div>}
        </div>
    )
}

export default HeaderBar