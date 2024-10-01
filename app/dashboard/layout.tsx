'use client'
import React, { ReactNode, useState } from 'react';
import Sidebar from '../component/sidebar'
import HeaderBar from './headerbar/HeaderBar';
import { bool } from 'aws-sdk/clients/signer';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function DashboardLayout ({ children }: { children: ReactNode }) {
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

export default withPageAuthRequired(DashboardLayout)