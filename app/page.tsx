'use client'
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Login from "./login/page";
import Welcome from './login/welcome/page';
import { useEffect } from 'react';

export default function Home() {
  const { user, isLoading } = useUser();
  useEffect(() => {
    const fetchAWSCredentials = async () => {
      if (user) {
        // Call the API to get the Auth0 access token
        const tokenResponse = await fetch('/api/get-auth0-token');
        const { accessToken } = await tokenResponse.json();

        // Now use the access token to get AWS credentials
        const awsCredentialsResponse = await fetch('/api/get-aws-credentials', {
          method: 'POST',
          headers: {
            'Content-Type': 'x-www-form-urlencoded',
          },
          body: JSON.stringify({ accessToken }), // Pass the access token
        });

        if (!awsCredentialsResponse.ok) {
          const errorMessage = await awsCredentialsResponse.text();
          console.error('Error fetching AWS credentials:', errorMessage);
          return;
        }

        const awsCredentials = await awsCredentialsResponse.json();
        console.log('AWS Credentials:', awsCredentials);

        // You can now use the awsCredentials to access AWS resources
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
