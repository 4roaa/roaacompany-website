import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  MapPin,
  Sparkles,
  Tv,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface VideoScene {
  id: string;
  youtubeId: string;
  titleAr: string;
  titleEn: string;
  badgeAr: string;
  badgeEn: string;
}

const RIYADH_SCENES: VideoScene[] = [
  {
    id: 'kafd-night',
    youtubeId: 'DtQg5vjmIns',
    titleAr: 'مركز كافد المالي KAFD',
    titleEn: 'KAFD Financial District',
    badgeAr: 'أبراج المال والأعمال 4K',
    badgeEn: '4K Financial Hub',
  },
  {
    id: 'riyadh-skyline',
    youtubeId: 'hYQNVvOMX24',
    titleAr: 'سماء وأبراج الرياض',
    titleEn: 'Riyadh Iconic Towers',
    badgeAr: 'المملكة والفيصلية',
    badgeEn: 'Kingdom & Faisaliah',
  },
];

export const HeroVideoBackgroundSection: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isAudioOn, setIsAudioOn] = useState(false);

  const activeScene = RIYADH_SCENES[currentSceneIndex];

  return (
    <section
      id="hero-section"
      className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* ========================================================= */}
      {/* 1. VIBRANT 4K VIDEO IN THE BACKGROUND (Vivid & Clear)    */}
      {/* ========================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* YouTube Video iframe configured for clear seamless background loop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[116vw] h-[65.25vw] min-w-[206vh] min-h-[116vh]">
          <iframe
            key={`${activeScene.youtubeId}-${isAudioOn ? 'audio' : 'mute'}`}
            src={`https://www.youtube-nocookie.com/embed/${activeScene.youtubeId}?autoplay=1&mute=${
              isAudioOn ? '0' : '1'
            }&loop=1&playlist=${activeScene.youtubeId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0`}
            title="Riyadh 4K Cinematic Background Video"
            className="w-full h-full object-cover filter brightness-[1.03] contrast-[1.04]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Delicate Vignette: Soft gradient at top and bottom to seamlessly merge with navbar and page */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#092328]/80 via-[#092328]/25 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#092328] via-[#092328]/60 to-transparent pointer-events-none" />

        {/* Very soft ambient tint (15%) preserving 100% of video clarity while easing eye strain */}
        <div className="absolute inset-0 bg-[#092328]/15 pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 2. FOREGROUND TEXT CONTENT (Directly Over the Video)     */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        <div className="flex flex-col items-center">
          {/* Badges Row: Location & Framework */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mb-5 sm:mb-6"
          >
            {/* Live Riyadh Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#092328]/85 text-[#F7F4ED] border border-[#2A835F]/60 shadow-xl backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2A835F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2A835F]" />
              </span>
              <MapPin className="w-3.5 h-3.5 text-[#2A835F]" />
              <span>
                {language === 'ar'
                  ? 'الرياض، المملكة العربية السعودية'
                  : 'Riyadh, Kingdom of Saudi Arabia'}
              </span>
            </div>

            {/* Framework Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#12544F]/90 text-[#F7F4ED] border border-[#2A835F]/50 shadow-xl backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#2A835F]" />
              <span>{t.hero.badge}</span>
            </div>
          </motion.div>

          {/* Company Brand Title & Slogan */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#F7F4ED] tracking-tight leading-[1.15]"
          >
            <span className="block text-[#F7F4ED] font-['Manrope',sans-serif] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 sm:mb-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Roaacompany
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7F4ED] via-[#41a87d] to-[#F7F4ED] drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]">
              {t.hero.slogan}
            </span>
          </motion.h1>

          {/* Subtitle / Core Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-xl lg:text-2xl text-[#F7F4ED] font-semibold leading-relaxed max-w-3xl mx-auto drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]"
          >
            {t.hero.description}
          </motion.p>

          {/* Pillars & Disciplines Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 sm:mt-7 flex flex-col items-center gap-2"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#092328]/85 border border-[#2A835F]/60 text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#F7F4ED] shadow-xl backdrop-blur-md drop-shadow">
              {t.hero.pillars}
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#F7F4ED] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              {t.hero.disciplines}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link
              to="/industries"
              id="hero-explore-solutions-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-[#F7F4ED] bg-[#2A835F] hover:bg-[#237051] rounded-2xl shadow-2xl shadow-[#2A835F]/60 hover:shadow-[#2A835F]/80 transition-all transform hover:-translate-y-0.5 active:scale-95 border border-[#41a87d]"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowUpRight className={`w-5 h-5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </Link>

            <Link
              to="/contact"
              id="hero-start-conversation-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-[#F7F4ED] hover:text-white bg-[#092328]/85 hover:bg-[#12544F] border border-[#2A835F]/60 hover:border-[#2A835F] rounded-2xl shadow-xl backdrop-blur-md transition-all"
            >
              <span>{t.hero.ctaSecondary}</span>
            </Link>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 3. SLEEK CONTROLLER DOCK (Bottom Switcher & Mute)        */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs"
        >
          {/* Scenes Switcher */}
          <div className="inline-flex items-center p-1 rounded-2xl bg-[#092328]/90 border border-[#2A835F]/50 shadow-2xl backdrop-blur-md">
            <span className="px-3 py-1.5 text-xs font-bold text-[#2A835F] flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {language === 'ar' ? 'فيديو الرياض 4K:' : 'Riyadh 4K:'}
              </span>
            </span>

            <div className="flex items-center gap-1">
              {RIYADH_SCENES.map((scene, idx) => {
                const isActive = idx === currentSceneIndex;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => setCurrentSceneIndex(idx)}
                    className={`px-3 sm:px-4 py-1.5 rounded-xl font-semibold transition-all ${
                      isActive
                        ? 'bg-[#2A835F] text-[#F7F4ED] shadow-lg shadow-[#2A835F]/40'
                        : 'text-[#F7F4ED]/80 hover:text-[#F7F4ED] hover:bg-[#12544F]/50'
                    }`}
                  >
                    {language === 'ar' ? scene.titleAr : scene.titleEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Audio Mute/Unmute Toggle */}
          <button
            type="button"
            onClick={() => setIsAudioOn(!isAudioOn)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-[#092328]/90 hover:bg-[#12544F]/80 border border-[#2A835F]/50 text-[#F7F4ED] shadow-2xl backdrop-blur-md transition-all font-semibold"
            title={language === 'ar' ? 'تشغيل/كتم الصوت' : 'Toggle Audio'}
          >
            {isAudioOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#2A835F]" />
                <span>{language === 'ar' ? 'الصوت: يعمل' : 'Audio: On'}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#F7F4ED]/70" />
                <span>{language === 'ar' ? 'مكتوم' : 'Muted'}</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
