export interface Review {
    author: string;
    rating: number;
    text: string;
    date: string;
    category: 'toiture' | 'nuisibles' | 'ramonage';
}

export const googleReviews: Review[] = [
    {
        author: "Sophie Dupont",
        rating: 5,
        text: "Intervention très rapide pour un nid de guêpes sous toiture. Le technicien était pro et rassurant. Je recommande !",
        date: "Il y a 2 semaines",
        category: 'nuisibles'
    },
    {
        author: "Marc Lemoine",
        rating: 5,
        text: "Efficace contre les souris qui avaient envahi mon garage. Plus aucun bruit après le premier passage. Merci PFP Services.",
        date: "Il y a 1 mois",
        category: 'nuisibles'
    },
    {
        author: "Isabelle G.",
        rating: 5,
        text: "J'ai fait appel à eux pour un ramonage. Travail propre, soigné et certificat remis immédiatement. Au top.",
        date: "Il y a 3 mois",
        category: 'ramonage'
    },
    {
        author: "Restaurant Le Gourmet",
        rating: 5,
        text: "Nous travaillons avec PFP Services pour notre plan de sanitation (cafards/rongeurs). Sérieux et discret. Parfait pour les pros.",
        date: "Il y a 4 mois",
        category: 'nuisibles'
    },
    {
        author: "Thomas B.",
        rating: 4,
        text: "Bon service, prix correct. Intervenu le lendemain de mon appel pour des fourmis.",
        date: "Il y a 6 mois",
        category: 'nuisibles'
    },
    {
        author: "Jean-Pierre Cassegrain",
        rating: 5,
        text: "Démoussage de ma toiture à Barbizon. Travail soigné, les tuiles sont comme neuves. Le traitement hydrofuge a un super effet perlant.",
        date: "Il y a 2 mois",
        category: 'toiture'
    },
    {
        author: "Marie-Claire R.",
        rating: 5,
        text: "Élimination d'un nid de frelons asiatiques dans mon jardin. Intervention hyper rapide et efficace. Je recommande vivement.",
        date: "Il y a 3 semaines",
        category: 'nuisibles'
    },
    {
        author: "Laurent V.",
        rating: 5,
        text: "Ramonage annuel impeccable. Le technicien protège bien les lieux, pas une poussière après son passage. Très professionnel.",
        date: "Il y a 1 mois",
        category: 'ramonage'
    },
    {
        author: "Famille Gauthier",
        rating: 5,
        text: "Nettoyage complet de notre toiture en tuiles. On voyait plus la couleur avec la mousse, maintenant c'est magnifique. Merci Alex !",
        date: "Il y a 5 mois",
        category: 'toiture'
    }
];
