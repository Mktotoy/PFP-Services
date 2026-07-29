import { Phone, MessageSquare, MessageCircle, Mail } from 'lucide-react';
// import ContactForm from '@/components/ContactForm'; // mis de cote 29/07/2026, pas de backend d'envoi reel
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                <div>
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Nos Coordonnées</h2>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                        <strong>PFP Services</strong>
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                        <strong>Téléphone :</strong> <a href="tel:0629953262" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>06 29 95 32 62</a>
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                        <strong>Email :</strong> <a href="mailto:contact@pfp-services.fr">contact@pfp-services.fr</a>
                    </p>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        <strong>Facebook :</strong>{' '}
                        <a
                            href="https://www.facebook.com/PFP.Services77"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--primary)', fontWeight: 'bold' }}
                        >
                            PFP.Services77
                        </a>
                    </p>

                    <div style={{ background: 'var(--gray-light)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)' }}>
                        <h3>Zone d'Intervention</h3>
                        <p>
                            Nous intervenons en Seine-et-Marne et départements limitrophes, mais sommes également en capacité d'intervenir bien plus loin. Nous contacter, peu importe votre localisation, pour un devis gratuit.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Demander un Devis Gratuit</h2>
                    <p style={{ marginBottom: 'var(--spacing-md)', color: 'var(--gray-500, #666)' }}>
                        Réponse la plus rapide : contactez-nous directement par téléphone, SMS ou WhatsApp.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: 'var(--spacing-lg)' }}>
                        <a
                            href="tel:0629953262"
                            className="btn btn-primary"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '1rem', fontSize: '1.1rem' }}
                        >
                            <Phone size={20} /> Appeler le 06 29 95 32 62
                        </a>
                        <a
                            href="sms:0629953262"
                            className="btn btn-outline"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '1rem', fontSize: '1.1rem' }}
                        >
                            <MessageSquare size={20} /> Envoyer un SMS
                        </a>
                        <a
                            href="https://wa.me/33629953262"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '1rem', fontSize: '1.1rem', borderColor: '#25D366', color: '#25D366' }}
                        >
                            <MessageCircle size={20} /> WhatsApp
                        </a>
                        <a
                            href="mailto:contact@pfp-services.fr"
                            className="btn btn-outline"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '1rem', fontSize: '1.1rem' }}
                        >
                            <Mail size={20} /> Nous écrire
                        </a>
                        <p style={{ textAlign: 'center', margin: 0, fontSize: '0.9rem', color: 'var(--gray-500, #666)' }}>
                            Réponse rapide par email
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}
