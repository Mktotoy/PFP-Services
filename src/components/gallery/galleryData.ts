/**
 * Donnees de la galerie photos.
 *
 * POUR AJOUTER UNE PHOTO : ajouter un objet dans `galleryImages` ci-dessous.
 *   - `src`      : chemin depuis /public (ex : '/images/services/ramonage/ma-photo.jpg')
 *   - `alt`      : legende affichee au survol et texte alternatif (une seule majuscule en debut)
 *   - `category` : un des identifiants declares dans `galleryCategories`
 *
 * L'ordre des photos dans le tableau est l'ordre d'affichage.
 * Une categorie sans aucune photo est automatiquement masquee de la barre de filtres.
 */

export type GalleryCategoryId =
    | 'nettoyage-toiture'
    | 'ramonage'
    | 'guepes-frelons'
    | 'rongeurs'
    | 'cafards'
    | 'chenilles'
    | 'taupes';

export type GalleryCategory = {
    id: GalleryCategoryId;
    label: string;
};

/** Categories de filtrage, alignees sur les services du site (ordre d'affichage). */
export const galleryCategories: GalleryCategory[] = [
    { id: 'nettoyage-toiture', label: 'Nettoyage toiture' },
    { id: 'ramonage', label: 'Ramonage' },
    { id: 'guepes-frelons', label: 'Guêpes et frelons' },
    { id: 'rongeurs', label: 'Rongeurs' },
    { id: 'cafards', label: 'Cafards' },
    { id: 'chenilles', label: 'Chenilles' },
    { id: 'taupes', label: 'Taupes' },
];

export type GalleryImage = {
    src: string;
    alt: string;
    category: GalleryCategoryId;
};

