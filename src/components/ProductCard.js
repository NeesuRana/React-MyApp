import React from 'react';

const ProductCard = ({productItem}) => {
  // const {productItem}=props; //destructing
  return (
    <div className='flex flex-col gap-4 px-4 py-4 border border-slate-200 w-72 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white'>
      <img
        src={productItem.image}
        alt=''
        className='h-80 object-cover rounded-md hover:scale-105 transition-transform duration-300'
      />
      <h2 className='text-2xl font-semibold text-gray-800'>{productItem.title}</h2>
      <p className='text-gray-600 line-clamp-2'>
        {productItem.description}
      </p>
      <h3 className='text-2xl font-bold text-indigo-600'>{productItem.price}</h3>
    </div>
  );
};

export default ProductCard;