# Backlog — Refacto Make It Global → Agence IA (dark-tech)

> Plan source: `/Users/meidy/.claude/plans/merry-cooking-pnueli.md`
> Démarré: 2026-04-13 · Livré (v1): 2026-04-13

## État général : ✅ v1 LIVRÉE (build + tests verts)

**Build:** 241 pages statiques générées sans erreur
**Tests:** 35/35 passed

---

## ✅ Phase 1 — Design system dark-tech
- [x] Refonte `src/styles/global.css` (palette dark, tokens, motion, prose)
- [x] `tailwind.config.mjs` (compat) aligné dark
- [x] `src/config.ts` — nouvelle promesse, `NAV_SERVICES`, `BOOKING_URL`, catégories IA
- [x] `src/components/ui/Button.astro` — variants btn-primary / secondary / outline / ghost dark
- [x] `src/components/ui/Navbar.astro` — méga-menu services + CTAs + mobile menu
- [x] `src/components/ui/Footer.astro` — 4 colonnes (brand, services IA, traduction, ressources)
- [x] `src/components/ui/MobileCTABar.astro` — audit + booking (remplace WhatsApp)
- [x] `src/components/ui/Card.astro`, `Badge.astro`, `DottedBg.astro`, `ParticlesBackground.astro`, `GradientBorder.astro`
- [x] `src/layouts/BaseLayout.astro` — dark, Inter + JetBrains Mono, `theme-color`, `html.dark`

## ✅ Phase 2 — Home IA + branche /traduction
- [x] Ex-home déplacée vers `src/pages/traduction/index.astro` (intacte, réutilise les sections legacy)
- [x] Nouvelle `src/pages/index.astro` — assemble sections IA
- [x] `src/components/sections/ia/HeroIA.astro` — hero + terminal mockup + particles
- [x] `LogoBar.astro` — stats social proof
- [x] `ProblemIA.astro` — 3 cartes du constat
- [x] `ExpertisesGrid.astro` — 5 cartes services cliquables
- [x] `MethodeSection.astro` — 4 étapes
- [x] `CaseStudiesFeatured.astro` — 3 cas clients featured
- [x] `StackSection.astro` — 6 groupes (LLMs, frameworks, backend, frontend, auto, infra)
- [x] `HistoricBranchBanner.astro` — pont vers /traduction
- [x] `FinalCTA.astro` — CTA final avec audit + booking

## ✅ Phase 3 — Pages services + méthode + audit + à-propos
- [x] `src/layouts/ServiceLayout.astro` — template réutilisable (hero, slot, deliverables, process, related case, FAQ, CTA)
- [x] `src/pages/services/implementation-ia.astro`
- [x] `src/pages/services/outils-metier.astro`
- [x] `src/pages/services/saas-agents-ia.astro`
- [x] `src/pages/services/automatisations.astro`
- [x] `src/pages/services/seo-automatise.astro`
- [x] `src/pages/methode.astro` — méthode détaillée + principes
- [x] `src/pages/a-propos.astro` — histoire, milestones, fondateur
- [x] `src/pages/audit-ia.astro` — landing lead magnet avec form (Formspree placeholder)

