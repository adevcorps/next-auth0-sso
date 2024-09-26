import type { NextApiRequest, NextApiResponse } from 'next';
import { Client as HubspotClient } from '@hubspot/api-client';
import { NextResponse } from 'next/server';

const hubspotClient = new HubspotClient({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { contactId, email, firstname, lastname } = req.body; // Getting updated contact info from request body

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
        res.status(500).json({ error: error });
    }
}
