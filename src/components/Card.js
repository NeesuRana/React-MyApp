import React from 'react';

const Card = (props) => {
  return (
    <div className='flex flex-col gap-4 px-3 border-2 border-slate-600 w-72'>
      <img
        src={props.image}
        alt=''
      />
      <h2 className='text-2xl'>{props.title}</h2>
      <p>
        {props.description}
      </p>
      <h3 className='text-2xl'>{props.price}</h3>
    </div>

    // <div></div>
  );
};

export default Card;