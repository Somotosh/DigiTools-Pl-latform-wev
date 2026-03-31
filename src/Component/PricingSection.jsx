import React from 'react';
import { FaCheck } from "react-icons/fa6"
const PricingSection = () => {
    return (
        <div className='mt-10 mb-10 w-11/12 sm:w-10/12 mx-auto'>
            <div className='text-center space-y-3'>
                <h1 className='text-2xl sm:text-4xl font-bold'>Simple, Transparent Pricing</h1>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8'>
                <div className=' bg-[#F2F2F2] p-8 shadow-lg  border border-gray-200 rounded-lg h-full'>
                    <div className='mb-22 space-y-2'>
                        <h1 className='text-xl font-bold'>Starter</h1>
                        <p>Perfect for getting started</p>
                        <h1 className='text-xl font-bold '>$0/month</h1>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />Access to 10 free tools</li>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />Basic templates</li>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />Community support</li>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />1 project per month</li>
                        </ul>
                    </div>
                    <button className='btn w-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Get Started Free</button>
                </div>
                <div className='relative  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-8 rounded-lg h-full  border border-gray-200  shadow-lg'>
                    <div className="badge rounded-full absolute -top-3 left-1/3 bg-[#FEF3C6] text-[#BB4D00]">Most Popular</div>
                    <div className='mb-5 space-y-2 text-white'>
                        <h1 className='text-xl font-bold'>Pro</h1>
                        <p>Best for professionals</p>
                        <h1 className='text-xl font-bold'>$29/month</h1>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-1'><FaCheck />Access to all premium tools</li>
                            <li className='flex items-center gap-1'><FaCheck />Unlimited templates</li>
                            <li className='flex items-center gap-1'><FaCheck />Priority support</li>
                            <li className='flex items-center gap-1'><FaCheck />1 Unlimited projects</li>
                            <li className='flex items-center gap-1'><FaCheck />1 Cloud sync</li>
                            <li className='flex items-center gap-1'><FaCheck />1 Advanced analytics</li>
                        </ul>
                    </div>
                    <button className='btn w-full text-[#9514FA] rounded-full'>
                        Get Started Free
                    </button>
                </div>
                <div className=' bg-[#F2F2F2] p-8  border border-gray-200 shadow-lg rounded-lg h-full'>
                    <div className='mb-5 space-y-2'>
                        <h1 className='text-xl font-bold'>Enterprise</h1>
                        <p>For teams and businesses</p>
                        <h1 className='text-xl font-bold'>$99/month</h1>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />Everything in Pro</li>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />Team collaboration</li>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />Custom integrations</li>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />1 Dedicated support</li>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />1 SLA guarantee</li>
                            <li className='flex items-center gap-1'><FaCheck className='text-green-600' />1 Custom branding</li>
                        </ul>
                    </div>
                    <button className='btn w-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;