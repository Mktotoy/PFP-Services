import React from 'react';
import { googleReviews } from '@/data/reviews';

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

const reviewCount = googleReviews.length;
const ratingValue = (
  googleReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
).toFixed(1);

export const LocalBusinessSchema = ({
  name = "PFP Services",
  region = "77",
  full = false,
}: {
  name?: string;
  region?: string;
  /** true = schema complet (page d'accueil), false = schema minimal (pages zones) */
  full?: boolean;
}) => {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "Organization"],
    "@id": "https://pfp-services.fr/#organization",
    name,
    url: "https://pfp-services.fr",
    telephone: "06 29 95 32 62",
    email: "contact@pfp-services.fr",
    image: "https://pfp-services.fr/images/logos/logo.png",
    logo: "https://pfp-services.fr/images/logos/logo.png",
    address: {
      "@type": "PostalAddress",
      addressRegion: region,
      addressCountry: "FR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount: String(reviewCount),
    },
  };

  if (full) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: "22 Rue de la Salle",
      addressLocality: "Cély",
      postalCode: "77930",
      addressRegion: region,
      addressCountry: "FR",
    };
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: 48.4596,
      longitude: 2.5317,
    };
    schema.sameAs = ["https://www.facebook.com/PFP.Services77"];
    schema.priceRange = "Sur devis";
    schema.areaServed = [
      { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
      { "@type": "City", name: "Melun" },
      { "@type": "City", name: "Fontainebleau" },
      { "@type": "City", name: "Dammarie-lès-Lys" },
      { "@type": "City", name: "Le Mée-sur-Seine" },
    ];
    schema.openingHoursSpecification = {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    };
    schema.makesOffer = [
      "Dératisation (Rats & Souris)",
      "Destruction Nids de Guêpes & Frelons",
      "Désinsectisation Cafards & Blattes",
      "Traitement Chenilles Processionnaires",
      "Ramonage & Débistrage",
      "Taupier / Détaupisation",
      "Démoussage & Nettoyage Toiture",
    ].map((serviceName) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: serviceName },
    }));
  }

  return <JsonLd data={schema} />;
};

export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pfp-services.fr/#website",
    url: "https://pfp-services.fr",
    name: "PFP Services",
    publisher: { "@id": "https://pfp-services.fr/#organization" },
    inLanguage: "fr-FR",
  };

  return <JsonLd data={schema} />;
};

export const BreadcrumbSchema = ({
  items,
}: {
  items: { name: string; url: string }[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
};
