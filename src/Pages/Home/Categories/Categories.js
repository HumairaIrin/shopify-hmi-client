import React from 'react';
import category1 from '../../../images/categories/category-1.jpg';
import category2 from '../../../images/categories/category-2.jpg';
import category3 from '../../../images/categories/category-3.jpg';
import Category from './Category';

const Categories = () => {
    const categories = [
        {
            categoryName: 'Living Room',
            image: category1
        },
        {
            categoryName: 'Reading Room',
            image: category2
        },
        {
            categoryName: 'Dining Room',
            image: category3
        }
    ]

    return (
        <div className='w-4/5 mx-auto mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Categories</h2>
            <div className='overflow-x-auto'>
                <div className='grid gap-36 sm:gap-4 grid-cols-3'>
                    {
                        categories.map((category, i) => <Category
                            key={i}
                            category={category}>
                        </Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;