import React from 'react';

export default function ShowPrice({ price, discountPercent }) {
    return (
        <div className='font-bold'>
            {discountPercent > 0 ? (
                <div>
                    <span className='text-gray-300 line-through mr-3'>{price} $ </span>
                    <span className='text-[#49BBBD]' >{price-(price * (discountPercent/100))} $ </span>
                </div>
            ) : (
                <span className='text-[#49BBBD]'>{price} $ </span>
            )}
        </div>
    );
}