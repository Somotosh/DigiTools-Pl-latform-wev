import React from 'react';

const Tabes = () => {
    return (
        <div className='mt-8'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_1" className="tab  rounded-full" aria-label="Products"defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Cart (2)"  />
                
            </div>
        </div>
    );
};

export default Tabes;