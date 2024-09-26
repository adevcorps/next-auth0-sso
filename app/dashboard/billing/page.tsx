'use client'
import React from 'react';
import Subscription from '@/app/component/subscription';

export default function Billing() {
    return (
        <div>
            <div className="p-12 border-b-[1px] border-b-[#E1E1E1]">
                <p className="text-2xl font-bold text-[#0D0040]">Subscription</p>
            </div>
            <div className="p-12 border-b-[1px] flex align-middle border-b-[#E1E1E1]">
                <div style={{ width: '64px', height: '64px', background: '#FFD601', borderRadius: '50%', marginRight: '20px' }}></div>
                <div className='flex flex-col align-middle py-2 w-full'>
                    <p className="text-[20] font-lato font-[700] text-[#171100]">Subscription Name</p>
                    <div className='flex justify-between w-full'>
                        <p className="text-[16] font-lato text-[#898988]">Gorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-[16] font-lato font-[600] text-[#171100]">renews 09/23/24</p>
                    </div>
                </div>
            </div>
            <div className="p-10 border-b-[1px] flex justify-between border-b-[#E1E1E1]">
                <p className="text-xl font-[600] text-[#0D0040]">Billing</p>
                <p className="text-[14px] font-[600] text-[#171100] underline cursor-pointer">View all</p>
            </div>
            <div className="p-10 border-b-[1px] flex justify-between border-b-[#E1E1E1]">
                <p className="text-xl font-[600] text-[#0D0040]">Subscription Management</p>
                <div className="w-2/12 flex justify-between">
                    <p className="text-[14px] font-[600] text-[#171100] underline cursor-pointer">Renew</p>
                    <p className="text-[14px] font-[600] text-[#171100] underline cursor-pointer">Cancel</p>
                </div>
            </div>
            <div className="p-10 border-b-[1px] flex justify-between border-b-[#E1E1E1]">
                <p className="text-xl font-[600] text-[#0D0040]">Subscription History</p>
                <div className="w-2/12 flex justify-between">
                </div>
            </div>
            <div className='w-full'>
                <Subscription />
                <Subscription />
                <Subscription />
                <Subscription />
                <Subscription />
            </div>
            <div className="p-10 border-b-[1px] flex justify-between border-b-[#E1E1E1]">
            </div>
        </div>
    );
}