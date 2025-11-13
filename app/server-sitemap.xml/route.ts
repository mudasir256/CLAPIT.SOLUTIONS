import { getServerSideSitemap } from 'next-sitemap';
import { caseStudies } from '@/data/case-studies';
import { blogPosts } from '@/data/blogsData';
import { services } from '@/data/services';
import { industriesData } from '@/data/industries';

export async function GET() {
  // Base URL of your website
  const baseUrl = process.env.SITE_URL || 'https://pie-stack.com';
  
  // Current date for lastmod
  const date = new Date().toISOString();
  
  // Get all case study URLs
  const caseStudyUrls = caseStudies.map((study) => ({
    loc: `${baseUrl}/case-studies/${study.id}`,
    lastmod: date,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
  
  // Get all blog URLs
  const blogUrls = blogPosts.map((blog) => ({
    loc: `${baseUrl}/blogs/${blog.slug}`,
    lastmod: date,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
  
  // Get all service URLs
  const serviceUrls = services.map((service) => ({
    loc: `${baseUrl}/services/${service.id}`,
    lastmod: date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  // Filter industries by category
  const developmentIndustries = industriesData.filter(
    (industry) => industry.category === 'development'
  );
  
  const marketingIndustries = industriesData.filter(
    (industry) => industry.category === 'marketing'
  );
  
  // Get all industry URLs for development category
  const devIndustryUrls = developmentIndustries.map((industry) => ({
    loc: `${baseUrl}/industries/development/${industry.id}`,
    lastmod: date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // Get all industry URLs for marketing category
  const marketingIndustryUrls = marketingIndustries.map((industry) => ({
    loc: `${baseUrl}/industries/marketing/${industry.id}`,
    lastmod: date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // Combine all URLs
  const fields = [
    ...caseStudyUrls,
    ...blogUrls,
    ...serviceUrls,
    ...devIndustryUrls,
    ...marketingIndustryUrls,
  ];
  
  return getServerSideSitemap(fields);
}