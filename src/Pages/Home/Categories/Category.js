import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { categoryName, image, categoryId } = category;
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="category" className='w-full h-full' /></figure>
            <div className="card-body flex justify-end items-center">
                <Link to={`/categoryItems/${categoryId}`}><h2 className="card-title text-center bg-slate-100 text-slate-500 p-2 rounded-full">{categoryName}</h2></Link>
            </div>
        </div>
    );
};

export default Category;