import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import useSeller from '../hooks/useSeller';
import { AuthContext } from '../Pages/contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useTitle from '../hooks/useTitle';


const DashboardLayout = () => {
    useTitle('Dashboard');
    const { user } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);

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
                        {isBuyer &&
                            <>
                                <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to=''>My Orders</Link></li>
                                <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to=''>Wishlist</Link></li>
                            </>}
                        {isSeller &&
                            <>
                                <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to='/dashboard/addProduct'>Add a product</Link></li>
                                <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to='/dashboard/myProducts'>My products</Link></li>
                                <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to=''>My Buyers</Link></li>
                            </>
                        }
                        {isAdmin &&
                            <>
                                <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li className='bg-[#e1f3d0] p-4 mb-3 rounded-lg font-semibold'><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;