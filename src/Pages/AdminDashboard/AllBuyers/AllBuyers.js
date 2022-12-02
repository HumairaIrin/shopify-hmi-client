import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    useTitle('All Buyers')
    const type = 'buyer';
    const [deleteBuyer, setDeleteBuyer] = useState(null);

    const closeModal = () => {
        setDeleteBuyer(null);
    }

    const confirmModal = (modalData) => {
        fetch(`https://resale-market-server-psi.vercel.app/user/${modalData.email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Buyer deleted successfully");
                    refetch();
                }
            })
            .catch(error => console.log(error));
    }

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['users', 'buyers', type],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-psi.vercel.app/users/buyers?type=${type}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto w-[90%] mx-auto md:w-4/5 my-5">
            <h3 className="text-2xl font-bold mb-3 text-center">All Buyers</h3>
            <table className="table w-full">
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
                        buyers.map((buyer, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    <label htmlFor="confirmation-modal" onClick={() => setDeleteBuyer(buyer)} className="btn btn-outline btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
            {
                deleteBuyer &&
                <ConfirmationModal
                    title={`Are you sure you want to delete this buyer?`}
                    message={`after confirmation process cannot undone.`}
                    confirmModal={confirmModal}
                    modalData={deleteBuyer}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;