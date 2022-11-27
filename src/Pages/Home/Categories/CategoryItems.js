import React from 'react';

const CategoryItems = () => {
    const categories = [
        {
            categoryId: "1",
            categoryName: 'Living Room'
        },
        {
            categoryId: "2",
            categoryName: 'Reading Room'
        },
        {
            categoryId: "3",
            categoryName: 'Dining Room'
        }
    ]
    return (
        <section className='w-[90%] mx-auto'>
            <h5 className='text-xl font-semibold mb-2'>Categories :</h5>
            <div className='flex justify-start overflow-x-auto'>
                {
                    categories.map(category => <button
                        key={category.id}
                        className="btn btn-outline btn-primary mr-2">
                        {category.categoryName}</button>)
                }
            </div>
            <hr style={{ color: '#acc396', height: '2px' }} className='my-8' />

        </section>
    );
};

export default CategoryItems;