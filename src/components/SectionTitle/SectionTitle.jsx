import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-3/12 my-8'>
            <p className=' text-[#D99904] italic mb-4'>--- {subHeading} ---</p>
            <h3 className='border-y-4 mx-auto text-3xl py-4 uppercase'>{ heading}</h3>
        </div>
    );
};

export default SectionTitle;