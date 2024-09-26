import type { NextApiRequest, NextApiResponse } from 'next';
import hubspot from '@hubspot/api-client';

const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

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

        const response:any = await hubspotClient.crm.contacts.basicApi.update(contactId, updatedContactData); // Update contact
        const updatedContact = response.body;

        res.status(200).json(updatedContact); // Respond with updated contact info
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
