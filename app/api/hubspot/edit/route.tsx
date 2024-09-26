import { Client as HubspotClient } from '@hubspot/api-client';
import { NextResponse } from 'next/server';

const hubspotClient = new HubspotClient({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }
    const { contactId, email, firstname, lastname } = await req.json(); // Getting updated contact info from request body

    try {
        const updatedContactData = {
            properties: {
                email,
                firstname,
                lastname,
            },
        };

        const response = await hubspotClient.crm.contacts.basicApi.update(contactId, updatedContactData); // Update contact

        return NextResponse.json(response); // Respond with updated contact info
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}
