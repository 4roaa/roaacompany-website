import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Clock,
  Sparkles,
  ShieldCheck,
  FileCheck2,
  Check,
  Copy,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_CONFIG } from '../../data/company';

export const CTASection: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(COMPANY_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const guarantees = [
    {
      icon: Clock,
      titleAr: 'استجابة سريعة خلال 24 ساعة',
      titleEn: 'Rapid response within 24h',
      descAr: 'تواصل مباشر مع مستشارينا التقنيين',
      descEn: 'Direct access to tech advisors',
    },
    {
      icon: Sparkles,
      titleAr: 'جلسة استكشاف وتحليل مجانية',
      titleEn: 'Complimentary discovery session',
      descAr: 'لفهم متطلباتك واقتراح الأنسب',
      descEn: 'Scoping the best tech roadmap',
    },
    {
      icon: ShieldCheck,
      titleAr: 'سرية تامة واتفاقية NDA',
      titleEn: 'Strict NDA & IP protection',
      descAr: 'حماية كاملة لأفكارك وبياناتك',
      descEn: 'Full legal data confidentiality',
    },
    {
      icon: FileCheck2,
      titleAr: 'عرض فني ومالي وجدول زمني دقيق',
      titleEn: 'Clear technical proposal & milestones',
      descAr: 'شفافية كاملة بدون أي تكاليف خفية',
      descEn: 'Transparent milestone delivery',
    },
  ];

  return (
    <section
      id="final-cta-section"
      className="py-14 sm:py-20 lg:py-24 relative overflow-hidden bg-[#071b1f] border-t border-[#12544F]/70"
    >
      {/* Dynamic ambient background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#2A835F]/20 via-[#12544F]/25 to-[#2A835F]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[300px] bg-[#12544F]/20 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The Master Conversion Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-[#0e3138]/90 via-[#092328]/95 to-[#06181b]/95 border border-[#2A835F]/40 shadow-2xl shadow-[#2A835F]/15 backdrop-blur-xl overflow-hidden">
          {/* Subtle decorative inner corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#2A835F]/15 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#12544F]/20 to-transparent rounded-tr-full pointer-events-none" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#12544F]/60 text-[#2A835F] border border-[#2A835F]/50 mb-5 sm:mb-6 shadow-sm shadow-[#2A835F]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2A835F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2A835F]" />
              </span>
              <span>
                {language === 'ar'
                  ? 'جاهزون لمناقشة مشروعك وتحويل فكرتك لواقع'
                  : 'Ready to build and scale your digital solution'}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#F7F4ED] tracking-tight leading-tight">
              {t.cta.title}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 max-w-2xl mx-auto leading-relaxed">
              {t.cta.subtitle}
            </p>

            {/* 4 Conversion & Trust Drivers */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 text-start">
              {guarantees.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0b272c]/70 border border-[#12544F]/70 hover:border-[#2A835F]/50 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#12544F]/60 border border-[#2A835F]/30 text-[#2A835F] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-[#F7F4ED] mb-1">
                      {language === 'ar' ? item.titleAr : item.titleEn}
                    </div>
                    <div className="text-xs text-[#F7F4ED]/65 leading-normal">
                      {language === 'ar' ? item.descAr : item.descEn}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* Primary Consultation Form Link */}
              <Link
                to="/contact"
                id="cta-work-together-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#F7F4ED] bg-gradient-to-r from-[#2A835F] to-[#237051] hover:from-[#237051] hover:to-[#1b5b41] rounded-xl shadow-xl shadow-[#2A835F]/30 hover:shadow-[#2A835F]/50 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>{t.cta.buttonText}</span>
                <ArrowUpRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </Link>

              {/* Direct WhatsApp Chat */}
              <a
                href={COMPANY_CONFIG.getWhatsAppUrl(language)}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-direct-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#F7F4ED] bg-[#12544F]/70 hover:bg-[#12544F] border border-[#2A835F]/50 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A835F]" />
                <span>{language === 'ar' ? 'محادثة عبر واتساب' : 'Chat on WhatsApp'}</span>
              </a>

              {/* Official Email Link with Copy Feature */}
              <div className="w-full sm:w-auto flex items-center justify-center gap-1.5 p-1 rounded-xl bg-[#092328]/80 border border-[#12544F]">
                <a
                  href={`mailto:${COMPANY_CONFIG.email}?subject=${encodeURIComponent(
                    language === 'ar' ? 'طلب استشارة ومناقشة مشروع جديد' : 'New Project Consultation Request'
                  )}`}
                  id="cta-direct-email-btn"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-medium text-[#F7F4ED] hover:text-[#2A835F] transition-colors"
                  title={language === 'ar' ? 'إرسال بريد إلكتروني' : 'Send an Email'}
                >
                  <Mail className="w-4 h-4 text-[#2A835F]" />
                  <span className="ltr-text">{COMPANY_CONFIG.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  id="cta-copy-email-btn"
                  className="p-2.5 sm:p-3 text-[#F7F4ED]/70 hover:text-[#2A835F] hover:bg-[#12544F]/50 rounded-lg transition-colors"
                  title={language === 'ar' ? 'نسخ البريد الإلكتروني' : 'Copy Email Address'}
                >
                  {copied ? <Check className="w-4 h-4 text-[#2A835F]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Micro reassurance footer */}
            <div className="mt-8 pt-6 border-t border-[#12544F]/50 flex flex-wrap items-center justify-center gap-4 text-xs text-[#F7F4ED]/60">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A835F]" />
                {COMPANY_CONFIG.legalNameAr}
              </span>
              <span>•</span>
              <span>{COMPANY_CONFIG.locationAr}</span>
              <span>•</span>
              <span>{COMPANY_CONFIG.workingHoursAr}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
