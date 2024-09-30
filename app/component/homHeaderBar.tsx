'use client'
import React from 'react';
import Image from 'next/image';
import imgLogo from '../../assets/img/logo.png'

export default function HomeHeader() {
    return (
        <div className={`w-full h-[65px] md:h-[113px] flex items-center justify-between  lg:pl-[71px] md:pl-[20px] sm:pl-[20px] xs:pl-[20px] md:relative z-1000 simple-linear`}>
            <Image
                src={imgLogo.src}
                width="122"
                height="73"
                alt={`header`}
                style={{ zIndex: `1000`, cursor: `pointer`, width: "122px", height: "73px" }}
            />
        </div>
    )
} 