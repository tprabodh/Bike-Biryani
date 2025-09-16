import React from 'react';
import { FaRocket, FaUtensils, FaMapMarkerAlt, FaGraduationCap, FaBuilding, FaHome, FaTrain, FaBus, FaSubway, FaBullseye, FaUserTie, FaQrcode, FaWallet, FaGrinStars } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center overflow-hidden px-4 md:px-0"> {/* Horizontal strip */}
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-amber-800/60 z-10"></div>
        
        <div className="container mx-auto px-4 z-20 relative">
          <Fade direction="down" triggerOnce>
            <div className="max-w-2xl text-center md:text-left"> {/* Center text on mobile, left on md+ */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Take a <br /> Biryani Break
              </h1>
              
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                Download The App
              </button>
            </div>
          </Fade>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-8 md:py-20 bg-gradient-to-r from-amber-100 to-orange-50"> {/* Reduced vertical padding on mobile */}
        <div className="container mx-auto px-4">
          <Fade direction="up" triggerOnce>
            <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-lg p-6 pt-12 md:p-12 md:pt-12 relative"> 
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white rounded-full p-4">
                <FaRocket className="text-2xl" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Mission Statement</h2>
              <p className="text-base md:text-xl leading-relaxed text-gray-700 italic">
"Serve fresh, delicious biryani at colleges, IT parks, metro and railway stations, and other high-footfall locations.
Empower India’s youth by offering genuine income opportunities through local jobs.""
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 md:py-20 bg-white"> {/* Reduced vertical padding on mobile */}
        <div className="container mx-auto px-4">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-8 md:mb-16"> {/* Reduced margin-bottom on mobile */}
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">How to Find Bike Biryani and Enjoy Your Meal</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                Simple steps to satisfy your biryani craving in minutes
              </p>
            </div>
          </Fade>
          
          <div className="relative">
            <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 pb-4"> {/* Horizontal scroll on mobile */}
              {[
                { icon: <FaMapMarkerAlt className="text-2xl md:text-3xl" />, title: "1.	Find a Bike Biryani Spot ", desc: "Locate a nearby Bike Biryani Executive" },
                { icon: <FaUserTie className="text-2xl md:text-3xl" />, title: "2. Locate a nearby Bike Biryani Executive", desc: "Look for the branded uniform" },
                { icon: <FaWallet className="text-2xl md:text-3xl" />, title: "3. Pay & Enjoy", desc: "Pay via UPI or cash, collect your meal, and enjoy the delicious biryani!" },
              ].map((step, index) => (
                <Fade direction="up" delay={index * 100} triggerOnce key={index}>
                  <div className="flex-shrink-0 w-48 md:w-auto flex flex-col items-center text-center bg-gradient-to-b from-white to-amber-50 p-4 rounded-2xl shadow-lg border border-amber-100 transition-transform duration-300 hover:scale-105 h-full"> {/* Flex-shrink-0 for horizontal scroll */}
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mb-2 flex-shrink-0"> {/* Reduced icon circle size and bottom margin on mobile */}
                      {step.icon}
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 mt-2">{step.title}</h3> {/* Reduced text size and top/bottom margin on mobile */}
                    <p className="text-xs md:text-base text-gray-600 flex-grow">{step.desc}</p> {/* Reduced text size on mobile */}
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-amber-50 to-orange-50"> {/* Reduced vertical padding on mobile */}
        <div className="container mx-auto px-4">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-8 md:mb-16"> {/* Reduced margin-bottom on mobile */}
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 px-6 rounded-full mb-4">
                <FaUtensils className="mr-2" />
                <h2 className="text-2xl md:text-4xl font-bold">Our Menu</h2>
              </div>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                Delicious options ready in minutes
              </p>
            </div>
          </Fade>
          
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pb-4"> {/* Horizontal scroll on mobile */}
            {[
              { 
                title: "Chicken Biryani", 
                desc: "Kushka OR Ghee Rice with Chicken Curry", 
                price: "₹125",
                mrp: "₹200",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/biryani-break.firebasestorage.app/o/images%2Fmenu_items%2Fimages.jpeg?alt=media&token=2d150842-5af8-4959-bb36-376257541397" 
              },
              { 
                title: "Ghee Rice with Dal Fry", 
                desc: "Ghee Rice with Dal Fry", 
                price: "₹100", 
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/biryani-break.firebasestorage.app/o/images%2Fmenu_items%2Fimage-9785-1746418438.jpg?alt=media&token=540d12a2-cead-4bc7-9dc1-fd9bbb912697" 
              },
              { 
                title: "Bread Kulcha with Chicken Curry OR Dal Fry", 
                desc: "Soft Bread Kulcha with Chicken Curry or Dal Fry", 
                price: "₹100", 
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/biryani-break.firebasestorage.app/o/images%2Fmenu_items%2Fchicken%20bun.jpeg?alt=media&token=068dc1f0-5562-48c4-88d2-d8ca1db613c7" 
              },
              { 
                title: "Egg Chaat", 
                desc: "Eggs with Chaat Masala", 
                price: "₹70", 
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/biryani-break.firebasestorage.app/o/images%2Fmenu_items%2Fpower%20eggs.jpg?alt=media&token=aff740d5-4cfa-44cf-a114-a6575d807cab" 
              },
              { 
                title: "Pav with Chicken Curry or Dal Fry", 
                desc: "Soft Pav with Chicken Curry OR Dal Fry", 
                price: "₹100", 
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/biryani-break.firebasestorage.app/o/images%2Fmenu_items%2Fpower%20eggs.jpg?alt=media&token=aff740d5-4cfa-44cf-a114-a6575d807cab" 
              },
            ].map((item, index) => (
              <Fade direction="up" delay={index * 100} triggerOnce key={index}>
                <div className="flex-shrink-0 w-64 md:w-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col h-full"> {/* Flex-shrink-0 for horizontal scroll */}
                  <div className="h-32 md:h-48 relative"> {/* Reduced image height on mobile */}
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded-t-2xl" 
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/E0E0E0/6C757D?text=Image+Not+Found"; }} 
                    />
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-1 px-3 md:px-4 rounded-full font-bold text-sm md:text-base"> {/* Reduced price tag size on mobile */}
                      {item.mrp && <span className="line-through mr-2">{item.mrp}</span>}
                      {item.price}
                    </div>
                  </div>
                  <div className="p-4 md:p-6 flex-grow flex flex-col"> {/* Adjusted padding */}
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{item.title}</h3> {/* Reduced text size on mobile */}
                    <p className="text-xs md:text-base text-gray-600 mb-3 md:mb-4 flex-grow">{item.desc}</p> {/* Reduced text size on mobile */}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          
          <Fade direction="up" triggerOnce>
            <div className="text-center mt-6 md:mt-12"> {/* Reduced margin-top on mobile */}
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-2 px-6 md:py-4 md:px-10 rounded-full text-sm md:text-lg shadow-lg transform transition-all duration-300 hover:scale-105"> {/* Adjusted button size on mobile */}
                See Full Menu
              </button>
            </div>
          </Fade>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-8 md:py-20 bg-white"> {/* Reduced vertical padding on mobile */}
        <div className="container mx-auto px-4">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-8 md:mb-16"> {/* Reduced margin-bottom on mobile */}
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 px-6 rounded-full mb-4">
                <FaMapMarkerAlt className="mr-2" />
                <h2 className="text-2xl md:text-4xl font-bold">Where To Find Us</h2>
              </div>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                We operate at the most active footfall zones across the city
              </p>
            </div>
          </Fade>
          
          <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-md border border-amber-100">
            <p className="text-center text-gray-800 text-base md:text-lg">
              Colleges & Universities • Tech Parks & IT Hubs • Apartments & Hostels • Railway Stations • Bus Depots • Metro Stations • Marketplaces • ...and more!
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-8 md:py-20 bg-gradient-to-r from-amber-500 to-orange-600"> {/* Reduced vertical padding on mobile */}
        <div className="container mx-auto px-4 text-center">
          <Fade direction="up" triggerOnce>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Coming Soon</h2>
              <p className="text-base md:text-xl text-amber-100 mb-6 md:mb-8">
Pre-orders will soon be available on our mobile app!
For now, visit any of our spots and order directly from your nearby Bike Biryani executive.
              </p>
              <button className="bg-white text-amber-700 font-bold py-2 px-6 rounded-full text-sm md:text-lg shadow-lg transform transition-all duration-300 hover:scale-105"> {/* Adjusted button size on mobile */}
                Get Notified
              </button>
            </div>
          </Fade>
        </div>
      </section>

      {/* App Download Banner */}
      <section className="py-6 md:py-12 bg-gradient-to-r from-gray-900 to-black"> {/* Reduced vertical padding on mobile */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"> 
            <div className="mb-4 md:mb-0"> {/* Reduced margin-bottom on mobile */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Get the Bike Biryani App</h3>
              <p className="text-sm md:text-base text-amber-200">Order faster, track your delivery, and get exclusive offers!</p>
            </div>
            <div className="flex flex-row space-x-2"> {/* Reduced spacing */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.bikebiryani.bikeBiryaniCustomer" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black border border-gray-700 text-white px-4 py-2 rounded-lg flex items-center justify-center"
              >
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/biryani-break.firebasestorage.app/o/logos%2Fgoogle-play-store-icon-play-store-icon-symbol-illustration-free-vector.jpg?alt=media&token=78c9b7d9-f329-4f59-9100-cf00e2457494" 
                  alt="Google Play Store" 
                  className="w-5 h-5 mr-2 object-contain" 
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/32x32/E0E0E0/6C757D?text=Play"; }} 
                />
                <div>
                  <div className="text-xs text-left">GET IT ON</div>
                  <div className="font-bold text-sm text-left">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
