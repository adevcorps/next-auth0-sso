import { NextResponse } from 'next/server';
import Stripe from 'stripe';


// export const config = {
//     api: {
//         bodyParser: false,
//     },
// }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
})

// type EventName =
// 	| "customer.subscription.resumed";

async function handleStripeWebhook(body: Stripe.Event) {
	// const mode = body.data?.object?.mode;
	// const id = body.data?.object?.id;
	// const obj = body.data?.object?.object;
	// const stat = body.data?.object?.status;
	// const status = body.data?.object?.payment_status;
	// const payment_intent = body.data?.object?.payment_intent;
	// const subId = body.data?.object?.subscription;
	// const stripeInvoiceId = body.data?.object?.invoice;
	// const user = body.data?.object?.metadata?.userId;
	// const meta = body.data?.object?.metadata;
	// const stripe_invoice = body.data?.object?.invoice;
	const type = body.type;


	// console.log everything above REMOVE BEFORE PRODUCTION.
	// console.log("mode --->", mode);
	// console.log("webhook type --->", type);
	// console.log("id --->", id);
	// console.log("obj --->", obj);
	// console.log("stat --->", stat);
	// console.log("status --->", status);
	// console.log("payment_intent --->", payment_intent);
	// console.log("subId --->", subId);
	// console.log("stripeInvoiceId --->", stripeInvoiceId);
	// console.log("user --->", user);
	// console.log("meta --->", meta);
	// console.log("stripe_invoice --->", stripe_invoice);
	console.log("=========================================================")
	// console.log(body.data?.object);

	// Switch on the event type.
	switch (type) {
		case "invoice.payment_succeeded":
			console.log(body.data?.object);
			return new Response(
				JSON.stringify({ message: "Payments marked canceled!" }),
				{
					status: 200,
				}
			);

		case "checkout.session.expired":
			return new Response(
				JSON.stringify({ message: "Payments marked canceled!" }),
				{
					status: 200,
				}
			);
		case "charge.succeeded":

			return new Response(JSON.stringify({ message: "Payment completed!" }), {
				status: 200,
			});
		
		case "charge.refunded":
			// logic to handle refunded charges.

			return new Response(JSON.stringify({ message: "Refund completed!" }), {
				status: 200,
			});

		case "charge.failed":
			// logic to handle failed charges.

			return new Response(JSON.stringify({ message: "Payment Updated!" }), {
				status: 200,
			});

		case "charge.expired":
			// logic to handle expired charges.

			return new Response(JSON.stringify({ message: "Payment Updated!" }), {
				status: 200,
			});

		case "charge.dispute.created":
			// logic here...

			return new Response(
				JSON.stringify({ message: "Dispute details added!" }),
				{
					status: 200,
				}
			);

		case "charge.dispute.updated":
			// logic here...

			return new Response(
				JSON.stringify({ message: "Dispute details updated!" }),
				{
					status: 200,
				}
			);

		case "charge.dispute.funds_reinstated":
			// logic here..

			return new Response(
				JSON.stringify({ message: "Dispute details updated!" }),
				{
					status: 200,
				}
			);

		case "charge.dispute.funds_withdrawn":
			// logic here...

			return new Response(
				JSON.stringify({ message: "Dispute details updated!" }),
				{
					status: 200,
				}
			);

		case "customer.created":
			// Add logic for handling customer creation
			return new Response(JSON.stringify({ message: "Customer created!" }), {
				status: 200,
			});

		case "customer.updated":
			// Add logic for handling customer updates
			return new Response(JSON.stringify({ message: "Customer updated!" }), {
				status: 200,
			});

		case "customer.deleted":
			// Add logic for handling customer deletion
			return new Response(JSON.stringify({ message: "Customer deleted!" }), {
				status: 200,
			});

		case "customer.subscription.created":
			// Add logic for handling the creation of a customer subscription
			// const subscription = body.data.object as Stripe.Subscription;
			// const message = JSON.stringify({
			// 	event: 'customer.subscription.created',
			// 	data: subscription
			// })
			
			return new Response(
				JSON.stringify({ message: "Customer subscription created!" }),
				{
					status: 200,
				}
			);

		case "customer.subscription.updated":
			// Add logic for handling updates to a customer's subscription
			return new Response(
				JSON.stringify({ message: "Customer subscription updated!" }),
				{
					status: 200,
				}
			);

		case "customer.subscription.deleted":
			// Add logic for handling the deletion of a customer's subscription
			return new Response(
				JSON.stringify({ message: "Customer subscription deleted!" }),
				{
					status: 200,
				}
			);

		case "customer.subscription.paused":
			// Add logic for handling the pausing of a customer's subscription
			return new Response (
				JSON.stringify({ message: "Customer subscription paused!" }),
				{
					status: 200,
				}
			);

		case "customer.subscription.resumed":
			// Add logic for handling the resumption of a customer's subscription
			return new Response(
				JSON.stringify({ message: "Customer subscription resumed!" }),
				{
					status: 200,
				}
			);
		default:
			return new Response(JSON.stringify({ error: "Invalid event type" }), {
				status: 400,
			});
	}
}

export async function POST(req: Request) {

    try {
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        if (!webhookSecret) {
            return NextResponse.json({ "server error": "Webhook secret is missing." });
        }

        const sig = req.headers.get('Stripe-Signature');
        if (!sig) {
            return NextResponse.json({ "server error": "Missing Stripe signature header." });
        }

        const rawBody = await req.text();

        let event;
        try {
            event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
			// console.log("event type")
        } catch (err) {
            console.error(`⚠️  Webhook signature verification failed.`, err);
            return new Response(
                JSON.stringify({ error: "Webhook signature verification failed" }),
                {
                    status: 400,
                }
            );
        }

        const webhookResponse = await handleStripeWebhook(event);
        return new Response(webhookResponse?.body, {
			status: webhookResponse?.status || 200,
		});

    }catch (error) {
		console.error("Error in Stripe webhook handler:", error);
		return new Response(JSON.stringify({ error: "Webhook handler failed." }), {
			status: 500, // Changed to 500, indicating a server error
		});
	}
}