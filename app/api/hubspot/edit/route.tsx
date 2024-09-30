import { Client as HubspotClient } from '@hubspot/api-client';
import { NextResponse } from 'next/server';

const hubspotClient = new HubspotClient({ accessToken: process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN });

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }
    const { contactId, email, firstname, lastname, jobtitle, company } = await req.json(); // Getting updated contact info from request body

    console.log();
    try {
        const updatedContactData = {
            properties: {
                email,
                firstname,
                lastname,
                jobtitle,
                company,
            },
        };

        const response = await hubspotClient.crm.contacts.basicApi.update(contactId as string, updatedContactData); // Update contact

        return NextResponse.json(response); // Respond with updated contact info
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: error });
    }
}
