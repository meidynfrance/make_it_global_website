---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments:
  - product-brief-make_it_global_website-2026-01-26.md
  - prd.md
workflowType: 'architecture'
project_name: 'make_it_global_website'
user_name: 'Meidy'
date: '2026-01-26'
status: 'complete'
completedAt: '2026-01-27'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

---

## Project Context Analysis

### Requirements Overview

**Functional Requirements (23 FRs):**
- Présentation & proposition de valeur (FR1-FR3)
- Identification du problème (FR4-FR6)
- Démonstration vidéo (FR7-FR9)
- Processus de travail (FR10-FR11)
- Preuve sociale (FR12-FR13)
- Contact & conversion (FR14-FR17)
- Navigation & accessibilité (FR18-FR20)
- Analytics & tracking (FR21-FR23)

**Non-Functional Requirements (15 NFRs):**
- Performance : FCP < 1.5s, LCP < 2.5s, Lighthouse > 90
- Accessibilité : WCAG AA, contraste ≥ 4.5:1, navigation clavier
- Intégrations : Calendly, WhatsApp, GA4, embeds vidéo
- Fiabilité : 99.9% uptime

**Scale & Complexity:**
- Domaine principal : Frontend statique
- Niveau de complexité : Basse
- Composants architecturaux estimés : ~10

### Technical Constraints & Dependencies

| Contrainte | Implication |
|------------|-------------|
| Site statique (SSG) | Pas de backend, génération au build |
| Mobile-first | Design responsive obligatoire |
| Performance < 3s | Optimisation assets, lazy loading |
| WCAG AA | Contraste, navigation clavier, alt texts |
| Intégrations tierces | Calendly, WhatsApp, GA4, YouTube/Vimeo |

**Dépendances externes :**
- Calendly API (embed widget)
- WhatsApp Business (click-to-chat link)
- Google Analytics 4 (tracking script)
- YouTube/Vimeo (iframe embeds)

### Cross-Cutting Concerns Identified

| Concern | Approche |
|---------|----------|
| **Performance** | SSG, CDN, lazy loading vidéos, optimisation images |
| **Accessibilité** | Sémantique HTML, ARIA, contraste, focus visible |
| **Analytics** | GA4 avec événements personnalisés (clics CTA) |
| **SEO** | Meta tags Open Graph pour partage LinkedIn |
| **Responsive** | Mobile-first, 4 breakpoints (320px, 425px, 768px, 1024px+) |

---

## Starter Template Evaluation

### Primary Technology Domain

**Site statique one-page** pour conversion B2B - stack frontend pur sans backend.

### Starter Options Considered

| Option | Forces | Faiblesses |
|--------|--------|------------|
| **Astro + TailwindCSS** | Performance maximale (0 JS par défaut), conçu pour sites statiques, DX excellent | Écosystème plus récent |
| **Next.js 15 + Static Export** | Écosystème riche, flexibilité si évolution | Overkill pour one-page, plus lourd |
| **HTML/CSS/JS vanilla** | Simple, pas de dépendances | Setup manuel, moins de DX |

### Selected Starter: Astro

**Rationale for Selection:**
1. **Performance native** : Zero JavaScript par défaut → Lighthouse > 90 garanti
2. **Idéal pour landing pages** : Conçu pour sites orientés contenu
3. **TailwindCSS intégré** : Support officiel en une commande
4. **Simplicité** : Pas de complexité inutile pour un one-page
5. **Déploiement facile** : Vercel/Netlify en 1 clic

**Initialization Command:**

```bash
npm create astro@latest make_it_global_website -- --template minimal --typescript relaxed
cd make_it_global_website
npx astro add tailwind
```

### Architectural Decisions Provided by Starter

| Aspect | Decision |
|--------|----------|
| **Language & Runtime** | TypeScript (mode relaxed), Node.js v18.20+ |
| **Styling Solution** | TailwindCSS v4 avec PostCSS |
| **Build Tooling** | Vite (bundler ultra-rapide) |
| **Output Format** | HTML statique dans `dist/` |
| **Project Structure** | `src/pages/`, `src/components/`, `src/layouts/` |
| **Development Experience** | Hot reload, TypeScript support, fast refresh |

