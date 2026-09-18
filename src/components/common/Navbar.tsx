import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 16) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // The 4 Core Primary Pages requested
  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/industries', label: t.nav.industries },
    { path: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#092328]/95 backdrop-blur-md border-b border-[#12544F]/80 shadow-md shadow-[#092328]/50 py-2'
          : 'bg-[#092328]/40 backdrop-blur-sm py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <BrandLogo size="sm" />
          </div>

          {/* Desktop Navigation Links - 4 Core Pages */}
          <nav
            id="desktop-navigation"
            className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full bg-[#12544F]/30 border border-[#12544F]/60 backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.path.replace('/', '') || 'home'}`}
                  className={`px-3.5 py-1 text-xs sm:text-[13px] font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    active
                      ? 'bg-[#2A835F] text-[#F7F4ED] shadow-sm shadow-[#2A835F]/40 font-semibold'
                      : 'text-[#F7F4ED]/80 hover:text-[#F7F4ED] hover:bg-[#12544F]/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Language Switcher & Start a Project CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Language Switcher Pill */}
            <button
              id="desktop-language-toggle-btn"
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider text-[#F7F4ED] bg-[#12544F]/40 hover:bg-[#12544F]/70 border border-[#12544F] hover:border-[#2A835F]/50 transition-colors"
              title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#2A835F]" />
              <span className={language === 'ar' ? 'text-[#2A835F] font-bold' : 'text-[#F7F4ED]/70'}>AR</span>
              <span className="text-[#12544F]">|</span>
              <span className={language === 'en' ? 'text-[#2A835F] font-bold' : 'text-[#F7F4ED]/70'}>EN</span>
            </button>

            {/* Primary CTA */}
            <Link
              to="/contact"
              id="header-start-project-cta"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold text-[#F7F4ED] bg-gradient-to-r from-[#2A835F] to-[#12544F] hover:from-[#32986f] hover:to-[#176660] rounded-lg shadow-sm shadow-[#2A835F]/30 hover:shadow-[#2A835F]/50 transition-all transform active:scale-95"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-language-toggle-btn"
              type="button"
              onClick={toggleLanguage}
              className="p-1.5 rounded-lg text-xs font-semibold text-[#F7F4ED] bg-[#12544F]/60 border border-[#12544F] flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#2A835F]" />
              <span className="font-bold">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#F7F4ED] bg-[#12544F]/60 hover:bg-[#12544F] border border-[#12544F] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F7F4ED]" /> : <Menu className="w-5 h-5 text-[#F7F4ED]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#092328]/98 border-b border-[#12544F]/80 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`mobile-link-${link.path.replace('/', '') || 'home'}`}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                    active
                      ? 'bg-[#12544F]/70 text-[#F7F4ED] border-r-4 rtl:border-r-4 ltr:border-l-4 border-[#2A835F] font-semibold'
                      : 'text-[#F7F4ED]/80 hover:bg-[#12544F]/40 hover:text-[#F7F4ED]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#2A835F]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 mt-3 border-t border-[#12544F]/60 flex flex-col gap-2">
            <Link
              to="/contact"
              id="mobile-drawer-start-project-cta"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#F7F4ED] bg-[#2A835F] hover:bg-[#247353] rounded-lg shadow-md transition-colors"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
