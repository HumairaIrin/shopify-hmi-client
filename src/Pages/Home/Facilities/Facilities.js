import React from 'react';
import { GiAutoRepair } from 'react-icons/gi';

const Facilities = () => {
    return (
        <div className='grid  gap-4 w-4/5 mx-auto sm:grid-cols-1 md:grid-cols-2]'>
            <div className='flex flex-col items-center justify-center h-[30vh] bg-slate-200 p-10'>
                <p className='mb-2'><GiAutoRepair /></p>
                <h2 className='text-2xl font-semibold'>Fitting Service</h2>
                <p className='text-sm text-center'>Please call to our customer care (0372600300) to get fitting service</p>
            </div>
        </div>
    );
};

export default Facilities;