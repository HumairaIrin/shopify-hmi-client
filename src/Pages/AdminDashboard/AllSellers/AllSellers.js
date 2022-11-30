import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const type = 'seller';
    const { data: sellers = [] } = useQuery({
        queryKey: ['users', 'sellers', type],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/sellers?type=${type}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto w-[90%] mx-auto md:w-4/5 my-5">
            <h3 className="text-2xl font-bold mb-3 text-center">All Sellers</h3>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-outline btn-sm btn-secondary'>Delete</button></td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;