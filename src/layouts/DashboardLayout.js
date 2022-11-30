import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';


const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer bg-[#e1f3d0] mt-8 drawer-mobile w-[90%] mx-auto">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content overflow-y-auto pb-6">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#acc494]">
                        {/* <li><Link to='/'>My Orders</Link></li>
                        <li><Link to='/'>Wishlist</Link></li> */}
                        <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to='/dashboard'>Add a product</Link></li>
                        <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to='/'>My products</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;