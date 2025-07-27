// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Changed BrowserRouter to HashRouter
import { Container } from 'react-bootstrap'; // Note: Still using React-Bootstrap Container, consider migrating to Tailwind if possible for full consistency.

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JoinUsPage from './pages/JoinUsPage';
import TermsAndConditions from './pages/TermsAndConditions';


const App = () => {
  return (
    <Router> {/* This is now HashRouter */}
      <div className="app-container-flex min-h-screen flex flex-col"> {/* Added flex utilities for full height layout */}
        <Header />

        <main className="flex-grow pt-5 pb-5">
          {/* Note: If you want to use pure Tailwind for layout, replace React-Bootstrap Container */}
          <Container> 
            <Routes>
              {/* This makes HomePage the default route when the app loads */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/join" element={<JoinUsPage />} />
              <Route path="/terms" element={<TermsAndConditions />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
