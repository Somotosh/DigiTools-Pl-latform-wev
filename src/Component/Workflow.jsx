import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-11/12 sm:w-10/12 mx-auto space-y-4 py-20 text-center text-white'>
                <h1 className='text-2xl sm:text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='flex justify-center  items-center gap-2'>
                    <button className='btn rounded-full text-[#9514FA]'>Explore Products</button>
                    <button className='btn rounded-full bg-transparent text-white'>View Pricing</button>
                </div>

            </div>
        </div>
    );
};

export default Workflow;