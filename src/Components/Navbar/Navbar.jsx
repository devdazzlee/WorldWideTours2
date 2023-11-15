import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Worldwide-logo.svg';
import './Navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      style={{ border: "1px solid #659494" }}
      className="border-gray-200 dark:bg-gray-900 dark:border-gray-700"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex mt-4 items-center">
          <img src={logo} className="h-14	 mr-3" alt="Logo" />
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li  class="block mt-4 py-2 pl-3 pr-4 text-gray-900 rounded  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >
              <Link to="/">Home</Link>
            </li>
            <li  class="block mt-4 py-2 pl-3 pr-4 text-gray-900 rounded  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >
              <Link to="/Destination">Destinations</Link>
            </li>
            <li  class="block mt-4 py-2 pl-3 pr-4 text-gray-900 rounded  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >
              <Link to="/DetailTour">Detail Tour</Link>
            </li>
            <li  class="block mt-4 py-2 pl-3 pr-4 text-gray-900 rounded  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >
              <Link to="/Contact-us">Contact Us</Link>
            </li>
            <li className='flex justifyc mt-2' >
                                <i class="phone-icon fa-solid fa-phone-volume phone-icon text-2xl sm:text-4xl mr-4 mt-2"></i>

                                <div class="flex flex-col items-end">
                                    <h5 class=" text-sm sm:text-base">Need help? Call us</h5>
                                    <h1 class=" font-bold text-lg sm:text-xl">+92 342-3344040</h1>
                                </div>


                            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