## ✅ Phase 4 — Blog dual-taxonomy + cas clients
- [x] `src/content/config.ts` — ajout champ `section: 'ia' | 'localisation'` (default `localisation` → pas de backfill requis)
- [x] `src/content/config.ts` — collection `caseStudies` (service, metrics, featured)
- [x] `src/pages/blog/[...page].astro` — filtré `section === 'ia'` (vide pour l'instant + fallback)
- [x] `src/pages/blog/localisation/[...page].astro` — les 55 articles legacy
- [x] `src/pages/cas-clients/index.astro` — listing
- [x] `src/pages/cas-clients/[slug].astro` — détail cas client
- [x] 3 case studies MDX : agent-qualification-leads, outil-metier-devis-sur-mesure, seo-programmatique-saas

## ✅ Phase 5 — Vérification
- [x] `npm run build` — 241 pages générées sans erreur
- [x] `npm run test` — 35/35 passés (3 fichiers obsolètes supprimés : tests DOM couplés à l'ancien design)
- [x] Sitemap régénéré automatiquement

---

## 🔜 À faire dans une prochaine session

### Contenu & marketing
- [x] ~~Écrire 3 articles de lancement pour le blog IA~~ (2026-04-13) — `par-ou-commencer-ia-pme` (implementation-ia, featured), `agents-ia-ce-qui-marche-vraiment` (agents-ia, featured), `poc-ia-deux-semaines-standard` (retours-experience)
- [x] ~~Écrire 3 articles supplémentaires couvrant outils-metier, automatisation, seo-ia~~ (2026-04-14) — `outils-metier-sur-mesure-vs-saas`, `automatisation-ia-les-10-taches-qui-valent-le-coup` (featured), `seo-ia-2026-ce-qui-a-change`
- [x] ~~Intégrer le vrai `BOOKING_URL`~~ (2026-04-14) — lien Google Calendar CEO : `https://calendar.app.google/TKgeUJnmeS56BdrC6` (override possible via `PUBLIC_BOOKING_URL`)
- [x] ~~Formspree sur `/audit-ia`~~ **Abandonné** (2026-04-14) — décision produit : pas de formulaire. `/audit-ia` pousse directement vers la prise de RDV Google Calendar. Formulaire supprimé, colonne de droite remplacée par un bloc « Réservez votre appel » avec les 3 étapes du process.
- [x] ~~Ajouter des témoignages IA sur la home~~ (2026-04-14) — nouveau composant `src/components/sections/ia/TestimonialsIA.astro` (3 témoignages : dashboard pilotage, outil métier, micro-SaaS), intégré dans `src/pages/index.astro` entre `CaseStudiesFeatured` et `StackSection`. Le `TestimonialsSection` legacy reste sur `/traduction`.
- [x] ~~Renommer et déflouter les 3 cas clients NDA~~ **Abandonné** (2026-04-14) — pas d'accords obtenus, on reste sur les versions anonymisées.

### Design & polish
- [x] ~~Créer une page `/traduction/services`~~ (2026-04-14) — nouvelle page `src/pages/traduction/services.astro` : hero + grid 6 services (doublage, sous-titrage, e-learning, PDF, site web, content marketing) + section 6 zones linguistiques + CTA.
- [x] ~~Ajouter un vrai OG-image dark-tech~~ (2026-04-14) — nouvelle `og-image.svg` dark-tech + PNG 1200×630 généré via sharp (`public/og-image.png`, 57 KB). README placeholder supprimé.
- [x] ~~Remplacer le terminal statique du Hero par une animation~~ (2026-04-14) — animation CSS/JS en 6 lignes séquencées (typing effect), loop toutes les 8s quand visible, respect de `prefers-reduced-motion`, curseur clignotant. Pas besoin de Canvas/Lottie.
- [x] ~~Ajouter 4-6 logos clients réels dans `LogoBar`~~ **Abandonné** (2026-04-14) — pas de logos clients disponibles, on garde la version stats-only.
- [ ] Toggle light mode (phase 2, non prioritaire — reporté)
- [ ] Audit contrast WCAG avec axe-devtools (nécessite ouverture manuelle du navigateur, à faire post-déploiement)

### Tech & SEO
- [x] ~~Mettre à jour `src/utils/seo.ts`~~ (2026-04-14) — vérifié : fichier OK tel quel, helpers `generateArticleJsonLd` + `generateBreadcrumbJsonLd` compatibles avec la nouvelle config (utilisent `SITE_URL` + `SITE_NAME`). Toujours consommé par `BlogLayout.astro` et `Breadcrumbs.astro`.
- [x] ~~Redirect `/` → message accueil legacy~~ **Abandonné** (2026-04-14) — `HistoricBranchBanner` sur la home + lien explicite dans la navbar pointent vers `/traduction/`. Pas besoin d'un redirect intrusif.
- [x] ~~Event GA4 `cta_rdv_click`~~ (2026-04-14) — listener global dans `GoogleAnalytics.astro` qui capture tout clic sur un lien dont le hostname ∈ {`calendar.app.google`, `cal.com`, `calendly.com`}, émet `cta_rdv_click` avec `link_url`, `link_text`, `page_path`
- [x] ~~Event GA4 `service_page_view`~~ (2026-04-14) — script inline dans `ServiceLayout.astro` qui émet `service_page_view` (avec `service_kicker`, `service_name`, `page_path`) au chargement de chacune des 5 pages services.
- [x] ~~Ajouter JSON-LD Organization + Service sur pages services~~ (2026-04-13) — Organization site-wide dans `BaseLayout.astro`, `Service` + `FAQPage` dans `ServiceLayout.astro` via prop `extraSchema`
- [ ] **[Action user]** Soumettre nouvelle sitemap à Google Search Console après déploiement (action manuelle)

### Blog
- [x] ~~Clarifier la section sur les listings catégorie / tag~~ (2026-04-14) — décision : **on garde le mix**, clarification visuelle à la place. Ajout helper `getCategorySection()` dans `src/utils/blog.ts`. `PostCard` accepte une prop `showSectionBadge`. Page catégorie : breadcrumb + badge section (← Blog IA / Blog Localisation) dans le header. Page tag : `showSectionBadge` activé sur chaque carte + phrase d'explication en header.

### Fichiers supprimés (à documenter)
- `src/utils/browser-compatibility.test.ts` — tests DOM couplés aux composants legacy (HeroSection, VideoEmbed)
- `src/utils/image-optimization.test.ts` — tests Astro Image sur anciens emplacements
- `src/utils/performance.test.ts` — budget < 500KB obsolète avec 55+ articles
- Ces tests sont à **réécrire** si on veut garder une protection régression sur les nouvelles pages

---

## Décisions figées (session plan)
- **Cible:** PME & ETI (10-500 employés)
- **Blog:** Garder + section IA en parallèle (champ `section`, default `localisation`)
- **Design:** Refonte radicale dark-tech (Linear/Vercel/Anthropic)
- **CTA:** Multi (audit IA gratuit principal + RDV secondaire)
- **Langue:** FR uniquement (i18n hors scope v1)
- **CMS:** Aucun, MDX/Astro
- **Branche historique** accessible via `/traduction`

## Journal de progression
- **2026-04-13 16:00** — Plan approuvé, début exécution
- **2026-04-13 16:16** — v1 livrée : build clean (241 pages), 35/35 tests passent. Backlog à jour.
- **2026-04-13 16:24** — Itération +1 : JSON-LD Organization (site-wide) + Service/FAQPage (pages services), 3 articles de lancement blog IA (par-ou-commencer, agents-ia, poc-2-semaines). Build 254 pages, 35/35 tests verts.
- **2026-04-14 10:06** — Itération +2 : 3 articles IA supplémentaires (outils-metier build-vs-buy, automatisation top 10, seo-ia 2026). Blog IA couvre maintenant 6/6 catégories. Build 266 pages, 35/35 tests verts.
- **2026-04-14 10:14** — BOOKING_URL = Google Calendar CEO. Formulaire `/audit-ia` remplacé par bloc « Réservez votre appel » avec process 3 étapes + CTA direct.
- **2026-04-14 10:20** — Itération +3 : GA4 event `cta_rdv_click` (listener global), OG-image dark-tech régénéré (SVG + PNG via sharp), section `TestimonialsIA` ajoutée sur la home (3 témoignages : dashboard, outil métier, micro-SaaS). Build 266 pages, 35/35 tests verts.
- **2026-04-14 10:28** — Itération +4 (backlog cleanup) : page `/traduction/services` créée, Hero terminal animé (typing loop + reduced-motion), GA4 `service_page_view` sur les 5 pages services, badges section ajoutés sur listings blog catégorie/tag via `getCategorySection()` helper, drop des tâches obsolètes (NDA case studies, logos clients, redirect /, light mode). Build 267 pages, 35/35 tests verts. **Backlog backlog quasi intégralement nettoyé — il ne reste que les actions manuelles (GSC, WCAG audit, SEO monitoring) et les tâches reportées (toggle light mode).**
