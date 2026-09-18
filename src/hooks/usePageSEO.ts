import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getSEOMetadataForPath, RouteSEOMetadata } from '../data/seoConfig';
import { COMPANY_CONFIG } from '../data/company';

/**
 * Utility to set or create a <meta> tag by name or property
 */
const setMetaTag = (attributeName: 'name' | 'property', key: string, content: string) => {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[${attributeName}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

/**
 * Utility to set or create the <link rel="canonical" /> tag
 */
const setCanonicalLink = (url: string) => {
  if (typeof document === 'undefined') return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

/**
 * Utility to set or create dynamic route-specific JSON-LD Schema
 */
const setRouteSchema = (schemaData: Record<string, unknown>) => {
  if (typeof document === 'undefined') return;
  const SCRIPT_ID = 'route-seo-schema-jsonld';
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
};

/**
 * Custom hook to dynamically manage and synchronize SEO meta tags, canonical URL,
 * OpenGraph, Twitter Cards, and JSON-LD schema per page route.
 */
export const usePageSEO = (overrides?: Partial<RouteSEOMetadata>) => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Resolve metadata for current path with language context
    const baseMetadata = getSEOMetadataForPath(location.pathname, language);
    const activeMetadata: RouteSEOMetadata = {
      ...baseMetadata,
      ...overrides,
    };

    const baseUrl = COMPANY_CONFIG.website.replace(/\/$/, '');
    // Build accurate canonical URL
    const canonicalPath = activeMetadata.canonicalPath.startsWith('/')
      ? activeMetadata.canonicalPath
      : `/${activeMetadata.canonicalPath}`;
    const canonicalUrl = `${baseUrl}${canonicalPath === '/' ? '' : canonicalPath}`;

    // 2. Update Document Title
    document.title = activeMetadata.title;

    // 3. Update Standard Meta Tags
    setMetaTag('name', 'description', activeMetadata.description);
    setMetaTag('name', 'keywords', activeMetadata.keywords);
    setMetaTag('name', 'author', COMPANY_CONFIG.name);
    setCanonicalLink(canonicalUrl);

    // 4. Update OpenGraph Social Metadata
    setMetaTag('property', 'og:title', activeMetadata.title);
    setMetaTag('property', 'og:description', activeMetadata.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', activeMetadata.ogType || 'website');
    setMetaTag('property', 'og:site_name', COMPANY_CONFIG.name);
    setMetaTag('property', 'og:locale', language === 'ar' ? 'ar_SA' : 'en_US');

    // 5. Update Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', activeMetadata.title);
    setMetaTag('name', 'twitter:description', activeMetadata.description);

    // 6. Inject Schema.org JSON-LD structured data for WebPage & BreadcrumbList
    const breadcrumbItems = (activeMetadata.breadcrumbs || [{ name: 'Home', path: '/' }]).map(
      (item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        item: `${baseUrl}${item.path === '/' ? '' : item.path}`,
      })
    );

    const routeSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: activeMetadata.title,
      description: activeMetadata.description,
      url: canonicalUrl,
      inLanguage: language === 'ar' ? 'ar' : 'en',
      isPartOf: {
        '@type': 'WebSite',
        name: COMPANY_CONFIG.name,
        url: baseUrl,
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
      },
    };

    setRouteSchema(routeSchema);
  }, [location.pathname, language, overrides]);
};
