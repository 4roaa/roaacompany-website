import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  TrendingUp,
  CheckCircle2,
  Compass,
  Languages,
  Cpu,
  Maximize2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';
import { CTASection } from '../components/common/CTASection';
import { HeroVideoBackgroundSection } from '../components/home/HeroVideoBackgroundSection';

export const HomePage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const whyPillars = [
    {
      id: 'business',
      icon: Compass,
      title: t.whyRoaa.pillars[0].title,
      desc: t.whyRoaa.pillars[0].desc,
    },
    {
      id: 'bilingual',
      icon: Languages,
      title: t.whyRoaa.pillars[1].title,
      desc: t.whyRoaa.pillars[1].desc,
    },
    {
      id: 'integrated',
      icon: Cpu,
      title: t.whyRoaa.pillars[2].title,
      desc: t.whyRoaa.pillars[2].desc,
    },
    {
      id: 'scalable',
      icon: Maximize2,
      title: t.whyRoaa.pillars[3].title,
      desc: t.whyRoaa.pillars[3].desc,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#092328] text-[#F7F4ED] overflow-hidden">
      {/* Dynamic ambient ribbon background */}
      <DigitalRibbonBg />

      {/* Hero Section with Video in Background and Text on Top */}
      <HeroVideoBackgroundSection />

      {/* Brief Intro Section */}
      <section id="home-intro-section" className="py-14 sm:py-18 lg:py-20 bg-[#12544F]/15 border-y border-[#12544F]/50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#12544F]/60 text-[#F7F4ED] border border-[#2A835F]/40 mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2A835F]" />
            <span>Roaacompany Philosophy</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4ED] tracking-tight leading-snug">
            {t.homeIntro.title}
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 leading-relaxed max-w-3xl mx-auto">
            {t.homeIntro.text}
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              id="intro-read-more-link"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#2A835F] hover:text-[#41a87d] transition-colors group"
            >
              <span>{t.homeIntro.linkText}</span>
              {isRtl ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* Three Capabilities Model (DESIGN, BUILD, GROW) */}
      <section id="capabilities-model-section" className="py-14 sm:py-18 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#12544F]/60 text-[#F7F4ED] border border-[#2A835F]/40 mb-3 shadow-sm">
              <span>{t.capabilitiesModel.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4ED] tracking-tight leading-snug">
              {t.capabilitiesModel.title}
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 leading-relaxed">
              {t.capabilitiesModel.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* DESIGN Card */}
            <div
              id="capability-card-design"
              className="relative rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#092328]/80 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="px-3 py-1 rounded-md text-xs font-extrabold tracking-wider uppercase bg-[#2A835F]/15 text-[#2A835F] border border-[#2A835F]/30">
                    {t.capabilitiesModel.design.tag}
                  </span>
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#2A835F]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F7F4ED] mb-2 sm:mb-3">
                  {t.capabilitiesModel.design.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed mb-5 sm:mb-6">
                  {t.capabilitiesModel.design.desc}
                </p>
                <div className="border-t border-[#12544F] pt-5 sm:pt-6">
                  <h4 className="text-xs uppercase font-bold text-[#F7F4ED]/70 tracking-wider mb-3 sm:mb-4">
                    {language === 'ar' ? 'القدرات والخدمات المشمولة:' : 'Core Capabilities:'}
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {t.capabilitiesModel.design.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F7F4ED]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#2A835F] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#12544F]">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2A835F] hover:text-[#41a87d] transition-colors group-hover:underline"
                >
                  <span>{language === 'ar' ? 'استكشف حلول القطاعات' : 'Explore Sector Solutions'}</span>
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Link>
              </div>
            </div>

            {/* BUILD Card */}
            <div
              id="capability-card-build"
              className="relative rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#092328]/80 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="px-3 py-1 rounded-md text-xs font-extrabold tracking-wider uppercase bg-[#12544F]/80 text-[#F7F4ED] border border-[#2A835F]/40">
                    {t.capabilitiesModel.build.tag}
                  </span>
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#2A835F]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F7F4ED] mb-2 sm:mb-3">
                  {t.capabilitiesModel.build.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed mb-5 sm:mb-6">
                  {t.capabilitiesModel.build.desc}
                </p>
                <div className="border-t border-[#12544F] pt-5 sm:pt-6">
                  <h4 className="text-xs uppercase font-bold text-[#F7F4ED]/70 tracking-wider mb-3 sm:mb-4">
                    {language === 'ar' ? 'القدرات والحلول المشمولة:' : 'Core Capabilities:'}
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {t.capabilitiesModel.build.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F7F4ED]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#2A835F] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#12544F]">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2A835F] hover:text-[#41a87d] transition-colors group-hover:underline"
                >
                  <span>{language === 'ar' ? 'استكشف البوابات والأنظمة' : 'Explore Platform Systems'}</span>
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Link>
              </div>
            </div>

            {/* GROW Card */}
            <div
              id="capability-card-grow"
              className="relative rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#092328]/80 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="px-3 py-1 rounded-md text-xs font-extrabold tracking-wider uppercase bg-[#2A835F]/20 text-[#2A835F] border border-[#2A835F]/40">
                    {t.capabilitiesModel.grow.tag}
                  </span>
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#2A835F]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F7F4ED] mb-2 sm:mb-3">
                  {t.capabilitiesModel.grow.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed mb-5 sm:mb-6">
                  {t.capabilitiesModel.grow.desc}
                </p>
                <div className="border-t border-[#12544F] pt-5 sm:pt-6">
                  <h4 className="text-xs uppercase font-bold text-[#F7F4ED]/70 tracking-wider mb-3 sm:mb-4">
                    {language === 'ar' ? 'القدرات والخدمات المشمولة:' : 'Core Capabilities:'}
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {t.capabilitiesModel.grow.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F7F4ED]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#2A835F] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#12544F]">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2A835F] hover:text-[#41a87d] transition-colors group-hover:underline"
                >
                  <span>{language === 'ar' ? 'تواصل لبدء مشروعك' : 'Contact Us to Begin'}</span>
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Roaacompany Section */}
      <section id="why-roaa-section" className="py-14 sm:py-18 lg:py-20 bg-[#12544F]/10 border-t border-[#12544F]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#12544F]/60 text-[#F7F4ED] border border-[#2A835F]/40 mb-3 shadow-sm">
              <span>{t.whyRoaa.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4ED] tracking-tight leading-snug">
              {t.whyRoaa.title}
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 leading-relaxed">
              {t.whyRoaa.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {whyPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={`why-pillar-${pillar.id}`}
                  className="p-6 sm:p-7 rounded-2xl bg-[#12544F]/25 border border-[#12544F] hover:border-[#2A835F]/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F7F4ED] mb-2 sm:mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F7F4ED]/80 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTASection />
    </div>
  );
};
