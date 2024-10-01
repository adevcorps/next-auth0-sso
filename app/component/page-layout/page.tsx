'use client';

import React from 'react';
// import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function PageLayout(){

    return(
        <>
            <h1>This is page layout.</h1>
        </>
    )
}

export default withPageAuthRequired(PageLayout, {
    returnTo: '/'
});
