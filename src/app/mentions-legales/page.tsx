import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Mentions légales et données personnelles | PFP Services",
    alternates: { canonical: '/mentions-legales' },
    description: "Mentions légales du site PFP Services : éditeur, hébergeur, données personnelles collectées, cookies et exercice de vos droits.",
};

const DERNIERE_MISE_A_JOUR = "26 août 2026";

const sectionStyle = { marginBottom: '3rem' } as const;
const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    borderBottom: '2px solid var(--secondary)',
    paddingBottom: '0.5rem',
} as const;
const listStyle = { listStyle: 'none', padding: 0, lineHeight: '1.8' } as const;

export default function MentionsLegales() {
    return (
        <main className="container section" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-dark)', textAlign: 'center' }}>Mentions légales</h1>

            <section style={sectionStyle}>
                <h2 style={titleStyle}>Identification de l’entreprise</h2>
                <ul style={listStyle}>
                    <li><strong>Raison sociale :</strong> PFP SERVICES</li>
                    <li><strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)</li>
                    <li><strong>Capital social :</strong> 3 000,00 €</li>
                    <li><strong>SIREN :</strong> 900 125 980</li>
                    <li><strong>SIRET (siège) :</strong> 900 125 980 00012</li>
                    <li><strong>Numéro de TVA intracommunautaire :</strong> FR93900125980</li>
                    <li><strong>RCS :</strong> 900 125 980 R.C.S. Melun (Inscrit le 08/06/2021)</li>
                    <li><strong>Dirigeant et directeur de la publication :</strong> M. Pierre-Francois BAZOUGE</li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h2 style={titleStyle}>Coordonnées</h2>
                <ul style={listStyle}>
                    <li><strong>Adresse du siège social :</strong> 22 Rue de la Salle, 77930 Cély</li>
                    <li><strong>Téléphone :</strong> <a href="tel:0629953262">06 29 95 32 62</a></li>
                    <li><strong>Email :</strong> <a href="mailto:contact@pfp-services.fr">contact@pfp-services.fr</a></li>
                    <li><strong>Activité :</strong> Désinfection, désinsectisation, dératisation</li>
                </ul>
            </section>

            <section style={sectionStyle}>
                <h2 style={titleStyle}>Hébergement du site</h2>
                <p>
                    Ce site est hébergé par :<br />
                    Replit, Inc.<br />
                    767 Bryant St #203<br />
                    San Francisco, CA 94107<br />
                    États-Unis
                </p>
            </section>

            <section style={sectionStyle} id="donnees-personnelles">
                <h2 style={titleStyle}>Données personnelles</h2>

                <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Responsable du traitement</h3>
                <p>
                    PFP SERVICES, 22 Rue de la Salle, 77930 Cély, représentée par M. Pierre-Francois BAZOUGE.
                    Contact : <a href="mailto:contact@pfp-services.fr">contact@pfp-services.fr</a>.
                </p>

                <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Données que nous collectons</h3>
                <p>
                    Nous ne collectons aucune donnée à votre insu et nous ne créons pas de compte utilisateur.
                    Deux situations seulement donnent lieu à une collecte :
                </p>
                <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                    <li>
                        <strong>Le formulaire de demande de devis</strong> (page contact) : votre nom, votre adresse
                        email, votre numéro de téléphone et le contenu de votre message. Ces quatre champs sont
                        nécessaires pour vous répondre et pour évaluer votre demande.
                    </li>
                    <li>
                        <strong>La mesure d’audience du site</strong> : les pages consultées, la date et l’heure de
                        consultation, le type d’appareil et de navigateur, ainsi que votre adresse IP.
                    </li>
                </ul>
                <p>
                    Si vous nous appelez ou nous écrivez directement, les informations que vous nous transmettez à
                    cette occasion sont traitées selon les mêmes règles.
                </p>

                <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Pourquoi et sur quelle base</h3>
                <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                    <li>
                        <strong>Répondre à votre demande et établir un devis.</strong> Base légale : l’exécution de
                        mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).
                    </li>
                    <li>
                        <strong>Mesurer la fréquentation du site</strong> afin de l’améliorer. Base légale : notre
                        intérêt légitime à connaître l’usage de notre site.
                    </li>
                </ul>
                <p>
                    Vos données ne sont jamais vendues, ni louées, ni utilisées pour de la prospection commerciale
                    non sollicitée.
                </p>

                <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Qui y a accès</h3>
                <p>
                    Seuls les gérants et les intervenants de PFP SERVICES accèdent aux demandes reçues, dans la
                    limite de ce qui leur est utile pour traiter votre dossier. Nous faisons appel à des
                    prestataires techniques qui, du fait de leur rôle, sont susceptibles d’héberger ces données :
                </p>
                <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                    <li><strong>Replit, Inc.</strong> (États-Unis) : hébergement du site.</li>
                    <li><strong>Microsoft Ireland Operations Ltd</strong> : messagerie professionnelle Microsoft 365, qui reçoit et conserve les demandes envoyées via le formulaire.</li>
                    <li><strong>Google Ireland Ltd</strong> : mesure d’audience du site.</li>
                </ul>
                <p>
                    Certains de ces prestataires sont établis aux États-Unis ou peuvent y transférer des données.
                    Ces transferts sont encadrés par les garanties prévues au chapitre V du RGPD, notamment les
                    clauses contractuelles types de la Commission européenne.
                </p>

                <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Combien de temps nous les gardons</h3>
                <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                    <li>
                        <strong>Demande de devis restée sans suite :</strong> 3 ans à compter de notre dernier
                        échange avec vous.
                    </li>
                    <li>
                        <strong>Demande ayant abouti à une intervention :</strong> pendant toute la relation
                        commerciale, puis conformément aux durées légales de conservation des documents comptables
                        et contractuels (10 ans pour les pièces comptables).
                    </li>
                    <li>
                        <strong>Données de mesure d’audience :</strong> 14 mois au maximum.
                    </li>
                </ul>

                <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Vos droits</h3>
                <p>
                    Vous disposez d’un droit d’accès, de rectification, d’effacement et de portabilité de vos
                    données, ainsi que d’un droit de limitation et d’opposition à leur traitement. Vous pouvez
                    également définir des directives relatives à leur sort après votre décès.
                </p>
                <p>
                    Pour exercer ces droits, écrivez à{' '}
                    <a href="mailto:contact@pfp-services.fr">contact@pfp-services.fr</a> ou à PFP SERVICES,
                    22 Rue de la Salle, 77930 Cély. Nous vous répondons dans un délai d’un mois. Une preuve
                    d’identité pourra vous être demandée en cas de doute raisonnable sur l’identité du demandeur.
                </p>
                <p>
                    Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez
                    adresser une réclamation à la CNIL, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, ou
                    en ligne sur <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
                </p>
            </section>

            <section style={sectionStyle} id="cookies">
                <h2 style={titleStyle}>Cookies</h2>
                <p>
                    Ce site n’utilise ni cookie publicitaire, ni cookie de réseau social, ni traceur destiné à
                    suivre votre navigation sur d’autres sites.
                </p>
                <p>
                    Il utilise Google Analytics pour mesurer la fréquentation des pages. Cet outil dépose des
                    cookies sur votre appareil et enregistre votre adresse IP, afin de distinguer les visites les
                    unes des autres. Les données ainsi produites sont conservées 14 mois.
                </p>
                <p>
                    Vous pouvez vous opposer à cette mesure d’audience en activant l’option « Ne pas me pister »
                    (Do Not Track) de votre navigateur, en installant le{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                        module de désactivation fourni par Google
                    </a>, ou en supprimant les cookies depuis les réglages de votre navigateur.
                </p>
            </section>

            <section style={sectionStyle}>
                <h2 style={titleStyle}>Propriété intellectuelle</h2>
                <p>
                    L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                    Sauf mention contraire, les photographies présentées sur ce site ont été prises par PFP SERVICES
                    lors de ses propres interventions.
                </p>
            </section>

            <p style={{ marginTop: '3rem' }}>
                <Link href="/contact">Nous contacter</Link>
            </p>

            <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', opacity: 0.7 }}>
                Dernière mise à jour : {DERNIERE_MISE_A_JOUR}
            </div>
        </main>
    );
}
