export const COMPANY_CONFIG = {
  name: 'Roaacompany',
  legalNameAr: 'شركة رؤى للحلول الرقمية والتقنية',
  legalNameEn: 'Roaacompany for Digital Solutions & Creative Technology',
  sloganAr: 'حلول رقمية تبدأ من احتياج العمل',
  sloganEn: 'Digital Solutions Built Around Business',
  locationAr: 'المملكة العربية السعودية',
  locationEn: 'Saudi Arabia',
  website: 'https://roaacompany.com/',
  email: 'info@roaacompany.com',
  phone: '+966 56 597 7147',
  phoneClean: '+966565977147',
  whatsappNumber: '966565977147',
  whatsappDefaultMessageAr: 'مرحباً Roaacompany، أود الاستفسار عن خدماتكم والحلول الرقمية.',
  whatsappDefaultMessageEn: 'Hello Roaacompany, I would like to inquire about your services and digital solutions.',
  whatsappUrl: 'https://wa.me/966565977147?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Roaacompany%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85%20%D9%88%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%84%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9.',
  getWhatsAppUrl: (lang: 'ar' | 'en' = 'ar', customMessage?: string) => {
    const text =
      customMessage ||
      (lang === 'ar'
        ? 'مرحباً Roaacompany، أود الاستفسار عن خدماتكم والحلول الرقمية.'
        : 'Hello Roaacompany, I would like to inquire about your services and digital solutions.');
    return `https://wa.me/966565977147?text=${encodeURIComponent(text)}`;
  },
  workingHoursAr: 'الأحد – الخميس: 9:00 ص – 6:00 م',
  workingHoursEn: 'Sunday – Thursday: 9:00 AM – 6:00 PM',
  establishedYear: 2026,
  socialLinks: {
    linkedin: 'https://linkedin.com/company/roaacompany',
    x: 'https://x.com/roaacompany',
    github: 'https://github.com/roaacompany',
  },
};
