import React, { useState } from "react";
import { GetServerSideProps } from 'next';
import { Session, getSession, WithPageAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";

const Profile = ({  }) => {
    return (
        <div>
            <h1>Welcome dashboard</h1>
        </div>
    );
};

export default Profile;

