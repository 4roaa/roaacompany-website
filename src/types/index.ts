export type Language = 'ar' | 'en';

export interface NavLinkItem {
  id: string;
  path: string;
  labelAr: string;
  labelEn: string;
}

export interface CapabilityItem {
  id: 'design' | 'build' | 'grow';
  tagAr: string;
  tagEn: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  itemsAr: string[];
  itemsEn: string[];
  color: string;
}

export interface ServiceGroup {
  id: string;
  category: 'design' | 'build' | 'grow';
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  servicesAr: {
    name: string;
    description: string;
  }[];
  servicesEn: {
    name: string;
    description: string;
  }[];
}

export interface TechnologySolutionItem {
  id: string;
  iconName: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  useCaseAr: string;
  useCaseEn: string;
  featuresAr: string[];
  featuresEn: string[];
}

export interface IndustryItem {
  id: string;
  iconName: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
}

export interface ProcessStage {
  step: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  activitiesAr: string[];
  activitiesEn: string[];
}

export interface PartnershipValueItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  estimatedBudget: string;
  timeline: string;
  projectDescription: string;
  preferredContact: 'email' | 'whatsapp' | 'phone';
  agreePrivacy: boolean;
}
