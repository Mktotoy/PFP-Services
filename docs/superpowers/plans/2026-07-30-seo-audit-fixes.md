# SEO Audit Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every SEO-category finding from the external audit on the PFP Services Next.js site (crawlability, metadata, Open Graph/Twitter, internal linking, structured data), without touching the accessibility or content-quality findings (out of scope, confirmed with Thomas).

**Architecture:** Next.js 15 App Router site (`/media/mktotoy/Shared/Projets/PFP-Services`, repo `git@github.com:Mktotoy/PFP-Services.git`, deployed on Google App Engine, linked Replit workspace). Each page is a Server Component exporting `metadata` (or a `generateMetadata`), JSON-LD is emitted via inline `<script type="application/ld+json">` or the shared `LocalBusinessSchema`/`JsonLd` components in `src/components/seo/JsonLd.tsx`. No test framework in this repo — verification is `npm run build` (must succeed, 0 errors) plus targeted `grep` checks described per task.

**Tech Stack:** Next.js 15 (App Router), TypeScript, React 19, no test runner configured.

## Global Constraints

- Site base URL: `https://pfp-services.fr` (use this exact origin everywhere, never `deratisation-77.com` — that domain is a bug being fixed in Task 8).
- Title tags: max 65 characters, must contain "PFP Services".
- Meta descriptions: 120–160 characters.
- Never invent content (no fake images, no fake reviews, no fake dates) — only fix structural/metadata SEO issues, using data already present in the codebase (`src/data/caseStudies.ts`, `src/data/reviews.ts`).
- Do not touch anything from the accessibility (ContactForm labels, GoogleReviewsBadge keyboard) or content-quality (cafards placeholder images) sections of the audit — explicitly out of scope for this plan.
- After every task: `npm run build` must succeed with no new TypeScript/ESLint errors.
- Git: commit after every task with a French, present-tense conventional message (`fix:`/`feat:`). No push until the whole plan is done and Thomas has reviewed (repo is git@github.com:Mktotoy/PFP-Services.git, linked to the Replit workspace and the GAE deploy — pushing triggers real prod impact).

---

### Task 1: `robots.txt` route

**Files:**
- Create: `src/app/robots.ts`

**Interfaces:**
- Produces: a `/robots.txt` route Next.js serves automatically (no consumers in later tasks).

- [ ] **Step 1: Create the robots route**

```typescript
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://pfp-services.fr/sitemap.xml',
    };
}
```

- [ ] **Step 2: Build and verify the route is generated**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds, route list includes `/robots.txt`.

- [ ] **Step 3: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/robots.ts
git commit -m "feat: ajoute robots.txt avec référence au sitemap"
```

---

### Task 2: `metadataBase` + canonical tags sitewide

**Files:**
- Modify: `src/app/layout.tsx`
- Modify (add `alternates.canonical`): `src/app/page.tsx` (created in Task 4, so canonical for `/` is added there instead), `src/app/services/page.tsx`, `src/app/services/cafards/page.tsx`, `src/app/services/chenilles/page.tsx`, `src/app/services/demoussage/page.tsx`, `src/app/services/guepes-frelons/page.tsx`, `src/app/services/ramonage/page.tsx`, `src/app/services/rongeurs/page.tsx`, `src/app/services/taupes/page.tsx`, `src/app/zones/page.tsx`, `src/app/zones/77-seine-et-marne/page.tsx`, `src/app/zones/45-loiret/page.tsx`, `src/app/zones/89-yonne/page.tsx`, `src/app/zones/91-essonne/page.tsx`, `src/app/zones/fontainebleau/page.tsx`, `src/app/realisations/page.tsx`, `src/app/cas-clients/page.tsx`, `src/app/contact/page.tsx`, `src/app/mentions-legales/page.tsx`, `src/app/qui-sommes-nous/page.tsx`

**Interfaces:**
- Produces: `metadataBase` on the root layout so every relative `alternates.canonical` and `openGraph.images` resolves to an absolute `https://pfp-services.fr/...` URL. Later tasks (4, 5) must add their own `alternates.canonical` using this same relative-path convention.

- [ ] **Step 1: Add `metadataBase` to the root layout metadata**

In `src/app/layout.tsx`, change:

```typescript
export const metadata: Metadata = {
  title: "PFP Services | Dératisation & Nuisibles 77 | Melun & Fontainebleau",
  description: "Expert en dératisation et lutte contre les nuisibles dans le 77 (Seine-et-Marne), Melun, Fontainebleau. Rats, souris, guêpes, frelons, punaises. Intervention rapide.",
  icons: {
    icon: '/images/favicon-pfp.jpeg',
  },
};
```

to:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://pfp-services.fr'),
  title: "PFP Services | Dératisation & Nuisibles Seine-et-Marne",
  description: "Expert dératisation et lutte anti-nuisibles en Seine-et-Marne (77), Melun, Fontainebleau. Rats, souris, guêpes, frelons, punaises. Intervention rapide.",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/favicon-pfp.jpeg',
  },
};
```

(Title/description content also fixed here for length — see Task 7 for the full sitewide title/description pass; this step only handles the layout file since it's touched anyway for `metadataBase`.)

- [ ] **Step 2: Add `alternates.canonical` to each page's existing `metadata` export**

For each file below, add one `alternates: { canonical: '<path>' }` key inside the existing `export const metadata: Metadata = { ... }` object (do not remove `title`/`description`, just insert the key):

| File | canonical path |
|---|---|
| `src/app/services/page.tsx` | `/services` |
| `src/app/services/cafards/page.tsx` | `/services/cafards` |
| `src/app/services/chenilles/page.tsx` | `/services/chenilles` |
| `src/app/services/demoussage/page.tsx` | `/services/demoussage` |
| `src/app/services/guepes-frelons/page.tsx` | `/services/guepes-frelons` |
| `src/app/services/ramonage/page.tsx` | `/services/ramonage` |
| `src/app/services/rongeurs/page.tsx` | `/services/rongeurs` |
| `src/app/services/taupes/page.tsx` | `/services/taupes` |
| `src/app/zones/page.tsx` | `/zones` |
| `src/app/zones/77-seine-et-marne/page.tsx` | `/zones/77-seine-et-marne` |
| `src/app/zones/45-loiret/page.tsx` | `/zones/45-loiret` |
| `src/app/zones/89-yonne/page.tsx` | `/zones/89-yonne` |
| `src/app/zones/91-essonne/page.tsx` | `/zones/91-essonne` |
| `src/app/zones/fontainebleau/page.tsx` | `/zones/fontainebleau` |
| `src/app/realisations/page.tsx` | `/realisations` |
| `src/app/cas-clients/page.tsx` | `/cas-clients` |
| `src/app/contact/page.tsx` | `/contact` |
| `src/app/mentions-legales/page.tsx` | `/mentions-legales` |
| `src/app/qui-sommes-nous/page.tsx` | `/qui-sommes-nous` |

Example for `src/app/services/cafards/page.tsx` — change:

```typescript
export const metadata: Metadata = {
    title: "Destruction Cafards & Blattes 77 | Désinsectisation | PFP Services",
    description: "Éradication de cafards et blattes en Seine-et-Marne (Melun, Fontainebleau). Intervention rapide, contrats annuels pour pros et particuliers. Devis gratuit.",
};
```

to:

```typescript
export const metadata: Metadata = {
    title: "Destruction Cafards & Blattes 77 | PFP Services",
    alternates: { canonical: '/services/cafards' },
    description: "Éradication de cafards et blattes en Seine-et-Marne (Melun, Fontainebleau). Intervention rapide, contrats annuels pour pros et particuliers. Devis gratuit.",
};
```

Apply the same `alternates: { canonical: '<path>' }` insertion pattern (title/description text unchanged here, that's Task 7) to every remaining file in the table.

- [ ] **Step 3: Build and grep-verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

Run: `grep -rL "alternates" src/app/services/*/page.tsx src/app/services/page.tsx src/app/zones/*/page.tsx src/app/zones/page.tsx src/app/realisations/page.tsx src/app/cas-clients/page.tsx src/app/contact/page.tsx src/app/mentions-legales/page.tsx src/app/qui-sommes-nous/page.tsx`
Expected: empty output (every file now has `alternates`).

- [ ] **Step 4: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/layout.tsx src/app/services src/app/zones src/app/realisations/page.tsx src/app/cas-clients/page.tsx src/app/contact/page.tsx src/app/mentions-legales/page.tsx src/app/qui-sommes-nous/page.tsx
git commit -m "fix: ajoute metadataBase et canonical tags sur toutes les pages"
```

---

### Task 3: Open Graph + Twitter Card + og:image sitewide

**Files:**
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `metadataBase` from Task 2.
- Produces: default `openGraph`/`twitter` metadata every page inherits unless it overrides it (no page does an override in this plan, so this single edit fixes 3 audit findings sitewide).

- [ ] **Step 1: Add `openGraph` and `twitter` to the root layout metadata**

In `src/app/layout.tsx`, extend the `metadata` object from Task 2 to:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://pfp-services.fr'),
  title: "PFP Services | Dératisation & Nuisibles Seine-et-Marne",
  description: "Expert dératisation et lutte anti-nuisibles en Seine-et-Marne (77), Melun, Fontainebleau. Rats, souris, guêpes, frelons, punaises. Intervention rapide.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'PFP Services',
    url: 'https://pfp-services.fr',
    title: "PFP Services | Dératisation & Nuisibles Seine-et-Marne",
    description: "Expert dératisation et lutte anti-nuisibles en Seine-et-Marne (77), Melun, Fontainebleau. Rats, souris, guêpes, frelons, punaises. Intervention rapide.",
    images: [
      {
        url: '/images/logos/logo.png',
        width: 512,
        height: 512,
        alt: 'PFP Services',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "PFP Services | Dératisation & Nuisibles Seine-et-Marne",
    description: "Expert dératisation et lutte anti-nuisibles en Seine-et-Marne (77), Melun, Fontainebleau. Rats, souris, guêpes, frelons, punaises. Intervention rapide.",
    images: ['/images/logos/logo.png'],
  },
  icons: {
    icon: '/images/favicon-pfp.jpeg',
  },
};
```

Note: `logo.png` is a square logo, not an ideal 1200×630 OG banner — flag this to Thomas as a follow-up (a dedicated OG image would improve share previews further), but it's a valid, real image and unblocks the "no og:image at all" finding.

- [ ] **Step 2: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

Run: `npx next start & sleep 3 && curl -s http://localhost:3000/ | grep -o '<meta property="og:[a-z:]*"' | sort -u; kill %1`
Expected: at least `og:title`, `og:description`, `og:image`, `og:type`, `og:site_name` present.

