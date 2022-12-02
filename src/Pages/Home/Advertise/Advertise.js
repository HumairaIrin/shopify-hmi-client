import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const Advertise = ({ advertisedItems }) => {
    return (
        <section className="bg-[#f4e6f5] py-4">
            <div className='w-[90%] mx-auto mb-8'>
                <h2 className='text-3xl font-bold mb-4'>Advertised Items</h2>
                <div className='overflow-x-auto'>
                    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                        {
                            advertisedItems.map(advertisedItem =>
                                <AdvertisedItem
                                    key={advertisedItem._id}
                                    advertisedItem={advertisedItem}
                                ></AdvertisedItem>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advertise;