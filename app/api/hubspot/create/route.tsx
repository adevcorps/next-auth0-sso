import { Client as HubspotClient } from '@hubspot/api-client';
import { NextResponse } from "next/server";

const hubspotClient = new HubspotClient({ accessToken:  process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN});

export async function POST(req: Request) {
    console.log(req.method)
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }

    const { email } = await req.json();
    try {
        const contactData = {
            properties: {
                email
            }
        }
        const response = await hubspotClient.crm.contacts.basicApi.create(contactData);
        return NextResponse.json(response);
    } catch (error) {        
        return NextResponse.json({ error: error });
    }

}