import React from 'react';
import chooseImage from '../assets/images/barista-making-cup-coffee.jpg';
import logo from '../assets/images/artukbey-logo.jpg';




const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Logo Section */}
          <div className="md:w-1/4">
            <div className="flex items-center space-x-2">
              <div className="text-yellow-500 text-4xl gap-y-5 flex flex-col">
              <span className="text-2xl font-semibold">Artukbey Kahve</span>
                <img src={logo} alt='logo' className='size-40' />
              </div>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="md:w-1/4">
            <h5 className="text-xl font-semibold mb-4">Working Hours</h5>
            <ul>
              <li className="mb-2">
                <span className="block">Sunday - Thursday</span>
                <span className="text-gray-400">08:00 am - 09:00pm</span>
              </li>
              <li className="mb-2">
                <span className="block">Only Friday</span>
                <span className="text-gray-400">03:00 pm - 09:00pm</span>
              </li>
              <li className="text-yellow-500 font-semibold">Saturday Close</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:w-1/4">
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
            <ul>
              <li className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt text-yellow-500 mr-2"></i>
                <span>55 Main Street, New York</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="fas fa-envelope text-yellow-500 mr-2"></i>
                <span>kaffendev@gmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-yellow-500 mr-2"></i>
                <span>+012 (345) 678 99</span>
              </li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div className="md:w-1/4">
            <h5 className="text-xl font-semibold mb-4">Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              <img src={chooseImage} alt="Gallery Image" className="w-full h-20 object-cover"/>
              <img src={chooseImage} alt="Gallery Image" className="w-full h-20 object-cover"/>
              <img src={chooseImage} alt="Gallery Image" className="w-full h-20 object-cover"/>
              <img src={chooseImage} alt="Gallery Image" className="w-full h-20 object-cover"/>
              <img src={chooseImage} alt="Gallery Image" className="w-full h-20 object-cover"/>
              <img src={chooseImage} alt="Gallery Image" className="w-full h-20 object-cover"/>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          &copy; 2024 TOP SOFT. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
