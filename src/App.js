// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JoinUsPage from './pages/JoinUsPage';
import TermsAndConditions from './pages/TermsAndConditions';


const App = () => {
  return (
    <Router>
      <div className="app-container-flex">
        <Header />

        <main className="flex-grow pt-5 pb-5">
          <Container>
            <Routes>
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
