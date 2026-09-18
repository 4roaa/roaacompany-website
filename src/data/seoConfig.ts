import { Language } from '../types';
import { COMPANY_CONFIG } from './company';

export interface RouteSEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}

export const SEO_ROUTES: Record<string, Record<Language, RouteSEOMetadata>> = {
  '/': {
    ar: {
      title: 'Roaacompany — حلول رقمية تبدأ من احتياج العمل | تصميم وتطوير المواقع والمنصات',
      description:
        'شركة سعودية متخصصة في الحلول الرقمية، تصميم وتطوير المواقع المؤسسية، البوابات الإلكترونية، لوحات التحكم، والأنظمة السحابية المبنية خصيصاً لاحتياجات أعمالك.',
      keywords:
        'شركة حلول رقمية في السعودية, تصميم مواقع شركات, تطوير منصات رقمية, لوحات تحكم أعمال, برمجة بوابات إلكترونية, تحول رقمي للشركات, Roaacompany',
      canonicalPath: '/',
      ogType: 'website',
      breadcrumbs: [{ name: 'الرئيسية', path: '/' }],
    },
    en: {
      title: 'Roaacompany — Digital Solutions Built Around Business | Web & Platform Engineering',
      description:
        'Leading Saudi digital solutions agency crafting bespoke corporate websites, enterprise portals, dashboards, and scalable cloud systems tailored to business goals.',
      keywords:
        'Digital solutions agency Saudi Arabia, Corporate website development, Custom enterprise portals, Business dashboards, Scalable web applications, Roaacompany',
      canonicalPath: '/',
      ogType: 'website',
      breadcrumbs: [{ name: 'Home', path: '/' }],
    },
  },
  '/about': {
    ar: {
      title: 'نبذة عنا | Roaacompany — رؤيتنا ومنهجية العمل في الحلول الرقمية',
      description:
        'تعرّف على Roaacompany، فلسفتنا التقنية، وفريقنا الهندسي المتخصص في ابتكار حلول رقمية تدعم نمو قطاعات الأعمال في المملكة بأعلى معايير الجودة والسرية.',
      keywords:
        'عن شركة Roaacompany, فلسفة العمل التقني, فريق تطوير برمجيات بالسعودية, جودة البرمجيات, استشارات تقنية للشركات',
      canonicalPath: '/about',
      ogType: 'website',
      breadcrumbs: [
        { name: 'الرئيسية', path: '/' },
        { name: 'نبذة عنا', path: '/about' },
      ],
    },
    en: {
      title: 'About Us | Roaacompany — Our Vision & Strategic Engineering Methodology',
      description:
        'Discover Roaacompany, our engineering philosophy, and our team dedicated to building resilient digital infrastructure that accelerates enterprise growth in Saudi Arabia.',
      keywords:
        'About Roaacompany, Software engineering Saudi Arabia, Digital consulting team, Enterprise tech methodology, Software craft',
      canonicalPath: '/about',
      ogType: 'website',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
      ],
    },
  },
  '/industries': {
    ar: {
      title: 'القطاعات والحلول التقنية | Roaacompany — حلول مخصصة للمقاولات والخدمات واللوجستيات',
      description:
        'حلول رقمية وأنظمة مخصصة لقطاعات المقاولات والإنشاءات، الشركات المهنية والاستشارية، والخدمات اللوجستية والتجارة، مصممة لأتمتة العمليات ورفع الكفاءة التشغيلية.',
      keywords:
        'حلول رقمية للمقاولات, بوابات شركات الخدمات المهنية, أنظمة لوجستية وسلاسل إمداد, أتمتة العمليات, حلول تقنية متخصصة بالسعودية',
      canonicalPath: '/industries',
      ogType: 'website',
      breadcrumbs: [
        { name: 'الرئيسية', path: '/' },
        { name: 'القطاعات والحلول', path: '/industries' },
      ],
    },
    en: {
      title: 'Industries & Tech Solutions | Roaacompany — Tailored Systems for Enterprise Sectors',
      description:
        'Domain-specific software systems and portals for Contracting & Construction, Professional Services, and Logistics & Supply Chain, engineered to automate operations.',
      keywords:
        'Contracting software solutions, Professional services portals, Logistics digital platforms, Enterprise automation, Industry tech Saudi Arabia',
      canonicalPath: '/industries',
      ogType: 'website',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Industries', path: '/industries' },
      ],
    },
  },
  '/contact': {
    ar: {
      title: 'تواصل معنا | Roaacompany — اطلب استشارة تقنية وعرض سعر لمشروعك',
      description:
        'تواصل مباشرة مع مستشاري Roaacompany لمناقشة مشروعك القادم، استكشاف المتطلبات مجاناً، والحصول على عرض فني ومالي محدد ومفصل خلال 24 ساعة.',
      keywords:
        'طلب استشارة تقنية, عرض سعر تطوير موقع, التواصل مع شركة برمجة, مستشار حلول رقمية, Roaacompany تواصل',
      canonicalPath: '/contact',
      ogType: 'website',
      breadcrumbs: [
        { name: 'الرئيسية', path: '/' },
        { name: 'تواصل معنا', path: '/contact' },
      ],
    },
    en: {
      title: 'Contact Us | Roaacompany — Request a Tech Consultation & Project Proposal',
      description:
        'Get in touch with Roaacompany advisors to discuss your project requirements, receive a complimentary discovery assessment, and get a clear technical proposal within 24h.',
      keywords:
        'Hire web developers Saudi Arabia, Tech consultation request, Software quote proposal, Contact Roaacompany',
      canonicalPath: '/contact',
      ogType: 'website',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
  },
  '/privacy': {
    ar: {
      title: 'سياسة الخصوصية وحماية البيانات | Roaacompany',
      description:
        'التزام Roaacompany بحماية سرية وأمان بياناتك وتفاصيل مشاريعك وفق الأنظمة المعمول بها في المملكة العربية السعودية.',
      keywords: 'سياسة الخصوصية Roaacompany, حماية البيانات, سرية المعلومات',
      canonicalPath: '/privacy',
      ogType: 'website',
      breadcrumbs: [
        { name: 'الرئيسية', path: '/' },
        { name: 'سياسة الخصوصية', path: '/privacy' },
      ],
    },
    en: {
      title: 'Privacy Policy & Data Protection | Roaacompany',
      description:
        'Roaacompany’s commitment to safeguarding your privacy, client data confidentiality, and intellectual property in compliance with Saudi regulations.',
      keywords: 'Privacy policy Roaacompany, Data protection, NDA confidentiality',
      canonicalPath: '/privacy',
      ogType: 'website',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy' },
      ],
    },
  },
  '/terms': {
    ar: {
      title: 'الشروط والأحكام والتعاقد | Roaacompany',
      description:
        'الشروط والأحكام المنظمة للتعاملات والخدمات البرمجية والحلول الرقمية المقدمة من شركة رؤى للحلول الرقمية.',
      keywords: 'شروط التعاقد, أحكام استخدام Roaacompany, اتفاقيات مستوى الخدمة',
      canonicalPath: '/terms',
      ogType: 'website',
      breadcrumbs: [
        { name: 'الرئيسية', path: '/' },
        { name: 'الشروط والأحكام', path: '/terms' },
      ],
    },
    en: {
      title: 'Terms of Service & Engagement | Roaacompany',
      description:
        'Terms of service, engineering agreements, and service level conditions governing the solutions provided by Roaacompany.',
      keywords: 'Terms of service, Software SLA, Roaacompany legal agreement',
      canonicalPath: '/terms',
      ogType: 'website',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Terms of Service', path: '/terms' },
      ],
    },
  },
};

export const getSEOMetadataForPath = (path: string, language: Language): RouteSEOMetadata => {
  // Normalize path
  const cleanPath = path.split('?')[0].split('#')[0] || '/';
  
  // Exact match
  if (SEO_ROUTES[cleanPath]) {
    return SEO_ROUTES[cleanPath][language];
  }

  // Fallback for root or unknown routes
  return SEO_ROUTES['/'][language];
};