- [ ] **Step 3: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/layout.tsx
git commit -m "feat: ajoute Open Graph et Twitter Card par défaut sitewide"
```

---

### Task 4: Homepage metadata + WebPage/ItemList JSON-LD

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `metadataBase` from Task 2 (canonical resolves against it).
- Produces: `metadata` export and page-specific JSON-LD for the homepage — no other task depends on this.

- [ ] **Step 1: Add the metadata export**

In `src/app/page.tsx`, after the imports and before `export default function Home()`, add:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PFP Services | Dératisation, Nuisibles & Toiture 77",
    description: "PFP Services, expert dératisation, désinsectisation et démoussage de toiture en Seine-et-Marne (77). Intervention rapide 7j/7, devis gratuit.",
    alternates: { canonical: '/' },
};
```

- [ ] **Step 2: Add a WebPage + ItemList JSON-LD block to the page body**

In `src/app/page.tsx`, add the JSON-LD constant above `export default function Home()` and render it as the first child of `<main>`:

```typescript
const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pfp-services.fr/#webpage",
    url: "https://pfp-services.fr",
    name: "PFP Services | Dératisation, Nuisibles & Toiture 77",
    isPartOf: { "@id": "https://pfp-services.fr/#organization" },
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
      {/* ... rest of the existing JSX unchanged ... */}
```

(Only the opening of `<main>` changes — insert the `<script>` tag as its first child, keep everything else in the file identical.)

- [ ] **Step 3: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds, no duplicate-object-key or JSON errors.

Run: `grep -c "homeJsonLd" src/app/page.tsx`
Expected: `3` (declaration + JSON.stringify usage + no leftover draft).

- [ ] **Step 4: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/page.tsx
git commit -m "feat: ajoute metadata et schema WebPage/ItemList sur la homepage"
```

---

### Task 5: Split gallery into client component + server metadata

**Files:**
- Create: `src/components/gallery/GalleryClient.tsx` (move all current interactive content here)
- Modify: `src/app/galerie/page.tsx` (becomes a Server Component with `metadata`)

**Interfaces:**
- Produces: `GalleryClient` — default export, no props (keeps the same internal `images` array and `useState` filter it already has).

- [ ] **Step 1: Create `src/components/gallery/GalleryClient.tsx`**

Move the entire current content of `src/app/galerie/page.tsx` into this new file unchanged, except:
- add `'use client';` at the top (already first line, keep it)
- change the import `import styles from './page.module.css';` to `import styles from '../../app/galerie/page.module.css';`
- rename the default export function from `GaleriePage` to `GalleryClient`

- [ ] **Step 2: Replace `src/app/galerie/page.tsx` with a server component**

```typescript
import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
    title: "Galerie Photo Interventions 77 | PFP Services",
    description: "Galerie photo des interventions PFP Services en Seine-et-Marne : dératisation, nids de guêpes et frelons, chenilles, ramonage et démoussage de toiture.",
    alternates: { canonical: '/galerie' },
};

export default function GaleriePage() {
    return <GalleryClient />;
}
```

- [ ] **Step 3: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds; `/galerie` route is Server-rendered (check build output route type is not marked with the client-only warning).

Run: `grep -n "'use client'" src/app/galerie/page.tsx`
Expected: no output (the directive must no longer be in `page.tsx`, only in `GalleryClient.tsx`).

- [ ] **Step 4: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/galerie/page.tsx src/components/gallery/GalleryClient.tsx
git commit -m "fix: sépare la galerie en composant client + metadata serveur"
```

---

### Task 6: Internal linking — fix orphaned pages in Header/Footer

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- No other task depends on this.

- [ ] **Step 1: Add missing links to the desktop nav in `Header.tsx`**

Change:

```tsx
                    <Link href="/zones" className={styles.link}>Zones d&apos;Intervention</Link>
                    <Link href="/realisations" className={styles.link}>Réalisations</Link>
                </nav>
```

to:

```tsx
                    <Link href="/zones" className={styles.link}>Zones d&apos;Intervention</Link>
                    <Link href="/realisations" className={styles.link}>Réalisations</Link>
                    <Link href="/qui-sommes-nous" className={styles.link}>Qui Sommes-Nous</Link>
                </nav>
```

- [ ] **Step 2: Add missing links to the mobile drawer nav in `Header.tsx`**

Change:

```tsx
                    <div className={styles.drawerDivider} />

                    <Link href="/zones" className={styles.drawerLink} onClick={close}>Zones d&apos;Intervention</Link>
                    <Link href="/realisations" className={styles.drawerLink} onClick={close}>Réalisations</Link>
                    <Link href="/contact" className={styles.drawerLink} onClick={close}>Contact & Devis</Link>
```

to:

```tsx
                    <div className={styles.drawerDivider} />

                    <Link href="/services" className={styles.drawerLink} onClick={close}>Toutes nos prestations</Link>
                    <Link href="/zones" className={styles.drawerLink} onClick={close}>Zones d&apos;Intervention</Link>
                    <Link href="/realisations" className={styles.drawerLink} onClick={close}>Réalisations</Link>
                    <Link href="/galerie" className={styles.drawerLink} onClick={close}>Galerie Photo</Link>
                    <Link href="/qui-sommes-nous" className={styles.drawerLink} onClick={close}>Qui Sommes-Nous</Link>
                    <Link href="/contact" className={styles.drawerLink} onClick={close}>Contact & Devis</Link>
```

- [ ] **Step 3: Add missing links to `Footer.tsx`**

Change the "Nos Services" column closing and add a new "L'entreprise" column — replace:

```tsx
                    <div className={styles.column}>
                        <h3>Contact</h3>
```

with:

