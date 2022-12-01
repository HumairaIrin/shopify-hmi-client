import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const type = 'seller';
    const [deleteSeller, setDeleteSeller] = useState(null);

    const closeModal = () => {
        setDeleteSeller(null);
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

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['users', 'sellers', type],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-psi.vercel.app/users/sellers?type=${type}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto w-[90%] mx-auto md:w-4/5 my-5">
            <h3 className="text-2xl font-bold mb-3 text-center">All Sellers</h3>
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
                        sellers.map((seller, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <label htmlFor="confirmation-modal" onClick={() => setDeleteSeller(seller)} className="btn btn-outline btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
            {
                deleteSeller &&
                <ConfirmationModal
                    title={`Are you sure you want to delete this seller?`}
                    message={`after confirmation process cannot undone.`}
                    confirmModal={confirmModal}
                    modalData={deleteSeller}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;