export type ServicePhoto = {
    src: string;
    alt: string;
};

export type BeforeAfterPair = {
    beforeImg: string;
    afterImg: string;
    altText: string;
    city?: string;
};

export type ServiceSection = {
    slug: string;
    title: string;
    intro: string;
    example?: {
        location: string;
        date: string;
        text: string;
    };
    beforeAfter?: BeforeAfterPair[];
    photos: ServicePhoto[];
    serviceHref?: string;
};

export const realisationsSections: ServiceSection[] = [
    {
        slug: 'demoussage',
        title: 'Démoussage & nettoyage de toiture',
        intro: "Débarrassez votre toiture de la mousse, du lichen et des salissures qui retiennent l'humidité et fragilisent les tuiles. Nos interventions combinent brossage manuel, nettoyage basse pression et traitement hydrofuge pour un résultat durable.",
        example: {
            location: 'Melun (77)',
            date: 'Octobre 2024',
            text: "Toiture recouverte d'une épaisse couche de mousse et de lichen, retenant l'humidité et rendant les tuiles poreuses. Grattage manuel des plus gros amas, nettoyage basse pression, puis traitement anti-mousse préventif et curatif. La toiture a retrouvé son aspect d'origine avec une protection durable.",
        },
        beforeAfter: [
            {
                beforeImg: '/images/services/demoussage/toiture-mousse.jpg',
                afterImg: '/images/services/demoussage/toiture-nettoyage.jpg',
                altText: 'Nettoyage de toiture envahie par la mousse',
                city: 'Melun (77)',
            },
        ],
        photos: [
            { src: '/images/services/demoussage/toiture-avant-apres-nettoyage.jpg', alt: 'Comparatif avant/après nettoyage de toiture' },
            { src: '/images/services/demoussage/toiture-tuiles-propres-hero.jpg', alt: 'Toiture en tuiles propres après démoussage' },
            { src: '/images/services/demoussage/camion-pfp-services-devant-maison.jpg', alt: "Camion d'intervention PFP Services devant une maison" },
        ],
        serviceHref: '/services/demoussage',
    },
    {
        slug: 'guepes-frelons',
        title: 'Frelons & guêpes',
        intro: "Nids de frelons asiatiques, frelons européens ou guêpes : nos techniciens interviennent avec le matériel adapté à chaque taille de nid, y compris en hauteur, pour une neutralisation rapide et sécurisée.",
        example: {
            location: 'Melun (77)',
            date: 'Août 2024',
            text: "Nid de frelons asiatiques de plus de 60 cm de diamètre, développé en haut d'un arbre à 15 m de hauteur, surplombant rue et jardins voisins. Neutralisation en moins de 30 minutes à l'aide d'une perche télescopique carbone (portée 20 m) injectant l'insecticide directement au cœur du nid.",
        },
        photos: [
            { src: '/images/services/guepes-frelons/frelons-arbre.jpg', alt: "Nid de frelons asiatiques en hauteur dans un arbre" },
            { src: '/images/services/guepes-frelons/frelons-intervention.jpg', alt: "Intervention de destruction de nid de frelons" },
            { src: '/images/services/guepes-frelons/frelon-europeen-taille.jpg', alt: 'Frelon européen, comparatif de taille' },
            { src: '/images/services/guepes-frelons/frelons-combles.jpg', alt: 'Nid de frelons dans des combles' },
            { src: '/images/services/guepes-frelons/frelons-larves.jpg', alt: 'Nid de frelons ouvert montrant les larves' },
            { src: '/images/services/guepes-frelons/frelons-detruits.jpg', alt: 'Nid de frelons neutralisé après intervention' },
        ],
        serviceHref: '/services/guepes-frelons',
    },
    {
        slug: 'ramonage',
        title: 'Ramonage',
        intro: "Ramonage de conduits de cheminée, poêles à bois et inserts : entretien conseillé et sécurité contre les risques d'incendie. Nos interventions couvrent aussi bien les conduits traditionnels que les conduits inox modernes.",
        photos: [
            { src: '/images/services/ramonage/ramonage-technique-conduit-inox.jpg', alt: 'Ramonage technique de conduit inox' },
            { src: '/images/services/ramonage/ramonage-conduit.jpg', alt: 'Ramonage de conduit de cheminée' },
            { src: '/images/services/ramonage/ramonage-bistre-1.jpg', alt: 'Dépôt de bistre avant ramonage' },
            { src: '/images/services/ramonage/ramonage-bistre-2.jpg', alt: 'Nettoyage de dépôt de bistre' },
            { src: '/images/services/ramonage/ramonage-foyer-nettoye.jpg', alt: 'Foyer de cheminée nettoyé après ramonage' },
            { src: '/images/services/ramonage/ramonage-poele-installe.jpg', alt: 'Poêle à bois installé après ramonage' },
            { src: '/images/services/ramonage/ramonage-poele-allume.jpg', alt: 'Poêle à bois allumé après entretien' },
        ],
        serviceHref: '/services/ramonage',
    },
    {
        slug: 'rongeurs',
        title: 'Rongeurs',
        intro: "Souris, rats : nos diagnostics identifient les points d'entrée et les zones d'infestation pour mettre en place un plan de lutte efficace, avec postes d'appâtage sécurisés et rebouchage des accès.",
        example: {
            location: 'Fontainebleau (77)',
            date: 'Novembre 2024',
            text: "Plusieurs appartements d'un immeuble se plaignaient de bruits dans les cloisons et de câbles rongés dans les gaines techniques. Diagnostic complet des points d'entrée, pose de postes d'appâtage sécurisés et rebouchage à la paille de fer. Infestation stoppée en 10 jours, contrat annuel de prévention signé avec le syndic.",
        },
        photos: [
            { src: '/images/services/rongeurs/rongeurs-infestation.jpg', alt: "Signes d'infestation de rongeurs" },
            { src: '/images/services/rongeurs/rongeurs-colonie.jpg', alt: 'Colonie de rongeurs' },
            { src: '/images/services/rongeurs/rongeurs-excrements.jpg', alt: 'Excréments de rongeurs relevés lors du diagnostic' },
            { src: '/images/services/rongeurs/rongeurs-pieges.jpg', alt: "Postes d'appâtage sécurisés contre les rongeurs" },
        ],
        serviceHref: '/services/rongeurs',
    },
    {
        slug: 'chenilles',
        title: 'Chenilles processionnaires',
        intro: "Les nids de chenilles processionnaires présentent un risque réel pour les personnes et les animaux (poils urticants). Nous les repérons et les traitons dans les pins et cèdres avant leur période de descente.",
        photos: [
            { src: '/images/services/chenilles/chenilles-nid.jpg', alt: 'Nid de chenilles processionnaires dans un arbre' },
            { src: '/images/services/chenilles/chenilles-sapin-cocon.jpg', alt: 'Cocon de chenilles processionnaires dans un sapin' },
            { src: '/images/services/chenilles/chenilles-intervention.jpg', alt: 'Intervention de traitement des chenilles processionnaires' },
        ],
        serviceHref: '/services/chenilles',
    },
    {
        slug: 'taupes',
        title: 'Taupes',
        intro: "Taupinières qui abîment pelouses et jardins : nos techniques de piégeage permettent d'éliminer les taupes sans produits toxiques pour l'environnement.",
        photos: [
            { src: '/images/services/taupes/taupiniere.png', alt: 'Taupinière dans un jardin' },
            { src: '/images/services/taupes/piege-taupe.png', alt: 'Piège à taupe professionnel' },
            { src: '/images/services/taupes/taupe-main.png', alt: 'Taupe capturée tenue en main' },
        ],
        serviceHref: '/services/taupes',
    },
];
