import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/company';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';

export const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#092328] text-[#F7F4ED] pt-20 pb-16 sm:pb-24">
      <DigitalRibbonBg />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F7F4ED] mb-6 tracking-tight">
          {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
        </h1>
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12544F]/25 border border-[#12544F] text-[#F7F4ED]/85 leading-relaxed space-y-6 text-xs sm:text-sm md:text-base">
          <p>
            {language === 'ar'
              ? `تلتزم شركة ${COMPANY_CONFIG.name} بحماية خصوصية زوار موقعنا وعملائنا الكرام. نوضح في هذه الوثيقة كيفية تعاملنا مع البيانات المدخلة عبر نماذج التواصل والخدمات.`
              : `${COMPANY_CONFIG.name} is committed to protecting the privacy of our visitors and clients. This policy explains how we handle inquiries, project briefs, and personal details.`}
          </p>
          <h2 className="text-xl font-bold text-[#F7F4ED]">
            {language === 'ar' ? '١. جمع المعلومات واستخدامها' : '1. Information Collection & Usage'}
          </h2>
          <p>
            {language === 'ar'
              ? 'نقوم بجمع البيانات المقدمة طوعًا مثل الاسم، البريد الإلكتروني، رقم الهاتف، واسم الشركة لغرض تقييم الاحتياجات، تقديم الاستشارات، والتواصل حول المشروعات المطلوبة فقط. نحن لا نشارك أو نبيع بياناتك لأي أطراف خارجية.'
              : 'We collect information provided voluntarily such as name, email, phone number, and company name solely for project evaluation, proposals, and communication. We do not sell or distribute client data to third parties.'}
          </p>
          <h2 className="text-xl font-bold text-[#F7F4ED]">
            {language === 'ar' ? '٢. حماية وأمن البيانات' : '2. Data Protection & Security'}
          </h2>
          <p>
            {language === 'ar'
              ? 'نطبق معايير أمان تقنية وإدارية صارمة لضمان حماية بيانات المشاريع ومراسلات العملاء من أي وصول غير مصرح به.'
              : 'We apply strict technical and administrative safeguards to protect project information and client communications against unauthorized access.'}
          </p>
          <h2 className="text-xl font-bold text-[#F7F4ED]">
            {language === 'ar' ? '٣. التواصل معنا' : '3. Contact Us'}
          </h2>
          <p>
            {language === 'ar'
              ? `لأي استفسارات بخصوص سياسة الخصوصية، يسعدنا تواصلكم عبر البريد: ${COMPANY_CONFIG.email}`
              : `For questions regarding our privacy practices, please contact us at: ${COMPANY_CONFIG.email}`}
          </p>
        </div>
      </div>
    </div>
  );
};
