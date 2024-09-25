'use client'; // Mark this component to run on the client-side

import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const UserProfile = ({}) => {
  const { user } = useUser();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/api/auth/token');
        const data = await response.json();

        const idTokenResponse = await fetch('/api/auth/idToken');
        const idData = await idTokenResponse.json();
        if(idTokenResponse.ok) {
          setIdToken(idData.idToken);
        }
        if (response.ok) {
          setAccessToken(data.accessToken);
        } else {
          
          setError(data.error || 'Failed to fetch token');
        }
      } catch (err) {
        if(err)
          setError('An error occurred while fetching the token');
      }
    };

    fetchToken();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {error && <p>Error: {error}</p>}
      <p>Access Token: {accessToken ? accessToken : 'No token available'}</p>
      <p>User name: {user ? user.name : 'no name'}</p>
      <p>User Email: {user ? user.email : 'no name'}</p>
      <p>Id token: {idToken ? idToken : 'No Idtoken'}</p>
    </div>
  );
};

export default UserProfile;