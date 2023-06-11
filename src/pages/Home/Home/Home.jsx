import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import AboutBistro from '../AboutBistro/AboutBistro';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <AboutBistro></AboutBistro>
        </div>
    );
};

export default Home;