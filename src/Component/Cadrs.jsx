import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const Cadrs = ({modelPromes}) => {
      const models = use(modelPromes)
    console.log(models)
    return (
        <div className='space-y-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
           {models.map((model, index) =>
          <ProductsCard model={model} key={index} />
        )}

        </div>
    );
};

export default Cadrs;