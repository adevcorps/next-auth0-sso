import { Client as HubspotClient } from '@hubspot/api-client';
import { PublicObjectSearchRequest } from '@hubspot/api-client/lib/codegen/crm/companies';
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/companies';
import { NextResponse } from 'next/server';


// Initialize the HubSpot client using your private app access token
const hubspotClient = new HubspotClient({ accessToken:  process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN });

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }
    const { email } = await req.json();
    if (email !== "") {
        try {
            const PublicObjectSearchRequest : PublicObjectSearchRequest = { 
                filterGroups: [
                    { 
                        "filters": [
                            { 
                                "value": email, 
                                "propertyName": "email", 
                                "operator": FilterOperatorEnum.Eq
                            }
                        ] 
                    }
                ], 
                sorts: ["firstname"], 
                properties: ["firstname", "lastname", "company", "jobtitle"], 
                limit: 1
            };

            const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch(PublicObjectSearchRequest);
            return NextResponse.json(searchResponse);
        } catch (error) {
            return NextResponse.json({ error: error });
        }
    }
    else {
        return NextResponse.json({ error: "Mail is empty." });
    }
}
