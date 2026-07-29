import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import styles from "./page.module.css";
import { LocalReviews } from "@/components/blocks/LocalReviews";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Nos domaines d'expertise
          </h2>
          <div className={styles.grid}>
            <ServiceCard title="Démoussage Toiture" slug="/services/demoussage" image="/images/services/demoussage/toiture-nettoyage.jpg" />
            <ServiceCard title="Ramonage" slug="/services/ramonage" image="/images/services/ramonage/ramonage-poele-allume.jpg" />
            <ServiceCard title="Rongeurs" slug="/services/rongeurs" image="/images/services/rongeurs/rongeurs-infestation.jpg" />
            <ServiceCard title="Guêpes / Frelons" slug="/services/guepes-frelons" image="/images/services/guepes-frelons/frelons-arbre.jpg" />
            {/* TODO: photo cafards manquante (aucune disponible au 29/07/2026), placeholder gradient en attendant */}
            <ServiceCard title="Cafards" slug="/services/cafards" />
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
