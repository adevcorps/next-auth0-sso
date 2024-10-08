import { NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
});

type Data = {
    exists: boolean,
    subscriptionStatus: string,
    message: string
}

export default async function POST(req: Request) {
    const { email } = await req.json();
    if (!email) {
        return NextResponse.json({ exists: false, message: 'Email is required' });
    }
    try {
        // 1. Retrieve the customer by email
        const customers = await stripe.customers.list({
            email,
            limit: 1,
        });

        if (customers.data.length === 0) {
            return NextResponse.json({ exists: false, message: 'Customer not found' });
        }

        const customer = customers.data[0];

        // 2. List subscriptions for this customer
        const subscriptions = await stripe.subscriptions.list({
            customer: customer.id,
            status: 'all',  // Retrieve all statuses (active, past_due, canceled, etc.)
            limit: 1,       // Only need the most recent subscription
        });

        if (subscriptions.data.length === 0) {
            // No subscriptions found for the customer
            return NextResponse.json({ exists: false, message: 'No subscriptions found' });
        }

        const subscription = subscriptions.data[0];

        // 3. Check the subscription status
        const isActive = subscription.status === 'active' || subscription.status === 'trialing';

        return NextResponse.json({
            exists: isActive,
            subscriptionStatus: subscription.status,
            message: isActive ? 'Subscription is active' : `Subscription status: ${subscription.status}`,
        });
    } catch (error) {
        console.error('Error checking subscription:', error);
        return NextResponse.json({ exists: false, message: 'Internal server error' });
    }

}