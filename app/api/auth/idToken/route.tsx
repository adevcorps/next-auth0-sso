import { NextResponse } from 'next/server';
import {getSession } from '@auth0/nextjs-auth0';

export async function GET() {
    const session = await getSession();
  if (session) {
    // Extract idToken from the session object
    const idToken = session.idToken;
    return NextResponse.json({ idToken });
  } else {
    return NextResponse.json({ error: 'Not authenticated' });
  }
}
