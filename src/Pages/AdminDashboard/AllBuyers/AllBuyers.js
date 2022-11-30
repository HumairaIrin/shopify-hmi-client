import React from 'react';

const AllBuyers = () => {
    return (
        <div className="overflow-x-auto w-[90%] mx-auto md:w-4/5 my-5">
            <h3 className="text-2xl font-bold mb-3 text-center">All Buyers</h3>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;