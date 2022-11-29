import React, { useEffect, useState } from 'react';
// import category1 from '../../../images/categories/category-1.jpg';
// import category2 from '../../../images/categories/category-2.jpg';
// import category3 from '../../../images/categories/category-3.jpg';
import Category from './Category';
import axios from 'axios';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    //     const categories = [
    //         {
    //             categoryId: "1",
    //             categoryName: 'Living Room',
    //             image: category1
    //         },
    //         {
    //             categoryId: "2",
    //             categoryName: 'Dining Room',
    //             image: category2
    //         },
    //         {
    //             categoryId: "3",
    //             categoryName: 'Reading Room',
    //             image: category3
    //         }
    //     ]


    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(data => {
                // console.log(data.data)
                setCategories(data.data);
            })
    }, [])

    return (
        <section className="bg-[#e1f3d0] py-4">
            <div className='w-4/5 mx-auto mb-8'>
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
        </section>
    );
};

export default Categories;