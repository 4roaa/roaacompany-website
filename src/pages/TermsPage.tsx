import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/company';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';

export const TermsPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#092328] text-[#F7F4ED] pt-20 pb-16 sm:pb-24">
      <DigitalRibbonBg />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F7F4ED] mb-6 tracking-tight">
          {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
        </h1>
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12544F]/25 border border-[#12544F] text-[#F7F4ED]/85 leading-relaxed space-y-6 text-xs sm:text-sm md:text-base">
          <p>
            {language === 'ar'
              ? `أهلاً بكم في موقع ${COMPANY_CONFIG.name}. استخدامك لهذا الموقع يخضع للشروط والأحكام التالية.`
              : `Welcome to ${COMPANY_CONFIG.name}. Your use of this website is governed by the following terms.`}
          </p>
          <h2 className="text-xl font-bold text-[#F7F4ED]">
            {language === 'ar' ? '١. الملكية الفكرية' : '1. Intellectual Property'}
          </h2>
          <p>
            {language === 'ar'
              ? 'جميع المحتويات، الشعارات، الهويات والتصاميم الواردة في هذا الموقع هي ملكية حصرية لشركة Roaacompany ومحمية بموجب أنظمة حماية حقوق المؤلف والعلامات التجارية في المملكة العربية السعودية.'
              : 'All content, logos, designs, and brand elements on this website are proprietary to Roaacompany and protected under applicable copyright and intellectual property laws.'}
          </p>
          <h2 className="text-xl font-bold text-[#F7F4ED]">
            {language === 'ar' ? '٢. عروض الأسعار والاتفاقيات' : '2. Proposals & Contracts'}
          </h2>
          <p>
            {language === 'ar'
              ? 'المعلومات المعروضة في الموقع لأغراض الاسترشاد والتعريف بالقدرات. أي مشروع تنفيذي يتم وفق نطاق عمل مخصص (SOW) وعقد رسمي مستقل يحدد المراحل، المخرجات، والضمانات.'
              : 'Information on this site is for informational purposes. All client projects are executed under dedicated Statements of Work (SOW) and contracts specifying milestones, deliverables, and SLAs.'}
          </p>
        </div>
      </div>
    </div>
  );
};
