import React from 'react';
import { Eye, Target, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';
import { AboutFAQSection } from '../components/about/AboutFAQSection';

export const AboutPage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const approachStages = [
    {
      step: '01',
      title: t.about.approach.stages[0].title,
      desc: t.about.approach.stages[0].desc,
    },
    {
      step: '02',
      title: t.about.approach.stages[1].title,
      desc: t.about.approach.stages[1].desc,
    },
    {
      step: '03',
      title: t.about.approach.stages[2].title,
      desc: t.about.approach.stages[2].desc,
    },
    {
      step: '04',
      title: t.about.approach.stages[3].title,
      desc: t.about.approach.stages[3].desc,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#092328] text-[#F7F4ED] pt-20">
      <DigitalRibbonBg />

      {/* Main Section */}
      <section id="about-main-section" className="pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-14 lg:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#12544F]/70 text-[#F7F4ED] border border-[#2A835F]/40 mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2A835F]" />
            <span>{language === 'ar' ? 'عن Roaacompany' : 'About Roaacompany'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F4ED] tracking-tight leading-tight">
            {t.about.heroTitle}
          </h1>

          <div className="mt-6 space-y-4 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 leading-relaxed max-w-4xl">
            {t.about.heroText.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Pillar Pills */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-6 sm:pt-8 border-t border-[#12544F]">
            <div className="p-4 rounded-xl bg-[#12544F]/30 border border-[#12544F]">
              <span className="text-xs font-bold text-[#2A835F] uppercase tracking-wider block mb-1">
                {language === 'ar' ? 'نطاق العمل' : 'Scope'}
              </span>
              <span className="text-sm font-semibold text-[#F7F4ED]">
                {language === 'ar' ? 'حلول أعمال وتقنية إبداعية' : 'Business & Creative Tech'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#12544F]/30 border border-[#12544F]">
              <span className="text-xs font-bold text-[#2A835F] uppercase tracking-wider block mb-1">
                {language === 'ar' ? 'المقر' : 'Headquarters'}
              </span>
              <span className="text-sm font-semibold text-[#F7F4ED]">
                {language === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#12544F]/30 border border-[#12544F]">
              <span className="text-xs font-bold text-[#2A835F] uppercase tracking-wider block mb-1">
                {language === 'ar' ? 'المنهجية' : 'Methodology'}
              </span>
              <span className="text-sm font-semibold text-[#F7F4ED]">
                {language === 'ar' ? 'تبدأ من احتياج العمل الفعلي' : 'Built Around Business Need'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach (4 Stages Visual Track) */}
      <section id="about-approach-section" className="py-14 sm:py-18 lg:py-20 bg-[#12544F]/15 border-y border-[#12544F]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#12544F]/60 text-[#F7F4ED] border border-[#2A835F]/40 mb-3 shadow-sm">
              <span>{t.about.approach.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4ED] tracking-tight leading-snug">
              {t.about.approach.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {approachStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="relative p-6 rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#2A835F] font-['Manrope',sans-serif]">
                      {stage.step}
                    </span>
                    {idx < approachStages.length - 1 && (
                      <div className="hidden lg:block text-[#12544F]">
                        {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                      </div>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F7F4ED] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission-section" className="py-14 sm:py-18 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {/* Vision */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/50 transition-all">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center mb-5 sm:mb-6">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F7F4ED] mb-3 sm:mb-4">
                {t.about.vision.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 leading-relaxed">
                “{t.about.vision.text}”
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/50 transition-all">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center mb-5 sm:mb-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F7F4ED] mb-3 sm:mb-4">
                {t.about.mission.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 leading-relaxed">
                “{t.about.mission.text}”
              </p>
            </div>
          </div>

          {/* Our Promise */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-[#12544F]/50 via-[#092328] to-[#12544F]/50 border border-[#2A835F]/40 text-center max-w-4xl mx-auto shadow-xl">
            <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto rounded-xl bg-[#12544F]/70 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F7F4ED] mb-2">
              {t.about.promise.title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#2A835F] mb-3 sm:mb-4">
              {t.about.promise.sub}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#F7F4ED]/80 leading-relaxed max-w-2xl mx-auto">
              {t.about.promise.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <AboutFAQSection />
    </div>
  );
};
