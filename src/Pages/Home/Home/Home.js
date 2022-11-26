import React from 'react';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import Facilities from '../Facilities/Facilities';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;