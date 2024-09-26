'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="bg-white text-[#0D0040] w-64 h-min-screen flex py-4 px-6 flex-col border-r-[1px] border-r-[#E1E1E1]">
          <div className="px-6 py-4 text-xl font-bold"></div>
    
          <nav className="flex-grow">
            <ul>
              <li>
                <Link href="/dashboard/profile" className={`block px-4 py-2  font-sans font-[600] text-base hover:text-[#0D0040] transition-colors duration-50  ${pathname === '/dashboard/profile' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                  Account Profile
                </Link>
              </li>
              <li>
                <Link href="/dashboard/billing" className={`block px-4 py-2  font-sans font-[600] text-base hover:text-[#0D0040] transition-colors duration-50  ${pathname === '/dashboard/billing' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                  Billing & Subscription
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vse-home" className={`block px-4 py-2  font-sans font-[600] text-base hover:text-[#0D0040] transition-colors duration-50  ${pathname === '/dashboard/vse-home' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                  VSE Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vse-get-start" className={`block px-4 py-2  font-sans font-[600] text-base hover:text-[#0D0040] transition-colors duration-50  ${pathname === '/dashboard/vse-get-start' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                  VSE Getting Started
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vse-tutorial" className={`block px-4 py-2  font-sans font-[600] text-base hover:text-[#0D0040] transition-colors duration-50  ${pathname === '/dashboard/vse-tutorial' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                  VSE Tutorials
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vse-troubleshoot" className={`block px-4 py-2  font-sans font-[600] text-base hover:text-[#0D0040] transition-colors duration-50  ${pathname === '/dashboard/vse-troubleshoot' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                  VSE Troubleshooting
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vse-faq" className={`block px-4 py-2  font-sans font-[600] text-base hover:text-[#0D0040] transition-colors duration-50  ${pathname === '/dashboard/vse-faq' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                  VSE FAQs
                </Link>
              </li>
              <li>
                <Link href="/dashboard/vse-support" className={`block px-4 py-2  font-sans font-[600] text-base hover:text-[#0D0040] transition-colors duration-50  ${pathname === '/dashboard/vse-support' ? 'text-[#0D0040]' : 'text-[#949494]'}`}>
                  VSE Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
}

export default Sidebar