import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../images/error-page.gif';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <img src={error} alt="" />
            <Link to='/'> <h5 className='text-2xl font-bold border-2 p-3 shadow-lg'>Back to home</h5></Link>
        </div>
    );
};

export default ErrorPage;