```tsx
                    <div className={styles.column}>
                        <h3>L&apos;Entreprise</h3>
                        <ul>
                            <li><Link href="/qui-sommes-nous">Qui Sommes-Nous</Link></li>
                            <li><Link href="/services">Toutes nos prestations</Link></li>
                            <li><Link href="/realisations">Réalisations</Link></li>
                            <li><Link href="/galerie">Galerie Photo</Link></li>
                            <li><Link href="/zones">Zones d&apos;Intervention</Link></li>
                            <li><Link href="/zones/77-seine-et-marne">Seine-et-Marne (77)</Link></li>
                            <li><Link href="/zones/91-essonne">Essonne (91)</Link></li>
                            <li><Link href="/zones/89-yonne">Yonne (89)</Link></li>
                            <li><Link href="/zones/45-loiret">Loiret (45)</Link></li>
                            <li><Link href="/zones/fontainebleau">Fontainebleau</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Contact</h3>
```

Check `src/components/Footer.module.css` for the `.grid` rule — if it's a fixed 3-column grid (e.g. `grid-template-columns: repeat(3, 1fr)`), update it to `repeat(4, 1fr)` (or `auto-fit, minmax(...)`) so the new 4th column doesn't overflow/wrap awkwardly. Read the file first to confirm the actual rule before editing.

- [ ] **Step 4: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

Run: `grep -o 'href="/[a-z0-9-/]*"' src/components/Header.tsx src/components/Footer.tsx | sort -u`
Expected: includes `/qui-sommes-nous`, `/galerie`, `/services`, `/zones/77-seine-et-marne`, `/zones/91-essonne`, `/zones/89-yonne`, `/zones/45-loiret`, `/zones/fontainebleau`.

- [ ] **Step 5: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/components/Header.tsx src/components/Footer.tsx src/components/Footer.module.css
git commit -m "fix: lie les pages orphelines (qui-sommes-nous, galerie, zones, services) dans Header/Footer"
```

---

### Task 7: Sitewide title/description length + brand pass

**Files:**
- Modify: `src/app/services/cafards/page.tsx`
- Modify: `src/app/services/chenilles/page.tsx`
- Modify: `src/app/services/demoussage/page.tsx`
- Modify: `src/app/services/guepes-frelons/page.tsx`
- Modify: `src/app/services/taupes/page.tsx`
- Modify: `src/app/zones/page.tsx`
- Modify: `src/app/zones/77-seine-et-marne/page.tsx`
- Modify: `src/app/realisations/page.tsx`
- Modify: `src/app/mentions-legales/page.tsx`

**Interfaces:**
- Consumes: the `alternates.canonical` keys added in Task 2 (this task edits `title`/`description` values in the same objects, must not remove `alternates`).

- [ ] **Step 1: Fix `src/app/services/cafards/page.tsx` (title 66 chars → over 65 limit)**

Change:

```typescript
    title: "Destruction Cafards & Blattes 77 | Désinsectisation | PFP Services",
```

to:

```typescript
    title: "Destruction Cafards & Blattes 77 | PFP Services",
```

- [ ] **Step 2: Fix `src/app/services/chenilles/page.tsx` (no brand, desc 169 chars → over 160)**

Change:

```typescript
    title: "Chenilles Processionnaires du Pin 77 | Traitement & Écopièges",
    description: "Lutte contre les chenilles processionnaires en Seine-et-Marne. Enlèvement de cocons, écopièges et traitement biologique. Intervention pour particuliers et collectivités.",
```

to:

```typescript
    title: "Chenilles Processionnaires 77 | PFP Services",
    description: "Lutte contre les chenilles processionnaires en Seine-et-Marne. Enlèvement de cocons, écopièges et traitement biologique pour particuliers et collectivités.",
```

- [ ] **Step 3: Fix `src/app/services/demoussage/page.tsx` (no brand)**

Change:

```typescript
    title: "Démoussage & Nettoyage de Toiture 77 | Traitement Hydrofuge",
```

to:

```typescript
    title: "Démoussage & Nettoyage Toiture 77 | PFP Services",
```

- [ ] **Step 4: Fix `src/app/services/guepes-frelons/page.tsx` (title 72 chars → over 65)**

Change:

```typescript
    title: "Destruction Nids Guêpes & Frelons 77 | Récupération Essaims Abeilles",
```

to:

```typescript
    title: "Nids Guêpes & Frelons 77 | PFP Services",
```

- [ ] **Step 5: Fix `src/app/services/taupes/page.tsx` (no brand)**

Change:

```typescript
    title: "Anti-Taupes & Taupiers 77 | Dératisation & Piégeage Mécanique",
```

to:

```typescript
    title: "Anti-Taupes & Taupiers 77 | PFP Services",
```

- [ ] **Step 6: Fix `src/app/zones/page.tsx` (no brand, desc 118 chars → under 120)**

Change:

```typescript
    title: "Zones d'Intervention | Dératisation 77, 91, 89, 45",
    description: "Intervention rapide pour dératisation et nuisibles en Seine-et-Marne (Melun, Fontainebleau), Essonne, Yonne et Loiret.",
```

to:

```typescript
    title: "Zones d'Intervention 77-91-89-45 | PFP Services",
    description: "Intervention rapide pour dératisation et lutte anti-nuisibles en Seine-et-Marne, Essonne, Yonne et Loiret. Devis gratuit, déplacement sous 24h.",
