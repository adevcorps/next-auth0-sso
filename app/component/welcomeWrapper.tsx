'use client'
import React, { useEffect } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from "next/navigation";
import { LoadingSpin } from './loading';

function WelcomeWrapper() {
    const { user, isLoading } = useUser();
    const router = useRouter();
    useEffect(() => {
        if(!isLoading) {
            const getContactByEmail = async (email : string) => {
                if (email !== "") {
                    try {
                        const res = await fetch('/api/hubspot/search', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({email}),
                        });
                        if (res.ok) {
                            const data = await res.json();
        
                            if (data.total == 0) {
                                router.push('/register');
                            }
                            else {
                                console.log(data)
                                const contactData = {
                                    contactId: data.results[0].id,
                                    firstname: data.results[0].properties.firstname,
                                    lastname: data.results[0].properties.lastname,
                                    jobtitle: data.results[0].properties.jobtitle,
                                    company: data.results[0].properties.company,
                                    email: email
                                };
                                localStorage.setItem('contactData', JSON.stringify(contactData));
                                router.push('/welcome')                            
                            }
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
    
            if (user) {
                getContactByEmail(user.email!);
            }
        }
    }, [user, isLoading])
    return (
        <>
            <LoadingSpin />
        </>
    )
}

export default withPageAuthRequired(WelcomeWrapper, {
    returnTo: '/'
})