export const galleryImages: GalleryImage[] = [
    // --- Nettoyage toiture ---
    { src: '/images/services/demoussage/toiture-avant-melun.jpg', alt: 'Toiture envahie par la mousse avant intervention à Melun', category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/toiture-apres-melun.jpg', alt: 'Toiture nettoyée après démoussage à Melun', category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/toiture-avant-apres-nettoyage.jpg', alt: 'Comparatif avant et après nettoyage de toiture', category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/toiture-avant-apres-photo.jpg', alt: 'Toiture avant et après nettoyage et démoussage', category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/toiture-tuiles-propres-hero.jpg', alt: 'Toiture en tuiles propres après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/toiture-mousse.jpg', alt: 'Toiture recouverte de mousse avant traitement', category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/toiture-nettoyage.jpg', alt: 'Nettoyage de toiture en cours', category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/facade-avant-apres-verif.jpg', alt: 'Façade avant et après traitement anti-algues', category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/camion-pfp-services-devant-maison.jpg', alt: "Camion d'intervention PFP Services devant une maison", category: 'nettoyage-toiture' },
    { src: '/images/services/demoussage/camionnette-pfp-toiture-propre.jpg', alt: 'Camionnette PFP Services devant une toiture nettoyée', category: 'nettoyage-toiture' },

    // --- Ramonage ---
    { src: '/images/services/ramonage/conduit-cheminee-sale-avant-v2.jpg', alt: 'Conduit de cheminée encrassé avant ramonage', category: 'ramonage' },
    { src: '/images/services/ramonage/ramonage-technique-conduit-inox.jpg', alt: 'Ramonage technique de conduit inox', category: 'ramonage' },
    { src: '/images/services/ramonage/ramonage-conduit.jpg', alt: 'Ramonage de conduit de cheminée', category: 'ramonage' },
    { src: '/images/services/ramonage/ramonage-bistre-1.jpg', alt: 'Dépôt de bistre avant ramonage', category: 'ramonage' },
    { src: '/images/services/ramonage/ramonage-bistre-2.jpg', alt: 'Nettoyage de dépôt de bistre', category: 'ramonage' },
    { src: '/images/services/ramonage/ramonage-foyer-nettoye.jpg', alt: 'Foyer de cheminée nettoyé après ramonage', category: 'ramonage' },
    { src: '/images/services/ramonage/ramonage-poele-installe.jpg', alt: 'Poêle à bois installé après ramonage', category: 'ramonage' },
    { src: '/images/services/ramonage/ramonage-poele-allume.jpg', alt: 'Poêle à bois allumé après entretien', category: 'ramonage' },

    // --- Guêpes et frelons ---
    { src: '/images/services/guepes-frelons/frelons-arbre.jpg', alt: 'Nid de frelons asiatiques en hauteur dans un arbre', category: 'guepes-frelons' },
    { src: '/images/services/guepes-frelons/frelons-intervention.jpg', alt: 'Intervention de destruction de nid de frelons', category: 'guepes-frelons' },
    { src: '/images/services/guepes-frelons/frelons-combles.jpg', alt: 'Nid de frelons dans des combles', category: 'guepes-frelons' },
    { src: '/images/services/guepes-frelons/frelons-larves.jpg', alt: 'Nid de frelons ouvert montrant les larves', category: 'guepes-frelons' },
    { src: '/images/services/guepes-frelons/frelons-detruits.jpg', alt: 'Nid de frelons neutralisé après intervention', category: 'guepes-frelons' },
    { src: '/images/services/guepes-frelons/frelon-europeen-taille.jpg', alt: 'Frelon européen, comparatif de taille', category: 'guepes-frelons' },
    { src: '/images/services/guepes-frelons/equipe-apiculteur-selfie-essaim.jpg', alt: "Apiculteur PFP Services lors d'une récupération d'essaim d'abeilles", category: 'guepes-frelons' },

    // --- Rongeurs ---
    { src: '/images/services/rongeurs/rongeurs-infestation.jpg', alt: "Signes d'infestation de rongeurs", category: 'rongeurs' },
    { src: '/images/services/rongeurs/rongeurs-colonie.jpg', alt: 'Colonie de rongeurs', category: 'rongeurs' },
    { src: '/images/services/rongeurs/rongeurs-excrements.jpg', alt: 'Excréments de rongeurs relevés lors du diagnostic', category: 'rongeurs' },
    { src: '/images/services/rongeurs/rongeurs-pieges.jpg', alt: "Postes d'appâtage sécurisés contre les rongeurs", category: 'rongeurs' },

    // --- Cafards ---
    { src: '/images/services/cafards/cafard-technicien-pulverisation.png', alt: 'Technicien PFP Services en intervention anti-cafards', category: 'cafards' },

    // --- Chenilles ---
    { src: '/images/services/chenilles/chenilles-nid.jpg', alt: 'Nid de chenilles processionnaires dans un arbre', category: 'chenilles' },
    { src: '/images/services/chenilles/chenilles-sapin-cocon.jpg', alt: 'Cocon de chenilles processionnaires dans un sapin', category: 'chenilles' },
    { src: '/images/services/chenilles/chenilles-intervention.jpg', alt: 'Intervention de traitement des chenilles processionnaires', category: 'chenilles' },

    // --- Taupes ---
    { src: '/images/services/taupes/taupe-intervention-retrait-verifie.jpg', alt: "Intervention PFP Services pour retrait d'une taupe", category: 'taupes' },
    { src: '/images/services/taupes/taupiniere.png', alt: 'Taupinière dans un jardin', category: 'taupes' },
    { src: '/images/services/taupes/piege-taupe.png', alt: 'Piège à taupe professionnel', category: 'taupes' },
    { src: '/images/services/taupes/taupe-main.png', alt: 'Taupe capturée tenue en main', category: 'taupes' },
];

/** Libelle affichable d'une categorie (fallback sur l'identifiant si inconnue). */
export function getCategoryLabel(id: GalleryCategoryId): string {
    return galleryCategories.find((category) => category.id === id)?.label ?? id;
}

/** Categories qui possedent au moins une photo, dans l'ordre declare. */
export function getNonEmptyCategories(): GalleryCategory[] {
    return galleryCategories.filter((category) =>
        galleryImages.some((image) => image.category === category.id)
    );
}
