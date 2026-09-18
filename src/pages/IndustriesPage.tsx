import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Briefcase,
  Truck,
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { INDUSTRIES_DATA } from '../data/industries';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';
import { DigitalEcosystemArchitecture } from '../components/common/DigitalEcosystemArchitecture';

export const IndustriesPage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return Cpu;
      case 'Briefcase':
        return Briefcase;
      case 'Truck':
        return Truck;
      case 'GraduationCap':
        return GraduationCap;
      case 'Building2':
      default:
        return Building2;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#092328] text-[#F7F4ED] pt-20">
      <DigitalRibbonBg />

      {/* Hero Header */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#12544F]/70 text-[#F7F4ED] border border-[#2A835F]/40 mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2A835F]" />
            <span>{t.industriesPage.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F4ED] tracking-tight leading-tight">
            {t.industriesPage.heroTitle}
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 max-w-3xl mx-auto leading-relaxed">
            “{t.industriesPage.heroSubtitle}”
          </p>
        </div>
      </section>

      {/* Ecosystem Architecture Flow: Business Need to Sector Digital Architecture */}
      <section id="sectors-ecosystem-architecture" className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <DigitalEcosystemArchitecture
          badgeText={language === 'ar' ? 'معمارية القطاعات الرقمية' : 'Sector Digital Architecture'}
          customTitle={
            language === 'ar'
              ? 'من متطلبات القطاع إلى المنظومة الرقمية المتكاملة'
              : 'From Sector Needs to Integrated Digital Ecosystem'
          }
        />
      </section>

      {/* Industries Grid */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {INDUSTRIES_DATA.map((industry) => {
            const Icon = getIndustryIcon(industry.iconName);
            const title = language === 'ar' ? industry.titleAr : industry.titleEn;
            const desc = language === 'ar' ? industry.descriptionAr : industry.descriptionEn;
            const deliverables = language === 'ar' ? industry.deliverablesAr : industry.deliverablesEn;

            return (
              <div
                key={industry.id}
                id={industry.id}
                className="rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/50 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-8">
                  {/* Left info */}
                  <div className="max-w-xl">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F7F4ED] mb-2 sm:mb-3">
                      {title}
                    </h2>

                    <p className="text-xs sm:text-sm md:text-base text-[#F7F4ED]/80 leading-relaxed">
                      {desc}
                    </p>

                    <div className="mt-5 sm:mt-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2A835F] hover:text-[#41a87d] transition-colors group"
                      >
                        <span>{language === 'ar' ? 'طلب استشارة لهذا القطاع' : 'Consult on Sector Solutions'}</span>
                        <ArrowUpRight className={`w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                      </Link>
                    </div>
                  </div>

                  {/* Right deliverables list */}
                  <div className="lg:w-1/2 rounded-xl bg-[#092328]/60 border border-[#12544F] p-5 sm:p-6">
                    <h3 className="text-xs uppercase font-bold text-[#2A835F] tracking-wider mb-3 sm:mb-4">
                      {t.industriesPage.keyDeliverablesLabel}
                    </h3>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#F7F4ED]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#2A835F] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Scope Evaluation Note */}
          <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#12544F]/20 border border-[#12544F] text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
            <Info className="w-5 h-5 text-[#2A835F] flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base text-[#F7F4ED]/75 font-medium leading-relaxed">
              “{t.industriesPage.evaluationNote}”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
