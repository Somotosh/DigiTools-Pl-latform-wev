import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=' bg-[rgb(16,23,39)]'>
            <div className='w-11/12 mx-auto text-left sm:text-center'>
                <div className='grid md:grid-cols-6 space-y-4 items-center  gap-2 text-white py-20 border-b border-gray-50'>

                    <div className='col-span-2 space-y-3'>
                        <h1 className='text-xl sm:text-4xl font-bold text-white'>DigiTools</h1>
                        <p className='opacity-70'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='col-span-1 space-y-3'>
                        <h3 className='text-xl'>Product</h3>
                        <ul className='space-y-2 opacity-70'>
                            <li><a >Features</a></li>
                            <li><a >Pricing</a></li>
                            <li><a >Templates</a></li>
                            <li><a >Integrations</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 space-y-3'>
                        <h3 className='text-xl'>Company</h3>
                        <ul className='space-y-2 opacity-70'>
                            <li><a >About</a></li>
                            <li><a >Blog</a></li>
                            <li><a >Careers</a></li>
                            <li><a >Press</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 space-y-3'>
                        <h3 className='text-xl'>Resources</h3>
                        <ul className='space-y-2 opacity-70'>
                            <li><a >Documentation</a></li>
                            <li><a >Help Center</a></li>
                            <li><a >Community</a></li>
                            <li><a >Contact</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1' >
                        <h3 className='text-xl'>Social Links</h3>
                        <div className='flex gap-2 items-center'>
                            <div className="border text-black bg-white flex items-center justify-center w-8 h-8   font-bold rounded-full ">
                                <p><FaInstagram /></p>
                            </div>
                            <div className="border text-black bg-white flex items-center justify-center w-8 h-8   font-bold rounded-full ">
                                <p><FaFacebook /></p>
                            </div>
                            <div className="border text-black bg-white flex items-center justify-center w-8 h-8   font-bold rounded-full ">
                                <p><FaXTwitter /></p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='text-white flex flex-col md:flex-row items-center justify-between pb-4 mt-6'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex items-center gap-4'>
                        <p>Privacy Policy </p>
                        <p>erms of Service </p>
                        <p>  Cookies</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;