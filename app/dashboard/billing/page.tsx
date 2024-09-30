'use client'
import React, { useState, useEffect } from 'react';
import Subscription from '@/app/component/subscription';
import { LoadingSpin } from '@/app/component/loading';
// import { WebSocket } from 'ws';

interface Subscription {
    id: string;
    status: string;
    items: {
        data: {
            plan: {
                nickname: string;
            };
        }[];
    };
    created: number;
}


export default function Billing() {

    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const response = await fetch('/api/stripe');
                const data = await response.json();
                setSubscriptions(data.subscriptions.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching subscriptions:', error);
                setLoading(false);
            }
        };

        fetchSubscriptions();
        // Init websocket connecting

    }, [])
    return (
        <>
            {
                loading ? <LoadingSpin /> : ''
            }
            <div className='mt-[113px] md:mt-0'>
                {/* Subscription Section */}
                <div className="p-6 md:p-[68px] border-l border-b border-[#E1E1E1] border-r">
                    <div className='max-w-[1000px]'>
                        <p className="text-[24px] font-[600] leading-[25.2px] text-[#0D0040]">Subscription</p>
                    </div>
                </div>

                {/* Subscription Details Section */}
                <div className="py-6 md:py-[68px] pl-6 md:pl-[68px] pr-6 md:pr-[145px] border-l border-b items-center border-[#E1E1E1] ">
                    <div className='max-w-[1000px] flex flex-col lg:flex-row flex-sm:flex-row'>
                        <div className='w-full flex justify-center mb-5 md:w-1/12 md:mb-0'>
                            <div style={{ width: '64px', height: '64px', background: '#FFD601', borderRadius: '50%' }}></div>
                        </div>
                        <div className='w-full md:w-11/12'>
                            <div className="flex flex-col justify-center w-full pl-0 md:pl-[15px]">
                                <p className="text-[20px] leading-[24px] mb-[10px] font-lato font-[600] text-[#171100]">Subscription Name</p>
                                <div className="flex justify-between w-full">
                                    <p className="text-[16px] font-[600] leading-[19.2px] font-lato text-[#898988]">Gorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="text-[16px] font-[600] leading-[19.2px] font-lato text-[#171100]">renews 09/23/24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Billing Section */}
                <div className="py-6 md:py-[68px] pl-6 md:pl-[68px] pr-6 md:pr-[145px] border-l border-b flex justify-between border-[#E1E1E1]">
                    <div className='w-full lg:max-w-[1000px] flex justify-between'>
                        <p className="text-[20px] md:text-[24px] font-[600] leading-[25.2px] text-[#0D0040]">Billing</p>
                        <p className="text-[14px] font-[600] text-[#171100] underline cursor-pointer">View all</p>
                    </div>
                </div>

                {/* Subscription Management Section */}
                <div className="py-6 md:py-[68px] pl-6 md:pl-[68px] pr-6 md:pr-[145px] border-l border-b flex justify-between border-[#E1E1E1]">
                    <div className='w-full lg:max-w-[1000px] flex justify-between'>
                        <p className="text-[20px] md:text-[24px] font-[600] text-[#0D0040]">Subscription Management</p>
                        <div className="w-4/12 md:w-2/12 flex justify-end pt-[12px] md:pt-0">
                            <p className="mr-[5px] md:mr-[30px] text-[14px] font-[600] text-[#171100] underline cursor-pointer">Renew</p>
                            <p className="text-[14px] font-[600] text-[#171100] underline cursor-pointer">Cancel</p>
                        </div>
                    </div>
                </div>

                {/* Subscription History Section */}
                <div className="py-6 md:py-[68px] pl-6 md:pl-[68px] pr-6 md:pr-[145px] border-l border-b flex justify-between border-[#E1E1E1]">
                    <div className='w-full lg:max-w-[1000px] flex justify-between'>
                        <p className="text-[20px] md:text-[24px] font-[600] text-[#0D0040]">Subscription History</p>
                        <div className="w-4/12 md:w-2/12 flex justify-between"></div>
                    </div>
                </div>

                {/* Subscription List Section */}
                <div className="w-full lg:max-w-[1070px]">
                    {
                        subscriptions.length > 0 ?
                            subscriptions.map((subs: any, key) =>
                                <Subscription key={key} orderId={subs?.id} name={subs?.items.data[0].plan.nickname} amount={subs?.items.data[0].plan.amount} date={(new Date(subs.created * 1000)).toLocaleDateString("en-US")} />
                            )
                            : ''
                    }
                    {/* <Subscription />
                <Subscription />
                <Subscription />
                <Subscription />
                <Subscription /> */}
                </div>

                {/* Footer Section */}
                <div className="p-4 md:p-10 flex justify-between border-l border-b border-[#E1E1E1]"></div>
            </div>
        </>
    );
}