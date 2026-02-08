export interface Review {
    author: string;
    rating: number;
    text: string;
    date: string;
}

export const googleReviews: Review[] = [
    {
        author: "Sophie Dupont",
        rating: 5,
        text: "Intervention très rapide pour un nid de guêpes sous toiture. Le technicien était pro et rassurant. Je recommande !",
        date: "Il y a 2 semaines"
    },
    {
        author: "Marc Lemoine",
        rating: 5,
        text: "Efficace contre les souris qui avaient envahi mon garage. Plus aucun bruit après le premier passage. Merci PFP Services.",
        date: "Il y a 1 mois"
    },
    {
        author: "Isabelle G.",
        rating: 5,
        text: "J'ai fait appel à eux pour un ramonage. Travail propre, soigné et certificat remis immédiatement. Au top.",
        date: "Il y a 3 mois"
    },
    {
        author: "Restaurant Le Gourmet",
        rating: 5,
        text: "Nous travaillons avec PFP Services pour notre plan de sanitation (cafards/rongeurs). Sérieux et discret. Parfait pour les pros.",
        date: "Il y a 4 mois"
    },
    {
        author: "Thomas B.",
        rating: 4,
        text: "Bon service, prix correct. Intervenu le lendemain de mon appel pour des fourmis.",
        date: "Il y a 6 mois"
    }
];
