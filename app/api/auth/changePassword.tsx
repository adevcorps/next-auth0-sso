import { NextResponse } from "next/server";


// const changeUserPassword = async (userId: string, newPassword: string) => {
//     const token = await getManagementToken();

//     const res = await fetch(`https://${process.env.NEXT_PUBLIC_AUTH0_ISSUERD_DOMAIN}/api/v2/users/${process.env.AUTH0_CLIENT_ID}`, {
//         method: 'PATCH',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             password: newPassword,
//             connection: 'Username-Password-Authentication', // Specify the connection
//         }),
//     });

//     if (!res.ok) {
//         throw new Error('Failed to change password');
//     }

//     const data = await res.json();
//     return data;
// };


// export default async function handler(req: Request) {
//     if (req.method !== 'POST') {
//         return NextResponse.json({ message: 'Method Not Allowed' });
//     }

//     const { userId, newPassword } = await req.json();

//     if (!userId || !newPassword) {
//         return NextResponse.json({ message: 'Missing userId or newPassword' });
//     }

//     try {
//         const result = await changeUserPassword(userId, newPassword);
//         return NextResponse.json({ message: 'Password changed successfully', result });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ message: 'Failed to change password' });
//     }
// }

