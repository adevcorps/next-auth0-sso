'use client'
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
// import Login from "./login/page";
import Welcome from './login/welcome/page';
import { useEffect } from 'react';
import { LoadingSpin } from './component/loading';
import { useRouter } from 'next/navigation';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function Home() {
  const { user, isLoading } = useUser();
  const [awsCredenTialInfo, setAwsCredentialInfo] = useState({});
  const [awsLoading, setAwsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        const fetchAWSCredentials = async () => {
          if (user) {
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
              }

              const awsCredentials = await awsCredentialsResponse.json();
              setAwsCredentialInfo(awsCredentials);
              console.log('AWS Credentials:', awsCredentials);
              setAwsLoading(false);
            }
          }
        };
        fetchAWSCredentials();
      }
      else {
        router.push('/api/auth/login');
      }
    }
  }, [user, isLoading])

  return (
    <>
      {(isLoading && !user) ? <LoadingSpin /> : <Welcome />}
    </>
  );
})

