import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const Cadrs = ({modelPromes, cards ,setCards}) => {
      const models = use(modelPromes)
    
    return (
        <div className='space-y-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
           {models.map((model, index) =>
          <ProductsCard model={model} key={index} cards={cards} setCards={setCards} />
        )}

        </div>
    );
};

export default Cadrs;