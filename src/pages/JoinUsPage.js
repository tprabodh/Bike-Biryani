import React from 'react';
import { Fade } from "react-awesome-reveal";
import { FaMotorcycle, FaCheckCircle } from 'react-icons/fa'; // Added FaCheckCircle for consistent icons

const JoinUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12"> {/* Applied gradient background */}
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <Fade direction="down" triggerOnce>
          <h1 className="text-center text-orange-700 font-extrabold mb-12 text-4xl md:text-5xl lg:text-6xl tracking-tight"> {/* Stronger title styling */}
            Join Our Team!
          </h1>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10"> {/* Modern grid layout */}
          {/* Join Us as an Executive Card */}
          <Fade direction="left" triggerOnce>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] flex flex-col h-full"> {/* Enhanced card styling */}
              <img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Delivery Executive on Bike"
                className="h-[320px] object-cover w-full" // Slightly increased image height
              />
              <div className="p-8 flex flex-col flex-grow text-center"> {/* Increased padding, flex-grow for consistent height */}
                <FaMotorcycle size={70} className="text-orange-600 mx-auto mb-5 drop-shadow-md" /> {/* Larger icon */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Join our vibrant team and serve mouth-watering biryani to customers near you</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 flex-grow"> {/* Increased font size */}
                  Work from just one or two local bike spots with minimal travel.
                </p>
                <ul className="list-none text-left space-y-3 mb-8"> {/* Modern list styling */}
                  <li className="flex items-center text-gray-800 text-lg">
                    <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Flexible working hours
                  </li>
                  <li className="flex items-center text-gray-800 text-lg">
                    <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Great earnings with performance-based incentives
                  </li>
                  <li className="flex items-center text-gray-800 text-lg">
                    <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} /> Fast and hassle-free onboarding
                  </li>
                </ul>
                <button className="mt-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  Start earning from your own neighborhood today
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
