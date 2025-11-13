import { MetadataRoute } from 'next';
import { caseStudies } from '@/data/case-studies';
import { blogPosts } from '@/data/blogsData';
import { services } from '@/data/services';
import { industriesData } from '@/data/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your website
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions';
  
  // Current date for lastmod
  const date = new Date().toISOString();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/development`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/marketing`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing/team-extension`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing/marketing`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing/calculate-outsource`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/people`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Case study detail pages
  const caseStudyPages = caseStudies
    .filter((study) => study.id && typeof study.id === 'string')
    .map((study) => ({
      url: `${baseUrl}/case-studies/${study.id}`,
      lastModified: date,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  // Blog post detail pages
  const blogPages = blogPosts
    .filter((blog) => blog.slug && typeof blog.slug === 'string')
    .map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: date,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // Service detail pages
  const servicePages = services
    .filter((service) => service.id && typeof service.id === 'string')
    .map((service) => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  // Development industry detail pages
  const developmentIndustryPages = industriesData
    .filter((industry) => industry.category === 'development' && industry.id && typeof industry.id === 'string')
    .map((industry) => ({
      url: `${baseUrl}/industries/development/${industry.id}`,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // Marketing industry detail pages
  const marketingIndustryPages = industriesData
    .filter((industry) => industry.category === 'marketing' && industry.id && typeof industry.id === 'string')
    .map((industry) => ({
      url: `${baseUrl}/industries/marketing/${industry.id}`,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // Combine all routes
  return [
    ...staticRoutes,
    ...caseStudyPages,
    ...blogPages,
    ...servicePages,
    ...developmentIndustryPages,
    ...marketingIndustryPages,
  ];
}