```

- [ ] **Step 7: Fix `src/app/zones/77-seine-et-marne/page.tsx` (desc 177 chars → over 160)**

Change:

```typescript
    description: "Entreprise de proximité intervenant dans toute la Seine-et-Marne (77). Dératisation, destruction nids de guêpes, nettoyage de toiture à Melun, Meaux, Chelles, Pontault-Combault.",
```

to:

```typescript
    description: "Entreprise de proximité intervenant en Seine-et-Marne (77). Dératisation, nids de guêpes, nettoyage de toiture à Melun, Meaux, Chelles, Pontault-Combault.",
```

- [ ] **Step 8: Fix `src/app/services/fontainebleau/page.tsx`... ** — file is actually `src/app/zones/fontainebleau/page.tsx` (no brand missing here — it already has "PFP Services"? Re-check: current title is `"Démoussage Toiture Fontainebleau | Nettoyage Expert 77300"` which has NO brand). Change:

```typescript
    title: "Démoussage Toiture Fontainebleau | Nettoyage Expert 77300",
```

to:

```typescript
    title: "Démoussage Toiture Fontainebleau | PFP Services",
```

- [ ] **Step 9: Fix `src/app/realisations/page.tsx` (desc 168 chars → over 160)**

Change:

```typescript
    description: "Découvrez nos dernières interventions en Seine-et-Marne : nettoyage de toiture, destruction de nids de frelons, dératisation. La preuve de notre savoir-faire en images.",
```

to:

```typescript
    description: "Découvrez nos dernières interventions en Seine-et-Marne : nettoyage de toiture, destruction de nids de frelons, dératisation. Preuve de notre savoir-faire.",
```

- [ ] **Step 10: Fix `src/app/mentions-legales/page.tsx` (desc 84 chars → under 120)**

Change:

```typescript
    description: "Mentions légales, informations juridiques et coordonnées de la société PFP Services.",
```

to:

```typescript
    description: "Mentions légales, informations juridiques, éditeur et hébergeur du site PFP Services, entreprise de dératisation et nuisibles en Seine-et-Marne.",
```

- [ ] **Step 11: Build and verify with a length-check script**

Run:

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services" && python3 - <<'EOF'
import re, glob
files = glob.glob("src/app/**/page.tsx", recursive=True)
files += ["src/app/layout.tsx"]
bad = []
for f in files:
    t = open(f, encoding='utf-8').read()
    title = re.search(r'title:\s*"([^"]*)"', t)
    desc = re.search(r'description:\s*"([^"]*)"', t)
    if title:
        tl = len(title.group(1))
        if tl > 65 or 'PFP Services' not in title.group(1):
            bad.append((f, 'title', tl, title.group(1)))
    if desc:
        dl = len(desc.group(1))
        if dl < 120 or dl > 160:
            bad.append((f, 'desc', dl, desc.group(1)[:40]))
for b in bad:
    print(b)
print("TOTAL ISSUES:", len(bad))
EOF
```

