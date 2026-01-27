---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories', 'revision-2026-01-27']
inputDocuments:
  - prd.md
  - architecture.md
  - ux-design-specification.md
revisions:
  - date: '2026-01-27'
    changes: 'Revised based on implementation readiness report: renamed Epic 1 to user-centric focus, reframed 8 developer personas to visitor/product owner, merged 4 component creation stories into parent section stories (19→15 stories), added minimal landing page to Story 1.4, added explicit Dependencies fields to all stories'
totalEpics: 8
totalStories: 15
---

# make_it_global_website - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for make_it_global_website, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

**FR1:** Visiteur peut voir la proposition de valeur principale dès l'arrivée sur le site

**FR2:** Visiteur peut comprendre le service offert en moins de 10 secondes

**FR3:** Visiteur peut accéder au CTA principal (réserver un appel) depuis le hero

**FR4:** Visiteur peut lire une description du problème que Make It Global résout

**FR5:** Visiteur peut voir comment la solution répond à ce problème

**FR6:** Visiteur peut comprendre l'approche hybride IA + Humain

**FR7:** Visiteur peut regarder des vidéos exemples avant/après traduction

**FR8:** Visiteur peut voir la qualité du lip-sync et du doublage

**FR9:** Visiteur peut lancer/arrêter les vidéos de démonstration

**FR10:** Visiteur peut visualiser les étapes du processus de travail

**FR11:** Visiteur peut comprendre l'aspect "clé en main" du service

**FR12:** Visiteur peut lire des témoignages clients anonymisés

**FR13:** Visiteur peut voir des résultats chiffrés (ex: "CA triplé")

**FR14:** Visiteur peut réserver un appel découverte via Calendly

**FR15:** Visiteur peut contacter Make It Global via WhatsApp en un clic

**FR16:** Visiteur peut envoyer un message via formulaire de contact

**FR17:** Visiteur peut saisir son email et numéro de téléphone dans le formulaire

**FR18:** Visiteur peut naviguer sur le site depuis un mobile

**FR19:** Visiteur peut scroller entre les différentes sections

**FR20:** Visiteur peut utiliser le site avec un lecteur d'écran (accessibilité)

**FR21:** Système peut tracker les visites sur le site

**FR22:** Système peut mesurer les clics sur les CTA (Calendly, WhatsApp)

**FR23:** Système peut identifier la source du trafic (UTM)

### NonFunctional Requirements

**NFR1:** Temps de chargement initial < 3 secondes

**NFR2:** First Contentful Paint < 1.5 secondes

**NFR3:** Largest Contentful Paint < 2.5 secondes

**NFR4:** Score Lighthouse Performance > 90/100

**NFR5:** Démarrage vidéos après clic < 2 secondes

**NFR6:** Conformité WCAG Niveau AA

**NFR7:** Contraste texte/fond Ratio ≥ 4.5:1

**NFR8:** Navigation clavier 100% fonctionnelle

**NFR9:** Textes alternatifs sur toutes les images

**NFR10:** Calendly - Widget fonctionnel sur mobile et desktop

**NFR11:** WhatsApp - Lien click-to-chat opérationnel

**NFR12:** Analytics - Tracking des événements de conversion

**NFR13:** Vidéos embed - Lecture sans erreur (YouTube/Vimeo)

**NFR14:** Disponibilité 99.9% uptime

**NFR15:** Compatibilité navigateurs - Chrome, Firefox, Safari, Edge (versions modernes)

### Additional Requirements

**Architecture Requirements:**

- **Starter Template:** Le projet doit être initialisé avec Astro + TailwindCSS via la commande :
  ```bash
  npm create astro@latest make_it_global_website -- --template minimal --typescript relaxed
  cd make_it_global_website
  npx astro add tailwind
  ```

- **Structure de projet:** Suivre la structure définie avec `src/components/sections/` pour les sections du one-page et `src/components/ui/` pour les composants réutilisables

- **Composants sections requis:** HeroSection.astro, ProblemSection.astro, VideoSection.astro, ProcessSection.astro, TestimonialsSection.astro, ContactSection.astro

- **Composants UI requis:** Button.astro, VideoEmbed.astro, CalendlyEmbed.astro, WhatsAppButton.astro, ContactForm.astro, TestimonialCard.astro

- **Layout:** BaseLayout.astro avec intégration GA4 et meta tags Open Graph

