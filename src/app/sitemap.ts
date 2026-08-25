import type { MetadataRoute } from 'next';

const BASE_URL = 'https://pfp-services.fr';

const SERVICES = ['demoussage', 'ramonage', 'rongeurs', 'guepes-frelons', 'cafards', 'chenilles', 'taupes'];
const ZONES = ['77-seine-et-marne', '91-essonne', '89-yonne', '45-loiret', 'fontainebleau'];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/`, changeFrequency: 'monthly', priority: 1 },
        { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
        ...SERVICES.map((slug) => ({
            url: `${BASE_URL}/services/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        { url: `${BASE_URL}/zones`, changeFrequency: 'monthly', priority: 0.8 },
        ...ZONES.map((slug) => ({
            url: `${BASE_URL}/zones/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        { url: `${BASE_URL}/galerie`, changeFrequency: 'monthly', priority: 0.5 },
        { url: `${BASE_URL}/qui-sommes-nous`, changeFrequency: 'yearly', priority: 0.5 },
        { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.7 },
        { url: `${BASE_URL}/mentions-legales`, changeFrequency: 'yearly', priority: 0.1 },
    ];

    return staticRoutes;
}