Expected: `TOTAL ISSUES: 0` (galerie page metadata from Task 5 title `"Galerie Photo Interventions 77 | PFP Services"` = 47 chars, brand present, desc already within range — no fix needed there; home page metadata from Task 4 also already compliant; if the script flags any file not listed in this task's file list, fix it the same way — length out of range or missing brand, applying the same 65/120–160 rule — before continuing).

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

- [ ] **Step 12: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/services src/app/zones src/app/realisations/page.tsx src/app/mentions-legales/page.tsx
git commit -m "fix: corrige longueur et marque des titres/descriptions meta sitewide"
```

---

### Task 8: Fix Service schema `provider` references + remove duplicate JSON-LD scripts

**Files:**
- Modify: `src/app/services/cafards/page.tsx`
- Modify: `src/app/services/chenilles/page.tsx`
- Modify: `src/app/services/demoussage/page.tsx`
- Modify: `src/app/services/ramonage/page.tsx`
- Modify: `src/app/services/guepes-frelons/page.tsx`
- Modify: `src/app/services/taupes/page.tsx`
- Modify: `src/app/services/rongeurs/page.tsx`

**Interfaces:**
- Consumes: the global `@id` `"https://pfp-services.fr/#organization"` defined in `src/components/seo/JsonLd.tsx` (`LocalBusinessSchema`, unchanged by this task).

This is the highest-severity fix found during codebase exploration (not explicitly named in the audit as a sitewide bug, but the audit's "cafards/chenilles duplicate LocalBusiness" finding is actually a symptom of a bug present in **all 7** service pages: every `provider` field points at `https://deratisation-77.com/#organization`, a domain the site does not use — `metadataBase`/canonical/OG in this plan all use `https://pfp-services.fr`. That reference is currently broken sitewide, not just on 2 pages.

- [ ] **Step 1: Fix `demoussage`, `ramonage`, `guepes-frelons`, `taupes`, `rongeurs` — wrong `@id` domain**

In each of these 5 files, the line looks like:

```typescript
            "provider": { "@id": "https://deratisation-77.com/#organization" },
```

Change to:

```typescript
            "provider": { "@id": "https://pfp-services.fr/#organization" },
```

- [ ] **Step 2: Fix `cafards` — replace inline `LocalBusiness` provider with `@id` reference and remove the duplicate `<script>` tag**

In `src/app/services/cafards/page.tsx`, change:

```typescript
            "provider": {
                "@type": "LocalBusiness",
                "name": "PFP Services",
                "telephone": "06 29 95 32 62",
                "image": "https://deratisation-77.com/logo.png",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "22 Rue de la Salle",
                    "addressLocality": "Cély",
                    "postalCode": "77930",
                    "addressCountry": "FR"
                },
                "priceRange": "Sur devis (dès 145€)"
            },
```

to:

```typescript
            "provider": { "@id": "https://pfp-services.fr/#organization" },
```

Then remove the duplicate rendering — change:

```tsx
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
```

to:

```tsx
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
```

- [ ] **Step 3: Fix `chenilles` — same two fixes**

In `src/app/services/chenilles/page.tsx`, change:

```typescript
            "provider": {
                "@type": "LocalBusiness",
                "name": "PFP Services",
                "telephone": "06 29 95 32 62",
                "image": "https://deratisation-77.com/logo.png",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "22 Rue de la Salle",
                    "addressLocality": "Cély",
                    "postalCode": "77930",
                    "addressCountry": "FR"
                },
                "priceRange": "Dès 90€"
            },
```

to:

```typescript
            "provider": { "@id": "https://pfp-services.fr/#organization" },
```

Then check the file for a duplicated `<script type="application/ld+json">` block the same way as `cafards` (confirmed present via `grep -c "application/ld+json" src/app/services/chenilles/page.tsx` returning `2` during exploration) — read the file, find the two identical `<script>` tags rendering `jsonLd`, and delete one of them, keeping only a single occurrence.

- [ ] **Step 4: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

Run: `grep -rn "deratisation-77.com" src/app/`
Expected: empty output (no more references to the wrong domain anywhere).

Run: `grep -c "application/ld+json" src/app/services/cafards/page.tsx src/app/services/chenilles/page.tsx`
Expected: `1` for both files (was `2`).

- [ ] **Step 5: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/services
git commit -m "fix: corrige les references provider @id (mauvais domaine) et les scripts JSON-LD dupliques sur les pages service"
```

---

### Task 9: BreadcrumbList schema on service + zone pages

**Files:**
- Modify: `src/components/seo/JsonLd.tsx` (add `BreadcrumbSchema` component)
- Modify: `src/app/services/cafards/page.tsx`, `src/app/services/chenilles/page.tsx`, `src/app/services/demoussage/page.tsx`, `src/app/services/guepes-frelons/page.tsx`, `src/app/services/ramonage/page.tsx`, `src/app/services/rongeurs/page.tsx`, `src/app/services/taupes/page.tsx`
- Modify: `src/app/zones/77-seine-et-marne/page.tsx`, `src/app/zones/45-loiret/page.tsx`, `src/app/zones/89-yonne/page.tsx`, `src/app/zones/91-essonne/page.tsx`, `src/app/zones/fontainebleau/page.tsx`

**Interfaces:**
- Produces: `BreadcrumbSchema` — props `{ items: { name: string; url: string }[] }`, exported from `src/components/seo/JsonLd.tsx`. Every service/zone page renders it with its own 3-level trail (Accueil → Section index → Page).

- [ ] **Step 1: Add `BreadcrumbSchema` to `src/components/seo/JsonLd.tsx`**

Append at the end of the file:

```typescript
export const BreadcrumbSchema = ({
  items,
}: {
  items: { name: string; url: string }[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
};
```

- [ ] **Step 2: Wire it into each service page**

For each of the 7 service pages, import `BreadcrumbSchema` and render it next to the existing JSON-LD `<script>`. Example for `src/app/services/rongeurs/page.tsx` — change:

```typescript
import { Metadata } from 'next';
```

to:

```typescript
import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
```

(adjust the exact import line per file — some already import other things above `styles`, add the `BreadcrumbSchema` import as its own line right after the `next` import).

Then, inside the returned JSX, right after the existing `<script type="application/ld+json" .../>` for that page, add:

```tsx
            <BreadcrumbSchema
                items={[
                    { name: 'Accueil', url: 'https://pfp-services.fr' },
                    { name: 'Services', url: 'https://pfp-services.fr/services' },
                    { name: 'Rongeurs', url: 'https://pfp-services.fr/services/rongeurs' },
                ]}
            />
```

Apply the same pattern to the other 6 service pages, using their own name/slug for the third breadcrumb item:
- `cafards` → `{ name: 'Cafards', url: 'https://pfp-services.fr/services/cafards' }`
- `chenilles` → `{ name: 'Chenilles Processionnaires', url: 'https://pfp-services.fr/services/chenilles' }`
- `demoussage` → `{ name: 'Démoussage', url: 'https://pfp-services.fr/services/demoussage' }`
- `guepes-frelons` → `{ name: 'Guêpes & Frelons', url: 'https://pfp-services.fr/services/guepes-frelons' }`
- `ramonage` → `{ name: 'Ramonage', url: 'https://pfp-services.fr/services/ramonage' }`
- `taupes` → `{ name: 'Taupes', url: 'https://pfp-services.fr/services/taupes' }`

- [ ] **Step 3: Wire it into each zone page**

Each zone page already imports `LocalBusinessSchema` from `@/components/seo/JsonLd` (see Task 11 — that render call is removed there, but the import line stays because `BreadcrumbSchema` is added to the same import). Change the import line, e.g. in `src/app/zones/77-seine-et-marne/page.tsx`:

```typescript
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
```

to:

```typescript
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
```

Then render it in the JSX (replacing the removed `<LocalBusinessSchema .../>` call from Task 11 — if Task 11 runs after this task, insert `BreadcrumbSchema` in the same spot `LocalBusinessSchema` currently occupies):

```tsx
            <BreadcrumbSchema
                items={[
                    { name: 'Accueil', url: 'https://pfp-services.fr' },
                    { name: 'Zones d\'Intervention', url: 'https://pfp-services.fr/zones' },
                    { name: 'Seine-et-Marne (77)', url: 'https://pfp-services.fr/zones/77-seine-et-marne' },
                ]}
            />
```

Apply the same pattern to the other 4 zone pages:
- `45-loiret` → `{ name: 'Loiret (45)', url: 'https://pfp-services.fr/zones/45-loiret' }`
- `89-yonne` → `{ name: 'Yonne (89)', url: 'https://pfp-services.fr/zones/89-yonne' }`
- `91-essonne` → `{ name: 'Essonne (91)', url: 'https://pfp-services.fr/zones/91-essonne' }`
- `fontainebleau` → `{ name: 'Fontainebleau', url: 'https://pfp-services.fr/zones/fontainebleau' }`

- [ ] **Step 4: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

Run: `grep -rl "BreadcrumbSchema" src/app/services src/app/zones | wc -l`
Expected: `12` (7 service pages + 5 zone pages).

- [ ] **Step 5: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/components/seo/JsonLd.tsx src/app/services src/app/zones
git commit -m "feat: ajoute le schema BreadcrumbList sur les pages service et zone"
```

---

### Task 10: Organization + WebSite schema

**Files:**
- Modify: `src/components/seo/JsonLd.tsx`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Produces: `WebSiteSchema` component exported from `JsonLd.tsx`, rendered once globally in `layout.tsx`.
- Modifies: `LocalBusinessSchema`'s `@type` becomes an array including `"Organization"` (satisfies the audit's explicit suggestion: "an explicit Organization node (or a type array including Organization)").

- [ ] **Step 1: Make `LocalBusinessSchema`'s `@type` an array including `Organization`**

In `src/components/seo/JsonLd.tsx`, change:

```typescript
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://pfp-services.fr/#organization",
```

to:

```typescript
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "Organization"],
    "@id": "https://pfp-services.fr/#organization",
```

- [ ] **Step 2: Add a `WebSiteSchema` component**

Append at the end of `src/components/seo/JsonLd.tsx`:

```typescript
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pfp-services.fr/#website",
    url: "https://pfp-services.fr",
    name: "PFP Services",
    publisher: { "@id": "https://pfp-services.fr/#organization" },
    inLanguage: "fr-FR",
  };

  return <JsonLd data={schema} />;
};
```

- [ ] **Step 3: Render it in `layout.tsx`**

Change:

```tsx
        <LocalBusinessSchema full region="77" />
        <Header />
```

to:

```tsx
        <LocalBusinessSchema full region="77" />
        <WebSiteSchema />
        <Header />
```

And update the import line:

```typescript
import { LocalBusinessSchema } from "@/components/seo/JsonLd";
```

to:

```typescript
import { LocalBusinessSchema, WebSiteSchema } from "@/components/seo/JsonLd";
```

- [ ] **Step 4: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

Run: `npx next start & sleep 3 && curl -s http://localhost:3000/ | grep -o '"@type":\[*"[A-Za-z]*"' | sort -u; kill %1`
Expected: output includes `HomeAndConstructionBusiness`/`Organization` (array) and `WebSite` types present in the HTML.

- [ ] **Step 5: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/components/seo/JsonLd.tsx src/app/layout.tsx
git commit -m "feat: ajoute schema Organization explicite et WebSite"
```

---

### Task 11: Remove duplicate `LocalBusinessSchema` from zone pages

**Files:**
- Modify: `src/app/zones/77-seine-et-marne/page.tsx`, `src/app/zones/45-loiret/page.tsx`, `src/app/zones/89-yonne/page.tsx`, `src/app/zones/91-essonne/page.tsx`, `src/app/zones/fontainebleau/page.tsx`

**Interfaces:**
- Depends on Task 9 having already replaced the `LocalBusinessSchema` import with `BreadcrumbSchema` and the JSX render call with `<BreadcrumbSchema .../>` in these same 5 files — if Task 9 ran first, this task is already satisfied; verify with the grep in Step 2 rather than assuming re-work is needed. If Task 11 runs before Task 9 for any reason, perform the removal described in Step 1 first, then Task 9 adds `BreadcrumbSchema` in the freed spot.

- [ ] **Step 1: Confirm no zone page still renders `LocalBusinessSchema`**

Run: `grep -rn "LocalBusinessSchema" src/app/zones/`
Expected: empty output. If any file still has it (e.g. `<LocalBusinessSchema region="77" name="PFP Services Seine-et-Marne" />`), remove that JSX line and update the import at the top of the file to no longer import `LocalBusinessSchema` (it should already import `BreadcrumbSchema` from Task 9 — just drop `LocalBusinessSchema` from the import list, don't remove the whole import line).

- [ ] **Step 2: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

Run: `npx next start & sleep 3 && curl -s http://localhost:3000/zones/77-seine-et-marne | grep -o '"@type":"HomeAndConstructionBusiness"' | wc -l; kill %1`
Expected: `1` (was `2` before this fix — the global one from `layout.tsx` only, no page-level duplicate).

- [ ] **Step 3: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/zones
git commit -m "fix: supprime le schema LocalBusiness duplique sur les pages zones"
```

(If Task 9 already covered this fully and there is nothing left to stage, skip the commit — note in the task log that Task 11 was a no-op verification step.)

---

### Task 12: `datePublished`/`dateModified` on the Réalisations listing page

**Files:**
- Modify: `src/app/realisations/page.tsx`

**Interfaces:**
- Consumes: `caseStudies` from `src/data/caseStudies.ts` (already imported), specifically the `date` field (French text like `"Octobre 2024"`) already present on every case study — no new data is invented.

- [ ] **Step 1: Add a `CollectionPage` JSON-LD block using the most recent case study date**

In `src/app/realisations/page.tsx`, after the `metadata` export and before `export default function RealisationsListingPage()`, add:

```typescript
const FRENCH_MONTHS: Record<string, string> = {
    'Janvier': '01', 'Février': '02', 'Mars': '03', 'Avril': '04',
    'Mai': '05', 'Juin': '06', 'Juillet': '07', 'Août': '08',
    'Septembre': '09', 'Octobre': '10', 'Novembre': '11', 'Décembre': '12',
};

function parseFrenchDate(date: string): string | null {
    const [month, year] = date.split(' ');
    const mm = FRENCH_MONTHS[month];
    if (!mm || !year) return null;
    return `${year}-${mm}-01`;
}

const parsedDates = caseStudies
    .map((study) => parseFrenchDate(study.date))
    .filter((d): d is string => d !== null)
    .sort();

const latestDate = parsedDates[parsedDates.length - 1] ?? undefined;
const earliestDate = parsedDates[0] ?? undefined;

const realisationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://pfp-services.fr/realisations#collectionpage",
    url: "https://pfp-services.fr/realisations",
    name: "Nos Réalisations",
    isPartOf: { "@id": "https://pfp-services.fr/#organization" },
    ...(earliestDate ? { datePublished: earliestDate } : {}),
    ...(latestDate ? { dateModified: latestDate } : {}),
};
```

- [ ] **Step 2: Render the JSON-LD in the page body**

Change:

```tsx
export default function RealisationsListingPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
```

to:

```tsx
export default function RealisationsListingPage() {
    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(realisationsJsonLd) }}
            />
            <section className={styles.hero}>
