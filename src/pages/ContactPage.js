import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ef6800] mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have a question, feedback, or a special request? We'd love to hear from you! 
          Reach out to us using the contact details below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Email Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-[#fff5ee] flex items-center justify-center mb-6">
            <FaEnvelope className="text-3xl text-[#ef6800]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Email</h3>
          <p className="text-gray-600 mb-4">Drop us a message anytime</p>
          <a 
            href="mailto:care@bikebiryani.com" 
            className="text-[#ef6800] font-medium text-lg hover:underline"
          >
            care@bikebiryani.com
          </a>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-[#fff5ee] flex items-center justify-center mb-6">
            <FaPhone className="text-3xl text-[#ef6800]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Phone</h3>
          <p className="text-gray-600 mb-4">Call us during business hours</p>
          <a 
            href="tel:+918971765469" 
            className="text-[#ef6800] font-medium text-lg hover:underline"
          >
            +91 8971765469
          </a>
        </div>

        {/* Address Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-[#fff5ee] flex items-center justify-center mb-6">
            <FaMapMarkerAlt className="text-3xl text-[#ef6800]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Visit Us</h3>
          <p className="text-gray-600">
            Yasaswy Universal, No.324, Ground Floor, 8th Cross Rd, MCECHS Layout Phase-1, Dr. Shivaram Karanth Nagar, Bengaluru, Karnataka 560077
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#fff8f3] to-[#fff0e6] rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect With Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Follow us on social media to stay updated with our latest news, offers, 
          and events.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="w-12 h-12 rounded-full bg-[#ef6800] flex items-center justify-center text-white hover:bg-[#d45a00] transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-[#ef6800] flex items-center justify-center text-white hover:bg-[#d45a00] transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-[#ef6800] flex items-center justify-center text-white hover:bg-[#d45a00] transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
