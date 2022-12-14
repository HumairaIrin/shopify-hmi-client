import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import MyProduct from '../MyProduct/MyProduct';

const MyProducts = () => {
    useTitle('My Products')
    const { user } = useContext(AuthContext);
    // const email = user?.email;
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-psi.vercel.app/myProducts?email=${user?.email}`);
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
                        refetch={refetch}
                    ></MyProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;