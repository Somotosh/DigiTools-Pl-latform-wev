import React from 'react';

const StatsSection = () => {
    return (
 <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-8 '>
            <div className='grid md:grid-cols-3 gap-6 md:gap-4 text-center text-white p-4'>
                <div className='space-y-2 '>
                    <h1 className='text-5xl font-bold '>50K+</h1>
                    <p className='text-xl opacity-80'>Active Users</p>
                </div>
                <div className='space-y-2 '>
                    <h1 className='text-5xl font-bold '>200+</h1>
                    <p className='text-xl opacity-80'>Premium Tools</p>
                </div>
                <div className='space-y-2 '>
                    <h1 className='text-5xl font-bold '>4.9</h1>
                    <p className='text-xl opacity-80'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;