export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://deratisation-77.com/#organization",
        "name": "PFP Services",
        "image": "https://deratisation-77.com/images/logos/logo.png",
        "logo": "https://deratisation-77.com/images/logos/logo.png",
        "telephone": "06 29 95 32 62",
        "email": "contact@pfp-services.fr",
        "url": "https://deratisation-77.com",
        "sameAs": [
            "https://www.facebook.com/PFP.Services77"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "22 Rue de la Salle",
            "addressLocality": "Cély",
            "postalCode": "77930",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.4596,
            "longitude": 2.5317
        },
        "areaServed": [
            { "@type": "City", "name": "Melun" },
            { "@type": "City", "name": "Fontainebleau" },
            { "@type": "AdministrativeArea", "name": "Seine-et-Marne" },
            { "@type": "City", "name": "Dammarie-les-Lys" },
            { "@type": "City", "name": "Le Mée-sur-Seine" }
        ],
        "priceRange": "Sur devis",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "08:00",
            "closes": "19:00"
        },
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Dératisation (Rats & Souris)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Destruction Nids de Guêpes & Frelons"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Désinsectisation Cafards & Blattes"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Traitement Chenilles Processionnaires"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Ramonage & Débistrage"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Taupier / Détaupisation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Démoussage & Nettoyage Toiture"
                }
            }
        ],
        "description": "Expert en dératisation, désinsectisation et lutte contre les nuisibles dans le 77. Intervention rapide à Melun et Fontainebleau."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
