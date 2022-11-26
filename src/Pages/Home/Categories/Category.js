import React from 'react';

const Category = ({ category }) => {
    const { categoryName, image } = category;
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="category" className='w-full' /></figure>
            <div className="card-body flex justify-end items-center">
                <h2 className="card-title text-center">{categoryName}</h2>
            </div>
        </div>
    );
};

export default Category;