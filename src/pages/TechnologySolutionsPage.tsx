import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  LayoutDashboard,
  Workflow,
  FileText,
  BarChart3,
  Network,
  Code2,
  CheckCircle2,
  ArrowUpRight,
  Info,
  Layers,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TECHNOLOGY_SOLUTIONS_DATA } from '../data/solutions';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';

export const TechnologySolutionsPage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return Users;
      case 'LayoutDashboard':
        return LayoutDashboard;
      case 'Workflow':
        return Workflow;
      case 'FileText':
        return FileText;
      case 'BarChart3':
        return BarChart3;
      case 'Network':
        return Network;
      case 'Code2':
      default:
        return Code2;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#092328] text-[#F7F4ED] pt-24">
      <DigitalRibbonBg />

      {/* Hero Header */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#12544F]/70 text-[#F7F4ED] border border-[#2A835F]/40 mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2A835F]" />
            <span>{t.solutionsPage.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F4ED] tracking-tight leading-tight">
            {t.solutionsPage.heroTitle}
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 max-w-3xl mx-auto leading-relaxed">
            “{t.solutionsPage.heroSubtitle}”
          </p>

          {/* Pricing Note */}
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#12544F]/30 border border-[#12544F] text-xs sm:text-sm text-[#F7F4ED]/80 max-w-2xl text-start">
            <Info className="w-5 h-5 text-[#2A835F] flex-shrink-0" />
            <span>{t.solutionsPage.pricingNote}</span>
          </div>
        </div>
      </section>

      {/* 7 Solution Cards Grid */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {TECHNOLOGY_SOLUTIONS_DATA.map((solution) => {
              const Icon = getSolutionIcon(solution.iconName);
              const title = language === 'ar' ? solution.titleAr : solution.titleEn;
              const secondaryTitle = language === 'ar' ? solution.titleEn : solution.titleAr;
              const desc = language === 'ar' ? solution.descriptionAr : solution.descriptionEn;
              const useCase = language === 'ar' ? solution.useCaseAr : solution.useCaseEn;
              const features = language === 'ar' ? solution.featuresAr : solution.featuresEn;

              return (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/60 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#2A835F]/20 group"
                >
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-[#F7F4ED]/60 font-['Manrope',sans-serif] px-2.5 py-1 rounded bg-[#092328] border border-[#12544F]">
                        {secondaryTitle}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#F7F4ED] mb-2">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed mb-5 sm:mb-6">
                      {desc}
                    </p>

                    {/* Realistic Use Case Box */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#092328]/60 border border-[#12544F] mb-5 sm:mb-6">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A835F] mb-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{t.solutionsPage.useCaseLabel}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#F7F4ED]/75 leading-relaxed">
                        {useCase}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6">
                      {features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#F7F4ED]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2A835F] mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Discuss This Solution Button */}
                  <div className="pt-4 sm:pt-5 border-t border-[#12544F]">
                    <Link
                      to={`/contact?service=${solution.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#F7F4ED] bg-[#12544F] hover:bg-[#2A835F] rounded-lg transition-all group-hover:bg-[#2A835F]"
                    >
                      <span>{t.solutionsPage.discussBtn}</span>
                      <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
