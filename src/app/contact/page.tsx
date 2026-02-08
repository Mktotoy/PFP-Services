export const metadata = {
    title: "Contactez PFP Services | Devis Gratuit Dératisation 77",
    description: "Contactez PFP Services pour une intervention rapide à Melun, Fontainebleau et dans le 77. Devis gratuit pour dératisation, désinsectisation.",
};

export default function ContactPage() {
    return (
        <main className="section container">
            <h1 className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
                Contactez PFP Services
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
                <div>
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Nos Coordonnées</h2>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                        <strong>PFP Services</strong><br />
                        22 Rue de la Salle<br />
                        77930 Cély
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                        <strong>Téléphone :</strong> <a href="tel:0629953262" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>06 29 95 32 62</a>
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        <strong>Email :</strong> <a href="mailto:contact@pfp-services.fr">contact@pfp-services.fr</a>
                    </p>

                    <div style={{ background: 'var(--gray-light)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)' }}>
                        <h3>Zone d'Intervention</h3>
                        <p>
                            Nous intervenons rapidement dans tout le département de Seine-et-Marne (77), notamment à :
                        </p>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>Melun</li>
                            <li>Fontainebleau</li>
                            <li>Dammarie-les-Lys</li>
                            <li>Le Mée-sur-Seine</li>
                            <li>... et communes environnantes.</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Demander un Devis Gratuit</h2>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Nom</label>
                            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Téléphone</label>
                            <input type="tel" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                            <textarea rows={5} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
                            Envoyer ma demande
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
