import React from 'react';
import { MdDelete } from "react-icons/md";

const BuyCard = ({ cards }) => {

    return (
        <div className='w-11/12 sm:w-10/12 mx-auto shadow-lg rounded-lg border border-amber-100 p-5 sm:p-10 mb-10 space-y-3'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-5'>Your Cards :</h1>
            {
                cards.map((item) =>
                    <div className='flex justify-between items-center shadow-lg rounded-lg border border-amber-100 p-2 sm:p-6'>
                        <div className='flex items-center gap-2'>
                            <div>
                                <img className='h-20 w-20 object-contain' src={item.image} alt="" />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>{item.name}</h1>
                                <h3 className='text-xl font-bold'>${item.price}</h3>
                            </div>

                        </div>
                        <div className=' text-xl sm:text-2xl'>
                            <MdDelete />
                        </div>
                    </div>
                )
            }
            <div className='flex justify-between items-center text-xl font-bold shadow-lg rounded-lg p-4 mb-5'>
                <p>Total :</p>
                <p>$00</p>
            </div>
            <button className='btn w-full text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>


        </div>
    );
};

export default BuyCard;