- **Optimisation images:** Utiliser `@astrojs/image` avec format WebP/AVIF, jamais `<img>` direct

- **Lazy loading:** Appliquer `loading="lazy"` sur les iframes vidéo pour performance

- **Hébergement:** Déploiement sur Vercel avec CDN global et SSL automatique

- **Intégrations tierces:**
  - Calendly: Embed widget (iframe ou popup) dans ContactSection
  - WhatsApp: Click-to-chat link via helper function `getWhatsAppLink()`
  - Google Analytics 4: Script dans BaseLayout.astro + événements personnalisés
  - YouTube/Vimeo: Responsive iframes avec aspect-ratio container

- **Configuration Tailwind:** Design tokens centralisés dans `tailwind.config.mjs` (couleurs, typographie, espacements)

- **Patterns CSS:** Classes réutilisables (btn-primary, btn-secondary) via `@apply` dans `global.css`

- **Naming conventions:**
  - Fichiers composants: PascalCase.astro
  - Fichiers pages: kebab-case.astro
  - Classes CSS custom: kebab-case (BEM-like)
  - Variables CSS: kebab-case avec prefix (--color-primary)

- **Anti-patterns à éviter:**
  - ❌ `<img src="...">` → ✅ `<Image src={...} alt="..." />`
  - ❌ Styles inline → ✅ Classes Tailwind
  - ❌ Composants dans src/pages/ → ✅ src/components/
  - ❌ JavaScript inline → ✅ Fichiers .ts séparés

**UX Design Requirements:**

- **Mobile-first radical:** Design et développement mobile d'abord, desktop comme bonus. Touch targets ≥ 44px.

- **Palette colorée énergique:** Couleurs vives et modernes (pas monochrome corporate). Approche chaleureuse et professionnelle.

- **Typographie hiérarchique:**
  - Font display pour headlines (Plus Jakarta Sans, Satoshi, ou Cal Sans)
  - Font body pour contenu (Inter, Open Sans)
  - Tailles optimisées mobile (16px minimum)

- **Composants orientés conversion:**
  - Boutons CTA: Taille tactile généreuse, couleurs contrastées, textes actionnables
  - Cards témoignages: Résultats chiffrés mis en avant, citations courtes
  - VideoEmbed: Thumbnails attractifs, ratio 16:9 responsive, contrôles natifs

- **Micro-interactions subtiles:**
  - Fade-in au scroll (Intersection Observer)
  - Hover states sur boutons et cards
  - Transitions douces (200-300ms)
  - Pas d'animations lourdes

- **Responsive breakpoints:** Mobile-first avec breakpoints Tailwind (sm:640px, md:768px, lg:1024px, xl:1280px)

- **Accessibilité WCAG AA:**
  - Contraste texte/fond ≥ 4.5:1
  - Navigation clavier avec focus visible
  - Attributs ARIA sur éléments interactifs
  - Sémantique HTML correcte

- **Anti-patterns UX à éviter:**
  - ❌ Pop-ups intrusifs
  - ❌ Pavés de texte (max 2-3 lignes)
  - ❌ Animations lourdes impactant performance
  - ❌ Menus de navigation complexes
  - ❌ Formulaires longs
  - ❌ Vidéos en autoplay avec son

- **Principes d'expérience:**
  - "One-shot scroll": Consommation linéaire sans retour
  - "Conversion multi-canal": Calendly = WhatsApp (même importance)
  - "Show, don't tell": Preuves visuelles > Explications
  - "Zéro friction": Éliminer toute barrière à l'action

### FR Coverage Map

**Epic 1: Site Accessible en Ligne avec Structure de Base**
- Architecture Requirements (Starter template Astro + TailwindCSS, structure projet, BaseLayout, configuration)

**Epic 2: Section Hero avec Proposition de Valeur**
- FR1: Voir la proposition de valeur principale
- FR2: Comprendre le service en < 10 secondes
- FR3: Accéder au CTA principal depuis le hero
- FR18: Naviguer sur le site depuis mobile
- FR19: Scroller entre les sections
- FR20: Utiliser le site avec lecteur d'écran

**Epic 3: Sections Problème/Solution et Processus**
- FR4: Lire la description du problème
- FR5: Voir comment la solution répond au problème
- FR6: Comprendre l'approche hybride IA + Humain
- FR10: Visualiser les étapes du processus
- FR11: Comprendre l'aspect "clé en main"

