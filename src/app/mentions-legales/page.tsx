import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales | PFP Services",
    alternates: { canonical: '/mentions-legales' },
    description: "Mentions légales, informations juridiques, éditeur et hébergeur du site PFP Services, entreprise de dératisation et nuisibles en Seine-et-Marne.",
};

export default function MentionsLegales() {
    return (
        <main className="container section" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)', textAlign: 'center' }}>Mentions Légales</h1>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem' }}>Identification de l'entreprise</h2>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                    <li><strong>Raison sociale :</strong> PFP SERVICES</li>
                    <li><strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)</li>
                    <li><strong>Capital social :</strong> 3 000,00 €</li>
                    <li><strong>SIREN :</strong> 900 125 980</li>
                    <li><strong>SIRET (siège) :</strong> 900 125 980 00012</li>
                    <li><strong>Numéro de TVA Intracommunautaire :</strong> FR93900125980</li>
                    <li><strong>RCS :</strong> 900 125 980 R.C.S. Melun (Inscrit le 08/06/2021)</li>
                    <li><strong>Dirigeant :</strong> M. Pierre-Francois BAZOUGE</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem' }}>Coordonnées</h2>
                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                    <li><strong>Adresse du siège social :</strong> 22 Rue de la Salle, 77930 Cély</li>
                    <li><strong>Téléphone :</strong> 06 29 95 32 62</li>
                    <li><strong>Email :</strong> contact@pfp-services.fr</li>
                    <li><strong>Activité :</strong> Désinfection, désinsectisation, dératisation</li>
                </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem' }}>Hébergement du site</h2>
                <p>
                    Ce site est hébergé par Google Cloud (Google App Engine).<br />
                    Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '0.5rem' }}>Propriété Intellectuelle</h2>
                <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
            </section>

            <div style={{ marginTop: '4rem', textAlign: 'center', fontSize: '0.9rem', opacity: 0.7 }}>
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </div>
        </main>
    );
}
