import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: {
    name: string;
    url?: string;
  };
  areaServed?: string;
  serviceType?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  image,
  provider,
  areaServed,
  serviceType,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "image": image || `${baseUrl}/images/og-image.jpg`,
    "provider": {
      "@type": "Organization",
      "name": provider?.name || "CLAPIT SOLUTIONS",
      "url": provider?.url || baseUrl,
    },
    ...(areaServed && { "areaServed": areaServed }),
    ...(serviceType && { "serviceType": serviceType }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
};

export default ServiceSchema;

