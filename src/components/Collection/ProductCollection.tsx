import React from 'react';
import { Link } from 'react-router-dom';

type ProductCollectionProps = {
  imageUrl: string;
  title: string;
};

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <div className='group relative block'>
      <img
        src={imageUrl}
        alt={title}
        className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
      />

      <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
        <h3 className='text-xl font-medium text-slate-50'>{title}</h3>

        <button
          type='button'
          className='btn btn-neutral mt-1.5 rounded-none text-white'
        >
          <Link to='/store'>Shop Now</Link>
        </button>
      </div>
    </div>
  );
};
