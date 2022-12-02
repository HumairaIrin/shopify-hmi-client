import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertise from '../Advertise/Advertise';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import Facilities from '../Facilities/Facilities';

const Home = () => {
    const { data: advertisedItems = [] } = useQuery({
        queryKey: ['advertised', 'products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/advertised/${'advertised'}`);
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            {
                advertisedItems?.length &&
                <Advertise advertisedItems={advertisedItems}></Advertise>
            }
            <Facilities></Facilities>
        </div>
    );
};

export default Home;