```

- [ ] **Step 3: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds, no syntax errors from the stray-quote draft (only the corrected final block should remain in the file).

Run: `grep -n 'name":' src/app/realisations/page.tsx`
Expected: empty output (confirms the typo draft wasn't left in the file).

- [ ] **Step 4: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/realisations/page.tsx
git commit -m "feat: ajoute datePublished/dateModified sur la page Realisations"
```

---

### Task 13: Complete the Ramonage FAQPage schema

**Files:**
- Modify: `src/app/services/ramonage/page.tsx`

**Interfaces:**
- No other task depends on this.

- [ ] **Step 1: Add the two missing `Question` entries to match the visible `<details>` FAQ items**

The page body already has 3 visible `<details>` FAQ items (spring timing, insurance certificate, "comment préparer votre venue"), but the `FAQPage` JSON-LD only has 1. Change:

```typescript
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Le certificat de ramonage est-il obligatoire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, les assurances exigent un certificat de ramonage annuel (voire biannuel selon les règlements sanitaires départementaux) pour vous couvrir en cas d'incendie."
                    }
                }
            ]
        }
```

to:

```typescript
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Quelle est la meilleure période de l'année pour ramoner ma cheminée ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le printemps est la période préférée pour le nettoyage de son conduit, car la période de chauffage est généralement juste terminée. Son installation peut également être maintenue en été. En revanche, il est conseillé de ne pas attendre l'automne, car les ramoneurs sont davantage sollicités en raison du retour du froid."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Le certificat de ramonage est-il obligatoire ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, les assurances exigent un certificat de ramonage annuel (voire biannuel selon les règlements sanitaires départementaux) pour vous couvrir en cas d'incendie."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Ai-je un justificatif à remettre à mon assurance ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, en cas de sinistre, ce certificat de ramonage peut servir d'attestation pour votre compagnie d'assurance. Seuls les ramoneurs qualifiés sont autorisés à délivrer des certificats de ramonage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment préparer votre venue ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Retirez toutes les cendres, les bûches et les agrafes du foyer. Évitez d'allumer un feu au moins 1 jour (24h) avant le passage du ramoneur. Dégagez l'accès autour du générateur pour permettre l'intervention."
                    }
                }
            ]
        }
```

