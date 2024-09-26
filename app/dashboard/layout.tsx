'use client'
import React, { ReactNode, useState } from 'react';
import Sidebar from '../component/sidebar'
import HeaderBar from './headerbar/HeaderBar';
import { bool } from 'aws-sdk/clients/signer';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<bool>(false); 
  const toggleVisibility = () => {
    setIsOpen( !isOpen);
  }
  return (
    <div className="text-black font-sans">
      <HeaderBar toggleVisibility={toggleVisibility} isOpen={isOpen}/>
      {/* Sidebar */}
      <div className='flex'>
        <Sidebar toggleVisibility={toggleVisibility} isOpen={isOpen}/>
        {/* Main content */}
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}