**Note:** L'initialisation du projet avec cette commande sera la première story d'implémentation.

---

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Framework: Astro avec TailwindCSS
- Hosting: Vercel avec CDN global
- Intégrations: Calendly, WhatsApp, GA4

**Important Decisions (Shape Architecture):**
- Component architecture: Astro components natifs
- Image optimization: @astrojs/image + WebP
- Video loading: Lazy loading iframes

**Deferred Decisions (Post-MVP):**
- Multilingue (V2)
- Blog/CMS (V3)
- Espace client (Vision)

### Frontend Architecture

| Décision | Choix | Version | Rationale |
|----------|-------|---------|-----------|
| Components | Astro Components (`.astro`) | - | Natif, simple, performant |
| State Management | Aucun | - | Site statique sans interactivité complexe |
| Routing | Single page avec anchors | - | One-page design |
| Images | `@astrojs/image` | Latest | Optimisation automatique WebP/AVIF |
| Vidéos | Lazy loading iframes | - | Performance, YouTube/Vimeo embeds |
| Icons | Inline SVG ou Astro Icon | - | Pas de requêtes HTTP supplémentaires |

### Infrastructure & Deployment

| Décision | Choix | Rationale |
|----------|-------|-----------|
| Hosting | Vercel | CDN global, déploiement automatique, gratuit |
| CI/CD | Vercel Git Integration | Push to main → build → deploy |
| Domain | Custom domain via Vercel | Configuration DNS simple |
| SSL | Automatique (Vercel) | HTTPS par défaut |
| Preview | Vercel Preview Deployments | Chaque PR = preview URL |

### Third-Party Integrations

| Service | Méthode | Configuration |
|---------|---------|---------------|
| **Calendly** | Embed widget | Iframe ou popup link dans section Contact |
| **WhatsApp** | Click-to-chat link | `https://wa.me/NUMERO?text=MESSAGE_ENCODE` |
| **Google Analytics 4** | Script tag | Dans `<head>` via layout Astro |
| **YouTube/Vimeo** | Responsive iframes | `loading="lazy"` + aspect-ratio container |

### Decision Impact Analysis

**Implementation Sequence:**
1. Project initialization (Astro + TailwindCSS)
2. Layout & structure de base
3. Sections du one-page (Hero → Contact)
4. Intégrations tierces (Calendly, WhatsApp, GA4)
5. Optimisation performance & accessibilité
6. Déploiement Vercel

**Cross-Component Dependencies:**
- Layout Astro → toutes les sections
- TailwindCSS config → tous les composants
- GA4 → tracking des CTAs (Calendly, WhatsApp)

---

## Implementation Patterns & Consistency Rules

### Naming Patterns

| Élément | Convention | Exemple |
|---------|------------|---------|
| **Fichiers composants** | PascalCase.astro | `HeroSection.astro` |
| **Fichiers pages** | kebab-case.astro | `index.astro` |
| **Classes CSS custom** | kebab-case (BEM-like) | `hero-section__title` |
| **Classes Tailwind** | Ordre logique | `flex items-center gap-4 p-4 bg-white` |
| **Variables CSS** | kebab-case avec prefix | `--color-primary` |
| **Images** | kebab-case descriptif | `hero-background.webp` |

### Structure Patterns

```
src/
├── components/
│   ├── sections/           # Sections du one-page
│   │   ├── HeroSection.astro
│   │   ├── ProblemSection.astro
│   │   ├── VideoSection.astro
│   │   ├── ProcessSection.astro
│   │   ├── TestimonialsSection.astro
│   │   └── ContactSection.astro
│   └── ui/                 # Composants réutilisables
│       ├── Button.astro
│       ├── VideoEmbed.astro
│       └── CalendlyEmbed.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── assets/
    └── images/
```

### Tailwind Patterns

