export interface Review {
    author: string;
    rating: number;
    text: string;
    date: string;
    category: 'toiture' | 'nuisibles' | 'ramonage';
}

export const googleReviews: Review[] = [
    {
        author: "Tony ZoulX",
        rating: 5,
        text: "Intervention de qualité sur un nid primaire de frelon asiatique. Je recommande sans hésiter.",
        date: "Il y a 2 mois",
        category: 'nuisibles'
    },
    {
        author: "Emmanuel Henon",
        rating: 5,
        text: "Travail de qualité, nettoyage de toiture parfaitement réalisé. Je recommande sans hésiter ! Notre toiture est comme neuve. Merci.",
        date: "Il y a 2 mois",
        category: 'toiture'
    },
    {
        author: "Léna Guelaud",
        rating: 5,
        text: "Entreprise très sérieuse, travail soigné, devis respecté et très bon rapport qualité prix. En prime gentillesse et bonne humeur de l'équipe. Je recommande à 100%.",
        date: "Il y a 3 mois",
        category: 'nuisibles'
    },
    {
        author: "Nathalie Camus",
        rating: 5,
        text: "Ramonage, intervention et nettoyage de toiture.",
        date: "Il y a 4 mois",
        category: 'ramonage'
    },
    {
        author: "Eric PP",
        rating: 5,
        text: "Exécution rapide et efficace avec toute l'expertise souhaitée. Une chance de connaître des professionnels tels que PFP. Merci.",
        date: "Il y a 9 mois",
        category: 'nuisibles'
    },
    {
        author: "simon bayly",
        rating: 5,
        text: "Super réactif et excellent travail. Très content avec le travail.",
        date: "Il y a 10 mois",
        category: 'nuisibles'
    },
    {
        author: "de Cabrol Philippe",
        rating: 5,
        text: "Très bonne prestation. Intervention rapide et efficace. Je recommande.",
        date: "Il y a 11 mois",
        category: 'nuisibles'
    }
];
