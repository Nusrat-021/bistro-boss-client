import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTItle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item text-white pt-10 mt-14 bg-fixed '>
            <SectionTitle
                heading={'from out menu'}
                subHeading={'check it out'}></SectionTitle>
            <div className='flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                <img className='rounded-lg' src={featuredImg} alt="" />
                </div>
                <div className='md: ml-10'>
                    <p>March 26, 2023</p>
                    <h4>WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4 uppercase text-white'>order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;