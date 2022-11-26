import React from 'react';
import { GiAutoRepair } from 'react-icons/gi';
import { MdCardMembership } from 'react-icons/md';

const Facilities = () => {
    return (
        <section>
            <h2 className='text-3xl font-bold mb-4 text-center'>Our Facilities</h2>
            <div className='w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 ]'>
                <div className='flex flex-col items-center justify-center h-[30vh] bg-slate-200 p-3 sm:p-10'>
                    <p><GiAutoRepair /></p>
                    <h2 className='text-[18px] sm:text-2xl font-semibold'>Fitting Service</h2>
                    <p className='text-sm text-center'>Please call (0372600300) to get fitting service.Charge is flexible.</p>
                </div>
                <div className='flex flex-col items-center justify-center h-[30vh] bg-slate-200 p-3 sm:p-10'>
                    <p><MdCardMembership /></p>
                    <h2 className='text-[18px] sm:text-2xl font-semibold'>Grab membership offer</h2>
                    <p className='text-sm text-center'>Buying over 50k you can have a membership card.Get 20% discount with that card.Validity is 30days.</p>
                </div>
            </div>
        </section>
    );
};

export default Facilities;