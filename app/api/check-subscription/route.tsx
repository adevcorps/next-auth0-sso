import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});
export async function POST(req: Request) {
    const body = await req.json();
    const { email } = body;

    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Only POST requests allowed', hasActiveSubscription: false }, { status: 405 });
    }

    // console.log("THIS IS PASSED EMAIL: ", email);
    
    try {
        // Find the customer using their email address
        const customers = await stripe.customers.search({
            query: 'email:"' + email + '"',
        });

        if (customers.data.length === 0) {
            return NextResponse.json({ message: 'Customer not found', hasActiveSubscription: false }, { status: 200 });
        }

        const customer = customers.data[0];

        // List subscriptions for the customer
        const subscriptions = await stripe.subscriptions.list({
            customer: customer.id,
            status: 'all',
            limit: 3,
        });

        const invoices = await stripe.invoices.list({
            customer: customer.id,
            limit: 30,
        });

        // Access the plan through subscription items
        const subscriptionItem = subscriptions.data[0]?.items?.data[0];
        const plan_id = subscriptionItem?.plan.product;

        if (!plan_id || typeof plan_id !== 'string') {
            return NextResponse.json({ message: 'Plan ID is invalid or not found', hasActiveSubscription: false }, { status: 200 });
        }

        const product = await stripe.products.retrieve(plan_id);

        // Filter subscriptions to check if any are active
        const activeSubscriptions = subscriptions.data.filter(
          (sub) => sub.status === 'active'
        );

        return NextResponse.json({
            hasActiveSubscription: activeSubscriptions.length > 0,
            subscriptions: activeSubscriptions,
            product: product,
            invoices: invoices,
        }, { status: 200 });
    } catch (error) {
        console.error('Error fetching subscription:', error);
        return NextResponse.json({ message: 'Internal Server Error', hasActiveSubscription: false }, { status: 500 });
    }
}

