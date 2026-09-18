import React from 'react';
import { Sparkles, Code2, Layers, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

interface DigitalEcosystemArchitectureProps {
  className?: string;
  badgeText?: string;
  customTitle?: string;
}

export const DigitalEcosystemArchitecture: React.FC<DigitalEcosystemArchitectureProps> = ({
  className = '',
  badgeText,
  customTitle,
}) => {
  const { language } = useLanguage();

  const previewCards = [
    {
      id: 'EXP',
      title: language === 'ar' ? 'التجربة الرقمية' : 'Digital Experience',
      desc: language === 'ar' ? 'تجارب تفاعلية متقنة ومتمحورة حول الإنسان' : 'Engaging, human-centered UI',
      icon: Sparkles,
      color: 'from-[#12544F]/40 to-[#092328] border-[#12544F]/80 text-[#2A835F]',
    },
    {
      id: 'WEB',
      title: language === 'ar' ? 'حلول الويب' : 'Web Solutions',
      desc: language === 'ar' ? 'مواقع مؤسسية متطورة وقابلة للتوسع' : 'Scalable corporate platforms',
      icon: Code2,
      color: 'from-[#12544F]/50 to-[#092328] border-[#2A835F]/30 text-[#F7F4ED]',
    },
    {
      id: 'PORTALS',
      title: language === 'ar' ? 'بوابات الأعمال' : 'Business Portals',
      desc: language === 'ar' ? 'منصات آمنة ومترابطة للعملاء والشركاء' : 'Secure client & partner spaces',
      icon: Layers,
      color: 'from-[#12544F]/30 to-[#092328] border-[#12544F]/80 text-[#2A835F]',
    },
    {
      id: 'DASHBOARDS',
      title: language === 'ar' ? 'لوحات التحكم' : 'Dashboards',
      desc: language === 'ar' ? 'مؤشرات لحظية للأداء التشغيلي والقرارات' : 'Real-time operational KPIs',
      icon: TrendingUp,
      color: 'from-[#2A835F]/20 to-[#12544F]/20 border-[#2A835F]/40 text-[#2A835F]',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative max-w-6xl mx-auto ${className}`}
    >
      {/* Ambient Container */}
      <div className="relative rounded-2xl bg-[#12544F]/25 border border-[#12544F]/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        {/* Header inside the architecture preview */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-[#12544F]/70 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#2A835F] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#F7F4ED] uppercase tracking-wider">
              {customTitle ||
                (language === 'ar'
                  ? 'من احتياج العمل إلى المنظومة الرقمية المتكاملة'
                  : 'From Business Need to Digital Ecosystem')}
            </span>
          </div>
          <span className="text-xs text-[#F7F4ED]/80 bg-[#12544F]/60 px-3 py-1 rounded-md border border-[#12544F]">
            {badgeText || 'Roaa Architecture v2026'}
          </span>
        </div>

        {/* Grid of Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`relative p-5 rounded-xl bg-gradient-to-b ${card.color} border transition-all duration-300 hover:-translate-y-1 hover:border-[#2A835F]/50 group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-6 h-6 text-[#2A835F]" />
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#092328]/80 text-[#F7F4ED]/90 border border-[#12544F]">
                    {card.id}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#F7F4ED] mb-1">
                  {card.title}
                </h4>
                <p className="text-xs text-[#F7F4ED]/70 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
