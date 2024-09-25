'use client'
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Login from "./login/page";
import Welcome from './login/welcome/page';
import { useEffect } from 'react';

export default function Home() {
  const { user, isLoading } = useUser();
  useEffect(() => {
    const fetchAWSCredentials = async () => {
      if (user) {
        // Call the API to get the Auth0 id token
        const idTokenResponse = await fetch('/api/auth/idToken');
        const { idToken } = await idTokenResponse.json();
        if(idTokenResponse.ok){
          const awsCredentialsResponse = await fetch('/api/get-aws-credentials', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({idToken}), // Pass the access token
          });
  
          if (!awsCredentialsResponse.ok) {
            const errorMessage = await awsCredentialsResponse.text();
            console.error('Error fetching AWS credentials:', errorMessage);
            return;
          }
  
          const awsCredentials = await awsCredentialsResponse.json();
          console.log('AWS Credentials:', awsCredentials);
        }
      }
    };

    if (!isLoading && user) {
      fetchAWSCredentials();
    }


  }, [user, isLoading])

  if (isLoading) return (<div>Loading...</div>);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Welcome />
      )}
    </>
  );
}