**Epic 4: Section Vidéos de Démonstration**
- FR7: Regarder des vidéos exemples avant/après
- FR8: Voir la qualité du lip-sync et doublage
- FR9: Lancer/arrêter les vidéos

**Epic 5: Section Témoignages**
- FR12: Lire des témoignages clients anonymisés
- FR13: Voir des résultats chiffrés

**Epic 6: Section Contact Multi-Canal**
- FR14: Réserver un appel via Calendly
- FR15: Contacter via WhatsApp en un clic
- FR16: Envoyer un message via formulaire
- FR17: Saisir email et téléphone dans le formulaire

**Epic 7: Analytics et Mesure**
- FR21: Tracker les visites sur le site
- FR22: Mesurer les clics sur les CTA
- FR23: Identifier la source du trafic (UTM)

**Epic 8: Optimisation Finale**
- NFR1-15: Performance, accessibilité, intégrations, fiabilité

## Epic List

### Epic 1: Site Accessible en Ligne avec Structure de Base
Les visiteurs peuvent accéder à un site web fonctionnel sur une URL publique avec une landing page minimale.

**FRs covered:** Architecture requirements (starter template, structure, BaseLayout, configuration Tailwind)

### Epic 2: Section Hero avec Proposition de Valeur
Les visiteurs peuvent comprendre immédiatement la proposition de valeur Make It Global et accéder aux CTA principaux (Calendly/WhatsApp) dès leur arrivée sur le site.

**FRs covered:** FR1, FR2, FR3, FR18, FR19, FR20

### Epic 3: Sections Problème/Solution et Processus Clé-en-Main
Les visiteurs peuvent s'identifier au problème résolu et comprendre l'approche clé-en-main du service de traduction.

**FRs covered:** FR4, FR5, FR6, FR10, FR11

### Epic 4: Section Vidéos de Démonstration (Preuve Visuelle)
Les visiteurs peuvent voir des exemples concrets de traduction vidéo avec lip-sync de qualité professionnelle.

**FRs covered:** FR7, FR8, FR9
**NFRs covered:** NFR5, NFR13

### Epic 5: Section Témoignages et Résultats Chiffrés
Les visiteurs peuvent lire des témoignages clients authentiques et voir des résultats concrets de croissance business.

**FRs covered:** FR12, FR13

### Epic 6: Section Contact Multi-Canal (Conversion)
Les visiteurs peuvent contacter Make It Global via leurs canaux préférés (Calendly, WhatsApp, formulaire) avec zéro friction.

**FRs covered:** FR14, FR15, FR16, FR17
**NFRs covered:** NFR10, NFR11

### Epic 7: Analytics et Mesure de Performance
Le système peut tracker les visites, mesurer les conversions et identifier les sources de trafic pour optimiser le ROI.

**FRs covered:** FR21, FR22, FR23
**NFRs covered:** NFR12

### Epic 8: Optimisation Finale et Déploiement Production
Le site est optimisé pour la performance et l'accessibilité, prêt pour la production avec un chargement < 3s et une conformité WCAG AA.

**NFRs covered:** NFR1, NFR2, NFR3, NFR4, NFR6, NFR7, NFR8, NFR9, NFR14, NFR15

## Epic 1: Site Accessible en Ligne avec Structure de Base

Les visiteurs peuvent accéder à un site web fonctionnel sur une URL publique avec une landing page minimale.

### Story 1.1: Initialiser le projet Astro avec TailwindCSS

As a product owner,
I want to have an Astro project initialized with TailwindCSS,
So that the development team can start building the website sections with the right technical foundation.

**Dependencies:** None

**Acceptance Criteria:**

**Given** une machine avec Node.js v18.20+ installé
**When** j'exécute les commandes d'initialisation
**Then** le projet est créé avec Astro + TailwindCSS
**And** la structure de dossiers est en place (src/components/sections/, src/components/ui/, src/layouts/, src/pages/, src/styles/, src/utils/)
**And** le fichier package.json contient les dépendances Astro et TailwindCSS
**And** astro.config.mjs est configuré correctement
**And** tailwind.config.mjs existe avec la configuration de base

### Story 1.2: Créer BaseLayout avec Meta Tags et Structure HTML

As a product owner,
I want to have a BaseLayout with essential meta tags for social sharing,
So that when visitors share the site on LinkedIn, it displays professional Open Graph information.

**Dependencies:** Story 1.1

