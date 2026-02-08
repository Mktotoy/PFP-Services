# PFP Services Website

## Overview
A pest control and chimney services business website for PFP Services, serving the Seine-et-Marne (77) department in France. Built with Next.js 16, React 19, and TypeScript.

## Recent Changes
- 2026-02-08: Imported project into Replit environment. Configured Next.js to run on port 5000, allowed all dev origins, and set up deployment config.

## Project Architecture
- **Framework**: Next.js 16 (App Router) with Turbopack
- **Language**: TypeScript
- **Styling**: CSS Modules + globals.css
- **Port**: 5000 (dev server)

### Directory Structure
```
src/
  app/
    page.tsx              - Homepage
    layout.tsx            - Root layout
    globals.css           - Global styles
    contact/              - Contact page
    qui-sommes-nous/      - About page
    galerie/              - Gallery page
    cas-clients/          - Client case studies (dynamic routes)
    mentions-legales/     - Legal notices
    services/             - Service pages
      cafards/            - Cockroach pest control
      chenilles/          - Caterpillar control
      demoussage/         - Moss removal
      guepes-frelons/     - Wasp/hornet control
      ramonage/           - Chimney sweeping
      rongeurs/           - Rodent control
      taupes/             - Mole control
  components/             - Reusable UI components
  data/                   - Data files
public/                   - Static assets (images, icons)
```

## User Preferences
- (none recorded yet)
