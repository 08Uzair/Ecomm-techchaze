import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-black text-black dark:text-white py-10 transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {/* Eshop Section */}
        <div className="space-y-4">
          <h2 className="text-[#fff] font-extrabold text-3xl uppercase tracking-wide">
            Eshop
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Step into the future of shopping. Explore, connect, and experience innovation with Eshop.
          </p>
          <p className="text-gray dark:text-gray-400 text-sm">
            Made with <span className="text-[#fff]">❤️</span> by The Coding Journey
          </p>
          <a
            href="#"
            className="inline-block bg-red text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red/50"
          >
            Visit our YouTube Channel
          </a>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff]">Important Links</h3>
          <ul className="space-y-2 mt-4 text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff]">Quick Links</h3>
          <ul className="space-y-2 mt-4 text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff]">Address</h3>
          <ul className="space-y-4 mt-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <MdLocationOn className="text-[#fff] mr-3 text-xl" />
              <span>Noida, Uttar Pradesh</span>
            </li>
            <li className="flex items-center">
              <MdPhone className="text-[#fff] mr-3 text-xl" />
              <span>+91 1234567890</span>
            </li>
            <li className="flex items-center space-x-4 mt-4">
              <a
                href="#"
                className="text-gray dark:text-gray-300 hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray dark:text-gray-300 hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray dark:text-gray-300 hover:text-[#fff] dark:hover:text-[#fff]-400 transition duration-300"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-5 text-center text-gray dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Eshop. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