**Acceptance Criteria:**

**Given** le projet Astro est initialisé
**When** je crée src/layouts/BaseLayout.astro
**Then** le layout contient la structure HTML5 sémantique (html, head, body)
**And** les meta tags de base sont présents (charset, viewport, description)
**And** les meta tags Open Graph sont configurés pour le partage LinkedIn
**And** le favicon est référencé depuis public/
**And** le layout accepte des props (title, description, ogImage)
**And** la page index.astro utilise ce BaseLayout

### Story 1.3: Configurer Tailwind avec Design Tokens

As a product owner,
I want to have consistent design tokens configured across the site,
So that all sections display a cohesive and professional brand identity.

**Dependencies:** Story 1.1

**Acceptance Criteria:**

**Given** TailwindCSS est installé
**When** je configure tailwind.config.mjs
**Then** les couleurs primaires et accent sont définies dans theme.extend.colors
**And** les fonts display et body sont configurées dans theme.extend.fontFamily
**And** les breakpoints responsive sont définis (sm, md, lg, xl)
**And** les animations subtiles sont configurées dans theme.extend.animation
**And** le fichier src/styles/global.css existe avec les classes réutilisables (btn-primary, btn-secondary) via @apply

### Story 1.4: Déployer sur Vercel avec Landing Page Minimale

As a visiteur,
I want to access a live website with basic information,
So that I can see the project is real and get an early preview of Make It Global.

**Dependencies:** Story 1.2, Story 1.3

**Acceptance Criteria:**

**Given** le projet Astro est prêt avec BaseLayout et configuration
**When** je connecte le repository à Vercel
**Then** le projet se build et se déploie avec succès
**And** le site est accessible via l'URL Vercel fournie
**And** la page d'accueil affiche une landing page minimale avec:
  - Un headline simple ("Make It Global - Traduction Multimédia Professionnelle")
  - Une brève description en 1-2 phrases
  - Un bouton/lien de contact simple (email ou placeholder)
**And** SSL/HTTPS est automatiquement activé
**And** chaque push sur main déclenche un nouveau déploiement automatique
**And** un fichier .gitignore approprié exclut node_modules/, dist/, .env
**And** un stakeholder peut visiter l'URL et voir que le site existe et fonctionne

## Epic 2: Section Hero avec Proposition de Valeur

Les visiteurs peuvent comprendre immédiatement la proposition de valeur Make It Global et accéder aux CTA principaux (Calendly/WhatsApp) dès leur arrivée sur le site.

### Story 2.1: Créer HeroSection avec Proposition de Valeur et CTAs

As a visiteur,
I want voir la proposition de valeur principale et accéder aux CTAs dès l'arrivée,
So that je comprends immédiatement l'offre et je peux réserver un appel ou contacter via WhatsApp.

**Dependencies:** Story 1.4

**Acceptance Criteria:**

**Given** le projet avec BaseLayout et Tailwind configuré
**When** je crée les composants nécessaires pour la section Hero
**Then** le composant Button.astro existe avec des variants 'primary' et 'secondary', taille tactile ≥ 44px, et états hover/focus distincts
**And** le composant WhatsAppButton.astro est créé avec un helper getWhatsAppLink() générant un lien click-to-chat fonctionnel
**And** la section HeroSection.astro contient un headline clair et accrocheur (1 ligne maximum)
**And** un sous-titre explicatif (2-3 lignes maximum)
**And** deux CTAs au même niveau de visibilité : "Réserver un appel" (Calendly) et "Discuter sur WhatsApp"
**And** un visuel impactant (image de fond ou illustration)
**And** le design est mobile-first avec touch targets ≥ 44px
**And** la section s'affiche correctement sur mobile, tablette et desktop
**And** index.astro intègre HeroSection comme première section

### Story 2.2: Implémenter la Navigation Responsive et l'Accessibilité de Base

As a visiteur utilisant un lecteur d'écran ou naviguant au clavier,
I want pouvoir naviguer sur le site de manière accessible,
So that je peux utiliser le site indépendamment de mes capacités ou de mon device.

**Dependencies:** Story 2.1

**Acceptance Criteria:**

