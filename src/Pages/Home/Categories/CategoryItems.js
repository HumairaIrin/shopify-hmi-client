import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {
    const categories = [
        {
            categoryId: "1",
            categoryName: 'Living Room'
        },
        {
            categoryId: "2",
            categoryName: 'Dining Room'
        },
        {
            categoryId: "3",
            categoryName: 'Reading Room'
        }
    ];

    const products = useLoaderData();

    return (
        <section className='w-[90%] mx-auto'>
            <h5 className='text-xl font-semibold mb-2'>Categories :</h5>
            <div className='flex justify-start overflow-x-auto'>
                {
                    categories.map(category =>
                        <Link to={`/categoryItems/${category.categoryId}`} key={category.categoryId}>
                            <button
                                className="btn btn-outline btn-primary mr-2">
                                {category.categoryName}
                            </button>
                        </Link>)
                }
            </div>
            <hr style={{ color: '#acc396', height: '2px' }} className='my-8' />
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                {
                    products.map((product, i) => <CategoryItem
                        key={i}
                        product={product}>
                    </CategoryItem>)
                }
            </div>
        </section>
    );
};

export default CategoryItems;