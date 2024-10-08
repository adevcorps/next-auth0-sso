'use client'
import React from 'react';

interface SubScriptionProps {
    orderId: string;
    date: string,
    name: string,
    amount: number,
}
const Subscription = ({orderId, date, name, amount} : SubScriptionProps) => {
    return(
        <div className='flex p-2 px-6 w-full border-l-[1px] justify-between border-l-[#E1E1E1] border-b-[1px] border-b-[#E1E1E1] md:p-6 md:pl-[68px]'>
            <div className='w-3/12 text-left md:text-left'>
                <p className='text-[12px] sm:text-[16px] f-lato font-[600] leading-[18px] md:leading-[25px]  mb-0 md:mb-2 text-[#0D0040]'>Order ID</p>
                <p className='text-[12px] sm:text-[16px] f-open truncate font-[600] leading-[20px] lg:leading-[25px] text-[#949494]'>{orderId}</p>
            </div>
            <div className='w-3/12 text-center md:text-left'>
                <p className='text-[12px] sm:text-base f-lato mb-0 md:mb-2 font-[600] text-[#0D0040]'>Date</p>
                <p className='text-[12px] sm:text-[16px] f-open font-[600]  leading-[20px] lg:leading-[25px] text-[#949494]'>{date}</p>
            </div>
            <div className='w-3/12 text-center md:text-left relative'>
                <p className='text-[12px] sm:text-[16px] f-lato font-[600] leading-[18px] md:leading-[25px] mb-2 text-[#0D0040]'></p>
                <p className='text-[12px] sm:text-[16px] f-open font-[600]  leading-[20px] lg:leading-[25px] text-[#949494] absolute bottom-0'>{name != null ? name : 'Nick name is null'}</p>
            </div>
            <div className='w-3/12 text-right md:text-center'>
                <p className='text-[12px] sm:text-[16px] f-lato font-[600] leading-[18px] md:leading-[25px] mb-0 md:mb-2 text-[#0D0040]'>Total</p>
                <p className='text-[12px] sm:text-[16px] f-open font-[600]  leading-[20px] lg:leading-[25px] text-[#949494]'>${amount}</p>
            </div>
        </div>
    )
}

export default Subscription;