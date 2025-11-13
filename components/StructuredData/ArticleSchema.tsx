import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author,
  publisher,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": image || `${baseUrl}/images/og-image.jpg`,
    "datePublished": publishedTime || new Date().toISOString(),
    "dateModified": modifiedTime || publishedTime || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": author?.name || "CLAPIT SOLUTIONS",
      ...(author?.url && { "url": author.url }),
    },
    "publisher": {
      "@type": "Organization",
      "name": publisher?.name || "CLAPIT SOLUTIONS",
      "logo": {
        "@type": "ImageObject",
        "url": publisher?.logo || `${baseUrl}/images/logo.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
};

export default ArticleSchema;

