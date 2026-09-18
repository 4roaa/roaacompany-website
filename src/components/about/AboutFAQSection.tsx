import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

interface FAQItem {
  id: string;
  category: { ar: string; en: string };
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
}

export const AboutFAQSection: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FAQItem[] = [
    {
      id: 'services-scope',
      category: { ar: 'طبيعة الخدمات', en: 'Scope of Services' },
      question: {
        ar: 'ما هي طبيعة الخدمات الرقمية التي تقدمها شركة رؤى (Roaacompany)؟',
        en: 'What digital services does Roaacompany provide?',
      },
      answer: {
        ar: 'نحن شركة تقنية واستشارات رقمية سعودية متخصصة في بناء وتطوير المنصات المؤسسية، بوابات الأعمال وخدمة العملاء، لوحات التحكم ومؤشرات الأداء (Dashboards)، أتمتة العمليات والنماذج الرقمية، إضافة إلى تقديم خدمات الاستشارات التقنية والتطوير والصيانة المستمرة.',
        en: 'We are a Saudi digital engineering and technology consultancy specializing in enterprise web platforms, business and client portals, executive dashboards, workflow automation, and ongoing technical support and maintenance.',
      },
    },
    {
      id: 'process-workflow',
      category: { ar: 'آلية ومنهجية العمل', en: 'Process & Methodology' },
      question: {
        ar: 'كيف تبدأ آلية العمل عند طلب استشارة أو مشروع جديد؟',
        en: 'What is the working process when initiating a new project?',
      },
      answer: {
        ar: 'تعتمد منهجيتنا على أربع مراحل مترابطة: (1) الفهم والاستكشاف لتحديد أهداف ونطاق العمل، (2) تصميم وهندسة التجربة الرقمية (UI/UX) واعتماد النماذج التفاعلية، (3) التطوير البرمجي وفق أعلى معايير الأمان والأداء، و(4) الفحص الشامل والإطلاق الرسمي مع تقديم التدريب والدعم المستمر.',
        en: 'Our methodology follows four cohesive stages: (1) Discovery & Strategy to analyze business objectives, (2) UI/UX Engineering and interactive prototyping, (3) Scalable development with strict security standards, and (4) Comprehensive QA testing, launch, and continuous handover support.',
      },
    },
    {
      id: 'custom-tailored',
      category: { ar: 'التخصيص والهوية', en: 'Custom Engineering' },
      question: {
        ar: 'هل تُبنى الحلول بشكل مخصص لمنشأتنا أم تعتمدون على قوالب جاهزة؟',
        en: 'Are your solutions custom-built or based on generic templates?',
      },
      answer: {
        ar: 'جميع مشاريعنا تُصمم وتُبرمج بشكل مخصص بنسبة 100% وفق متطلبات منشأتكم وهويتكم المؤسسية. لا نستخدم قوالب تجارية مكررة، بل نضمن بناء كود نظيف، قابل للتوسع، وداعم بصورة أصلية وثنائية للغتين العربية والإنجليزية.',
        en: 'All our solutions are 100% custom-engineered from the ground up to match your operational requirements and brand identity. We do not use cookie-cutter templates, ensuring clean, scalable code with native bilingual Arabic and English support.',
      },
    },
    {
      id: 'timeline',
      category: { ar: 'المدد الزمنية', en: 'Project Timelines' },
      question: {
        ar: 'كم يستغرق إنجاز المشروع التقني، وما العوامل المحددة للمدة؟',
        en: 'How long does project delivery take, and what dictates the timeline?',
      },
      answer: {
        ar: 'تعتمد المدة على نطاق المتطلبات؛ صفحات الهبوط والمواقع التعريفية المركزة تستغرق عادة من 2 إلى 4 أسابيع، بينما المنصات المؤسسية وبوابات الأعمال المعقدة تستغرق ما بين شهرين إلى 4 أشهر. يتم الاتفاق المسبق على جدول زمني تفصيلي مع تسليمات مرحلية منتظمة.',
        en: 'Timelines vary by functional scope; focused landing pages and corporate sites typically take 2 to 4 weeks, while complex business portals and custom enterprise systems span 2 to 4 months with structured milestone deliveries.',
      },
    },
    {
      id: 'pricing-quotation',
      category: { ar: 'الأسعار والتعاقد', en: 'Pricing & Quotations' },
      question: {
        ar: 'كيف يتم تسعير المشاريع وتقديم عروض الأسعار الفنية والمالية؟',
        en: 'How are projects estimated and priced?',
      },
      answer: {
        ar: 'بعد استلام متطلباتكم عبر نموذج طلب المشاريع أو الاجتماع الأولي، نقوم بتحليل نطاق العمل ومواصفات النظام بدقة، ثم نُعد عرضاً فنياً ومالياً شفافاً ومفصلاً يوضح نطاق المهام، المخرجات، الجدول الزمني، وخطة الدفعات المناسبة للميزانية.',
        en: 'Following your submission via our project inquiry form or an initial consultation, we analyze technical specifications and provide a clear, transparent proposal detailing the scope, deliverables, roadmap, and milestone-based payments.',
      },
    },
    {
      id: 'support-maintenance',
      category: { ar: 'الدعم والتطوير', en: 'Support & SLA' },
      question: {
        ar: 'هل توفرون خدمات الدعم الفني والصيانة بعد الإطلاق والتشغيل؟',
        en: 'Do you provide ongoing maintenance and technical support after launch?',
      },
      answer: {
        ar: 'نعم، نحن نؤمن بأن إطلاق المنصة هو بداية النجاح؛ لذلك نوفر اتفاقيات مستوى خدمة (SLA) سنوية وشهرية تشمل المراقبة المستمرة، التحديثات الأمنية، النسخ الاحتياطي، الدعم الفني الفوري، وتطوير الميزات الجديدة لمواكبة نمو أعمالكم.',
        en: 'Yes, platform launch is just the starting point; we provide comprehensive Service Level Agreements (SLAs) covering continuous monitoring, security updates, backups, prompt technical support, and iterative feature development.',
      },
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="about-faq-section" className="py-14 sm:py-20 lg:py-24 bg-[#12544F]/10 border-t border-[#12544F]/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#12544F]/60 text-[#F7F4ED] border border-[#2A835F]/40 mb-3 sm:mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#2A835F]" />
            <span>{language === 'ar' ? 'الأسئلة الشائعة وتوضيح المنهجية' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F7F4ED] tracking-tight leading-snug">
            {language === 'ar' ? 'إجابات على استفساراتكم المتكررة' : 'Common Inquiries & Clear Answers'}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#F7F4ED]/80 leading-relaxed">
            {language === 'ar'
              ? 'كل ما تحتاج معرفته حول آلية التعاون معنا، مراحل التنفيذ، وجودة المعايير التي نلتزم بها لنجاح مشروعكم.'
              : 'Everything you need to know about our partnership approach, project lifecycle, and engineering commitments.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#092328] border-[#2A835F]/70 shadow-lg shadow-[#092328]/50'
                    : 'bg-[#12544F]/20 border-[#12544F] hover:border-[#2A835F]/40 hover:bg-[#12544F]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A835F]"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="inline-block text-[11px] font-semibold text-[#2A835F] uppercase tracking-wider">
                      {language === 'ar' ? faq.category.ar : faq.category.en}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#F7F4ED] leading-snug">
                      {language === 'ar' ? faq.question.ar : faq.question.en}
                    </h3>
                  </div>

                  <div
                    className={`w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#2A835F] border-[#2A835F] text-[#F7F4ED] rotate-180'
                        : 'bg-[#12544F]/40 border-[#12544F] text-[#F7F4ED]/70'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#12544F]/40 text-sm sm:text-base text-[#F7F4ED]/80 leading-relaxed">
                    <p className="bg-[#12544F]/15 p-4 rounded-xl border border-[#12544F]/30">
                      {language === 'ar' ? faq.answer.ar : faq.answer.en}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Help card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#12544F]/40 via-[#092328] to-[#12544F]/40 border border-[#2A835F]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2A835F]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'هل لديك استفسار إضافي أو متطلب خاص؟' : 'Have a custom inquiry or specific need?'}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#F7F4ED]">
              {language === 'ar' ? 'فريقنا جاهز لدراسة مشروعك وتقديم المشورة الفنية' : 'Our consulting team is ready to assist you'}
            </h4>
            <p className="text-xs sm:text-sm text-[#F7F4ED]/70">
              {language === 'ar'
                ? 'تواصل معنا مباشرة لنناقش تفاصيل احتياجك الرقمي ونقدم لك أفضل الخيارات الممكنة.'
                : 'Reach out to discuss your digital roadmap and receive strategic technical guidance.'}
            </p>
          </div>

          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] font-bold text-sm transition-all shadow-md group"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{language === 'ar' ? 'تواصل معنا الآن' : 'Get in Touch'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
