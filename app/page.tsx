'use client'
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect} from 'react';
import WelcomeWrapper from './component/welcomeWrapper';
import {withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function Home() {
  const { user, isLoading } = useUser();
  useEffect(() => {
    if (!isLoading) {
      if (user) {
        const fetchAWSCredentials = async () => {
          const idTokenResponse = await fetch('/api/auth/idToken');
          const { idToken } = await idTokenResponse.json();
          if (idTokenResponse.ok) {
            const awsCredentialsResponse = await fetch('/api/get-aws-credentials', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ idToken }), // Pass the access token
            });
            if (!awsCredentialsResponse.ok) {
              const errorMessage = await awsCredentialsResponse.text();
              console.error('Error fetching AWS credentials:', errorMessage);
              return;
            } else {
              const awsCredentials = await awsCredentialsResponse.json();
              localStorage.setItem('awsCredentials', JSON.stringify(awsCredentials))
            }
          }
        };
        fetchAWSCredentials();
      }
    }
  }, [user, isLoading])

  return (
    <>
      <WelcomeWrapper />
    </>
  );
})

