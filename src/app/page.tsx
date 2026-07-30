import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import styles from "./page.module.css";
import { BeforeAfter } from "@/components/blocks/BeforeAfter";
import { LocalReviews } from "@/components/blocks/LocalReviews";
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PFP Services | Dératisation, Nuisibles & Toiture 77",
    description: "PFP Services, expert dératisation, désinsectisation et démoussage de toiture en Seine-et-Marne (77). Intervention rapide 7j/7, devis gratuit.",
    alternates: { canonical: '/' },
};

const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pfp-services.fr/#webpage",
    url: "https://pfp-services.fr",
    name: "PFP Services | Dératisation, Nuisibles & Toiture 77",
    isPartOf: { "@id": "https://pfp-services.fr/#website" },
    about: { "@id": "https://pfp-services.fr/#organization" },
    mainEntity: {
        "@type": "ItemList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Démoussage Toiture", url: "https://pfp-services.fr/services/demoussage" },
            { "@type": "ListItem", position: 2, name: "Ramonage", url: "https://pfp-services.fr/services/ramonage" },
            { "@type": "ListItem", position: 3, name: "Rongeurs", url: "https://pfp-services.fr/services/rongeurs" },
            { "@type": "ListItem", position: 4, name: "Guêpes / Frelons", url: "https://pfp-services.fr/services/guepes-frelons" },
            { "@type": "ListItem", position: 5, name: "Cafards", url: "https://pfp-services.fr/services/cafards" },
            { "@type": "ListItem", position: 6, name: "Chenilles Processionnaires", url: "https://pfp-services.fr/services/chenilles" },
            { "@type": "ListItem", position: 7, name: "Taupes", url: "https://pfp-services.fr/services/taupes" },
        ],
    },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero />

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Nos types d'interventions
          </h2>
          <div className={styles.grid}>
            <ServiceCard title="Démoussage Toiture" slug="/services/demoussage" image="/images/services/demoussage/toiture-nettoyage.jpg" />
            <ServiceCard title="Ramonage" slug="/services/ramonage" image="/images/services/ramonage/ramonage-poele-allume.jpg" />
            <ServiceCard title="Rongeurs" slug="/services/rongeurs" image="/images/services/rongeurs/rongeurs-infestation.jpg" />
            <ServiceCard title="Guêpes / Frelons" slug="/services/guepes-frelons" image="/images/services/guepes-frelons/frelons-arbre.jpg" />
            <ServiceCard title="Cafards" slug="/services/cafards" image="/images/services/rongeurs/rongeurs-pieges.jpg" />
            <ServiceCard title="Chenilles Processionnaires" slug="/services/chenilles" image="/images/services/chenilles/chenilles-intervention.jpg" />
            <ServiceCard title="Taupes" slug="/services/taupes" image="/images/services/taupes/taupiniere.png" />
          </div>
        </div>
      </section>

      <section className="section container">
        <div className={styles.splitSection}>
            <div className={styles.textContent}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>
                  Démoussage & Nettoyage de Toiture dans le 77
                </h2>
                <p>
                    Votre toiture est envahie par la mousse, le lichen ou les traces noires ?
                    <strong> PFP Services</strong> intervient dans toute la Seine-et-Marne (Melun, Fontainebleau, Meaux)
                    pour redonner de l'éclat et protéger durablement votre couverture.
                </p>
                <ul className={styles.list}>
                    <li><strong>Brossage manuel</strong> pour préserver l'intégrité de vos tuiles.</li>
                    <li><strong>Traitement curatif</strong> anti-fongique haute efficacité.</li>
                    <li><strong>Protection Hydrofuge</strong> pour une étanchéité renforcée.</li>
                </ul>
                <Link href="/services" className="btn btn-primary">Voir notre expertise Toiture</Link>
            </div>
            <div className={styles.visualContent}>
                <BeforeAfter
                    beforeImg="/images/services/demoussage/toiture-nettoyage.jpg"
                    afterImg="/images/services/demoussage/toiture-nettoyage.jpg" // Using same for placeholder if multiple not available
                    altText="Nettoyage de toiture"
                    city="Melun"
                />
            </div>
        </div>
      </section>

      <LocalReviews category="toiture" title="Avis de nos clients Toiture" />

      <section className="section container">
        <h2 className={styles.sectionTitle}>Nos Points Forts & Engagements</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h4>Intervention Rapide 7j/7</h4>
            <p>Nous comprenons l'urgence. Intervention possible le <strong>week-end et jours fériés</strong> pour vos problèmes de nuisibles ou de toiture.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🛡️</div>
            <h4>Agréé Certibiocide</h4>
            <p>Entreprise certifiée par le Ministère de la Transition Écologique. Utilisation de produits biocides professionnels et raisonnés.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🐾</div>
            <h4>Sécurité Totale</h4>
            <p>Nos méthodes protègent vos enfants, animaux de compagnie et l'environnement (traitement toiture biodégradable).</p>
          </div>
        </div>
      </section>

    </main>
  );
}