**Given** HeroSection est implémenté
**When** j'utilise le site
**Then** la navigation au clavier fonctionne avec des focus visibles sur tous les éléments interactifs
**And** tous les boutons ont des attributs aria-label descriptifs
**And** les images ont des attributs alt appropriés
**And** le contraste texte/fond respecte le ratio ≥ 4.5:1 (WCAG AA)
**And** la structure HTML utilise des balises sémantiques (header, main, nav, section)
**And** le scroll vertical est fluide sur mobile
**And** le site est pleinement fonctionnel sur mobile, tablette et desktop

## Epic 3: Sections Problème/Solution et Processus Clé-en-Main

Les visiteurs peuvent s'identifier au problème résolu et comprendre l'approche clé-en-main du service de traduction.

### Story 3.1: Créer ProblemSection (Problème/Solution)

As a visiteur,
I want comprendre le problème que Make It Global résout et comment la solution fonctionne,
So that je m'identifie au problème et je comprends l'approche hybride IA + Humain.

**Dependencies:** Story 2.2

**Acceptance Criteria:**

**Given** le BaseLayout et les composants UI existent
**When** je crée src/components/sections/ProblemSection.astro
**Then** la section présente le problème vécu par les cibles (manque de temps, complexité perçue de l'international)
**And** la section explique comment Make It Global résout ce problème
**And** l'approche hybride IA + validation humaine est clairement expliquée
**And** le contenu est "scannable" avec des icônes visuelles et des titres courts (3-5 mots)
**And** chaque point ne dépasse pas 2-3 lignes de texte
**And** le design est responsive mobile-first
**And** index.astro intègre ProblemSection après HeroSection

### Story 3.2: Créer ProcessSection (Processus Clé-en-Main)

As a visiteur,
I want visualiser les étapes du processus de travail clé-en-main,
So that je comprends que je n'aurai rien à gérer et que le service est vraiment sans effort.

**Dependencies:** Story 3.1

**Acceptance Criteria:**

**Given** le projet avec les sections précédentes
**When** je crée src/components/sections/ProcessSection.astro
**Then** la section présente 3-4 étapes maximum du processus
**And** chaque étape est visualisée avec une icône ou illustration
**And** le message "clé-en-main, on s'occupe de tout" est visuellement renforcé
**And** le langage utilisé est focusé sur "ce que vous N'avez PAS à faire"
**And** les étapes suivent un flow logique : "Vous envoyez" → "On traduit" → "Vous recevez"
**And** le design est responsive avec une présentation verticale sur mobile, horizontale sur desktop
**And** index.astro intègre ProcessSection après ProblemSection

## Epic 4: Section Vidéos de Démonstration (Preuve Visuelle)

Les visiteurs peuvent voir des exemples concrets de traduction vidéo avec lip-sync de qualité professionnelle.

### Story 4.1: Créer VideoSection avec Exemples Avant/Après

As a visiteur,
I want regarder des vidéos exemples avant/après traduction avec lip-sync,
So that je peux voir la qualité du service et être convaincu par la démonstration concrète.

**Dependencies:** Story 3.2

**Acceptance Criteria:**

**Given** le projet Astro avec la structure de composants
**When** je crée le composant VideoEmbed et VideoSection
**Then** le composant VideoEmbed.astro accepte des props (platform: 'youtube' | 'vimeo', videoId, title, thumbnailUrl)
**And** le composant génère un iframe responsive avec ratio 16:9 et loading="lazy"
**And** le composant est accessible avec un title descriptif sur l'iframe
**And** la section VideoSection.astro présente 2-3 exemples de vidéos (avant/après traduction)
**And** chaque vidéo utilise le composant VideoEmbed
**And** les vidéos sont organisées de manière claire (ex: "Français → Anglais", "Français → Espagnol")
**And** un titre ou légende explique brièvement ce que le visiteur va voir
**And** les vidéos se chargent en lazy loading (NFR5: démarrage < 2s après clic)
**And** les vidéos fonctionnent sans erreur sur mobile et desktop
**And** le design est responsive avec une présentation verticale sur mobile, grille sur desktop
**And** index.astro intègre VideoSection après ProcessSection

## Epic 5: Section Témoignages et Résultats Chiffrés

Les visiteurs peuvent lire des témoignages clients authentiques et voir des résultats concrets de croissance business.

### Story 5.1: Créer TestimonialsSection avec Témoignages Clients

As a visiteur,
I want lire des témoignages clients et voir des résultats concrets,
So that je sois inspiré et convaincu par les succès d'autres entreprises similaires à la mienne.

**Dependencies:** Story 4.1

**Acceptance Criteria:**

**Given** le projet Astro avec les composants UI
**When** je crée le composant TestimonialCard et TestimonialsSection
**Then** le composant TestimonialCard.astro accepte des props (quote, result, clientType, clientName optionnel)
**And** les résultats chiffrés (ex: "CA triplé", "+3 mois") sont mis en avant visuellement (gros, colorés)
**And** la citation est courte et scannable (2-3 lignes maximum)
**And** le type de client est indiqué (ex: "Infopreneur", "CEO PME industrielle") sans révéler l'identité
**And** la section TestimonialsSection.astro présente 3 témoignages clients anonymisés
**And** chaque témoignage utilise le composant TestimonialCard
**And** les témoignages sont variés (différents profils : infopreneur, CEO B2B, etc.)
**And** les résultats business sont mis en avant ("CA triplé", "nouveau marché en 3 mois", etc.)
**And** le design est responsive avec une présentation verticale sur mobile, grille sur desktop
**And** la section crée un momentum émotionnel d'inspiration avant les CTAs finaux
**And** index.astro intègre TestimonialsSection après VideoSection

## Epic 6: Section Contact Multi-Canal (Conversion)

Les visiteurs peuvent contacter Make It Global via leurs canaux préférés (Calendly, WhatsApp, formulaire) avec zéro friction.

### Story 6.1: Créer ContactSection avec Options Multi-Canal

As a visiteur,
I want contacter Make It Global via mon canal préféré (Calendly, WhatsApp, ou formulaire),
So that je peux passer à l'action immédiatement selon mon contexte et mes préférences.

**Dependencies:** Story 5.1

**Acceptance Criteria:**

**Given** le projet Astro avec les composants UI et WhatsAppButton existant
**When** je crée les composants CalendlyEmbed, ContactForm et ContactSection
**Then** le composant CalendlyEmbed.astro accepte des props (calendlyUrl, height optionnel) et génère un iframe Calendly responsive
**And** le widget Calendly est fonctionnel sur mobile et desktop (NFR10)
**And** le composant ContactForm.astro contient des champs pour email et téléphone avec labels accessibles et validations HTML5
**And** la section ContactSection.astro présente trois options de contact avec la même importance visuelle
**And** option 1: Widget Calendly pour réserver un appel directement
**And** option 2: Bouton WhatsApp pour contacter en un clic (NFR11)
**And** option 3: Formulaire simple (email + téléphone) pour message asynchrone
**And** les trois options sont clairement étiquetées et expliquées
**And** le design applique le principe "Zéro friction" (pas d'étapes inutiles)
**And** le principe "Conversion multi-canal" est respecté (Calendly = WhatsApp en importance)
**And** la section est responsive avec une présentation verticale sur mobile
**And** index.astro intègre ContactSection en dernière section après TestimonialsSection

## Epic 7: Analytics et Mesure de Performance

Le système peut tracker les visites, mesurer les conversions et identifier les sources de trafic pour optimiser le ROI.

### Story 7.1: Intégrer Google Analytics 4 dans BaseLayout

As a product owner,
I want intégrer Google Analytics 4 sur le site,
So that je peux tracker les visites, les sources de trafic et les conversions.

**Dependencies:** Story 6.1

**Acceptance Criteria:**

**Given** le BaseLayout.astro existe
**When** j'intègre le script GA4 dans BaseLayout.astro
**Then** le script GA4 est chargé dans le <head> de toutes les pages
**And** le tracking de base fonctionne (pages vues, sessions, utilisateurs)
**And** les paramètres UTM sont capturés automatiquement (FR23: source du trafic)
**And** la configuration respecte les bonnes pratiques de performance (script async)
**And** un fichier .env.example documente la variable GOOGLE_ANALYTICS_ID
**And** le site peut fonctionner sans GA4 si la variable n'est pas définie (graceful degradation)

### Story 7.2: Implémenter le Tracking des Événements de Conversion

As a product owner,
I want mesurer les clics sur les CTAs (Calendly, WhatsApp, formulaire),
So that je peux identifier quels canaux de conversion sont les plus efficaces.

**Dependencies:** Story 7.1

**Acceptance Criteria:**

**Given** GA4 est intégré dans BaseLayout
**When** je crée src/utils/analytics.ts avec des helper functions
**Then** une fonction trackCalendlyClick() est disponible
**And** une fonction trackWhatsAppClick() est disponible
**And** une fonction trackFormSubmit() est disponible
**And** ces fonctions envoient des événements personnalisés à GA4 (NFR12)
**And** les composants Button, WhatsAppButton et ContactForm utilisent ces helpers
**And** les événements incluent des données contextuelles (section, label)
**And** le tracking fonctionne sur mobile et desktop
**And** les événements sont visibles dans le dashboard GA4 en temps réel

## Epic 8: Optimisation Finale et Déploiement Production

Le site est optimisé pour la performance et l'accessibilité, prêt pour la production avec un chargement < 3s et une conformité WCAG AA.

### Story 8.1: Optimiser les Images et Assets

As a visiteur,
I want to experience fast page loading with optimized images,
So that I can access information quickly without waiting for heavy assets to load.

**Dependencies:** Story 7.2

**Acceptance Criteria:**

**Given** le site complet avec toutes les sections
**When** j'optimise les images et assets
**Then** toutes les images utilisent le composant <Image> d'Astro (jamais <img> direct)
**And** les images sont converties en format WebP/AVIF via @astrojs/image
**And** les images ont des dimensions appropriées pour chaque breakpoint
**And** l'attribut loading="lazy" est appliqué sur les images hors viewport initial
**And** les vidéos utilisent lazy loading sur les iframes
**And** le favicon est optimisé et présent dans public/
**And** l'image Open Graph (og-image.png) est optimisée et configurée dans BaseLayout

### Story 8.2: Audit Accessibilité et Conformité WCAG AA

As a visiteur avec handicap,
I want utiliser le site avec des technologies d'assistance,
So that je peux accéder à toutes les informations et fonctionnalités du site.

**Dependencies:** Story 8.1

**Acceptance Criteria:**

**Given** le site complet avec toutes les sections
**When** j'effectue un audit d'accessibilité complet
**Then** tous les contrastes texte/fond respectent le ratio ≥ 4.5:1 (NFR7)
**And** la navigation au clavier fonctionne sur tous les éléments interactifs (NFR8)
**And** tous les éléments interactifs ont un focus visible
**And** toutes les images ont des attributs alt descriptifs (NFR9)
**And** tous les boutons et liens ont des aria-label appropriés
**And** la structure HTML utilise des balises sémantiques correctes
**And** les formulaires ont des labels associés et des messages d'erreur accessibles
**And** le site est testable avec un lecteur d'écran (VoiceOver, NVDA)

### Story 8.3: Tests de Performance et Optimisation Lighthouse

As a product owner,
I want que le site respecte les objectifs de performance,
So que les visiteurs bénéficient d'une expérience rapide sur tous les devices.

**Dependencies:** Story 8.2

**Acceptance Criteria:**

**Given** le site optimisé avec images et accessibilité
**When** j'exécute des tests Lighthouse
**Then** le temps de chargement initial est < 3 secondes sur 4G (NFR1)
**And** First Contentful Paint < 1.5 secondes (NFR2)
**And** Largest Contentful Paint < 2.5 secondes (NFR3)
**And** le score Lighthouse Performance est > 90/100 (NFR4)
**And** le score Lighthouse Accessibilité est > 90/100
**And** le score Lighthouse Best Practices est > 90/100
**And** le score Lighthouse SEO est > 90/100
**And** les problèmes identifiés sont corrigés

### Story 8.4: Tests de Compatibilité Navigateurs et Configuration Production

As a product owner,
I want que le site fonctionne sur tous les navigateurs modernes avec une disponibilité optimale,
So que tous les visiteurs peuvent accéder au site indépendamment de leur navigateur.

**Dependencies:** Story 8.3

**Acceptance Criteria:**

**Given** le site optimisé et testé
**When** je teste sur différents navigateurs et configure la production
**Then** le site fonctionne correctement sur Chrome 90+ (NFR15)
**And** le site fonctionne correctement sur Firefox 88+
**And** le site fonctionne correctement sur Safari 14+
**And** le site fonctionne correctement sur Edge 90+
**And** les intégrations tierces fonctionnent (Calendly, WhatsApp, GA4, vidéos)
**And** la configuration Vercel garantit 99.9% uptime (NFR14)
**And** le CDN Vercel est activé pour performance globale
**And** SSL/HTTPS est fonctionnel
**And** les variables d'environnement sont correctement configurées (.env.example)
**And** un README.md documente l'installation et le déploiement
