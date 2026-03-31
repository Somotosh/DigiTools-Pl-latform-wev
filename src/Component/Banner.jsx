import React from 'react';
import labelLogo from '../assets/Group 5 (1).png'
import banner from '../assets/banner.png'
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
        <div >
            <div className='flex flex-col sm:flex-row justify-center sm:justify-between  gap-3 max-w-11/12 mx-auto mt-10 space-y-6'>

                <div className= 'mt-5 sm:mt-18 '>

                    <div className='flex w-fit items-center py-1 px-2 bg-[#E1E7FF] rounded-full '>
                        <div >
                            <img src={labelLogo} alt="" />
                        </div>
                        <p >New: AI-Powered Tools Available</p>
                    </div>

                    <div className=''>
                        <h1 className='text-3xl sm:text-6xl font-bold leading-8 sm:leading-16'>Supercharge Your  Digital Workflow</h1>
                        <p className='pt-4 leading-5'>Access premium AI tools, design assets, templates, and productivity 
                            software—all in one place. Start creating faster today.

                            Explore Products
                        </p>
                        <div className='flex items-center gap-2  mt-6'>
                            <button className='btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
                            <button className='btn rounded-full bg-none border border-[#9514FA]'><CiPlay1 /> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</span></button>
                        </div>
                    </div>
                </div>
                
                   <div>
                     <img className='max-w-md:3/4 max-h-md:1/2 mx-auto' src={banner} alt="" />
                   </div>
            </div>
        </div>
    );
};

export default Banner;