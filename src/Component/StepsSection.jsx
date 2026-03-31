import React from 'react';
import userLogo from '../assets/user.png'
import rocketLogo from '../assets/rocket.png'
import packageLogo from '../assets/package.png'

const StepsSection = () => {
    return (
        <div className='mt-10 mb-10 w-11/12 sm:w-10/12 mx-auto'>
            <div className='text-center space-y-3'>
                <h1 className='text-2xl sm:text-4xl font-bold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8'>
                <div className="relative border border-gray-200 shadow-lg rounded-lg p-10    text-center">

                    <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 text-white text-base font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                        <p>01</p>
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-purple-100/70 mb-6">
                        <img src={userLogo} alt="" />

                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-black">Create Account</h2>
                    <p className="text-gray-600 text-sm">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>
                <div className="relative border border-gray-200 shadow-lg rounded-lg p-10   text-center">

                    <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 text-white text-base font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                        <p>01</p>
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-purple-100/70 mb-6">
                        <img src={packageLogo} alt="" />

                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-black">Choose Products</h2>
                    <p className="text-gray-600 text-sm">
                       Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>
                <div className="relative border border-gray-200 shadow-lg rounded-lg p-10   text-center">

                    <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 text-white text-base font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                        <p>01</p>
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-purple-100/70 mb-6">
                        <img src={rocketLogo} alt="" />

                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-black">Start Creating</h2>
                    <p className="text-gray-600 text-sm">
                       Download and start using your premium tools immediately.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StepsSection;