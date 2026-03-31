import React from 'react';

const Tabes = ({ activeTab,setActiveTab,cards}) => {
    return (
        <div className='mt-8 mb-8'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center gap-3 bg-transparent">
                <input
                onClick={()=>setActiveTab("products")}
                type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${activeTab ==="products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ": ''}`} aria-label="Products"defaultChecked  />
                <input
                onClick={()=>setActiveTab("buyCard")}
                type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${activeTab ==="buyCard" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ": ''} `} aria-label={`Card ( ${cards.length} )`}  />
                
            </div>
        </div>
    );
};

export default Tabes;