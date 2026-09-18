import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Quote,
  Shield,
  Layers,
  Compass,
  FileCode,
  Rocket,
  RefreshCw,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROCESS_STAGES, PARTNERSHIP_VALUES } from '../data/process';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';

export const HowWeWorkPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeStep, setActiveStep] = useState<string>('01');

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return Compass;
      case '02':
        return Layers;
      case '03':
        return Layers;
      case '04':
        return FileCode;
      case '05':
        return Rocket;
      case '06':
      default:
        return RefreshCw;
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
            <span>{t.howWeWorkPage.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F4ED] tracking-tight leading-tight">
            {t.howWeWorkPage.heroTitle}
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 max-w-3xl mx-auto leading-relaxed">
            {t.howWeWorkPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 6 Stages Interactive Visual Roadmap */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4ED] tracking-tight leading-snug">
              {t.howWeWorkPage.stagesLabel}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PROCESS_STAGES.map((stage) => {
              const Icon = getStepIcon(stage.step);
              const isSelected = activeStep === stage.step;
              const title = language === 'ar' ? stage.titleAr : stage.titleEn;
              const subtitle = language === 'ar' ? stage.subtitleAr : stage.subtitleEn;
              const desc = language === 'ar' ? stage.descriptionAr : stage.descriptionEn;
              const activities = language === 'ar' ? stage.activitiesAr : stage.activitiesEn;

              return (
                <div
                  key={stage.step}
                  id={`process-stage-${stage.step}`}
                  onClick={() => setActiveStep(stage.step)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#12544F]/40 border-[#2A835F] shadow-2xl shadow-[#2A835F]/20 sm:scale-[1.01]'
                      : 'bg-[#12544F]/20 border-[#12544F] hover:border-[#2A835F]/50 hover:bg-[#12544F]/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl sm:text-3xl font-black text-[#2A835F] font-['Manrope',sans-serif]">
                        {stage.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#F7F4ED] mb-1">
                      {stage.step} — {title}
                    </h3>
                    <span className="text-xs font-semibold text-[#F7F4ED]/60 block mb-3">
                      {subtitle}
                    </span>

                    <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed mb-5 sm:mb-6">
                      {desc}
                    </p>

                    {/* Stage activities */}
                    <div className="border-t border-[#12544F] pt-4 space-y-2">
                      {activities.map((act, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2 text-xs text-[#F7F4ED]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2A835F] flex-shrink-0" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3 text-end">
                    <span className="text-[11px] font-medium text-[#F7F4ED]/50">
                      Phase {stage.step} / 06
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Approach & Quote */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#12544F]/15 border-t border-[#12544F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quote Banner */}
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl bg-[#12544F]/35 border border-[#2A835F]/40 text-center shadow-xl">
            <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#2A835F] mx-auto mb-4 opacity-80" />
            <blockquote className="text-base sm:text-lg md:text-xl font-bold text-[#F7F4ED] leading-relaxed">
              {t.howWeWorkPage.partnershipQuote}
            </blockquote>
            <p className="mt-3 text-xs text-[#2A835F] uppercase tracking-widest font-semibold">
              Roaacompany Governance Principle
            </p>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4ED] tracking-tight leading-snug">
              {t.howWeWorkPage.partnershipTitle}
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#F7F4ED]/80">
              {language === 'ar'
                ? 'أسس ومبادئ تحكم كل مشروع نعمل عليه مع شركائنا.'
                : 'Guiding principles that govern every client engagement.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PARTNERSHIP_VALUES.map((val) => {
              const title = language === 'ar' ? val.titleAr : val.titleEn;
              const desc = language === 'ar' ? val.descriptionAr : val.descriptionEn;

              return (
                <div
                  key={val.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center mb-4">
                      <Shield className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#F7F4ED] mb-2">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F7F4ED]/75 leading-relaxed">
                      {desc}
                    </p>
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
