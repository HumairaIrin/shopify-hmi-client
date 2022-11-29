import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import useTitle from '../../../hooks/useTitle';
import CategoryItem from './CategoryItem';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const CategoryItems = () => {
    useTitle('Category Items')

    const products = useLoaderData();
    const [productBooking, setProductBooking] = useState(null);

    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(productBooking)
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
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                {
                    products.map((product, i) => <CategoryItem
                        key={i}
                        product={product}
                        setProductBooking={setProductBooking}>
                    </CategoryItem>)
                }
            </div>
            {
                productBooking &&
                <BookingModal
                    productBooking={productBooking}
                    setProductBooking={setProductBooking}>
                    refetch={refetch}
                </BookingModal>
            }
        </section>
    );
};

export default CategoryItems;