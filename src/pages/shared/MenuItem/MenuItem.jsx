import React from 'react';

const MenuItem = ({ item }) => {
    console.log(item)
    const { name, _id, image, price, recipe } = item;
    return (
        <div className='flex space-x-4'>
            <img className='w-[120px] rounded-tl-none rounded-tr-[200px] rounded-b-[200px]' src={image} alt="" />
            <div className=''>
                <h2>{name} --------------</h2>
                <p>{ recipe}</p>
            </div>
            <p className='text-[#D99904]'>${ price}</p>
        </div>
    );
};

export default MenuItem;