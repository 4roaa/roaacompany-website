import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Sparkles,
  Settings2,
  Check,
  MapPin,
  Compass,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface VideoPreset {
  id: string;
  titleAr: string;
  titleEn: string;
  badgeAr: string;
  badgeEn: string;
  url: string;
  descAr: string;
  descEn: string;
}

const RIYADH_PRESETS: VideoPreset[] = [
  {
    id: 'riyadh-kafd-night',
    titleAr: 'مركز كافد المالي KAFD ليلاً',
    titleEn: 'KAFD Financial District at Night',
    badgeAr: 'أبراج المال والأعمال 4K',
    badgeEn: '4K Financial Hub',
    url: 'https://www.youtube.com/watch?v=DtQg5vjmIns',
    descAr: 'مشهد سينمائي يبرز ناطحات سحاب مركز الملك عبدالله المالي وإضاءات الأعمال الحديثة.',
    descEn: 'Cinematic night drone footage showcasing KAFD financial skyscrapers and digital business hubs.',
  },
  {
    id: 'riyadh-skyline-4k',
    titleAr: 'سماء الرياض 4K — جولة جوية سينمائية',
    titleEn: 'Riyadh 4K — Cinematic Aerial Tour',
    badgeAr: 'برج المملكة • الفيصلية • المجدول',
    badgeEn: 'Kingdom Tower • Faisaliah • Majdoul',
    url: 'https://www.youtube.com/watch?v=hYQNVvOMX24',
    descAr: 'تصوير جوي بدقة 4K يبرز معالم الرياض وناطحات السحاب في العاصمة.',
    descEn: 'Ultra-HD 4K drone cinematography showcasing Riyadh modern skyline.',
  },
];

