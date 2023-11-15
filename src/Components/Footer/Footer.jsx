import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../Images/Worldwide-logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="text-white  sm:py-8 md:py-8  footer-image">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="mt-4 sm:col-span-1">
            <Link to={'/'}>
              <img width={"150px"} src={logo} alt="WorldTour Logo" />
            </Link>
            <p className="text-sm py-4 sm:py-6">
              WorldTour.co is your passport to unforgettable adventures, offering expertly crafted travel experiences to destinations across the globe.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com" className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.twitter.com" className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.linkedin.com" className="text-blue-700 hover:text-blue-900">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>

          <div className="sm:mt-0">
            <h2 className="text-2xl font-bold mb-2">Destination</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/Corporate">Asia</Link>
              </li>
              <li>
                <Link to="/TechnicalService">Europe</Link>
              </li>
              <li>
                <Link to="/Corporate">North America</Link>
              </li>
              <li>
                <Link to="/OurDocument">South America</Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy">Africa</Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy">Oceania</Link>
              </li>
            </ul>
          </div>

          <div className="sm:mt-0">
            <h2 className="text-2xl font-bold mb-2">Support</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li><a href="#">Help center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Send Ticket</a></li>
            </ul>
          </div>

          <div className="sm:mt-0">
            <h2 className="text-2xl font-bold mb-2">Company</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li><a href="#">About us</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog & News</a></li>
              <li><a href="#">Legal Notice</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <hr className="w-4/5 sm:w-3/5 border border-gray-300" />
      </div>

      <div className="flex flex-col justify-center items-center ">
  <div className="text-sm text-white mt-2 font-2xl">
    <Link to="https://radiantcortex.com/" target="_blank">
      &copy; 2023 <span style={{ textDecoration: "underline" }}>Radiant Cortex</span>. All rights reserved.
    </Link>
  </div>
</div>

    </footer>
  );
}

export default Footer;
