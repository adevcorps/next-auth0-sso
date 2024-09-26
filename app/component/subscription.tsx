'use client'
import React from 'react';

const Subscription = ({}) => {
    return(
        <div className='flex px-20 py-6 w-full border-b-[1px] border-b-[#E1E1E1]'>
            <div className='w-3/12'>
                <p className='text-base mb-2 font-[600] text-[#0D0040]'>Order ID</p>
                <p className='text-base text-[#949494]'>3012043</p>
            </div>
            <div className='w-3/12'>
                <p className='text-base mb-2 font-[600] text-[#0D0040]'>Date</p>
                <p className='text-base text-[#949494]'>Jun 9, 2024</p>
            </div>
            <div className='w-3/12 relative'>
                <p className='text-base mb-2 font-[600] text-[#0D0040]'></p>
                <p className='text-base  text-[#949494] absolute bottom-0'>Subscription Name</p>
            </div>
            <div className='w-3/12'>
                <p className='text-base mb-2 font-[600] text-[#0D0040]'>Total</p>
                <p className='text-base  text-[#949494]'>$58.61</p>
            </div>
        </div>
    )
}

export default Subscription;