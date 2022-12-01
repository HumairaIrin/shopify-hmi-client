import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({ productBooking, setProductBooking, refetch }) => {
    const { productName, resalePrice } = productBooking;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = {
            userName,
            email,
            productName,
            price,
            userPhoneNo: phone,
            meetingLocation,
        }
        fetch('https://resale-market-server-psi.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProductBooking(null);
                    toast.success('Booking Successful');
                    refetch();
                }
                else {
                    toast.error(data.message)
                    setProductBooking(null)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking For: {productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-10'>
                        {/* <input type="text" value={date} disabled className="input input-bordered w-full font-semibold" /> */}
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input name='productName' type="email" value={productName} disabled placeholder="Product Name" className="input input-bordered w-full" />
                        <input name='price' type="email" value={resalePrice} disabled placeholder="Price" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='meetingLocation' type="text" placeholder="Add meeting location" className="input input-bordered w-full" required />
                        <input className='btn btn-primary text-white w-full mt-5' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;