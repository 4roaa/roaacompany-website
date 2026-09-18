import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ScrollToTop } from './components/common/ScrollToTop';
import { RouteSEOHandler } from './components/common/RouteSEOHandler';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';
import { BackToTopFloat } from './components/common/BackToTopFloat';

// The 4 Core Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <RouteSEOHandler />
          <div className="flex flex-col min-h-screen bg-[#092328] text-[#F7F4ED] selection:bg-[#2A835F] selection:text-[#F7F4ED]">
            {/* Global Navbar */}
            <Navbar />

            {/* Page Routes - 4 Core Pages */}
            <main className="flex-grow">
              <Routes>
                {/* 1. الرئيسية (Home) */}
                <Route path="/" element={<HomePage />} />

                {/* 2. نبذة عنا (About Us) */}
                <Route path="/about" element={<AboutPage />} />

                {/* 3. القطاعات التي نخدمها (Industries) */}
                <Route path="/industries" element={<IndustriesPage />} />

                {/* 4. تواصل معنا (Contact) */}
                <Route path="/contact" element={<ContactPage />} />

                {/* Legacy route redirects to the 4 main pages */}
                <Route path="/services" element={<Navigate to="/industries" replace />} />
                <Route path="/technology-solutions" element={<Navigate to="/industries" replace />} />
                <Route path="/how-we-work" element={<Navigate to="/about" replace />} />

                {/* Privacy & Terms */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Global Footer, WhatsApp & Back to Top Actions */}
            <Footer />
            <WhatsAppFloat />
            <BackToTopFloat />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
