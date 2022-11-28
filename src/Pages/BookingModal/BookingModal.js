import React, { useContext } from 'react';
// import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({ productBooking, setProductBooking }) => {
    const { productName, resalePrice } = productBooking;
    // { treatment, selectedDate, setTreatment, refetch }
    // const { name, slots } = treatment;
    // const date = format(selectedDate, "PP");
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            // treatment: name,
            // appointmentDate: date,
            slot,
            patient: patientName,
            email,
            phone
        }
        // fetch('http://localhost:5000/bookings', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(booking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.acknowledged) {
        //             setTreatment(null);
        //             toast.success('Booking Successful');
        //             refetch();
        //         }
        //         else {
        //             toast.error(data.message)
        //         }
        //     })
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
                        <input name='productName' type="email" defaultValue={productName} disabled placeholder="Product Name" className="input input-bordered w-full" />
                        <input name='price' type="email" defaultValue={resalePrice} disabled placeholder="Price" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='meetingLocation' type="text" placeholder="Add meeting location" className="input input-bordered w-full" />
                        <input className='btn btn-primary text-white w-full mt-5' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;