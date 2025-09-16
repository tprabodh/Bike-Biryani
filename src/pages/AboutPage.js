import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Hero Banner */}
      <header
        className="relative h-96 flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-amber-900/50"></div>
        <div className="relative max-w-4xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            About <span className="text-amber-300">Bike</span> Biryani
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Delicious, fresh biryani delivered to your doorstep by bike – made with care and served with a smile. Our goal: A happy customer every time!
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4 sm:px-6">
        {/* Section 1: Our Vision */}
        <Fade direction="up" triggerOnce>
          <section className="flex flex-col lg:flex-row items-center gap-12 py-20">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-amber-400 rounded-full absolute -top-6 -left-6 -z-10"></div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/biryani-break.firebasestorage.app/o/logos%2FOS.png?alt=media&token=713b630b-a3f2-4ebe-a3dd-d6ac21d6638b"
                  alt="Our Vision"
                  className="rounded-2xl shadow-xl w-full max-w-md object-cover h-96"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full mb-4 text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision & Journey
              </h2>
              <div className="space-y-5 text-gray-700">
                <p className="text-lg">
                  Welcome to <span className="font-semibold text-amber-600">Bike Biryani</span>, where passion meets flavour on two wheels We’re dedicated to bringing authentic, aromatic biryani to your doorstep with speed and care.
                </p>
                <p className="text-lg">
                  Founded by food enthusiasts who noticed a gap in quality delivery options, we set out to create a service that prioritizes both taste and convenience. Our journey began with a simple mission: to make exceptional biryani accessible to everyone in the city.
                </p>
                <p className="text-lg">
                  As a proud division of <span className="font-bold text-amber-700">Oxysmart Private Limited</span>, we combine culinary excellence with innovative delivery solutions. Our fleet of dedicated riders ensures your biryani arrives hot, fresh, and full of flavour.
                </p>
              </div>
            </div>
          </section>
        </Fade>

        {/* Section 2: Our Commitment */}
        <Fade direction="up" delay={100} triggerOnce>
          <section className="py-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-amber-100 text-amber-800 py-1 px-4 rounded-full mb-4 text-sm font-medium">
                Our Promise
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Commitments
              </h2>
              <p className="text-xl text-gray-600">
                We're dedicated to excellence in every aspect of our service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: 'Quality Ingredients',
                  text: 'Only the freshest, premium ingredients sourced daily',
                  icon: '🥩',
                },
                {
                  title: 'Authentic Flavors',
                  text: 'Traditional recipes with a perfect balance of spices',
                  icon: '🧆',
                },
                {
                  title: 'Hygiene First',
                  text: 'Rigorous cleanliness standards in every kitchen',
                  icon: '🧼',
                },
                {
                  title: 'Speedy Delivery',
                  text: 'Hot meals delivered faster than you expect',
                  icon: '⚡',
                },
                {
                  title: 'Customer Delight',
                  text: 'Going above and beyond to make you smile',
                  icon: '😊',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </Fade>

        {/* Stats Section */}
        <Fade direction="up" delay={200} triggerOnce>
          <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl mb-20">
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '10,000+', label: 'Happy Customers' },
                  { value: '50+', label: 'Daily Deliveries' },
                  { value: '15 min', label: 'Avg. Delivery Time' },
                  { value: '98%', label: 'Satisfaction Rate' },
                ].map((stat) => (
                  <div key={stat.label} className="text-white">
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-amber-100 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Fade>

        {/* Section 3: Join Our Journey */}
        <Fade direction="up" delay={300} triggerOnce>
          <section className="relative py-20 rounded-3xl overflow-hidden">
            {/* Removed the bg-image layer; only gradient remains */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-amber-900/80 z-10"></div>

            <div className="relative z-20 max-w-4xl mx-auto text-center px-4 py-12">
              <div className="inline-block bg-amber-300 text-amber-900 py-1 px-4 rounded-full mb-4 text-sm font-medium">
                Join Us
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Be Part of Our Flavourful Journey
              </h2>
              <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
                We're constantly evolving, expanding our menu, and reaching more food lovers across the city. Your support fuels our passion!
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#/contact"
                  className="px-8 py-4 bg-white text-amber-900 font-bold rounded-full shadow-lg hover:bg-amber-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contact Us
                </a>
                <a
                  href="#/join"
                  className="px-8 py-4 bg-amber-500 text-white font-bold rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Join Our Team
                </a>
              </div>

              <p className="text-amber-200 mt-10">
                For partnerships, feedback, or career opportunities, we'd love to hear from you.
              </p>
            </div>
          </section>
        </Fade>
      </main>
    </div>
  );
}
