import AWS from 'aws-sdk';
const identityPoolId = 'eu-north-1:5b115bab-a35e-4474-8eb2-c29fab158238'; // Replace with your Cognito Identity Pool ID

export const getAWSCredentials = async (auth0AccessToken: string) => {
  const cognitoIdentity = new AWS.CognitoIdentity({ region: 'eu-north-1' }); // Replace with your AWS region

  console.log("=================")
  console.log(cognitoIdentity);
  // Prepare the logins object with your Auth0 domain and access token
  const logins = {
    'dev-f21n5m3ogrqn451x.us.auth0.com': auth0AccessToken, // Replace with your Auth0 domain
  };

  // Step 1: Get the AWS Cognito Identity ID
  // const identityIdResponse = await cognitoIdentity.getId({
  //   IdentityPoolId: identityPoolId,
  //   Logins: logins,
  // }).promise();

  // Step 2: Get AWS credentials for the identity
  const credentialsResponse = await cognitoIdentity.getCredentialsForIdentity({
    CustomRoleArn: "arn:aws:iam::277707134730:oidc-provider/dev-f21n5m3ogrqn451x.us.auth0.com",
    IdentityId: "eu-north-1:5b115bab-a35e-4474-8eb2-c29fab158238",
    Logins: logins,
  }).promise();

  return credentialsResponse.Credentials;
};
