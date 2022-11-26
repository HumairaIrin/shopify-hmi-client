import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        {user?.email ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut} >Sign Out</button></li>
                {user?.photoURL ?
                    <p><img className='w-[2rem] h-[2rem] rounded-full' src={user?.photoURL} alt="" /></p>
                    : <FaUser />
                }
            </>
            : <li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 flex justify-between w-[90%] mb-5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-[30%]' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center p-0">
                    {menuItems}
                </ul>
            </div>
            {/* <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label> */}
        </div>
    );
};

export default Navbar;