# PFP Services, notes techniques du projet

Fichier de contexte pour toute IA reprenant ce dépôt. **Non servi par le site** :
Next ne publie que `public/` et les routes de `src/app/`, un fichier à la racine
n'est jamais accessible depuis le web.

**Aucun secret ici.** Les identifiants vivent dans les Secrets de Déploiement
Replit et dans `.env.local` en développement, tous deux ignorés par git.

---

## Chaîne du formulaire de contact

Le formulaire de `/contact` traverse, dans cet ordre :

1. lecture du corps JSON
2. **enregistrement en base**, avant tout filtre, pour qu'aucune demande ne se perde
3. champ piège (`company`, invisible à l'écran)
4. durée de saisie, rejet sous 3 secondes
5. validation des champs
6. score de contenu (liens, termes, alphabet non latin)
7. limite de débit, 5 par heure et par IP
8. envoi du mail

Fichiers : `src/app/api/contact/route.ts`, `src/lib/contact/`, `src/lib/mail/`.

### Règles à ne pas casser

**Jamais de faux succès.** Si l'envoi échoue, la route renvoie 502 et invite à
téléphoner. Le formulaire d'origine affichait une confirmation sans rien émettre,
c'est le défaut que tout ce code corrige.

**Les rejets anti-spam renvoient 200.** C'est volontaire : indiquer à un robot ce
qui l'a trahi lui apprend à le contourner. Le motif réel part dans les journaux
et dans la colonne `reason` de la base.

**La validation passe avant la limite de débit.** Une faute de frappe sur son
email ne doit pas consommer le quota d'un visiteur légitime.

**Le destinataire ne vient jamais de la requête.** Il est lu dans
`CONTACT_RECIPIENT`. Sans quoi l'endpoint deviendrait un relais ouvert.

**L'adresse du visiteur va en `replyTo`, jamais en expéditeur.** Le domaine publie
`v=spf1 ... -all`, un envoi usurpant son domaine serait rejeté.

---

## Variables d'environnement

Secrets de **Déploiement** Replit, pas ceux du workspace, ce sont deux stockages
distincts.

```
MAIL_PROVIDER=graph          # graph | resend | console (console interdit en production)
CONTACT_SENDER=contact@pfp-services.fr
CONTACT_RECIPIENT=contact@pfp-services.fr
GRAPH_TENANT_ID=...
GRAPH_CLIENT_ID=...
GRAPH_CLIENT_SECRET=...      # expire au maximum au bout de 24 mois
DATABASE_URL=...             # Neon, région eu-central-1
```

Piège vécu : les scripts de diagnostic dans `AIVault/scripts/pfp-mailflow/`
utilisent des noms en `SITE_*`. Le site attend des noms en `GRAPH_*`. Ce sont les
mêmes valeurs sous deux vocabulaires, source d'un 502 difficile à diagnostiquer.

---

## Envoi de mail, Microsoft 365

Inscription d'application Entra dédiée au site, `PFP-Site-Contact`, portant
**uniquement** `Mail.Send` en autorisation d'application.

Ne jamais réutiliser l'inscription `Thomas-Claude-Review` : elle porte `Mail.Read`
sur toutes les boîtes du locataire, son secret sur un serveur web public
exposerait toute la messagerie.

Une `ApplicationAccessPolicy` restreint l'application à la seule boîte contact@.
Sans elle, `Mail.Send` en application autorise l'envoi au nom de **n'importe
quelle boîte**, ce qui est le vecteur type d'une fraude au virement. La boîte
admin@ a été compromise en août 2026, ce garde-fou n'est pas théorique.

**Piège de propagation** : un changement de policy met plus d'une heure à
s'appliquer aux appels Graph, même quand `Test-ApplicationAccessPolicy` répond
déjà correctement. Pire, le cache d'autorisation d'une application **active** est
maintenu jusqu'à deux heures, contre trente minutes pour une application
silencieuse. Tester en boucle rallonge donc le délai qu'on cherche à mesurer.

Procédure complète et scripts : `AIVault/scripts/pfp-mailflow/RUNBOOK_site_sender.md`.

---

## Base de données

Neon PostgreSQL, table `contact_submissions`, 14 colonnes, index sur `email`,
`received_at` et `status`. Statuts observés : `received`, `spam`, `invalid`,
`rate_limited`, `sending`, `sent`, `failed`.

**À faire, non fait à ce jour :** aucune purge n'est en place. Les mentions
légales annoncent une conservation de **3 ans après le dernier échange** et de
**14 mois** pour les données d'audience. Une table qui garde tout indéfiniment
contredit la page publiée, ce qui est pire que pas de page du tout.

La table contient nom, email, téléphone, message et **adresse IP**, donc des
données personnelles au sens du RGPD. Elle ne doit jamais être exposée
publiquement.

---

## Déploiement

**Run et Redeploy ne font pas la même chose.** Le Run relance l'aperçu de
développement ; le site public sur `pfp-services.fr` est servi par un build figé
qui ne change qu'à la republication. Un travail poussé sur GitHub et tiré dans le
workspace reste invisible en ligne tant qu'on n'a pas redéployé.

**Ne jamais pousser depuis une session SSH Replit**, l'authentification git y
échoue. On commite sur Replit, et c'est le clone local qui pousse. Inversement,
la publication depuis l'interface Replit, elle, pousse bien vers GitHub.

Le site répond avec `cache-control: s-maxage=31536000`, soit un an de cache de
périphérie sur le HTML. Si une page ne bouge pas après un redéploiement alors que
les images sont à jour, chercher de ce côté.

---

## Pièges connus

**`package-lock.json` pointe sur `package-firewall.replit.local`**, le miroir
interne de Replit. `npm install` échoue donc hors de Replit, ce qui enferme le
projet sur cette plateforme.

**Les images sont des `<img>` bruts**, sans dimensions ni tailles adaptatives.
La galerie pèse une quinzaine de mégaoctets, servis en pleine résolution même sur
téléphone.

**Contraste** : `--primary` (#059c21) avec du texte blanc donne 3,63:1, sous le
minimum AA de 4,5. Utiliser `--primary-dark` (#046d17), à 6,55:1, pour tout fond
portant du texte blanc.

**Bannières de page** : le composant `ServiceHero` applique par défaut un aplat
vert à 70 % qui efface les photos. Le paramètre `overlay` permet de l'alléger,
ce que font les pages contact, guêpes, ramonage et démoussage.

**Photos en double** : plusieurs pages ont eu la même image en bannière et dans
le contenu. Attention, un recadrage sous un autre nom de fichier n'est détecté ni
par comparaison de chemins ni par empreinte binaire. Vérifier à l'œil.

**Captures d'écran de téléphone** : plusieurs photos fournies contenaient des
bandes noires et la barre de navigation. Les recadrer avant intégration.

---

## Conventions de contenu

Demandes de la cliente, à respecter par défaut :

- pas de majuscule à chaque mot dans les titres
- « Galerie photos » partout, l'appellation « Réalisations » est abandonnée
- une seule adresse affichée, contact@, admin@ n'apparaît nulle part
- toute action de contact renvoie vers `/contact`, ni SMS ni WhatsApp
- les catégories de galerie sans photo sont masquées automatiquement, il suffit
  d'ajouter ou retirer des entrées dans `galleryData.ts`
- les avant/après sont ce qui fait comprendre le métier, les privilégier

Les pages de zone existent pour le référencement local et n'ont pas vocation à
figurer dans la navigation principale. Surveiller qu'elles gardent au moins un
lien entrant, elles sont déjà devenues orphelines deux fois.
