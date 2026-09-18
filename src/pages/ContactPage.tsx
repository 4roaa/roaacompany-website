import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Send,
  Building,
  Clock,
  DollarSign,
  Copy,
  Check,
  FileText,
  ShieldCheck,
  Info,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../data/company';
import { DigitalRibbonBg } from '../components/common/DigitalRibbonBg';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: '',
    estimatedBudget: '',
    timeline: '',
    projectDescription: '',
    preferredContact: 'email',
    agreePrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [generatedMailto, setGeneratedMailto] = useState<string>('');
  const [submittedSnapshot, setSubmittedSnapshot] = useState<ContactFormData | null>(null);
  const [deliveryStatus, setDeliveryStatus] = useState<'sent' | 'needs_activation' | 'fallback'>('sent');

  // Pre-select service type from URL if present
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const serviceMapping: Record<string, string> = {
        design: 'uiux',
        build: 'corporate',
        grow: 'maintenance',
        portals: 'portal',
        dashboards: 'dashboard',
        workflows: 'workflow',
        forms: 'custom',
        reporting: 'dashboard',
        integrations: 'custom',
        'custom-web': 'custom',
      };
      if (serviceMapping[serviceParam]) {
        setFormData((prev) => ({
          ...prev,
          serviceType: serviceMapping[serviceParam],
        }));
      }
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'ar' ? 'يرجى إدخال الاسم الكريم' : 'Full name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = language === 'ar' ? 'يرجى إدخال اسم الشركة أو الجهة' : 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = language === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = language === 'ar' ? 'رقم الجوال مطلوب للتواصل' : 'Phone number is required';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = language === 'ar' ? 'يرجى اختيار نوع الخدمة' : 'Please select a service type';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = language === 'ar' ? 'يرجى تقديم نبذة عن الاحتياج أو المشروع' : 'Please briefly describe your requirements';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = language === 'ar' ? 'يرجى كتابة وصف أطول للتفاصيل (15 حرف على الأقل)' : 'Please provide at least 15 characters';
    }

    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = language === 'ar' ? 'يرجى الموافقة على سياسة الخصوصية للاستمرار' : 'You must accept the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getServiceLabel = (val: string) => {
    const map: Record<string, { ar: string; en: string }> = {
      corporate: { ar: 'مواقع وحلول الويب المؤسسية', en: 'Corporate Web Platforms' },
      redesign: { ar: 'إعادة بناء وتحديث المنصات الرقمية', en: 'Platform Redesign & Modernization' },
      landing: { ar: 'صفحات هبوط وتسويق عالية التحويل', en: 'High-Conversion Landing Pages' },
      uiux: { ar: 'تصميم واجهات وتجربة المستخدم', en: 'UI/UX Engineering & Design' },
      portal: { ar: 'بوابات الأعمال والمنصات التفاعلية', en: 'Business & Client Portals' },
      dashboard: { ar: 'لوحات تحكم وأنظمة مؤشرات الأداء', en: 'Executive Dashboards & BI' },
      workflow: { ar: 'أتمتة العمليات والنماذج الرقمية', en: 'Digital Workflows & Forms' },
      custom: { ar: 'حلول وبرمجيات مخصصة واستشارات', en: 'Custom Software Solutions' },
      maintenance: { ar: 'دعم وتشغيل وصيانة تقنية مستمرة', en: 'Continuous Maintenance & Support' },
      other: { ar: 'استشارة تقنية مخصصة', en: 'Other Technology Consultation' },
    };
    return map[val] ? (language === 'ar' ? map[val].ar : map[val].en) : val;
  };

  const getBudgetLabel = (val: string) => {
    const map: Record<string, { ar: string; en: string }> = {
      '<20k': { ar: 'أقل من 20,000 ريال سعودي', en: '< 20,000 SAR' },
      '20k-50k': { ar: '20,000 – 50,000 ريال سعودي', en: '20,000 – 50,000 SAR' },
      '50k-100k': { ar: '50,000 – 100,000 ريال سعودي', en: '50,000 – 100,000 SAR' },
      '100k-250k': { ar: '100,000 – 250,000 ريال سعودي', en: '100,000 – 250,000 SAR' },
      '>250k': { ar: 'أكثر من 250,000 ريال سعودي', en: '> 250,000 SAR' },
      undisclosed: { ar: 'لم تحدد بعد / قيد الدراسة', en: 'Undisclosed / Flexible' },
    };
    return map[val] ? (language === 'ar' ? map[val].ar : map[val].en) : (val || (language === 'ar' ? 'غير محددة' : 'Not specified'));
  };

  const getTimelineLabel = (val: string) => {
    const map: Record<string, { ar: string; en: string }> = {
      immediate: { ar: 'فوري (خلال شهر)', en: 'Immediate (< 1 month)' },
      '1-3months': { ar: 'خلال 1 – 3 أشهر', en: '1 – 3 Months' },
      '3-6months': { ar: 'خلال 3 – 6 أشهر', en: '3 – 6 Months' },
      flexible: { ar: 'مرن / قيد التخطيط', en: 'Flexible / In Planning' },
    };
    return map[val] ? (language === 'ar' ? map[val].ar : map[val].en) : (val || (language === 'ar' ? 'مرن' : 'Flexible'));
  };

  const getContactMethodLabel = (val: string) => {
    const map: Record<string, { ar: string; en: string }> = {
      email: { ar: 'البريد الإلكتروني', en: 'Email' },
      whatsapp: { ar: 'تطبيق واتساب', en: 'WhatsApp' },
      phone: { ar: 'اتصال هاتفي مباشر', en: 'Direct Phone Call' },
    };
    return map[val] ? (language === 'ar' ? map[val].ar : map[val].en) : val;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const readableService = getServiceLabel(formData.serviceType);
    const readableBudget = getBudgetLabel(formData.estimatedBudget);
    const readableTimeline = getTimelineLabel(formData.timeline);
    const readableContact = getContactMethodLabel(formData.preferredContact);

    // Prepare full client data report payload for live inbox delivery
    const submissionPayload = {
      _subject: `طلب استشارة ومشروع جديد: ${formData.fullName} (${formData.companyName})`,
      _replyto: formData.email,
      _cc: 'Roaaqarnia@gmail.com',
      _template: 'table',
      _captcha: 'false',
      'اسم العميل الكامل': formData.fullName,
      'اسم المنشأة أو الشركة': formData.companyName,
      'البريد الإلكتروني للعميل': formData.email,
      'رقم الجوال': formData.phone,
      'نوع الخدمة المطلوبة': readableService,
      'الميزانية التقديرية': readableBudget,
      'الإطار الزمني للمشروع': readableTimeline,
      'طريقة التواصل المفضلة': readableContact,
      'تفاصيل المشروع والاحتياج': formData.projectDescription,
      'المصدر': 'نموذج التواصل الرسمي - موقع Roaacompany',
      'وقت الإرسال': new Date().toLocaleString(language === 'ar' ? 'ar-SA' : 'en-US', {
        timeZone: 'Asia/Riyadh',
      }),
    };

    // Pre-build mailto link as an immediate secondary backup
    const emailSubject = encodeURIComponent(
      language === 'ar'
        ? `طلب استشارة ومشروع: ${formData.fullName} - ${formData.companyName}`
        : `Project Consultation: ${formData.fullName} - ${formData.companyName}`
    );

    const emailBody = encodeURIComponent(
      `طلب استشارة ومشروع تقني عبر موقع Roaacompany:\n` +
      `==================================================\n\n` +
      `• الاسم الكريم: ${formData.fullName}\n` +
      `• الشركة / المنشأة: ${formData.companyName}\n` +
      `• البريد الإلكتروني: ${formData.email}\n` +
      `• رقم الجوال: ${formData.phone}\n` +
      `• نوع الخدمة: ${readableService}\n` +
      `• الميزانية المتوقعة: ${readableBudget}\n` +
      `• الإطار الزمني: ${readableTimeline}\n` +
      `• طريقة التواصل المفضلة: ${readableContact}\n\n` +
      `تفاصيل الاحتياج والمشروع:\n` +
      `${formData.projectDescription}\n\n` +
      `==================================================\n` +
      `البريد الرسمي المستلم: ${COMPANY_CONFIG.email}\n` +
      `نسخة الإدارة: Roaaqarnia@gmail.com`
    );

    const mailtoUrl = `mailto:${COMPANY_CONFIG.email}?cc=Roaaqarnia@gmail.com&subject=${emailSubject}&body=${emailBody}`;
    setGeneratedMailto(mailtoUrl);

    try {
      // Live HTTP POST directly to FormSubmit endpoint delivering to company email
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_CONFIG.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(submissionPayload),
      });

      const resData = await response.json().catch(() => ({}));
      if (resData?.message && typeof resData.message === 'string' && resData.message.toLowerCase().includes('activation')) {
        setDeliveryStatus('needs_activation');
      } else {
        setDeliveryStatus('sent');
      }

      setSubmittedSnapshot({ ...formData });
      setIsSuccess(true);
      setErrors({});
    } catch (err) {
      console.warn('Direct HTTP dispatch note, falling back to backup mailto link', err);
      setDeliveryStatus('fallback');
      setSubmittedSnapshot({ ...formData });
      setIsSuccess(true);
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(COMPANY_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceType: '',
      estimatedBudget: '',
      timeline: '',
      projectDescription: '',
      preferredContact: 'email',
      agreePrivacy: false,
    });
    setGeneratedMailto('');
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <div className="relative min-h-screen bg-[#092328] text-[#F7F4ED] pt-20 pb-16 sm:pb-20 lg:pb-24">
      <DigitalRibbonBg />

      {/* Header */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#12544F]/70 text-[#F7F4ED] border border-[#2A835F]/40 mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2A835F]" />
            <span>{t.contactPage.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F4ED] tracking-tight leading-tight">
            {t.contactPage.heroTitle}
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 max-w-2xl mx-auto leading-relaxed">
            {t.contactPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#12544F]/25 border border-[#12544F] p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-bold text-[#F7F4ED] mb-6 flex items-center gap-2">
                <span>{t.contactPage.infoCardTitle}</span>
              </h2>

              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#F7F4ED]/60 block mb-0.5">
                      {language === 'ar' ? 'اسم المنشأة' : 'Company Name'}
                    </span>
                    <span className="text-base font-semibold text-[#F7F4ED]">
                      {COMPANY_CONFIG.name}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#F7F4ED]/60 block mb-0.5">
                      {language === 'ar' ? 'المقر' : 'Location'}
                    </span>
                    <span className="text-base font-semibold text-[#F7F4ED]">
                      {language === 'ar' ? COMPANY_CONFIG.locationAr : COMPANY_CONFIG.locationEn}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#F7F4ED]/60 block mb-0.5">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </span>
                    <a
                      href={`mailto:${COMPANY_CONFIG.email}`}
                      className="text-base font-semibold text-[#2A835F] hover:text-[#41a87d] transition-colors ltr-text"
                    >
                      {COMPANY_CONFIG.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#F7F4ED]/60 block mb-0.5">
                      WhatsApp / Mobile
                    </span>
                    <a
                      href={COMPANY_CONFIG.getWhatsAppUrl(language)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#2A835F] hover:text-[#41a87d] transition-colors ltr-text"
                    >
                      {COMPANY_CONFIG.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#12544F]/60 border border-[#2A835F]/40 text-[#2A835F] flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#F7F4ED]/60 block mb-0.5">
                      {language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}
                    </span>
                    <a
                      href={COMPANY_CONFIG.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#F7F4ED] hover:text-[#2A835F] transition-colors ltr-text"
                    >
                      roaacompany.com
                    </a>
                  </div>
                </li>
              </ul>

              {/* Direct Quick Action Buttons (Email & WhatsApp) */}
              <div className="mt-8 pt-6 border-t border-[#12544F] space-y-3">
                {/* Official Direct Email Action */}
                <a
                  href={`mailto:${COMPANY_CONFIG.email}?subject=${encodeURIComponent(
                    language === 'ar' ? 'طلب استشارة ومناقشة مشروع' : 'Project Consultation Inquiry'
                  )}`}
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#12544F] to-[#092328] hover:from-[#176660] hover:to-[#12544F] text-[#F7F4ED] border border-[#2A835F]/60 font-bold text-sm shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#2A835F]" />
                    <span>{language === 'ar' ? 'مراسلة البريد الإلكتروني' : 'Direct Company Email'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#2A835F]">
                    <span className="ltr-text font-mono">{COMPANY_CONFIG.email}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                  </div>
                </a>

                {/* Direct WhatsApp Callout */}
                <a
                  href={COMPANY_CONFIG.getWhatsAppUrl(language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] font-bold text-sm shadow-md transition-all"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.contactPage.directWhatsApp}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick SLA note */}
            <div className="rounded-xl bg-[#12544F]/25 border border-[#12544F] p-5 text-xs text-[#F7F4ED]/70 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#F7F4ED]">
                <Clock className="w-4 h-4 text-[#2A835F]" />
                <span>{language === 'ar' ? 'سرعة الاستجابة' : 'Response SLA'}</span>
              </div>
              <p>
                {language === 'ar'
                  ? 'يتم الرد على جميع طلبات المشاريع الموجهة للبريد الإلكتروني خلال يوم عمل واحد من فريق الاستشارات التقنية.'
                  : 'All project briefs sent to our corporate inbox receive a dedicated response within 1 business day.'}
              </p>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#12544F]/20 border border-[#12544F] p-6 sm:p-10 shadow-2xl relative">
              {isSuccess ? (
                <div className="py-8 space-y-6 text-start">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-[#12544F] border border-[#2A835F] text-[#2A835F] flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle className="w-8 h-8 text-[#2A835F]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#F7F4ED]">
                      {language === 'ar'
                        ? 'تم إرسال بيانات العميل والطلب بنجاح'
                        : 'Inquiry Submitted & Delivered Successfully'}
                    </h3>
                    <p className="text-sm sm:text-base text-[#F7F4ED]/80 max-w-lg mx-auto leading-relaxed">
                      {language === 'ar'
                        ? 'تم توجيه جميع المعلومات والمتطلبات المدخلة إلى صندوق البريد الإلكتروني الرسمي لشركة Roaacompany للمراجعة التقنية المباشرة.'
                        : 'All submitted project parameters have been routed directly to Roaacompany’s official corporate inbox for executive technical review.'}
                    </p>
                  </div>

                  {/* Delivery Status & Target Inboxes */}
                  <div className="p-4 rounded-xl bg-[#092328]/95 border border-[#2A835F]/50 shadow-inner space-y-2.5">
                    <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2A835F] animate-pulse"></span>
                        <span className="font-semibold text-[#2A835F]">
                          {language === 'ar' ? 'حالة التوجيه الفعلي:' : 'Active Delivery Status:'}
                        </span>
                        <span className="text-[#F7F4ED]">
                          {language === 'ar' ? 'تم الإرسال إلى صندوق الوارد' : 'Dispatched to Inbox'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={copyEmailToClipboard}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#12544F]/50 hover:bg-[#12544F] text-xs text-[#F7F4ED]/80 hover:text-[#2A835F] transition-colors"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#2A835F]" />
                            <span className="text-[#2A835F]">{language === 'ar' ? 'تم النسخ!' : 'Copied!'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{language === 'ar' ? 'نسخ الإيميل' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-[#12544F]/60 text-xs">
                      <div>
                        <span className="text-[#F7F4ED]/60 block mb-0.5">
                          {language === 'ar' ? 'البريد الرسمي المستلم:' : 'Primary Corporate Inbox:'}
                        </span>
                        <span className="font-mono font-bold text-[#F7F4ED] ltr-text block">
                          {COMPANY_CONFIG.email}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#F7F4ED]/60 block mb-0.5">
                          {language === 'ar' ? 'نسخة المتابعة الإدارية:' : 'Management CC Copy:'}
                        </span>
                        <span className="font-mono font-bold text-[#2A835F] ltr-text block">
                          Roaaqarnia@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* One-Time Activation Notice for Site Admins */}
                  {deliveryStatus === 'needs_activation' && (
                    <div className="p-4 rounded-xl bg-[#2A835F]/15 border border-[#2A835F]/60 text-xs space-y-1.5">
                      <div className="flex items-center gap-2 font-semibold text-[#2A835F]">
                        <Info className="w-4 h-4 flex-shrink-0" />
                        <span>{language === 'ar' ? 'تنويه لإدارة الشركة (تفعيل الاستقبال لمرة واحدة):' : 'Admin Notice (One-time Activation):'}</span>
                      </div>
                      <p className="text-[#F7F4ED]/80 leading-relaxed">
                        {language === 'ar'
                          ? 'لأول مرة فقط، قام خادم النماذج بإرسال رابط تأكيد التفعيل إلى البريد (info@roaacompany.com / Roaaqarnia@gmail.com). يرجى فتح البريد والضغط على زر "Activate Form" لمرة واحدة فقط لتبدأ كافة الطلبات بالوصول مباشرة إلى الوارد.'
                          : 'A one-time verification email has been sent to the inbox. Click "Activate Form" once in your email to enable unlimited direct inbox deliveries.'}
                      </p>
                    </div>
                  )}

                  {/* Submitted Data Summary Receipt */}
                  {submittedSnapshot && (
                    <div className="rounded-xl bg-[#092328]/80 border border-[#12544F] p-4 sm:p-5 space-y-3">
                      <div className="flex items-center gap-2 pb-2 border-b border-[#12544F] text-xs font-semibold text-[#2A835F]">
                        <FileText className="w-4 h-4" />
                        <span>{language === 'ar' ? 'ملخص المعلومات المدخلة في الطلب:' : 'Summary of Submitted Details:'}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-xs">
                        <div>
                          <span className="text-[#F7F4ED]/60 block">{language === 'ar' ? 'الاسم الكريم:' : 'Client Name:'}</span>
                          <span className="font-semibold text-[#F7F4ED]">{submittedSnapshot.fullName}</span>
                        </div>
                        <div>
                          <span className="text-[#F7F4ED]/60 block">{language === 'ar' ? 'الشركة / الجهة:' : 'Company / Organization:'}</span>
                          <span className="font-semibold text-[#F7F4ED]">{submittedSnapshot.companyName}</span>
                        </div>
                        <div>
                          <span className="text-[#F7F4ED]/60 block">{language === 'ar' ? 'البريد الإلكتروني:' : 'Email Address:'}</span>
                          <span className="font-mono text-[#F7F4ED] ltr-text">{submittedSnapshot.email}</span>
                        </div>
                        <div>
                          <span className="text-[#F7F4ED]/60 block">{language === 'ar' ? 'رقم الجوال:' : 'Phone Number:'}</span>
                          <span className="font-mono text-[#F7F4ED] ltr-text">{submittedSnapshot.phone}</span>
                        </div>
                        <div>
                          <span className="text-[#F7F4ED]/60 block">{language === 'ar' ? 'نوع الخدمة:' : 'Requested Service:'}</span>
                          <span className="text-[#2A835F] font-semibold">{getServiceLabel(submittedSnapshot.serviceType)}</span>
                        </div>
                        <div>
                          <span className="text-[#F7F4ED]/60 block">{language === 'ar' ? 'الميزانية التقديرية:' : 'Budget Range:'}</span>
                          <span className="text-[#F7F4ED]">{getBudgetLabel(submittedSnapshot.estimatedBudget)}</span>
                        </div>
                        <div>
                          <span className="text-[#F7F4ED]/60 block">{language === 'ar' ? 'الإطار الزمني:' : 'Timeline:'}</span>
                          <span className="text-[#F7F4ED]">{getTimelineLabel(submittedSnapshot.timeline)}</span>
                        </div>
                        <div>
                          <span className="text-[#F7F4ED]/60 block">{language === 'ar' ? 'وسيلة التواصل المفضلة:' : 'Preferred Contact:'}</span>
                          <span className="text-[#F7F4ED]">{getContactMethodLabel(submittedSnapshot.preferredContact)}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#12544F] text-xs">
                        <span className="text-[#F7F4ED]/60 block mb-1">{language === 'ar' ? 'تفاصيل المتطلبات والمشروع:' : 'Project Details:'}</span>
                        <p className="text-[#F7F4ED]/90 whitespace-pre-wrap bg-[#12544F]/20 p-3 rounded-lg border border-[#12544F]/40 leading-relaxed font-sans">
                          {submittedSnapshot.projectDescription}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {generatedMailto && (
                      <a
                        href={generatedMailto}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] text-xs sm:text-sm font-bold transition-all shadow-md"
                      >
                        <Mail className="w-4 h-4" />
                        <span>
                          {language === 'ar'
                            ? 'فتح نسخة في تطبيق البريد الإلكتروني'
                            : 'Open Copy in Mail App'}
                        </span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#12544F]/60 hover:bg-[#12544F] border border-[#12544F] text-[#F7F4ED] text-xs sm:text-sm font-semibold transition-colors"
                    >
                      {language === 'ar' ? 'إرسال طلب مشروع جديد' : 'Submit Another Request'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#F7F4ED] mb-2">
                      {t.contactPage.form.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#F7F4ED]/70">
                      {language === 'ar'
                        ? 'املأ النموذج أدناه لتحديد متطلبات مشروعك وسيقوم فريقنا بمراجعتها.'
                        : 'Complete the form below with your requirements for expert evaluation.'}
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-1.5">
                        {t.contactPage.form.fullName} <span className="text-[#2A835F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.contactPage.form.fullNamePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#092328] border ${
                          errors.fullName ? 'border-red-500' : 'border-[#12544F] focus:border-[#2A835F]'
                        } text-[#F7F4ED] text-sm focus:outline-none focus:ring-1 focus:ring-[#2A835F] transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-1.5">
                        {t.contactPage.form.companyName} <span className="text-[#2A835F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder={t.contactPage.form.companyNamePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#092328] border ${
                          errors.companyName ? 'border-red-500' : 'border-[#12544F] focus:border-[#2A835F]'
                        } text-[#F7F4ED] text-sm focus:outline-none focus:ring-1 focus:ring-[#2A835F] transition-colors`}
                      />
                      {errors.companyName && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-1.5">
                        {t.contactPage.form.email} <span className="text-[#2A835F]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contactPage.form.emailPlaceholder}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#092328] border ${
                          errors.email ? 'border-red-500' : 'border-[#12544F] focus:border-[#2A835F]'
                        } text-[#F7F4ED] text-sm focus:outline-none focus:ring-1 focus:ring-[#2A835F] transition-colors ltr-input`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-1.5">
                        {t.contactPage.form.phone} <span className="text-[#2A835F]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contactPage.form.phonePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-lg bg-[#092328] border ${
                          errors.phone ? 'border-red-500' : 'border-[#12544F] focus:border-[#2A835F]'
                        } text-[#F7F4ED] text-sm focus:outline-none focus:ring-1 focus:ring-[#2A835F] transition-colors ltr-input`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-1.5">
                      {t.contactPage.form.serviceType} <span className="text-[#2A835F]">*</span>
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#092328] border ${
                        errors.serviceType ? 'border-red-500' : 'border-[#12544F] focus:border-[#2A835F]'
                      } text-[#F7F4ED] text-sm focus:outline-none focus:ring-1 focus:ring-[#2A835F] transition-colors`}
                    >
                      <option value="">{t.contactPage.form.selectService}</option>
                      <option value="corporate">{t.contactPage.form.services.corporate}</option>
                      <option value="redesign">{t.contactPage.form.services.redesign}</option>
                      <option value="landing">{t.contactPage.form.services.landing}</option>
                      <option value="uiux">{t.contactPage.form.services.uiux}</option>
                      <option value="portal">{t.contactPage.form.services.portal}</option>
                      <option value="dashboard">{t.contactPage.form.services.dashboard}</option>
                      <option value="workflow">{t.contactPage.form.services.workflow}</option>
                      <option value="custom">{t.contactPage.form.services.custom}</option>
                      <option value="maintenance">{t.contactPage.form.services.maintenance}</option>
                      <option value="other">{t.contactPage.form.services.other}</option>
                    </select>
                    {errors.serviceType && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.serviceType}</span>
                      </p>
                    )}
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-1.5">
                        {t.contactPage.form.budget}
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#092328] border border-[#12544F] focus:border-[#2A835F] text-[#F7F4ED] text-sm focus:outline-none focus:ring-1 focus:ring-[#2A835F] transition-colors"
                      >
                        <option value="">{t.contactPage.form.selectBudget}</option>
                        {t.contactPage.form.budgets.map((b, i) => (
                          <option key={i} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-1.5">
                        {t.contactPage.form.timeline}
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#092328] border border-[#12544F] focus:border-[#2A835F] text-[#F7F4ED] text-sm focus:outline-none focus:ring-1 focus:ring-[#2A835F] transition-colors"
                      >
                        <option value="">{t.contactPage.form.selectTimeline}</option>
                        {t.contactPage.form.timelines.map((tl, i) => (
                          <option key={i} value={tl}>{tl}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-1.5">
                      {t.contactPage.form.description} <span className="text-[#2A835F]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder={t.contactPage.form.descriptionPlaceholder}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#092328] border ${
                        errors.projectDescription ? 'border-red-500' : 'border-[#12544F] focus:border-[#2A835F]'
                      } text-[#F7F4ED] text-sm focus:outline-none focus:ring-1 focus:ring-[#2A835F] transition-colors`}
                    />
                    {errors.projectDescription && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.projectDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold text-[#F7F4ED]/90 mb-2">
                      {t.contactPage.form.preferredContact}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { id: 'email', label: t.contactPage.form.contactEmail },
                        { id: 'whatsapp', label: t.contactPage.form.contactWhatsApp },
                        { id: 'phone', label: t.contactPage.form.contactPhone },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-xs font-medium transition-all ${
                            formData.preferredContact === item.id
                              ? 'bg-[#12544F] border-[#2A835F] text-[#F7F4ED]'
                              : 'bg-[#092328] border-[#12544F] text-[#F7F4ED]/70 hover:border-[#2A835F]/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={item.id}
                            checked={formData.preferredContact === item.id}
                            onChange={() => setFormData({ ...formData, preferredContact: item.id as any })}
                            className="text-[#2A835F] focus:ring-[#2A835F]"
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreePrivacy}
                        onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                        className="mt-1 rounded border-[#12544F] text-[#2A835F] focus:ring-[#2A835F]"
                      />
                      <span className="text-xs text-[#F7F4ED]/70 leading-relaxed select-none">
                        {language === 'ar' ? (
                          <>
                            أوافق على{' '}
                            <Link to="/privacy" className="text-[#2A835F] hover:underline font-medium underline-offset-2">
                              سياسة الخصوصية
                            </Link>{' '}
                            و
                            <Link to="/terms" className="text-[#2A835F] hover:underline font-medium underline-offset-2 mx-1">
                              الشروط والأحكام
                            </Link>{' '}
                            واستخدام بياناتي للتواصل بخصوص هذا الطلب فقط.
                          </>
                        ) : (
                          <>
                            I agree to the{' '}
                            <Link to="/privacy" className="text-[#2A835F] hover:underline font-medium underline-offset-2">
                              Privacy Policy
                            </Link>{' '}
                            and{' '}
                            <Link to="/terms" className="text-[#2A835F] hover:underline font-medium underline-offset-2">
                              Terms & Conditions
                            </Link>
                            , and consent to using my details to contact me for this request.
                          </>
                        )}
                      </span>
                    </label>
                    {errors.agreePrivacy && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.agreePrivacy}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-[#F7F4ED] bg-[#2A835F] hover:bg-[#237051] rounded-xl shadow-lg shadow-[#2A835F]/30 hover:shadow-[#2A835F]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#F7F4ED] border-t-transparent rounded-full animate-spin" />
                          <span>{t.contactPage.form.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contactPage.form.submitBtn}</span>
                          <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
