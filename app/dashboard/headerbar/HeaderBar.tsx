'use client'
import React from 'react';
import Image from 'next/image';
import imgLogo from '../../../assets/img/vse-logo.svg'
import { FiMenu, FiX } from 'react-icons/fi'; // For mobile menu toggle icons


// background: linear-gradient(270deg, #FF9B04 0%, #FFD601 13.5%, #BBB42D 23%, #6F8E5F 33%, #0057A8 47%, #3806FA 63%, #0D0040 90.15%);

interface HeaderBarProps {
    toggleVisibility: () => void;
    isOpen: boolean;
}
export default function HeaderBar({ toggleVisibility, isOpen }: HeaderBarProps) {
    const handleToggle = () => {
        toggleVisibility();
    }
    return (
        <div className={`w-full p-[5px] lg:pl-[65px] h-[65px] md:h-[113px] flex items-center justify-between z-40 fixed md:relative z-1000 simple-linear`}>
            <Image
                src={imgLogo.src}
                width="122"
                height="73"
                alt={`header`}
                style={{ zIndex: `1000`, cursor: `pointer`, width: "122px", height: "73px" }}
            />
            <div className="lg:hidden p-4">
                <button onClick={handleToggle}>
                    {isOpen ? <FiX className='text-white' size={24} /> : <FiMenu className='text-white' size={24} />} {/* Toggle between menu and close icons */}
                </button>
            </div>
            {/* Overlay for mobile sidebar when open */}
            {isOpen && <div onClick={handleToggle} className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"></div>}
        </div>
    )
} 