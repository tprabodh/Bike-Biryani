import React, { useState } from 'react';
import { FaBook, FaShieldAlt, FaUndo } from 'react-icons/fa'; // Icons for navigation

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('terms');

  const sections = {
    terms: {
      title: 'Terms and Conditions',
      icon: <FaBook />,
      content: (
        <>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Bike Biryani food ordering application and services (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all the terms and conditions of this agreement, then you may not access the Service.</p>

          <h2>2. Service Description</h2>
          <p>Bike Biryani provides an online platform that allows users to order food from various restaurants and have it delivered to their specified location. We act as an intermediary between you and the restaurants.</p>

          <h2>3. Ordering and Delivery</h2>
          <p>All orders placed through the Service are subject to availability and confirmation by the respective restaurant. Delivery times are estimates and may vary due to traffic, weather, or other unforeseen circumstances. Bike Biryani is not responsible for delays caused by external factors.</p>

          <h2>4. Payments</h2>
          <p>Payments for orders are processed securely through the application. You agree to pay all charges incurred by you or any users of your account and credit card (or other applicable payment mechanism) at the prices in effect when such charges are incurred.</p>

          <h2>5. User Conduct</h2>
          <p>You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service. You also agree not to attempt to gain unauthorized access to any part of the Service.</p>

          <h2>6. Cancellation and Refunds</h2>
          <p>Cancellation policies vary by restaurant. Please check the specific restaurant's policy before placing an order. Refunds will be processed according to our Return Policy.</p>

          <h2>7. Intellectual Property</h2>
          <p>All content on the Bike Biryani application, including text, graphics, logos, and software, is the property of Bike Biryani or its licensors and is protected by intellectual property laws.</p>

          <h2>8. Limitation of Liability</h2>
          <p>Bike Biryani shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from the use or inability to use the Service.</p>

          <h2>9. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Bike Biryani operates, under the regulations and guidelines set forth by Oxysmart Private Limited, without regard to its conflict of law provisions.</p>

          <h2>10. Changes to Terms</h2>
          <p>Bike Biryani reserves the right to modify these Terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
        </>
      ),
    },
    privacy: {
      title: 'Privacy Policy',
      icon: <FaShieldAlt />,
      content: (
        <>
          <h2>1. Information We Collect</h2>
          <div style={{border: '2px solid #ff0000', padding: '10px', borderRadius: '5px', marginBottom: '20px'}}>
              <h3 style={{color: '#ff0000', fontWeight: 'bold'}}>Prominent Disclosure: Location Data Collection</h3>
              <p><strong>Our app collects location data to enable core features, even when the app is closed or not in use.</strong></p>
              <p>We collect the following types of location data:</p>
              <ul>
                  <li><strong>Precise Location Data:</strong> We collect precise location data from your device when the app is in the foreground and background.</li>
                  <li><strong>Background Location Data:</strong> We collect location data in the background to track the real-time location of our delivery vendors. This is a core feature of our app and is essential for our customers to track their orders.</li>
              </ul>
              <p><strong>Why we collect this data:</strong></p>
              <ul>
                  <li>To show the vendor’s live, real-time location to customers during active orders.</li>
                  <li>To improve delivery accuracy and service efficiency.</li>
                  <li>To provide route optimization, analytics, and fraud prevention.</li>
              </ul>
          </div>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address, and payment details when you register or place orders.</li>
            <li><strong>Non-Personal Information:</strong> Device information (such as model, operating system, unique device identifiers) and app usage data.</li>
            <li><strong>Location Information (Very Important):</strong>
              <ul>
                <li>We collect precise location data from vendors’ devices, including foreground and background location.</li>
                <li>Background Location is collected even when the app is closed or not in active use.</li>
                <li>Location data is used strictly for the following purposes:
                  <ul>
                    <li>To show the vendor’s live, real-time location to customers during active orders.</li>
                    <li>To improve delivery accuracy and service efficiency.</li>
                    <li>To provide route optimization, analytics, and fraud prevention.</li>
                  </ul>
                </li>
                <li>Location information from customers’ devices may also be collected (if permissions are granted) to:
                  <ul>
                    <li>Detect service availability in their area.</li>
                    <li>Suggest nearby vendors and delivery options.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Process and deliver orders.</li>
            <li>Display vendors’ live locations to customers for transparency.</li>
            <li>Improve delivery operations and service efficiency.</li>
            <li>Communicate updates, offers, and support messages.</li>
            <li>Perform analytics to enhance app performance and safety.</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Restaurants/vendors to prepare and fulfill your order.</li>
            <li>Third-party service providers (e.g., payment processors, map and location services) to facilitate our services.</li>
            <li>Customers, who can view the vendor’s real-time location only during active orders.</li>
          </ul>
          <p>We do not sell your personal data to third parties.</p>

          <h2>4. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

          <h2>5. Your Choices</h2>
          <p>You have the following choices regarding your information:</p>
          <ul>
            <li>You can update or delete your account details via the app.</li>
            <li>You can disable or adjust location permissions at any time in your device settings. Note: Disabling location access will prevent us from providing live vendor tracking and may affect service availability.</li>
            <li>You may opt out of promotional communications at any time.</li>
          </ul>

          <h2>6. Cookies</h2>
          <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze site usage, and personalize content. You can control cookie preferences through your browser settings.</p>

          <h2>7. Children's Privacy</h2>
          <p>Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.</p>

          <h2>8. Changes to Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our application or by other means.</p>
        </>
      ),
    },
    return: {
      title: 'Return Policy',
      icon: <FaUndo />,
      content: (
        <>
          <h2>1. General Policy</h2>
          <p>Due to the perishable nature of food items, all sales are generally final. We strive to ensure that all orders are prepared and delivered to the highest quality standards.</p>

          <h2>2. Incorrect or Missing Items</h2>
          <p>If you receive an incorrect item or an item is missing from your order, please contact our customer support immediately (within 1 hour of delivery). We will verify the issue and, at our discretion, offer a refund for the incorrect/missing item or arrange for a redelivery.</p>

          <h2>3. Quality Concerns</h2>
          <p>If you have concerns about the quality of the food received, please provide detailed feedback and, if possible, photographic evidence to our customer support team within 30 minutes of delivery. We will investigate the matter with the restaurant and may offer a partial or full refund, or a credit for a future order, depending on the circumstances.</p>

          <h2>4. Damaged Packaging</h2>
          <p>If your order arrives with significant damage to the packaging that affects the food quality, please report it immediately upon delivery. We may offer a refund or reorder at our discretion.</p>

          <h2>5. Refund Process</h2>
          <p>Approved refunds will be processed to the original payment method within 5-7 business days. The timing of the refund appearing on your statement may vary depending on your bank or payment provider.</p>
          
          <h2>6. Non-Refundable Situations</h2>
          <p>Refunds will generally not be issued for:</p>
          <ul>
            <li>Orders cancelled after the restaurant has started preparing the food.</li>
            <li>Issues arising from customer error (e.g., incorrect address, unavailability to receive delivery).</li>
            <li>Minor discrepancies in food appearance or taste that do not affect quality or safety.</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>For any return or refund inquiries, please contact our customer support team through the application or at [Customer Support Email/Phone Number].</p>
        </>
      ),
    },
  };

  const NavLink = ({ sectionId, title, icon }) => (
    <button
      onClick={() => setActiveSection(sectionId)}
      className={`w-full flex items-center gap-3 p-3 rounded-md text-left transition-colors duration-200 ${
        activeSection === sectionId
          ? 'bg-orange-500 text-white font-semibold shadow-sm'
          : 'text-gray-600 hover:bg-gray-200/70'
      }`}
    >
      <span className="text-xl opacity-80">{icon}</span>
      <span>{title}</span>
    </button>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto max-w-6xl py-16 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Legal Center</h1>
          <p className="text-lg text-gray-500 mt-2">Your questions, answered. Our policies, explained.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Side Navigation */}
          <aside className="md:col-span-1">
            <nav className="space-y-2 p-3 bg-white rounded-lg border border-gray-200/80">
              {Object.entries(sections).map(([id, { title, icon }]) => (
                <NavLink key={id} sectionId={id} title={title} icon={icon} />
              ))}
            </nav>
          </aside>

          {/* Right Side Content */}
          <main className="md:col-span-3">
            <div className="bg-white p-6 sm:p-10 rounded-lg border border-gray-200/80">
              {/* Using prose for beautiful typographic defaults */}
              <div className="prose prose-lg max-w-none 
                              prose-h2:font-semibold prose-h2:text-gray-800 prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:pb-3
                              prose-p:text-gray-600 prose-p:leading-relaxed
                              prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600">
                {sections[activeSection].content}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;