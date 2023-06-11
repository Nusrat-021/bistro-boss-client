import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTItle';
import MenuItem from '../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
        })
    },[])
    return (
        <section>
            <SectionTitle
                heading={'from our menu'}
                subHeading={'check it out'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >

                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;