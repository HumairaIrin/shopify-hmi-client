import React, { useContext } from 'react';
import { GoVerified } from 'react-icons/go';
import { Link } from 'react-router-dom';
import useBuyer from '../../../hooks/useBuyer';
import useVerified from '../../../hooks/useVerified';
import { AuthContext } from '../../contexts/AuthProvider';

const AdvertisedItem = ({ advertisedItem }) => {
    const { categoryName, productName, image, location, originalPrice, resalePrice, condition, usedTime, postedOn, sellersName } = advertisedItem;
    const { user } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email);
    const [isVerfied] = useVerified(advertisedItem.sellersEmail);
    return (
        <div className="p-4">
            <div className="h-full flex flex-col lg:flex-row border-2 border-black border-opacity-40 rounded-lg overflow-hidden">
                <img className="md:h-full lg:w-1/2 object-cover object-center" src={image} alt="furniture" />
                <div className="p-6">
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-2">{productName}</h1>
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Location: <span className='text-gray-600'>{location}</span>
                    </h2> */}
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Original Price: <span className='text-gray-600 line-through'>${originalPrice}</span>
                    </h2> */}
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Resale Price: <span className='text-gray-600'>${resalePrice}</span>
                    </h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Condition: <span className='text-gray-600'>{condition}</span>
                    </h2>
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Used for: <span className='text-gray-600'>{usedTime}</span>
                    </h2> */}
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
                        Posted On: <span className='text-gray-600'>{postedOn}</span>
                    </h2>
                    <h2 className="tracking-widest flex items-center text-xs title-font font-medium text-gray-400 mb-5">
                        Seller Name: <span className='text-gray-600'>{sellersName}
                            {
                                isVerfied &&
                                <span className='inline-block ml-2'><GoVerified /></span>
                            }
                        </span>
                    </h2>
                    <Link to={`/categoryItems/${categoryName}`}>
                        <button className='btn btn-primary text-white w-full'>Full Details</button>
                    </Link>
                    {isBuyer &&
                        <label htmlFor="booking-modal" className='btn btn-primary text-white w-full mt-2'>Add to wishlist</label>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;