import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const LocalBusinessSchema = ({ 
  name = "PFP Services",
  ratingValue = "5.0",
  reviewCount = "25",
  region = "77"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": name,
    "url": "https://pfp-services.fr", // TODO: Update with real URL
    "telephone": "06 29 95 32 62",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": region,
      "addressCountry": "FR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount
    }
  };

  return <JsonLd data={schema} />;
};
