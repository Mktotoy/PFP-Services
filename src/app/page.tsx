import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import styles from "./page.module.css";
import ServiceZoneCheck from "@/components/ServiceZoneCheck";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <section className="section container">
        <h2 className={styles.sectionTitle}>
          Nos types d'interventions
        </h2>
        <div className={styles.grid}>
          <ServiceCard title="Guêpes / Frelons / Abeilles" slug="guepes-frelons" image="/images/services/guepes-frelons/frelons-arbre.jpg" />
          <ServiceCard title="Rongeurs (Rats/Souris)" slug="rongeurs" image="/images/services/rongeurs/rongeurs-infestation.jpg" />
          <ServiceCard title="Chenilles" slug="chenilles" image="/images/services/chenilles/chenilles-nid.jpg" />
          <ServiceCard title="Cafards & Blattes" slug="cafards" image="/images/services/rongeurs/rongeurs-pieges.jpg" />
          <ServiceCard title="Punaises de lit" slug="punaises" image="/images/team/tenue-pro.jpg" />
          <ServiceCard title="Ramonage / Débistrage" slug="ramonage" image="/images/services/ramonage/ramonage-poele-allume.jpg" />
          <ServiceCard title="Nettoyage Toiture" slug="demoussage" image="/images/services/demoussage/toiture-nettoyage.jpg" />
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Découvrir toutes nos solutions
          </a>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className={styles.splitSection}>
            <div className={styles.splitImage} style={{ backgroundImage: "url('/images/services/rongeurs/rongeurs-infestation.jpg')" }}></div>
            <div className={styles.splitContent}>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Les nuisibles : un risque réel pour votre santé et votre habitat</h2>
              <p style={{ marginBottom: '1rem' }}>
                Qu'ils s'agissent des mulots ou des rats d’égouts, ils vivent communément dans des lieux humides et creusent des galeries qui peuvent fragiliser les structures.
                La souris, quant à elle, se faufile partout (faux-plafonds, cloisons) et s'attaque aux matériaux isolants et <strong>câbles électriques</strong>, provoquant pannes et risques d'incendie.
              </p>
              <p>Ils sont également vecteurs de maladies graves transmises à l’homme et aux animaux domestiques :</p>
              <ul className={styles.list}>
                <li><strong>Par morsure/griffure :</strong> tétanos, pasteurellose, infections</li>
                <li><strong>Par l’urine :</strong> leptospirose (très courant et dangereux)</li>
                <li><strong>Par les puces :</strong> typhus, salmonellose, fièvres...</li>
              </ul>
              <a href="/services/rongeurs" className="btn btn-primary" style={{ marginTop: '1rem' }}>En savoir plus sur la dératisation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className={styles.sectionTitle}>Nos Points Forts & Engagements</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h4>Intervention Rapide 7j/7</h4>
            <p>Nous comprenons l'urgence. Intervention possible le <strong>week-end et jours fériés</strong> pour stopper l'infestation au plus vite.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🛡️</div>
            <h4>Agréé Certibiocide</h4>
            <p>Entreprise certifiée par le Ministère de la Transition Écologique. Utilisation de produits biocides professionnels et raisonnés.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🐾</div>
            <h4>Sécurité Totale</h4>
            <p>Nos méthodes (postes d'appâtage sécurisés) protègent vos enfants et animaux de compagnie tout au long du traitement.</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>📝</div>
            <h4>Contrats sur Mesure</h4>
            <p>Pour les professionnels et restaurateurs : mise en place de plans de sanitation et contrats annuels de prévention.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '2rem' }}>Particuliers, Professionnels & Collectivités</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem auto', fontSize: '1.1rem', opacity: 0.9 }}>
            Notre champ d'intervention est large. Que vous soyez en maison, en appartement, ou que vous gériez un restaurant, un hôtel ou des bureaux,
            PFP Services adapte ses méthodes à votre environnement.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
              <strong>🏠 Domicile</strong><br />Intervention discrète
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
              <strong>🏢 Bureaux & Locaux</strong><br />Respect des normes
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
              <strong>🍽️ Restaurants</strong><br />Plan HACCP / Hygiène
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
