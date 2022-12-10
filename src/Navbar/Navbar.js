import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className='mr-5 font-semibold hovercolor'>About</li>
        <li className='mr-5 font-semibold hovercolor'>Portfolio</li>
        <li className='mr-5 font-semibold hovercolor'>Contact</li>
    </React.Fragment>
    return (
        <div className=''>
            <div className="navbar bg-color flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to= '/' className='text-4xl font-semibold color ml-5'>Ashraf <span className='text-white'>Ali</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {menuItems}
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;