import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

export async function GET() {
  try {
    // Fetch all subscriptions
    const subscriptions = await stripe.subscriptions.list({
      limit: 100, // You can increase this limit or paginate if needed
    });
    return NextResponse.json({ subscriptions });
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return NextResponse.json({ error: 'Error fetching subscriptions' }, { status: 500 });
  }
}
