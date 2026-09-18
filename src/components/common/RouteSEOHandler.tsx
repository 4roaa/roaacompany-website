import React from 'react';
import { usePageSEO } from '../../hooks/usePageSEO';
import { RouteSEOMetadata } from '../../data/seoConfig';

interface RouteSEOHandlerProps {
  overrides?: Partial<RouteSEOMetadata>;
}

/**
 * RouteSEOHandler Component
 * Automatically listens to route and language changes inside React Router
 * and synchronizes all meta tags (description, keywords, canonical URLs,
 * OpenGraph, Twitter, and Schema.org structured data) to the document head.
 */
export const RouteSEOHandler: React.FC<RouteSEOHandlerProps> = ({ overrides }) => {
  usePageSEO(overrides);
  return null;
};
