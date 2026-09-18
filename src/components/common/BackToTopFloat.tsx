import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const BackToTopFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Appears after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-22 end-6 sm:bottom-24 sm:end-6 z-40 pointer-events-none flex items-center gap-2 group">
          {/* Tooltip on hover */}
          {showTooltip && (
            <div className="hidden sm:block px-3 py-1.5 rounded-lg text-xs font-medium bg-[#12544F] text-[#F7F4ED] border border-[#2A835F]/40 shadow-xl pointer-events-none whitespace-nowrap animate-fade-in">
              {language === 'ar' ? 'العودة للأعلى' : 'Back to Top'}
            </div>
          )}

          {/* Interactive Floating Button */}
          <motion.button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label={language === 'ar' ? 'العودة إلى أعلى الصفحة' : 'Scroll back to top of the page'}
            className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#092328]/90 hover:bg-[#12544F] border border-[#2A835F]/70 hover:border-[#41a87d] text-[#F7F4ED] flex items-center justify-center shadow-xl shadow-[#092328]/80 hover:shadow-[#2A835F]/30 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#2A835F]/40"
          >
            <ArrowUp className="w-5 h-5 text-[#2A835F] group-hover:text-[#41a87d] transition-colors" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};
