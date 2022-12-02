import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProduct = ({ product, refetch }) => {
    useTitle('My Products')
    const { productName, image, location, originalPrice, resalePrice, condition, usedTime, postedOn } = product;

    const [deleteProduct, setDeleteProduct] = useState(null);

    const confirmModal = (modalData) => {
        fetch(`http://localhost:5000/seller/product/${modalData._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Product deleted successfully");
                    refetch();
                }
            })
            .catch(error => console.log(error));
    }

    const closeModal = () => {
        setDeleteProduct(null);
    }

    const handleAdvertiseProduct = product => {
        const updatedProduct = {
            status: 'advertised'
        }
        fetch(`http://localhost:5000/seller/product/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product added to homepage');
                    refetch();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="p-4">
            <div className="h-full flex flex-col md:flex-row  bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="md:h-full md:w-3/5 object-cover object-center" src={image} alt="furniture" />
                <div className="md:w-[40%] p-6">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{productName}</h2> */}
                    <div className='flex items-center mb-2'>
                        <h1 className="title-font text-xl font-medium text-gray-900 ">{productName}</h1>
                        <h2 className="badge badge-outline badge-sm mt-2 ml-2">Available</h2>
                    </div>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Location: <span className='text-gray-600'>{location}</span>
                    </h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Original Price: <span className='text-gray-600 line-through'>${originalPrice}</span>
                    </h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Resale Price: <span className='text-gray-600'>${resalePrice}</span>
                    </h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Condition: <span className='text-gray-600'>{condition}</span>
                    </h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Used for: <span className='text-gray-600'>{usedTime}</span>
                    </h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Posted On: <span className='text-gray-600'>{postedOn}</span>
                    </h2>
                    <div className='flex items-center justify-end mt-4'>
                        {!product?.productStatus ?
                            <button onClick={() => handleAdvertiseProduct(product)} className='btn btn-outline btn-primary btn-sm'>Advertise</button>
                            : <button className='badge badge-primary badge-outline'>Advertised</button>
                        }
                        <label htmlFor="confirmation-modal" onClick={() => setDeleteProduct(product)} className="btn btn-outline btn-error btn-sm ml-2">Delete</label>
                    </div>
                </div>
            </div>
            {
                deleteProduct &&
                <ConfirmationModal
                    title={`Are you sure you want to delete this product?`}
                    message={`after confirmation process cannot undone.`}
                    confirmModal={confirmModal}
                    modalData={deleteProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;