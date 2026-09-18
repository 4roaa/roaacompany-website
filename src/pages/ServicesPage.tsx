import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Code2, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_DATA } from '../data/services';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';

export const ServicesPage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const getGroupIcon = (category: string) => {
    switch (category) {
      case 'design':
        return Sparkles;
      case 'build':
        return Code2;
      case 'grow':
      default:
        return TrendingUp;
    }
  };

  const getAccentColor = (category: string) => {
    switch (category) {
      case 'design':
        return {
          border: 'border-[#2A835F]/40',
          badge: 'bg-[#12544F]/70 text-[#F7F4ED] border-[#2A835F]/40',
          icon: 'text-[#2A835F] bg-[#12544F]/60',
          button: 'bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] shadow-[#2A835F]/30',
        };
      case 'build':
        return {
          border: 'border-[#12544F]',
          badge: 'bg-[#12544F]/70 text-[#F7F4ED] border-[#2A835F]/40',
          icon: 'text-[#2A835F] bg-[#12544F]/60',
          button: 'bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] shadow-[#2A835F]/30',
        };
      case 'grow':
      default:
        return {
          border: 'border-[#2A835F]/40',
          badge: 'bg-[#12544F]/70 text-[#F7F4ED] border-[#2A835F]/40',
          icon: 'text-[#2A835F] bg-[#12544F]/60',
          button: 'bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] shadow-[#2A835F]/30',
        };
    }
  };

  return (
    <div className="relative min-h-screen bg-[#092328] text-[#F7F4ED] pt-24">
      <DigitalRibbonBg />

      {/* Header */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#12544F]/70 text-[#F7F4ED] border border-[#2A835F]/40 mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2A835F]" />
            <span>{t.servicesPage.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F4ED] tracking-tight leading-tight">
            {t.servicesPage.heroTitle}
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 max-w-3xl mx-auto leading-relaxed">
            {t.servicesPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 3 Main Groups */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16">
          {SERVICES_DATA.map((group) => {
            const Icon = getGroupIcon(group.category);
            const styling = getAccentColor(group.category);
            const title = language === 'ar' ? group.titleAr : group.titleEn;
            const subtitle = language === 'ar' ? group.subtitleAr : group.subtitleEn;
            const description = language === 'ar' ? group.descriptionAr : group.descriptionEn;
            const serviceList = language === 'ar' ? group.servicesAr : group.servicesEn;

            return (
              <div
                key={group.id}
                id={group.id}
                className={`rounded-2xl bg-[#12544F]/25 border ${styling.border} p-6 sm:p-8 lg:p-10 shadow-2xl transition-all`}
              >
                {/* Group Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-[#12544F]">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-[#12544F] ${styling.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${styling.badge}`}>
                        {subtitle}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#F7F4ED]">
                      {title}
                    </h2>

                    <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 leading-relaxed">
                      “{description}”
                    </p>
                  </div>

                  {/* Group Action CTA */}
                  <div className="flex-shrink-0">
                    <Link
                      to={`/contact?service=${group.category}`}
                      className={`inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold ${styling.button} rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap`}
                    >
                      <span>{t.servicesPage.requestServiceBtn}</span>
                      <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                    </Link>
                  </div>
                </div>

                {/* Sub-Services Grid */}
                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-6">
                  {serviceList.map((srv, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-[#092328]/60 border border-[#12544F] hover:border-[#2A835F]/60 transition-colors flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-[#F7F4ED]/80 group-hover:text-[#2A835F] transition-colors">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#2A835F]" />
                          <h3 className="text-xs sm:text-sm font-bold text-[#F7F4ED] group-hover:text-[#2A835F] transition-colors">
                            {srv.name}
                          </h3>
                        </div>
                        <p className="text-xs text-[#F7F4ED]/70 leading-relaxed mt-2">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
