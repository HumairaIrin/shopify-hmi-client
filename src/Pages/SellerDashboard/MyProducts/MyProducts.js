import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import MyProduct from '../MyProduct/MyProduct';

const MyProducts = () => {
    useTitle('My Products')
    const { user } = useContext(AuthContext);
    // const email = user?.email;
    const { data: myProducts = [] } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="my-3 px-3 text-center text-2xl font-bold">My Products</h3>
            <div className='grid gap-4 grid-cols-1'>
                {
                    myProducts.map((product, i) => <MyProduct
                        key={i}
                        product={product}
                    ></MyProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;