(Text for each `Question`/`Answer` is copied verbatim from the corresponding `<details><summary>...</summary><p>...</p></details>` already visible in the page body further down the same file — no new content invented.)

- [ ] **Step 2: Build and verify**

Run: `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -40`
Expected: build succeeds.

Run: `grep -c '"@type": "Question"' src/app/services/ramonage/page.tsx`
Expected: `4` (was `1`).

- [ ] **Step 3: Commit**

```bash
cd "/media/mktotoy/Shared/Projets/PFP-Services"
git add src/app/services/ramonage/page.tsx
git commit -m "fix: complete le schema FAQPage ramonage avec les questions manquantes"
```

---

## Final Verification (after all 13 tasks)

- [ ] Run `cd "/media/mktotoy/Shared/Projets/PFP-Services" && npm run build 2>&1 | tail -60` — must succeed with 0 errors.
- [ ] Run `grep -rn "deratisation-77.com" src/` — must be empty.
- [ ] Run `git log --oneline -15` — 13 commits (or 12 if Task 11 was a no-op), all local, `origin/main` still behind.
- [ ] Show Thomas the commit list and a summary of what changed per audit item; get explicit GO before `git push` (repo is linked to the live Replit workspace and GAE deploy — pushing is the irreversible, prod-affecting step per [[feedback_replit_ssh_commit_each_action]] discipline, even though this session worked on the local clone rather than over SSH).
