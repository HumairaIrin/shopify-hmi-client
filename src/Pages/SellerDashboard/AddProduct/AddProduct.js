import { format } from 'date-fns';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const date = new Date();
    const formatedDate = format(date, 'PP');
    const { user } = useContext(AuthContext);
    const [categoryId, setCategoryId] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const image = form.image.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const condition = form.condition.value;
        const usedTime = form.usedTime.value;
        const postedOn = formatedDate;
        const categoryName = form.categoryName.value;
        if (form.categoryName.value === 'Living Room') {
            setCategoryId('1');
        }
        else if (form.categoryName.value === 'Dining Room') {
            setCategoryId('2')
        }
        else if (form.categoryName.value === 'Reading Room') {
            setCategoryId('3')
        }


        const newProduct = {
            productName,
            image,
            location,
            originalPrice,
            resalePrice,
            condition,
            usedTime,
            postedOn,
            sellersName: user?.displayName,
            sellersEmail: user?.email,
            categoryName,
            categoryId
        }
        console.log(newProduct)

        fetch('https://resale-market-server-psi.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Product Added Successfully')
                    navigate('/dashboard/myProducts');
                }
            })
    }

    return (
        <div className='flex flex-col justify-center w-[90%] md:w-4/5 mx-auto mt-5'>
            <div className="">
                <h3 className="text-2xl font-bold">Add new product</h3>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                    <input name='productName' type="text" placeholder="Product Name" className="input input-bordered w-full" required />
                    <input name='image' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                    <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full" required />
                    <input name='originalPrice' type="text" placeholder="Original Price" className="input input-bordered w-full" required />
                    <input name='resalePrice' type="text" placeholder="Resale Price" className="input input-bordered w-full" required />
                    <input name='usedTime' type="text" placeholder="How long you have used the product?" className="input input-bordered w-full" required />
                    <label >
                        <span className="label-text">Product Condition:</span>
                    </label>
                    <select name='condition' className='input input-bordered w-full required'>
                        <option disabled >Product Condition</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    <label >
                        <span className="label-text">Select Product Category:</span>
                    </label>
                    <select name='categoryName' className='input input-bordered w-full'>
                        <option disabled >Select Product Category</option>
                        <option>Living Room</option>
                        <option>Dining Room</option>
                        <option>Reading Room</option>
                    </select>
                    <input className='btn btn-primary text-white w-full mt-5'
                        type="submit" value="Add product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;