'use client'
import React, { useState, useEffect } from 'react';
import Subscription from '@/app/component/subscription';
import { LoadingSpin } from '@/app/component/loading';
import { useUser } from '@auth0/nextjs-auth0/client';

// type Invoice = {
//     id: string; // Example field
//     amount_due: number; // Example field
//     currency: string; // Example field
//     // Add other fields as per your requirement based on the Stripe Invoice API response
// };

type SubscriptionResponse = {
    invoices?: InvoiceInfo[]; 
    subscriptions?: {
        current_period_end: number;
        [key: string] : unknown;
    }[];
    product?: string[];
    hasActiveSubscription: boolean;
    message?: string;
};

type ProductInfo = {
    name?: string;
};
type InvoiceInfo = {
    number: string;
    lines: {
        data: {
            description: string;
        }[];
    };
    amount_paid: number;
    created: number;
};

export default function Billing() {
    const { user } = useUser();
    const [hasActiveSubscription, setHasActiveSubscription] = useState<boolean | null>(null);
    const [subscriptionInfo, setSubscriptionInfo] = useState<{ current_period_end: number }[]>([]);
    const [productInfo, setProductInfo] = useState<ProductInfo>({});
    const [invoicesInfo, setInvoicesInfo] = useState<InvoiceInfo[]>([]);
    const [loading, setLoading] = useState(true);
    // const emailAddress = 'kekacbre@hotmail.com';
    const userEmailAddress = user?.email;

    useEffect(() => {
        async function checkSubscription() {
            try {
                const response = await fetch('/api/check-subscription', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: userEmailAddress })
                });
        
                const data: SubscriptionResponse = await response.json();
                setHasActiveSubscription(data.hasActiveSubscription);
                if (data.subscriptions) {
                    setSubscriptionInfo(data.subscriptions);
                }
                if (data.product && Array.isArray(data.product)) {
                    setProductInfo({ name: data.product[0] });
                } else {
                    setProductInfo(data.product || {});
                }
                if (data.invoices) {
                    setInvoicesInfo(data.invoices);
                }
                // console.log("userEmailAddress success:", userEmailAddress);
            } catch (error) {
                console.error('Error checking subscription:', error);
                // console.log("userEmailAddress error:", userEmailAddress);
            } finally {
                setLoading(false);
            }
        }
    
          checkSubscription();
    }, []);
              
    return (
        <>
            <div className='mt-[75px] md:mt-0 relative'>
                {
                    loading ? <LoadingSpin /> : ''
                }
                {/* Subscription Section */}
                <div className="p-6 md:p-[40px] xl:p-[68px] border-l border-b border-[#E1E1E1] border-r">
                    <div className='max-w-[1000px]'>
                        <p className="f-open text-[24px] font-[600] leading-[25.2px] text-[#0D0040]">Subscription</p>
                    </div>
                </div>
                {/* Subscription Details Section */}
                {hasActiveSubscription && (
                <div className="p-6 md:p-[40px] xl:p-[68px] xl:pr-[145px] border-l border-b items-center border-[#E1E1E1] ">
                    <div className='max-w-[1000px] flex flex-col xl:flex-row'>
                        <div className='w-full flex justify-left mb-5 md:w-2/12 md:mb-0 lg:min-w-[65px] lg:w-1/12'>
                            <div style={{ width: '64px', height: '64px', background: '#FFD601', borderRadius: '50%' }}></div>
                        </div>
                        <div className='w-full xl:w-11/12 pt-[10px]'>
                            <div className="flex flex-col justify-center w-full pl-0 xl:pl-[15px]">
                                <p className="text-[20px] leading-[24px] mb-[10px] f-lato font-[600] text-[#171100]">{productInfo?.name || 'Product name not available'}</p>
                                <div className="flex justify-between w-full">
                                    <p className="text-[16px] font-[600] leading-[19.2px] f-lato text-[#898988]">Gorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div className='text-right'>
                                        {subscriptionInfo.length > 0 && (
                                            <p className="text-[16px] font-[600] leading-[19.2px] f-lato text-[#171100]">
                                                renews {(new Date(subscriptionInfo[0].current_period_end * 1000)).toLocaleDateString("en-US")}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                {/* Billing Section */}
                {hasActiveSubscription && (
                <div className="p-6 md:p-[40px] xl:p-[68px] xl:pr-[145px] border-l border-b flex justify-between border-[#E1E1E1]">
                    <div className='w-full lg:max-w-[1000px] flex justify-between'>
                        <p className="f-open text-[20px] md:text-[24px] font-[600] leading-[25.2px] text-[#0D0040]">Billing</p>
                        <a href="https://billing.stripe.com/p/login/6oEaFqc12bR75SEeUU" target="_blank" rel="noreferrer" className="text-[14px] f-lato font-[600] text-[#171100] underline cursor-pointer hover:text-[#17110073] transition-colors duration-300">View all</a>
                    </div>
                </div>
                )}
                {/* Subscription Management Section */}
                {hasActiveSubscription ? (
                    <div className="p-6 md:p-[40px] xl:p-[68px] xl:pr-[145px] border-l border-b flex justify-between border-[#E1E1E1]">
                        <div className='w-full lg:max-w-[1000px] flex justify-between'>
                            <p className="f-open text-[20px] md:text-[24px] font-[600] text-[#0D0040]">Subscription Management</p>
                            <div className="w-4/12 md:w-2/12 flex justify-end items-center pt-[12px] md:pt-0">
                                <a href="https://billing.stripe.com/p/login/6oEaFqc12bR75SEeUU" target="_blank" rel="noreferrer" className="mr-[5px] md:mr-[30px] text-[14px] font-[600] text-[#171100] f-lato underline cursor-pointer hover:text-[#17110073] transition-colors duration-300">Renew</a>
                                <a href="https://billing.stripe.com/p/login/6oEaFqc12bR75SEeUU" target="_blank" rel="noreferrer" className="text-[14px] f-lato font-[600] text-[#171100] underline cursor-pointer hover:text-[#17110073] transition-colors duration-300">Cancel</a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 md:p-[40px] xl:p-[68px] xl:pr-[145px] border-l border-b flex justify-between border-[#E1E1E1]">
                        <div className='w-full lg:max-w-[1000px] flex justify-between'>
                            <p className="f-open text-[20px] md:text-[24px] font-[600] text-[#0D0040]">Subscription Management</p>
                            <div className="w-4/12 md:w-2/12 flex justify-end items-center pt-[12px] md:pt-0">
                            <a href="https://billing.stripe.com/p/login/6oEaFqc12bR75SEeUU" target="_blank" rel="noreferrer" className="mr-[5px] md:mr-[30px] text-[14px] font-[600] text-[#171100] f-lato underline cursor-pointer hover:text-[#17110073] transition-colors duration-300">Subscribe</a>
                            </div>
                        </div>
                    </div>
                )}
                {/* Subscription History Section */}
                {(hasActiveSubscription && invoicesInfo.length > 0) && (
                <div className="py-6 md:py-[68px] pl-6 md:pl-[68px] pr-6 md:pr-[145px] border-l border-b flex justify-between border-[#E1E1E1]">
                    <div className='w-full lg:max-w-[1000px] flex justify-between'>
                        <p className="text-[20px] f-open md:text-[24px] font-[600] text-[#0D0040]">Subscription History</p>
                        <div className="w-4/12 md:w-2/12 flex justify-between"></div>
                    </div>
                </div>
                )}
                {/* Subscription List Section */}
                {(hasActiveSubscription && invoicesInfo.length > 0) && (
                <>
                    <div className="w-full lg:max-w-[1070px]">
                        {
                            invoicesInfo.map((invoice, key) => (
                                <Subscription key={key} orderId={invoice?.number} name={invoice?.lines?.data[0]?.description} amount={invoice?.amount_paid / 100} date={(new Date(invoice.created * 1000)).toLocaleDateString("en-US")} />
                            ))
                        }
                    </div>
                    <div className="p-4 md:p-10 flex justify-between border-l border-b border-[#E1E1E1]"></div>
                </>
                )}
            </div>
        </>
    );
}