// Helper to extract YouTube ID
const extractYouTubeId = (url: string): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const HeroVideoPlayer: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>(RIYADH_PRESETS[0].url);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [customInputUrl, setCustomInputUrl] = useState<string>('');

  const youtubeId = extractYouTubeId(currentVideoUrl);
  const isYouTube = Boolean(youtubeId);

  // Toggle Play / Pause for HTML5 video
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Toggle Mute for HTML5 video
  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Handle Progress update for HTML5 video
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  // Seek video
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = isRtl ? rect.right - e.clientX : e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = newPercent * (videoRef.current.duration || 0);
  };

  // Restart video
  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  // Switch preset
  const handleSelectPreset = (index: number) => {
    setActivePresetIndex(index);
    setCurrentVideoUrl(RIYADH_PRESETS[index].url);
    setIsPlaying(true);
    setShowSettings(false);
  };

  // Apply custom URL
  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInputUrl.trim()) {
      setCurrentVideoUrl(customInputUrl.trim());
      setIsPlaying(true);
      setShowSettings(false);
    }
  };

  useEffect(() => {
    if (!isYouTube && videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentVideoUrl, isYouTube]);

  const currentPreset = RIYADH_PRESETS[activePresetIndex];

  return (
    <div
      id="hero-video-showcase-wrapper"
      className="relative max-w-5xl mx-auto mt-12 sm:mt-16 w-full"
    >
      {/* Ambient Glow Decoration with Green/Teal Tone */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2A835F]/40 via-[#12544F]/60 to-[#2A835F]/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative rounded-2xl sm:rounded-3xl bg-[#092328] border border-[#12544F] overflow-hidden shadow-2xl shadow-[#092328]/95 group"
      >
        {/* Top Location & Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#092328]/95 border-b border-[#12544F]/80 backdrop-blur-md z-20 relative">
          {/* Left: Riyadh Badge */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2A835F] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2A835F]" />
            </span>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#2A835F]" />
              <span className="text-xs sm:text-sm font-bold text-[#F7F4ED] tracking-wide">
                {language === 'ar' ? 'الرياض — المملكة العربية السعودية' : 'Riyadh — Kingdom of Saudi Arabia'}
              </span>
            </div>
            <span className="hidden md:inline-block text-[10px] px-2 py-0.5 rounded-md bg-[#12544F]/80 text-[#2A835F] border border-[#2A835F]/40 font-semibold uppercase tracking-wider">
              {language === 'ar' ? 'عاصمة التحول الرقمي' : 'Digital Capital'}
            </span>
          </div>

          {/* Right: Quick Preset Switchers + Custom Button */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {RIYADH_PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectPreset(idx)}
                className={`px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  currentVideoUrl === preset.url
                    ? 'bg-[#2A835F] text-[#F7F4ED] shadow-sm shadow-[#2A835F]/50 font-bold'
                    : 'bg-[#12544F]/40 hover:bg-[#12544F]/80 text-[#F7F4ED]/80 hover:text-[#F7F4ED] border border-[#12544F]'
                }`}
              >
                {idx === 0
                  ? (language === 'ar' ? 'سماء الرياض 4K' : 'Riyadh 4K')
                  : idx === 1
                  ? (language === 'ar' ? 'فيلم العاصمة' : 'Drone Film')
                  : (language === 'ar' ? 'الرياض ليلاً' : 'Night Metropolis')}
              </button>
            ))}

            <button
              type="button"
              id="hero-video-settings-toggle-btn"
              onClick={() => setShowSettings(!showSettings)}
              className="inline-flex items-center gap-1 px-2 py-1 text-[11px] sm:text-xs font-medium rounded-lg text-[#F7F4ED]/75 hover:text-[#F7F4ED] bg-[#12544F]/30 hover:bg-[#12544F]/70 border border-[#12544F] transition-colors"
              title={language === 'ar' ? 'تخصيص الفيديو' : 'Customize video'}
            >
              <Settings2 className="w-3.5 h-3.5 text-[#2A835F]" />
            </button>
          </div>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video w-full bg-[#092328] overflow-hidden flex items-center justify-center">
          {isYouTube ? (
            /* YouTube Embed for 4K Cinematic Drone Footage */
            <iframe
              key={youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&modestbranding=1&rel=0&playsinline=1`}
              title="Riyadh 4K Cinematic Showcase"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            /* Direct MP4 Video Player with Custom Controls */
            <>
              <video
                ref={videoRef}
                src={currentVideoUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092328] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Large Center Play Button when Paused */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play video"
                  id="hero-video-center-play-btn"
                  className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2A835F]/90 hover:bg-[#2A835F] text-[#F7F4ED] flex items-center justify-center shadow-2xl shadow-[#2A835F]/60 transform hover:scale-105 transition-all border border-[#F7F4ED]/30 backdrop-blur-sm"
                >
                  <Play className="w-8 h-8 fill-current translate-x-0.5 rtl:-translate-x-0.5" />
                </button>
              )}
            </>
          )}

          {/* Settings & Selection Drawer */}
          {showSettings && (
            <div className="absolute inset-0 z-30 bg-[#092328]/95 backdrop-blur-xl p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#12544F]">
                  <h3 className="text-base sm:text-lg font-bold text-[#F7F4ED] flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#2A835F]" />
                    <span>{language === 'ar' ? 'مقاطع مدينة الرياض وحلول Roaacompany' : 'Riyadh City Videos & Showreels'}</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#12544F]/50 text-[#F7F4ED] hover:bg-[#12544F]"
                  >
                    {language === 'ar' ? 'إغلاق' : 'Close'}
                  </button>
                </div>

                {/* Presets Grid */}
                <div className="mt-4">
                  <p className="text-xs text-[#F7F4ED]/70 mb-3">
                    {language === 'ar'
                      ? 'اختر من مقاطع الرياض السينمائية المعتمدة:'
                      : 'Choose from verified Riyadh cinematic videos:'}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {RIYADH_PRESETS.map((preset, idx) => {
                      const isCurrent = currentVideoUrl === preset.url;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => handleSelectPreset(idx)}
                          className={`p-3 rounded-xl border text-start transition-all flex flex-col justify-between gap-2.5 ${
                            isCurrent
                              ? 'bg-[#12544F] border-[#2A835F] text-[#F7F4ED] shadow-md shadow-[#2A835F]/40'
                              : 'bg-[#12544F]/30 border-[#12544F] text-[#F7F4ED]/80 hover:bg-[#12544F]/60'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold">
                              {language === 'ar' ? preset.titleAr : preset.titleEn}
                            </span>
                            {isCurrent && <Check className="w-4 h-4 text-[#2A835F]" />}
                          </div>
                          <p className="text-[11px] text-[#F7F4ED]/65 leading-relaxed">
                            {language === 'ar' ? preset.descAr : preset.descEn}
                          </p>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#092328]/80 text-[#2A835F] border border-[#2A835F]/30 self-start font-mono">
                            {language === 'ar' ? preset.badgeAr : preset.badgeEn}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Video URL input */}
                <div className="mt-6 pt-4 border-t border-[#12544F]">
                  <p className="text-xs text-[#F7F4ED]/70 mb-2">
                    {language === 'ar'
                      ? 'أو أدخل أي رابط يوتيوب أو MP4 لمقطع ترغب بعرضه للرياض أو الشركة:'
                      : 'Or enter any YouTube or direct MP4 URL to display:'}
                  </p>
                  <form onSubmit={handleApplyCustomUrl} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="url"
                      placeholder="https://www.youtube.com/watch?v=... أو https://.../riyadh.mp4"
                      value={customInputUrl}
                      onChange={(e) => setCustomInputUrl(e.target.value)}
                      className="flex-grow px-3.5 py-2 text-xs rounded-xl bg-[#092328] border border-[#12544F] text-[#F7F4ED] focus:outline-none focus:border-[#2A835F]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] transition-colors whitespace-nowrap"
                    >
                      {language === 'ar' ? 'تشغيل المقطع' : 'Load Video'}
                    </button>
                  </form>
                </div>
              </div>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-[#F7F4ED]/60">
                  {language === 'ar'
                    ? 'يدعم مقاطع اليوتيوب بجودة 4K وروابط الفيديو المباشرة'
                    : 'Supports 4K YouTube embeds and direct video streaming'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Control Bar for HTML5 Video or Info Bar for YouTube */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#092328]/95 border-t border-[#12544F]/70 flex flex-col gap-2 relative z-20">
          {!isYouTube ? (
            <>
              {/* Progress Scrubber */}
              <div
                className="w-full h-1.5 bg-[#12544F]/60 rounded-full cursor-pointer relative overflow-hidden group/scrub"
                onClick={handleSeek}
                title={language === 'ar' ? 'شريط تقدم المقطع' : 'Video progress'}
              >
                <div
                  className="h-full bg-gradient-to-r from-[#12544F] via-[#2A835F] to-[#2A835F] transition-all rounded-full relative"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between text-xs text-[#F7F4ED]/90 pt-0.5">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-[#12544F]/70 text-[#F7F4ED] transition-colors flex items-center gap-1"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-[#2A835F]" /> : <Play className="w-4 h-4 text-[#2A835F]" />}
                    <span className="hidden sm:inline font-medium">
                      {isPlaying ? (language === 'ar' ? 'إيقاف مؤقت' : 'Pause') : (language === 'ar' ? 'تشغيل' : 'Play')}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleRestart}
                    className="p-1.5 rounded-lg hover:bg-[#12544F]/70 text-[#F7F4ED]/80 hover:text-[#F7F4ED] transition-colors"
                    title={language === 'ar' ? 'إعادة تشغيل من البداية' : 'Replay'}
                    aria-label="Replay"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-[#12544F]/70 text-[#F7F4ED] transition-colors flex items-center gap-1.5"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-[#F7F4ED]/60" />
                        <span className="text-[11px] text-[#F7F4ED]/60 hidden sm:inline">
                          {language === 'ar' ? 'مكتوم' : 'Muted'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-[#2A835F]" />
                        <span className="text-[11px] text-[#2A835F] hidden sm:inline">
                          {language === 'ar' ? 'صوت مفعّل' : 'Audio On'}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#2A835F] font-semibold">
                    {language === 'ar' ? currentPreset?.titleAr : currentPreset?.titleEn}
                  </span>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-[#12544F]/70 text-[#F7F4ED] transition-colors"
                    title={language === 'ar' ? 'شاشة كاملة' : 'Fullscreen'}
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Informational Bar for YouTube 4K stream */
            <div className="flex items-center justify-between text-xs text-[#F7F4ED]/90 py-0.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2A835F] animate-pulse" />
                <span className="text-xs font-semibold text-[#F7F4ED]">
                  {language === 'ar' ? currentPreset?.titleAr : currentPreset?.titleEn}
                </span>
                <span className="text-[10px] text-[#2A835F] font-medium hidden sm:inline">
                  {language === 'ar' ? '• جودة فائقة 4K' : '• Ultra HD 4K'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#F7F4ED]/60 hidden md:inline">
                  {language === 'ar'
                    ? 'Roaacompany • الرياض، المملكة العربية السعودية'
                    : 'Roaacompany • Riyadh, Saudi Arabia'}
                </span>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="p-1 rounded-md hover:bg-[#12544F]/70 text-[#F7F4ED] transition-colors"
                  title={language === 'ar' ? 'شاشة كاملة' : 'Fullscreen'}
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
