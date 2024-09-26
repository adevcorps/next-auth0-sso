'use client'
import React from 'react';
import Image from 'next/image';
import imgLogo from '../../../assets/img/logo.png'

// background: linear-gradient(270deg, #FF9B04 0%, #FFD601 13.5%, #BBB42D 23%, #6F8E5F 33%, #0057A8 47%, #3806FA 63%, #0D0040 90.15%);

const HeaderBar = ({ }) => {
    return (
        <div className="w-full h-[72px] bg-[url('../assets/img/Background.png')] px-10">
            <Image
                src={imgLogo.src}
                width="100"
                height="75"
                alt={`header`}
                style={{zIndex:`1000`}}
            />

        </div>
    )
}

export default HeaderBar