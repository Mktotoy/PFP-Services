/**
 * Donnees de la galerie photos.
 *
 * POUR AJOUTER UNE PHOTO : ajouter un objet dans `galleryImages` ci-dessous.
 *   - `src`      : chemin depuis /public (ex : '/images/gallery/ramonage/ma-photo.jpg')
 *   - `alt`      : legende affichee au survol et texte alternatif (une seule majuscule en debut)
 *   - `category` : un des identifiants declares dans `galleryCategories`
 *
 * L'ordre des photos dans le tableau est l'ordre d'affichage.
 * Une categorie sans aucune photo est automatiquement masquee de la barre de filtres.
 *
 * Les photos de /images/gallery/ ont ete fournies par la cliente le 26/08/2026,
 * redimensionnees a 1100 px et compressees pour un usage web.
 */

export type GalleryCategoryId =
    | 'nettoyage-toiture'
    | 'ramonage'
    | 'guepes-frelons'
    | 'abeilles'
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
    { id: 'abeilles', label: 'Abeilles' },
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
    { src: '/images/gallery/nettoyage-toiture/camion-pfp-services-chantier-toiture-pavillon.jpg', alt: 'Camion PFP Services devant un chantier de toiture', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-demarcation-tuiles-plates-avant-apres-01.jpg', alt: 'Démarcation nette sur des tuiles plates démoussées', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-en-cours-perche-lavage-echelle-01.jpg', alt: 'Lavage de toiture à la perche depuis une échelle', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-mousse-decollee-tuiles-gros-plan-01.jpg', alt: 'Gros plan sur la mousse décollée des tuiles', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-artisan-echelle-longere-01.jpg', alt: 'Artisan sur son échelle démoussant une longère', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-echafaudage-artisan-02.jpg', alt: 'Toiture avant et après démoussage, artisan sur échafaudage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-longere-01.jpg', alt: 'Toiture de longère avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-lucarne-tuiles-plates-01.jpg', alt: 'Lucarne en tuiles plates avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-lucarnes-tuiles-rouges-01.jpg', alt: 'Toiture à lucarnes en tuiles rouges avant et après nettoyage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-maison-ancienne-porche-brique-01.jpg', alt: 'Maison ancienne à porche de brique avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-maison-bourgeoise-echafaudage-01.jpg', alt: 'Maison bourgeoise sous échafaudage, toiture avant et après', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-maison-vigne-vierge-01.jpg', alt: 'Maison en vigne vierge, toiture avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-pavillon-volets-bleu-fonce-02.jpg', alt: 'Pavillon aux volets bleu foncé, toit avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-avant-apres-pavillon-volets-gris-01.jpg', alt: 'Pavillon aux volets gris avant et après démoussage de toiture', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/demoussage-toiture-en-cours-mi-propre-pavillon-01.jpg', alt: 'Toiture de pavillon à moitié démoussée', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/gouttiere-nettoyage-perche-telescopique-manoir.jpg', alt: 'Nettoyage de gouttière à la perche télescopique sur un manoir', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/maison-bourgeoise-facade-toiture-lichen.jpg', alt: 'Maison bourgeoise dont la toiture est envahie de lichen', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/maison-pierre-facade-toiture-tuiles-plates.jpg', alt: 'Maison en pierre coiffée de tuiles plates', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-ardoise-batiment-brique-echelle-intervention.jpg', alt: "Intervention sur toiture en ardoise d'un bâtiment de brique", category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-ardoise-ecaille-demoussage-avant-apres-echafaudage.jpg', alt: 'Ardoises en écaille avant et après démoussage sous échafaudage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-bucher-demoussage-mi-nettoye-01.jpg', alt: 'Toiture de bûcher à demi nettoyée', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-comparatif-pan-nettoye-pan-mousse-01.jpg', alt: 'Pan de toit nettoyé face à un pan moussu', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-demoussage-avant-apres-camion-pfp-services.jpg', alt: 'Toiture avant et après démoussage, camion PFP Services au pied', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-longere-apres-demoussage-01.jpg', alt: 'Toiture de longère après démoussage complet', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-longere-avant-demoussage-01.jpg', alt: 'Toiture de longère envahie de mousse avant intervention', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-maison-beige-nettoyage-en-cours-01.jpg', alt: "Nettoyage en cours sur la toiture d'une maison beige", category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-nettoyee-echelle-facade-crepi-01.jpg', alt: "Toiture nettoyée d'une maison en crépi, échelle en place", category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-nettoyee-longere-veranda-velux-01.jpg', alt: 'Longère avec véranda et fenêtres de toit après nettoyage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-nettoyee-maison-terrasse-01.jpg', alt: "Toiture nettoyée d'une maison avec terrasse", category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-nettoyee-panneau-chantier-pfp-services-01.jpg', alt: 'Toiture nettoyée et panneau de chantier PFP Services', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-pavillon-apres-nettoyage-02.jpg', alt: 'Toiture de pavillon après nettoyage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-anthracite-demoussage-avant-apres-06.jpg', alt: 'Tuiles anthracite avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-anthracite-lucarne-demoussage-avant-apres-07.jpg', alt: 'Lucarne sur toit anthracite avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-lucarnes-demoussage-avant-apres-05.jpg', alt: 'Toit à lucarnes avant et après traitement des mousses', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-mecaniques-demoussage-avant-apres-04.jpg', alt: 'Tuiles mécaniques avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-panneaux-photovoltaiques-propres.jpg', alt: 'Toiture en tuiles et panneaux photovoltaïques nettoyés', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-plates-gros-plan-demoussage-avant-apres-03.jpg', alt: 'Gros plan de tuiles plates avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-plates-longere-demoussage-avant-apres-01.jpg', alt: 'Longère en tuiles plates avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-plates-lucarnes-demoussage-avant-apres-02.jpg', alt: 'Lucarnes en tuiles plates avant et après démoussage', category: 'nettoyage-toiture' },
    { src: '/images/gallery/nettoyage-toiture/toiture-tuiles-plates-mousse-demoussage-en-cours.jpg', alt: 'Démoussage en cours sur des tuiles plates envahies de mousse', category: 'nettoyage-toiture' },

    // --- Ramonage ---
    { src: '/images/gallery/ramonage/herisson-ramonage-foyer-nid-guepes-conduit-01.jpg', alt: "Hérisson de ramonage et nid de guêpes retiré d'un conduit", category: 'ramonage' },
    { src: '/images/gallery/ramonage/poele-bullerjan-allume-conduit-01.jpg', alt: 'Poêle Bullerjan allumé et son conduit de fumée', category: 'ramonage' },
    { src: '/images/gallery/ramonage/poele-suspendu-conduit-sejour-pierre-01.jpg', alt: 'Poêle suspendu et son conduit dans un séjour en pierre', category: 'ramonage' },

    // --- Guêpes et frelons ---
    { src: '/images/gallery/guepes-frelons/nid-frelons-cime-arbre-reperage-02.jpg', alt: "Nid de frelons repéré à la cime d'un arbre", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-cime-bouleau-reperage-01.jpg', alt: "Repérage d'un nid de frelons en haut d'un bouleau", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-coupe-deux-moities-sol-01.jpg', alt: 'Nid de frelons coupé en deux moitiés, posé au sol', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-galettes-couvain-tas-de-bois-01.jpg', alt: 'Galettes de couvain de frelons sur un tas de bois', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-galettes-sac-dechets-01.jpg', alt: "Galettes d'un nid de frelons mises en sac", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-geant-comble-toiture-01.jpg', alt: "Nid de frelons géant dans les combles d'une toiture", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-intact-angle-abri-bois-01.jpg', alt: "Nid de frelons intact dans l'angle d'un abri à bois", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-ouvert-charpente-abri-bois-01.jpg', alt: "Nid de frelons ouvert dans la charpente d'un abri", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-retire-intervenant-combinaison-01.jpg', alt: 'Nid de frelons retiré par un intervenant en combinaison', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-frelons-suspendu-arbuste-01.jpg', alt: "Nid de frelons suspendu aux branches d'un arbuste", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-guepes-cavite-mur-pierre-01.jpg', alt: 'Nid de guêpes dans une cavité de mur en pierre', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-guepes-cavite-mur-pierre-02.jpg', alt: "Nid de guêpes logé au creux d'un mur de pierre", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-guepes-comble-charpente-01.jpg', alt: 'Nid de guêpes fixé à la charpente des combles', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-guepes-frelons-coupe-galettes-alveoles-01.jpg', alt: "Nid coupé laissant voir les galettes d'alvéoles", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-guepes-frelons-dans-guitare-grenier-01.jpg', alt: 'Nid installé dans une guitare oubliée au grenier', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-guepes-ouvert-alveoles-larves-01.jpg', alt: 'Nid de guêpes ouvert, alvéoles et larves visibles', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-guepes-souche-arbre-coupee-01.jpg', alt: "Nid de guêpes dans une souche d'arbre coupée", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-guepes-souche-arbre-coupee-02.jpg', alt: "Nid de guêpes niché au creux d'une souche", category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/nid-primaire-guepes-main-01.jpg', alt: 'Petit nid primaire de guêpes tenu dans la main', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/technicien-combinaison-nid-frelons-jardin-01.jpg', alt: 'Technicien en combinaison face à un nid de frelons', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/technicien-grand-nid-guepes-camion-01.jpg', alt: 'Technicien présentant un grand nid de guêpes près du camion', category: 'guepes-frelons' },
    { src: '/images/gallery/guepes-frelons/technicien-nid-frelons-ouvert-larves-01.jpg', alt: 'Technicien montrant un nid de frelons ouvert et ses larves', category: 'guepes-frelons' },

    // --- Abeilles ---
    { src: '/images/gallery/abeilles/abeilles-cadre-alveoles-macro-02.jpg', alt: "Abeilles sur un cadre d'alvéoles, vue rapprochée", category: 'abeilles' },
    { src: '/images/gallery/abeilles/abeilles-entree-ruche-macro-01.jpg', alt: "Abeilles à l'entrée de leur ruche en gros plan", category: 'abeilles' },
    { src: '/images/gallery/abeilles/apiculteur-cadre-ruche-couvain-01.jpg', alt: 'Apiculteur examinant un cadre de couvain', category: 'abeilles' },
    { src: '/images/gallery/abeilles/apiculteur-leve-cadre-inspection-ruche-01.jpg', alt: "Apiculteur levant un cadre lors d'une inspection de ruche", category: 'abeilles' },
    { src: '/images/gallery/abeilles/apiculteur-recuperation-essaim-toiture-01.jpg', alt: "Récupération d'un essaim d'abeilles sur une toiture", category: 'abeilles' },
    { src: '/images/gallery/abeilles/apiculteur-recuperation-essaim-toiture-02.jpg', alt: 'Apiculteur recueillant un essaim installé sous un toit', category: 'abeilles' },
    { src: '/images/gallery/abeilles/apiculteur-tenue-voile-devant-rucher-01.jpg', alt: 'Apiculteur en tenue et voile devant son rucher', category: 'abeilles' },
    { src: '/images/gallery/abeilles/essaim-abeilles-branche-arbre-01.jpg', alt: "Essaim d'abeilles accroché à une branche d'arbre", category: 'abeilles' },
    { src: '/images/gallery/abeilles/essaim-abeilles-compartiment-moteur-voiture-01.jpg', alt: "Essaim d'abeilles réfugié dans un compartiment moteur", category: 'abeilles' },
    { src: '/images/gallery/abeilles/essaim-abeilles-voiture-rue-01.jpg', alt: "Essaim d'abeilles posé sur une voiture en pleine rue", category: 'abeilles' },
    { src: '/images/gallery/abeilles/reinstallation-essaim-ruchette-toiture-01.jpg', alt: 'Essaim réinstallé dans une ruchette après sa récupération', category: 'abeilles' },
    { src: '/images/gallery/abeilles/rucher-alignement-ruches-enfumoir-01.jpg', alt: "Rucher aligné et enfumoir prêt à l'emploi", category: 'abeilles' },

    // --- Rongeurs ---
    { src: '/images/gallery/rongeurs/cable-electrique-ronge-cloison-01.jpg', alt: 'Câble électrique rongé par des rongeurs dans une cloison', category: 'rongeurs' },
    { src: '/images/gallery/rongeurs/crottes-rongeurs-sol-cave-01.jpg', alt: "Traces de rongeurs sur le sol d'une cave", category: 'rongeurs' },
    { src: '/images/gallery/rongeurs/rebouchage-anti-rongeurs-gaines-mur-01.jpg', alt: 'Rebouchage des gaines murales contre les rongeurs', category: 'rongeurs' },

    // --- Cafards ---

    // --- Chenilles ---
    { src: '/images/gallery/chenilles/chenilles-amas-pelote-herbe-01.jpg', alt: "Amas de chenilles en pelote dans l'herbe", category: 'chenilles' },
    { src: '/images/gallery/chenilles/chenilles-cocons-pin-infestation-01.jpg', alt: 'Pin infesté par de nombreux cocons de chenilles', category: 'chenilles' },
    { src: '/images/gallery/chenilles/chenilles-nid-soie-branche-pin-01.jpg', alt: 'Nid de soie de chenilles sur une branche de pin', category: 'chenilles' },
    { src: '/images/gallery/chenilles/chenilles-nid-soie-gros-plan-cedre-01.jpg', alt: "Gros plan d'un nid de soie dans un cèdre", category: 'chenilles' },
    { src: '/images/gallery/chenilles/chenilles-processionnaires-procession-dallage-01.jpg', alt: 'Chenilles processionnaires en file sur un dallage', category: 'chenilles' },
    { src: '/images/gallery/chenilles/chenilles-processionnaires-procession-dallage-02.jpg', alt: 'Procession de chenilles traversant une terrasse dallée', category: 'chenilles' },
    { src: '/images/gallery/chenilles/echenillage-perche-grand-cedre-01.jpg', alt: 'Échenillage à la perche dans un grand cèdre', category: 'chenilles' },
    { src: '/images/gallery/chenilles/echenillage-perche-telescopique-pin-jardin-01.jpg', alt: 'Retrait des nids à la perche télescopique sur un pin', category: 'chenilles' },
    { src: '/images/gallery/chenilles/ecopiege-collier-tronc-cedre-01.jpg', alt: "Écopiège installé en collier autour d'un tronc de cèdre", category: 'chenilles' },
    { src: '/images/gallery/chenilles/nids-chenilles-retires-au-sol-cedre-01.jpg', alt: "Nids de chenilles retirés d'un cèdre et posés au sol", category: 'chenilles' },
    { src: '/images/gallery/chenilles/nids-chenilles-retires-sur-bache-01.jpg', alt: 'Nids de chenilles retirés, rassemblés sur une bâche', category: 'chenilles' },

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
