import { NextResponse } from 'next/server';
import { getAccessToken } from '@auth0/nextjs-auth0';

export async function GET(req: Request) {
  try {
    // Get the access token from Auth0
    const { accessToken } = await getAccessToken();
    return NextResponse.json({ accessToken });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch access token' }, { status: 500 });
  }
}
