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
        slug: 'demoussage-toiture-cely',
        title: 'Rénovation complète d\'une toiture envahie par la mousse',
        category: 'Toiture',
        location: 'Cély-en-Bière (77)',
        date: 'Octobre 2024',
        summary: 'Nettoyage haute pression et traitement hydrofuge pour une toiture qui avait perdu son étanchéité.',
        challenge: 'La toiture de cette maison individuelle était recouverte d\'une épaisse couche de mousse et de lichen, retenant l\'humidité et rendant les tuiles poreuses. Le client craignait des infiltrations.',
        solution: 'Nous avons procédé à un grattage manuel des plus gros amas, suivi d\'un nettoyage basse pression pour ne pas abîmer les tuiles. Un traitement anti-mousse préventif et curatif a ensuite été pulvérisé.',
        result: 'La toiture a retrouvé son aspect d\'origine. Le traitement appliqué garantit une protection durable contre le retour des végétaux parasites pour plusieurs années.',
        mainImage: '/images/services/demoussage/toiture-nettoyage.jpg',
        beforeImage: '/images/services/demoussage/toiture-mousse.jpg',
        afterImage: '/images/services/demoussage/toiture-nettoyage.jpg'
    },
    {
        id: '2',
        slug: 'nid-frelons-asiatiques-melun',
        title: 'Urgence : Énorme nid de frelons asiatiques à 15m de haut',
        category: 'Insectes',
        location: 'Melun (77)',
        date: 'Août 2024',
        summary: 'Intervention technique sur un nid de frelons asiatiques situé à la cime d\'un arbre, menaçant le voisinage.',
        challenge: 'Un nid de frelons asiatiques de plus de 60cm de diamètre s\'était développé en haut d\'un arbre, surplombant la rue et le jardin des voisins. L\'accès était complexe et la hauteur importante.',
        solution: 'Utilisation de notre perche télescopique carbone (portée 20m) pour injecter la poudre insecticide directement au coeur du nid, sans avoir besoin de nacelle coûteuse. Intervention réalisée en combinaison intégrale.',
        result: 'Le nid a été neutralisé en moins de 30 minutes. L\'activité de la colonie a cessé dans les heures suivantes, sécurisant totalement le quartier.',
        mainImage: '/images/services/guepes-frelons/frelons-arbre.jpg',
        gallery: [
            '/images/services/guepes-frelons/frelons-arbre.jpg',
            '/images/services/guepes-frelons/frelons-intervention.jpg'
        ]
    },
    {
        id: '3',
        slug: 'debistrage-cheminee-fontainebleau',
        title: 'Sauvetage d\'un conduit de cheminée goudronné',
        category: 'Ramonage',
        location: 'Fontainebleau (77)',
        date: 'Novembre 2024',
        summary: 'Débistrage mécanique d\'un conduit encrassé présentant un risque élevé de feu de cheminée.',
        challenge: 'Lors d\'un ramonage d\'entretien, nous avons constaté que les parois étaient couvertes de bistre (goudron durci) que le hérisson classique ne pouvait pas enlever. Le risque d\'incendie était imminent.',
        solution: 'Nous avons utilisé une débistreuse rotative électrique. Ses masselottes en acier viennent frapper les parois pour casser et décoller le goudron durci, remettant le conduit à nu.',
        result: 'Plus de 3 seaux de bistre ont été retirés. Le conduit est redevenu sain et utilisable en toute sécurité pour l\'hiver. Le client a évité un potentiel sinistre grave.',
        mainImage: '/images/services/ramonage/ramonage-bistre-1.jpg',
        gallery: [
            '/images/services/ramonage/ramonage-bistre-1.jpg',
            '/images/services/ramonage/ramonage-poele-allume.jpg'
        ]
    }
];
