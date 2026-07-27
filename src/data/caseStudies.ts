export type CaseStudy = {
    id: string;
    slug: string;
    title: string;
    category: 'Rongeurs' | 'Insectes' | 'Ramonage' | 'Toiture';
    location: string;
    date: string;
    summary: string;
    challenge: string;
    solution: string;
    result: string;
    mainImage: string;
    gallery?: string[];
    beforeImage?: string;
    afterImage?: string;
};

export const caseStudies: CaseStudy[] = [
    {
        id: '1',
        slug: 'nettoyage-toiture-melun-tuiles-mecaniques',
        title: 'Nettoyage de tuiles mécaniques à Melun',
        category: 'Toiture',
        location: 'Melun (77)',
        date: 'Octobre 2024',
        summary: 'Rénovation d\'une toiture envahie par la mousse avec brossage manuel et hydrofuge.',
        challenge: 'La toiture de cette maison individuelle était recouverte d\'une épaisse couche de mousse et de lichen, retenant l\'humidité et rendant les tuiles poreuses. Le client craignait des infiltrations.',
        solution: 'Nous avons procédé à un grattage manuel des plus gros amas, suivi d\'un nettoyage basse pression pour ne pas abîmer les tuiles. Un traitement anti-mousse préventif et curatif a ensuite été pulvérisé.',
        result: 'La toiture a retrouvé son aspect d\'origine. Le traitement appliqué garantit une protection durable contre le retour des végétaux parasites pour plusieurs années.',
        mainImage: '/images/services/demoussage/toiture-nettoyage.jpg',
        beforeImage: '/images/services/demoussage/toiture-mousse.jpg',
        afterImage: '/images/services/demoussage/toiture-nettoyage.jpg'
    },
    {
        id: '2',
        slug: 'destruction-nid-frelons-asiatiques-77-hauteur',
        title: 'Destruction d\'un nid de frelons asiatiques en hauteur',
        category: 'Insectes',
        location: 'Melun (77)',
        date: 'Août 2024',
        summary: 'Intervention technique sur un nid de frelons asiatiques situé à 15m de haut.',
        challenge: 'Un nid de frelons asiatiques de plus de 60cm de diamètre s\'était développé en haut d\'un arbre, surplombant la rue et le jardin des voisins. L\'accès était complexe et la hauteur importante.',
        solution: 'Utilisation de notre perche télescopique carbone (portée 20m) pour injecter la poudre insecticide directement au coeur du nid.',
        result: 'Le nid a été neutralisé en moins de 30 minutes. L\'activité de la colonie a cessé dans les heures suivantes.',
        mainImage: '/images/services/guepes-frelons/frelons-arbre.jpg',
        gallery: [
            '/images/services/guepes-frelons/frelons-arbre.jpg',
            '/images/services/guepes-frelons/frelons-intervention.jpg'
        ]
    },
    {
        id: '3',
        slug: 'deratisation-fontainebleau-souris-immeuble',
        title: 'Traitement anti-rongeurs dans un immeuble à Fontainebleau',
        category: 'Rongeurs',
        location: 'Fontainebleau (77)',
        date: 'Novembre 2024',
        summary: 'Mise en place d\'un plan de lutte contre les souris dans les parties communes.',
        challenge: 'Plusieurs appartements se plaignaient de bruits dans les cloisons et de câbles électriques rongés dans les gaines techniques.',
        solution: 'Diagnostic complet des points d\'entrée et pose de postes d\'appâtage sécurisés avec raticide professionnel. Rebouclage des trous à la paille de fer.',
        result: 'Infestation stoppée en 10 jours. Un contrat annuel a été signé avec le syndic pour la prévention.',
        mainImage: '/images/services/rongeurs/rongeurs-infestation.jpg',
        gallery: [
            '/images/services/rongeurs/rongeurs-infestation.jpg',
            '/images/services/rongeurs/rongeurs-pieges.jpg'
        ]
    }
];