| Pattern | Règle |
|---------|-------|
| **Ordre des classes** | Layout → Spacing → Sizing → Colors → Typography |
| **Responsive** | Mobile-first : `text-sm md:text-base lg:text-lg` |
| **Composants répétés** | @apply dans global.css pour boutons/CTAs |
| **Breakpoints** | sm:640px, md:768px, lg:1024px, xl:1280px |

### Integration Patterns

| Service | Pattern d'intégration |
|---------|----------------------|
| **Calendly** | Composant `CalendlyEmbed.astro` isolé avec props |
| **WhatsApp** | Helper function `getWhatsAppLink(message: string)` |
| **GA4** | Script dans `BaseLayout.astro` + data-attributes pour events |
| **Vidéos** | Composant `VideoEmbed.astro` avec lazy loading natif |

### Enforcement Guidelines

**All AI Agents MUST:**
1. Placer tous les composants sections dans `src/components/sections/`
2. Utiliser `<Image>` d'Astro pour toutes les images (jamais `<img>` direct)
3. Suivre l'ordre des classes Tailwind établi
4. Inclure `alt` sur toutes les images et `aria-label` sur les CTAs
5. Ne jamais utiliser de styles inline - uniquement Tailwind ou global.css

**Anti-Patterns à éviter:**
- ❌ `<img src="...">` → ✅ `<Image src={...} alt="..." />`
- ❌ Styles inline `style="..."` → ✅ Classes Tailwind
- ❌ Composants dans `src/pages/` → ✅ Composants dans `src/components/`
- ❌ JavaScript inline dans les `.astro` → ✅ Fichiers `.ts` séparés si nécessaire

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
make_it_global_website/
├── README.md
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── .env.example
├── .gitignore
├── public/
│   ├── favicon.svg
│   └── og-image.png              # Image Open Graph pour LinkedIn
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero-background.webp
│   │       ├── process-step-1.webp
│   │       ├── process-step-2.webp
│   │       ├── process-step-3.webp
│   │       └── logo.svg
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.astro
│   │   │   ├── ProblemSection.astro
│   │   │   ├── VideoSection.astro
│   │   │   ├── ProcessSection.astro
│   │   │   ├── TestimonialsSection.astro
│   │   │   └── ContactSection.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── VideoEmbed.astro
│   │       ├── CalendlyEmbed.astro
│   │       ├── WhatsAppButton.astro
│   │       ├── ContactForm.astro
│   │       └── TestimonialCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── analytics.ts          # GA4 event helpers
│       └── whatsapp.ts           # WhatsApp link generator
└── vercel.json                   # Config déploiement (optionnel)
```

### Requirements to Structure Mapping

| FR/Section | Fichiers |
|------------|----------|
| **FR1-3 (Hero)** | `HeroSection.astro`, `Button.astro` |
| **FR4-6 (Problème)** | `ProblemSection.astro` |
| **FR7-9 (Vidéos)** | `VideoSection.astro`, `VideoEmbed.astro` |
| **FR10-11 (Processus)** | `ProcessSection.astro` |
| **FR12-13 (Témoignages)** | `TestimonialsSection.astro`, `TestimonialCard.astro` |
| **FR14-17 (Contact)** | `ContactSection.astro`, `CalendlyEmbed.astro`, `WhatsAppButton.astro`, `ContactForm.astro` |
| **FR21-23 (Analytics)** | `analytics.ts`, `BaseLayout.astro` |

### External Integration Points

| Intégration | Point d'entrée | Fichiers concernés |
|-------------|----------------|-------------------|
| **Calendly** | `ContactSection.astro` | `CalendlyEmbed.astro` |
| **WhatsApp** | `ContactSection.astro` + `HeroSection.astro` | `WhatsAppButton.astro`, `whatsapp.ts` |
| **GA4** | `BaseLayout.astro` (global) | `analytics.ts` pour events |
| **YouTube/Vimeo** | `VideoSection.astro` | `VideoEmbed.astro` |

### Component Hierarchy & Data Flow

```
index.astro
    └── BaseLayout.astro (GA4 script, meta tags OG)
            ├── HeroSection.astro
            │       └── Button.astro
            │       └── WhatsAppButton.astro
            ├── ProblemSection.astro
            ├── VideoSection.astro
            │       └── VideoEmbed.astro (×2-3)
            ├── ProcessSection.astro
            ├── TestimonialsSection.astro
            │       └── TestimonialCard.astro (×3)
            └── ContactSection.astro
                    ├── CalendlyEmbed.astro
                    ├── WhatsAppButton.astro
                    └── ContactForm.astro
