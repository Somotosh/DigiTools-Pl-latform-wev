import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6"
import { toast } from 'react-toastify';

const ProductsCard = ({ model, cards ,setCards}) => {
    const [isBuyNow, setBuyNow] = useState(false)

    const hendelButton = () => {
        setBuyNow(true)

        const isFound =cards.find(item=> item.id === model.id)
        if(isFound){
            toast.error("Item already in buy")
            return;
        }
        setCards([...cards ,model])
        toast.success('Buy card successfully')
    }
    return (

        <div className='w-11/12 sm:w-10/12 mx-auto shadow-lg rounded-lg border border-amber-100 h-full'>
            <div className='space-y-3 p-6'>
                <div className='flex justify-end '>
                    <p className={`badge badge-md ${model.tag === 'popular' ?
                        "bg-purple-200 text-purple-500" : model.tag === 'best seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' : "bg-green-200 text-green-500"}`} >{model.tag}</p>
                </div>
                <div>
                    <img className='rounded-full h-12 w-12' src={model.image} alt="" />
                </div>
                <div className='space-y-3'>
                    <h1 className='text-2xl font-bold'>{model.name}</h1>
                    <p>{model.description}</p>
                    <p className='text-xl font-bold'>${model.price}/{model.period}</p>

                    <ul>
                        {
                            model.features.map((features, index) => <li key={index} className='flex items-center gap-1'>
                                <FaCheck className='text-green-600' /> ${features}
                            </li>)
                        }
                    </ul>

                </div>
                <button onClick={hendelButton} className='btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full'>{isBuyNow ? "added to card" : 'Buy Now'}</button>
            </div>

        </div>

    );
};

export default ProductsCard;