import React from 'react';
import { GoVerified } from 'react-icons/go';
import ButtonPrimary from '../../Shared/ButtonPrimary/ButtonPrimary';

const CategoryItem = ({ product }) => {
    const { productName, image, location, originalPrice, resalePrice, condition, usedTime, postedOn, sellersName, phone } = product;
    return (
        <div className="p-4">
            <div className="h-full flex flex-col lg:flex-row border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="md:h-[40vh] lg:w-1/2 object-cover object-center" src={image} alt="furniture" />
                <div className="p-6">
                    {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{productName}</h2> */}
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-2">{productName}</h1>
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
                    <h2 className="tracking-widest flex items-center text-xs title-font font-medium text-gray-400 mb-5">
                        Seller Name: <span className='text-gray-600'>{sellersName}<span className='inline-block ml-2'><GoVerified /></span></span>
                    </h2>
                    <ButtonPrimary text={'Book Now'}></ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;