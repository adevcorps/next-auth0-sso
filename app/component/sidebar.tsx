'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface SideBarProps{
    toggleVisibility: () => void;
    isOpen: boolean;
}
export default function Sidebar ({toggleVisibility, isOpen} : SideBarProps)  {
    const pathname = usePathname();// State to toggle sidebar on mobile
    const handlerToggle = () => {
        toggleVisibility();
    }
    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <div className={`bg-white text-[#0D0040] w-[335px] h-screen pt-[74px] pl-[75px] flex-col transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:relative z-50`}>
                <nav className="flex-grow">
                    <ul>
                        <li className='mb-4' onClick={handlerToggle}>
                            <Link href="/dashboard/profile" className={`block f-open font-[600] text-[16px] hover:text-[#0D0040] transition-colors duration-50 leading-[25.2px] ${pathname === '/dashboard/profile' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                                Account Profile
                            </Link>
                        </li>
                        <li className='mb-4' onClick={handlerToggle}>
                            <Link href="/dashboard/billing" className={`block f-open font-[600] text-[16px] hover:text-[#0D0040] transition-colors duration-50 leading-[25.2px] ${pathname === '/dashboard/billing' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                                Billing & Subscription
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/dashboard/vse-home" className={`block f-open font-[600] text-[16px] hover:text-[#0D0040] transition-colors duration-50 leading-[25.2px] ${pathname === '/dashboard/vse-home' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                                VSE Home
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/dashboard/vse-get-start" className={`block f-open font-[600] text-[16px] hover:text-[#0D0040] transition-colors duration-50 ${pathname === '/dashboard/vse-get-start' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                                VSE Getting Started
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/dashboard/vse-tutorial" className={`block f-open font-[600] text-[16px] hover:text-[#0D0040] transition-colors duration-50 ${pathname === '/dashboard/vse-tutorial' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                                VSE Tutorials
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/dashboard/vse-troubleshoot" className={`block f-open font-[600] text-[16px] hover:text-[#0D0040] transition-colors duration-50 ${pathname === '/dashboard/vse-troubleshoot' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                                VSE Troubleshooting
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/dashboard/vse-faq" className={`block f-open font-[600] text-[16px] hover:text-[#0D0040] transition-colors duration-50 ${pathname === '/dashboard/vse-faq' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                                VSE FAQs
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/dashboard/vse-support" className={`block f-open font-[600] text-[16px] hover:text-[#0D0040] transition-colors duration-50 ${pathname === '/dashboard/vse-support' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                                VSE Support
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}