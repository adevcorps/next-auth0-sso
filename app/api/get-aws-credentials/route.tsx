import { NextResponse } from 'next/server';
import { CognitoIdentityClient, GetIdCommand, GetCredentialsForIdentityCommand } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const identityPoolId = 'us-east-1:3834caa7-4e08-4569-92ff-236c9b736926'; // Replace with your Cognito Identity Pool ID
export async function POST(req: Request) {
  try {
    const  {idToken} = await req.json(); // Parse the request body

    // Initialize CognitoIdentityClient
    const cognitoClient = new CognitoIdentityClient({ region: "us-east-1" });
    const logins = {
      'dev-f21n5m3ogrqn451x.us.auth0.com': idToken, // Replace with your Auth0 domain
    };
    const credentials = await fromCognitoIdentityPool({
      clientConfig: { region: "us-east-1" },
      identityPoolId: identityPoolId,
      logins:logins
    });

    const awsCredentials = await credentials();
    const serializableCredentials = {
      accessKeyId: awsCredentials.accessKeyId,
      secretAccessKey: awsCredentials.secretAccessKey,
      sessionToken: awsCredentials.sessionToken,
      expiration: awsCredentials.expiration,
    };
    return NextResponse.json(serializableCredentials);
  } catch (error) {
    console.error('Error exchanging Auth0 token for AWS credentials:', error);
    return NextResponse.json({ error: error}, { status: 500 });
  }
}
