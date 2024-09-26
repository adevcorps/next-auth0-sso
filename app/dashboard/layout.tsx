import React, { ReactNode } from 'react';
import Sidebar from '../component/sidebar'
import HeaderBar from './headerbar/page';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="text-black font-sans">
      <HeaderBar />
      {/* Sidebar */}
      <div className='flex'>
        <Sidebar />
        {/* Main content */}
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}