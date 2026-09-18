import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/company';
import { useLanguage } from '../../context/LanguageContext';

export const WhatsAppFloat: React.FC = () => {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  const fullUrl = COMPANY_CONFIG.getWhatsAppUrl(language);

  return (
    <div
      className="fixed bottom-6 end-6 z-40 pointer-events-none flex items-center gap-2 group"
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          className="hidden sm:block px-3 py-1.5 rounded-lg text-xs font-medium bg-[#12544F] text-[#F7F4ED] border border-[#2A835F]/40 shadow-xl pointer-events-none whitespace-nowrap animate-fade-in"
        >
          {language === 'ar' ? 'تواصل عبر واتساب' : 'Chat via WhatsApp'}
        </div>
      )}

      {/* Floating Button - strictly handles pointer events */}
      <a
        id="floating-whatsapp-btn"
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Roaacompany on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="pointer-events-auto w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] flex items-center justify-center shadow-lg shadow-[#092328]/80 hover:shadow-[#2A835F]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#2A835F]/40"
      >
        <MessageSquare className="w-7 h-7 fill-[#F7F4ED] text-[#F7F4ED]" />
      </a>
    </div>
  );
};
