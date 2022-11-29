import React from 'react';

const AddProduct = () => {
    return (
        // productName, image, location, originalPrice, resalePrice, condition, usedTime, postedOn, sellersName 
        <div className='flex flex-col justify-center w-[90%] md:w-4/5 mx-auto mt-5'>
            <div className="">
                <h3 className="text-2xl font-bold">Add new product</h3>
                <form className='grid grid-cols-1 gap-5 mt-5'>
                    <input name='productName' type="text" placeholder="Product Name" className="input input-bordered w-full" />
                    <input name='image' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                    <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full" />
                    <input name='originalPrice' type="text" placeholder="Original Price" className="input input-bordered w-full" />
                    <input name='resalePrice' type="text" placeholder="Resale Price" className="input input-bordered w-full" />
                    <input name='condition' type="text" placeholder="Product Condition" className="input input-bordered w-full" required />
                    <input name='usedTime' type="text" placeholder="How long you have used the product?" className="input input-bordered w-full" required />
                    <input className='btn btn-primary text-white w-full mt-5'
                        type="submit" value="Add product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;