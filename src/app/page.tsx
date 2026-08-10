import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import styles from "./page.module.css";
import { LocalReviews } from "@/components/blocks/LocalReviews";
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
            { "@type": "ListItem", position: 3, name: "Guêpes / Frelons", url: "https://pfp-services.fr/services/guepes-frelons" },
            { "@type": "ListItem", position: 4, name: "Rongeurs", url: "https://pfp-services.fr/services/rongeurs" },
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
            Nos domaines d'expertise
          </h2>
          <div className={styles.grid}>
            <ServiceCard title="Démoussage Toiture" slug="/services/demoussage" image="/images/services/demoussage/toiture-nettoyage.jpg" />
            <ServiceCard title="Ramonage" slug="/services/ramonage" image="/images/services/ramonage/ramonage-poele-allume.jpg" />
            <ServiceCard title="Guêpes / Frelons" slug="/services/guepes-frelons" image="/images/services/guepes-frelons/frelons-arbre.jpg" />
            <ServiceCard title="Rongeurs" slug="/services/rongeurs" image="/images/services/rongeurs/rongeurs-infestation.jpg" />
            <ServiceCard title="Cafards" slug="/services/cafards" image="/images/services/cafards/cafard-blanc-identification.png" />
            <ServiceCard title="Chenilles Processionnaires" slug="/services/chenilles" image="/images/services/chenilles/chenilles-intervention.jpg" />
            <ServiceCard title="Taupes" slug="/services/taupes" image="/images/services/taupes/taupiniere.png" />
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className={styles.sectionTitle}>Nos engagements</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <p>
              Nous intervenons auprès de particuliers, professionnels et collectivités
              et nous déplaçons sur site afin d'établir un devis gratuit personnalisé
              des prestations à réaliser. Nous utilisons des produits adaptés et
              protégeons votre environnement avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <LocalReviews category="toiture" title="Avis de nos clients Toiture" />

      <section className="section container">
        <h2 className={styles.sectionTitle}>Nos Points Forts & Engagements</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h4>Intervention Rapide</h4>
            <p>Nous comprenons l'urgence. Intervention possible le <strong>week-end et jours fériés</strong> pour vos problèmes de nuisibles ou de toiture, nous nous adaptons à votre organisation pour vous proposer une intervention dans les plus brefs délais.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🛡️</div>
            <h4>Agréé Certibiocide</h4>
            <p>Entreprise certifiée par le Ministère de la Transition Écologique. Utilisation de produits biocides professionnels et raisonnés.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🐾</div>
            <h4>Intervention Sécurisée</h4>
            <p>Nos interventions se font dans le respect de l'environnement, afin de protéger votre jardin et vos animaux.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
