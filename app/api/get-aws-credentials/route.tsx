// import { withApiAuthRequired } from '@auth0/nextjs-auth0';
// import { getAWSCredentials } from '../../utils/aws';
import { NextResponse } from 'next/server';

// export async function withApiAuthRequired(req : any){
//   const { accessToken } = req.body; //
//   if(req.method !== 'POST') {
//     return NextResponse.json({ error: 'Method Not Allowed' })
//   }
//   try {
//     const awsCredentials = await getAWSCredentials(accessToken);
//     return NextResponse.json(awsCredentials, {status: 200});
//   } catch (error) {
//     console.error('Error exchanging Auth0 token for AWS credentials:', error);
//     return NextResponse.json({ error: 'Failed to get AWS credentials' }, {status: 500});
//   }
// };

import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { getAWSCredentials } from '../../utils/aws';

export default withApiAuthRequired(async (req : any, res) => {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method Not Allowed' });
  }

  const { accessToken } = req.body; // Expecting the access token from the request body

  try {
    const awsCredentials = await getAWSCredentials(accessToken);
    return NextResponse.json(awsCredentials);
  } catch (error) {
    console.error('Error exchanging Auth0 token for AWS credentials:', error);
    return NextResponse.json({ error: 'Failed to get AWS credentials' });
  }
});
