import { NextResponse } from 'next/server';
import { getAccessToken, getSession } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const session:any = await getSession();
  if (session) {
    // Extract idToken from the session object
    const idToken = session.idToken;
    return NextResponse.json({ idToken });
  } else {
    return NextResponse.json({ error: 'Not authenticated' });
  }
}
