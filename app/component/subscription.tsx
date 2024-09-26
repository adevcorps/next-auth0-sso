'use client'
import React from 'react';

const Subscription = ({}) => {
    return(
        <div className='flex p-2 w-full border-l-[1px] justify-between border-l-[#E1E1E1] border-b-[1px] border-b-[#E1E1E1] md:p-6 md:pl-[68px]'>
            <div className='w-3/12 text-center md:text-left'>
                <p className='text-[12px] sm:text-[16px] font-[600] leading-[19.2px] mb-0 md:mb-2 text-[#0D0040]'>Order ID</p>
                <p className='text-[12px] sm:text-[16px] font-lato font-[600] leading-[25.2px] text-[#949494]'>3012043</p>
            </div>
            <div className='w-3/12 text-center md:text-left'>
                <p className='text-[12px] sm:text-base mb-0 md:mb-2 font-[600] text-[#0D0040]'>Date</p>
                <p className='text-[12px] sm:text-[16px] font-lato font-[600] leading-[25.2px] text-[#949494]'>Jun 9, 2024</p>
            </div>
            <div className='w-3/12 text-center md:text-left relative'>
                <p className='text-[12px] sm:text-[16px] font-lato font-[600] leading-[19.2px] mb-2 text-[#0D0040]'></p>
                <p className='text-[12px] sm:text-[16px] font-lato font-[600] leading-[25.2px] text-[#949494] absolute bottom-0'>Subscription Name</p>
            </div>
            <div className='w-3/12 text-center md:text-left'>
                <p className='text-[12px] sm:text-[16px] font-[600] leading-[19.2px] mb-0 md:mb-2 text-[#0D0040]'>Total</p>
                <p className='text-[12px] sm:text-[16px] font-lato font-[600] leading-[25.2px] text-[#949494]'>$58.61</p>
            </div>
        </div>
    )
}

export default Subscription;