```

### Build & Deployment Structure

| Étape | Input | Output |
|-------|-------|--------|
| **Development** | `src/` | `localhost:4321` (Astro dev server) |
| **Build** | `src/` + `public/` | `dist/` (HTML/CSS/JS statiques) |
| **Deploy** | `dist/` | Vercel CDN global |

---

## Architecture Validation Results

### Coherence Validation ✅

| Check | Statut | Notes |
|-------|--------|-------|
| Compatibilité technologies | ✅ | Astro + TailwindCSS + Vercel = stack éprouvé |
| Versions compatibles | ✅ | Astro 4.x + Tailwind 4.x + Node 18+ |
| Patterns alignés | ✅ | Conventions Astro standard |
| Pas de contradictions | ✅ | Architecture simple et cohérente |

### Requirements Coverage Validation ✅

**Functional Requirements Coverage:**

| Catégorie FR | Couverture | Composants |
|--------------|------------|------------|
| FR1-3 (Hero) | ✅ 100% | `HeroSection.astro` |
| FR4-6 (Problème) | ✅ 100% | `ProblemSection.astro` |
| FR7-9 (Vidéos) | ✅ 100% | `VideoSection.astro`, `VideoEmbed.astro` |
| FR10-11 (Processus) | ✅ 100% | `ProcessSection.astro` |
| FR12-13 (Témoignages) | ✅ 100% | `TestimonialsSection.astro` |
| FR14-17 (Contact) | ✅ 100% | `ContactSection.astro`, intégrations |
| FR18-20 (Navigation) | ✅ 100% | `BaseLayout.astro`, responsive |
| FR21-23 (Analytics) | ✅ 100% | `analytics.ts`, GA4 |

**Non-Functional Requirements Coverage:**

| NFR | Couverture | Comment |
|-----|------------|---------|
| Performance (NFR1-5) | ✅ | Astro SSG = 0 JS par défaut, Lighthouse > 90 |
| Accessibilité (NFR6-9) | ✅ | Patterns définis, WCAG AA |
| Intégrations (NFR10-13) | ✅ | Composants dédiés pour chaque service |
| Fiabilité (NFR14-15) | ✅ | Vercel CDN + SSG = 99.9% uptime |

### Implementation Readiness Validation ✅

| Critère | Statut |
|---------|--------|
| Décisions documentées avec versions | ✅ |
| Patterns complets avec exemples | ✅ |
| Structure projet spécifique | ✅ |
| Mapping requirements → fichiers | ✅ |
| Guidelines pour AI agents | ✅ |

### Gap Analysis Results

| Priorité | Gaps identifiés | Action |
|----------|-----------------|--------|
| **Critique** | Aucun | - |
| **Important** | Aucun | - |
| **Nice-to-have** | Tests E2E | Post-MVP |
| **Nice-to-have** | Storybook | Post-MVP |

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed (Low)
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified (Astro + TailwindCSS)
- [x] Integration patterns defined (Calendly, WhatsApp, GA4)
- [x] Performance considerations addressed

**✅ Implementation Patterns**
- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Communication patterns specified
- [x] Process patterns documented

**✅ Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** ✅ READY FOR IMPLEMENTATION

**Confidence Level:** HIGH

**Key Strengths:**
- Architecture simple et adaptée au scope MVP
- Stack moderne et performant par défaut
- Intégrations tierces bien isolées dans des composants dédiés
- Patterns clairs pour éviter les conflits entre AI agents

**First Implementation Priority:**
```bash
npm create astro@latest make_it_global_website -- --template minimal --typescript relaxed
cd make_it_global_website
npx astro add tailwind
```
