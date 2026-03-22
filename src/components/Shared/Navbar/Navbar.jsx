import React from 'react';
import { Link } from 'react-router';
import logo from '../../../assets/logo.png';
import { FaHome, FaAppStoreIos, FaCloudDownloadAlt, FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to='/'><FaHome /> Home</Link></li>
                        <li><Link to='/apps'><FaAppStoreIos /> Apps</Link></li>
                        <li><Link to='/installation'><FaCloudDownloadAlt /> Installation</Link></li>
                    </ul>
                </div>
                <div className='btn btn-ghost text-xl'>
                    <img src={logo} className='h-[30px] w-[30px]' alt="" />
                    <span>Tech City</span>
                </div>
                {/* <a className="btn btn-ghost text-xl"><img src={logo} alt="" /> Tech City</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 [&_a]:hover:underline">
                    <li><Link to='/'><FaHome /> Home</Link></li>
                    <li><Link to='/apps'><FaAppStoreIos /> Apps</Link></li>
                    <li><Link to='/installation'><FaCloudDownloadAlt /> Installation</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/SIArifBD' className="btn btn-primary border-2 border-red-200)"><FaGithub />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;