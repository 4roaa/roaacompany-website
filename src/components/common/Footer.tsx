import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_CONFIG } from '../../data/company';

export const Footer: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/industries', label: t.nav.industries },
    { path: '/contact', label: t.nav.contact },
    { path: '/terms', label: t.footer.terms },
    { path: '/privacy', label: t.footer.privacy },
  ];

  const industryLinks = [
    { path: '/industries#corporate', label: language === 'ar' ? 'الشركات والخدمات المهنية' : 'Corporate & Professional' },
    { path: '/industries#contracting', label: language === 'ar' ? 'المقاولات والإنشاءات' : 'Contracting & Construction' },
    { path: '/industries#logistics', label: language === 'ar' ? 'الخدمات اللوجستية والنقل' : 'Logistics & Supply Chain' },
    { path: '/industries#education', label: language === 'ar' ? 'التعليم والمراكز التدريبية' : 'Education & Training' },
    { path: '/industries#technology', label: language === 'ar' ? 'شركات التقنية والمنصات' : 'Technology & Platforms' },
  ];

  return (
    <footer id="main-site-footer" className="bg-[#092328] border-t border-[#12544F] text-[#F7F4ED]/80 relative overflow-hidden">
      {/* Decorative top gradient accent in Jade and Pine */}
      <div className="h-1 w-full bg-gradient-to-r from-[#2A835F] via-[#12544F] to-[#2A835F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo />
            <p className="text-sm sm:text-base text-[#F7F4ED]/80 leading-relaxed max-w-sm">
              {t.footer.slogan}
            </p>
            <p className="text-xs text-[#F7F4ED]/60 leading-relaxed max-w-sm">
              {language === 'ar'
                ? 'شركة سعودية للحلول الرقمية والتقنية الإبداعية؛ نساعد الشركات على تحويل أهدافها التشغيلية إلى تجارب ومنصات رقمية متطورة وقابلة للتوسع.'
                : 'Saudi-based digital solutions and creative technology company helping businesses transform operational needs into scalable digital solutions.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-[#12544F]/50 border border-[#12544F] text-[#2A835F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A835F] animate-pulse" />
                {language === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F7F4ED] mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#F7F4ED]/70 hover:text-[#2A835F] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Industries Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F7F4ED] mb-4">
              {language === 'ar' ? 'القطاعات التي نخدمها' : 'Industries We Serve'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {industryLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-[#F7F4ED]/70 hover:text-[#2A835F] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F7F4ED] mb-4">
              {t.footer.contactDetails}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-[#F7F4ED]/70">
                <MapPin className="w-4 h-4 text-[#2A835F] mt-1 flex-shrink-0" />
                <span>{language === 'ar' ? COMPANY_CONFIG.locationAr : COMPANY_CONFIG.locationEn}</span>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="flex items-center gap-2.5 text-[#F7F4ED]/70 hover:text-[#F7F4ED] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#2A835F] flex-shrink-0" />
                  <span className="ltr-text">{COMPANY_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONFIG.getWhatsAppUrl(language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#F7F4ED]/70 hover:text-[#2A835F] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2A835F] flex-shrink-0" />
                  <span className="ltr-text">{COMPANY_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONFIG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#F7F4ED]/70 hover:text-[#2A835F] transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#2A835F] flex-shrink-0" />
                  <span className="ltr-text">roaacompany.com</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F7F4ED]/50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#12544F]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4ED]/60 relative z-10 pb-4 sm:pb-2">
          <p className="order-2 sm:order-1 text-center sm:text-start">
            © 2026 {COMPANY_CONFIG.name}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6 order-1 sm:order-2 rtl:sm:pe-24 ltr:sm:pe-24">
            <Link
              to="/privacy"
              id="footer-privacy-link"
              className="hover:text-[#2A835F] hover:underline underline-offset-4 transition-colors py-1.5 px-2 rounded hover:bg-[#12544F]/30"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to="/terms"
              id="footer-terms-link"
              className="text-[#F7F4ED] hover:text-[#2A835F] hover:underline underline-offset-4 transition-colors py-1.5 px-2 rounded hover:bg-[#12544F]/30 font-medium"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
