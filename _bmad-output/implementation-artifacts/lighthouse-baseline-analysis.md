# Lighthouse Baseline Analysis - Story 8.3

**Date:** 2026-01-29
**Analyste:** Claude Sonnet 4.5
**Site:** https://make-it-global-website.vercel.app

---

## 📊 Build Metrics (Baseline)

### Bundle Size Analysis

| Type | Fichier | Taille | Compression Estimée | Target | Status |
|------|---------|--------|---------------------|--------|--------|
| **HTML** | index.html | 33KB | ~10KB (gzip) | < 50KB | ✅ GOOD |
| **CSS** | index.[hash].css | 36KB | ~10KB (gzip) | < 100KB | ✅ GOOD |
| **JS** | (aucun) | 0KB | - | < 200KB | ✅ EXCELLENT |
| **SVG** | hero-background.svg | 1.1KB | - | - | ✅ OPTIMIZED |
| **SVG** | process-step-*.svg | ~3KB total | - | - | ✅ OPTIMIZED |
| **Images** | og-image.png | 6.2KB | - | - | ✅ OPTIMIZED |
| **Total dist/** | | 128KB | ~60-70KB (avec gzip) | < 500KB | ✅ EXCELLENT |

**Build Time:** 700ms (Target: < 500ms... mais acceptable) ⚠️
**Note:** Build time légèrement au-dessus de la target de 426ms (Story 8.1) mais reste excellent

---

## 🔍 Code Analysis - Identified Performance Issues

### 🔴 HIGH PRIORITY Issues

#### 1. **Font Loading Strategy Missing**

**Fichier:** `src/layouts/BaseLayout.astro`
**Problème:** Aucune stratégie de chargement de fonts configurée

**Impact Estimé:**
- ⚠️ FOIT (Flash of Invisible Text) possible
- ⚠️ FCP retardé de 200-500ms
- ⚠️ CLS potentiel si fallback metrics différents
- ⚠️ Lighthouse pénalisera "font-display" missing

**Où:**
- BaseLayout.astro ne charge aucune font explicitement
- tailwind.config.mjs définit `fontFamily: { sans: ['Inter', ...] }`
- **MAIS**: Aucun `<link>` vers Google Fonts visible!
- **CRITIQUE:** D'où vient Inter? Si browser fallback → OK, si CDN → problème

**Action Requise:**
1. Vérifier si Inter est chargé (inspecter dist/index.html)
2. Si Google Fonts: Ajouter preconnect + font-display
3. Recommandation: Self-host Inter pour performance optimale

---

#### 2. **Pas de Cache Headers (vercel.json missing)**

**Fichier:** `vercel.json` (n'existe pas)
**Problème:** Headers de cache sous-optimaux par défaut Vercel

**Impact Estimé:**
- ⚠️ Pas de `immutable` sur assets hashed (CSS, SVG)
- ⚠️ Pas de security headers (X-Content-Type-Options, etc.)
- ⚠️ Compression peut être sous-optimale
- ⚠️ Lighthouse pénalisera "serve static assets with efficient cache policy"

**Action Requise:**
1. Créer vercel.json
2. Configurer Cache-Control pour assets (max-age=31536000, immutable)
3. Configurer Security Headers
4. Activer Brotli/gzip compression explicitement

---

#### 3. **CSS de 36KB en Render-Blocking**

**Fichier:** `dist/_astro/index.[hash].css` (36KB)
**Problème:** Tout le CSS chargé en blocking dans HEAD

**Impact Estimé:**
- ⚠️ FCP retardé de 100-300ms sur Slow 4G
- ⚠️ Critical rendering path allongé
- ⚠️ Lighthouse recommandera "reduce unused CSS" ou "inline critical CSS"

**Contexte:**
- 36KB CSS = acceptable pour un site complet
- Tailwind v4 avec purging déjà actif
- Mais: Above-the-fold content pourrait bénéficier de critical CSS inline

**Action Requise:**
1. Identifier si Lighthouse pénalise vraiment cet aspect
2. Si oui: Considérer inline critical CSS (< 14KB pour hero section)
3. Ou: Preload CSS avec `fetchpriority="high"`

---

### 🟡 MEDIUM PRIORITY Issues

#### 4. **Third-Party Scripts (GA4, Calendly)**

**Fichiers:**
- `src/components/GoogleAnalytics.astro`
- `BaseLayout.astro` (Calendly SDK)

**Situation Actuelle:**
- ✅ GA4: Script `async` (bon)
- ✅ Calendly: Script `async` (bon)
- ✅ Preconnect configurés pour CDNs

**Impact Potentiel:**
- ⚠️ TBT (Total Blocking Time) peut être affecté si scripts lourds
- ⚠️ INP peut être impacté si JS main thread busy
- ✅ Mais: async loading minimise impact sur FCP/LCP

**Action Requise:**
1. Mesurer TBT avec Lighthouse
2. Si TBT > 200ms: Considérer defer au lieu de async pour GA4
3. Calendly retry polling (100ms interval, 50 retries): acceptable mais monitorer INP

---

#### 5. **LCP Element Optimization Validation**

**Fichier:** `src/components/sections/HeroSection.astro`
**LCP Element Attendu:** Hero background SVG ou texte hero

**Situation Actuelle:**
- ✅ Hero background: `loading="eager"` + `fetchpriority="high"` (Story 8.1)
- ✅ SVG optimisé (1.1KB)
- ✅ Dark overlay (CSS only, pas d'impact)

**Validation Nécessaire:**
- 🔍 Confirmer que hero-background.svg EST l'élément LCP
- 🔍 Si texte hero = LCP (au lieu de l'image), stratégie différente requise
- 🔍 Mesurer LCP actuel avec Lighthouse

**Action Requise:**
1. Identifier élément LCP via Lighthouse ou Chrome DevTools
2. Si SVG = LCP: Considérer preload explicite
3. Si texte = LCP: Optimiser font loading (voir Issue #1)

---

### 🟢 LOW PRIORITY (Monitoring)

#### 6. **Cumulative Layout Shift (CLS) Risk**

**Risque Potentiels:**
- ⚠️ Font loading sans fallback metrics → CLS quand swap
- ⚠️ Calendly widget si non-dimensionné
- ⚠️ Hero text overlay layout shift possible

**Situation Actuelle:**
- ✅ Images ont width/height explicites (Story 8.1)
- ✅ SVGs dimensionnés
- ⚠️ Fonts: Pas de fallback metrics visibles

**Action Requise:**
1. Mesurer CLS avec Lighthouse
2. Si CLS > 0.1: Identifier source avec Chrome DevTools Layout Shift Regions
3. Appliquer `font-display: optional` si fonts causent shift

---

#### 7. **Preconnect Optimization Review**

**Fichier:** `src/layouts/BaseLayout.astro`

**Preconnects Actuels:**
```html
<link rel="preconnect" href="https://www.youtube-nocookie.com" />
<link rel="preconnect" href="https://player.vimeo.com" />
<link rel="dns-prefetch" href="https://www.youtube.com" />
<link rel="dns-prefetch" href="https://i.vimeocdn.com" />
<link rel="preconnect" href="https://assets.calendly.com" />
<link rel="preconnect" href="https://www.google-analytics.com" crossorigin />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

**Analyse:**
- ✅ Bon: CDNs tiers preconnectés
- ✅ Bon: crossorigin sur Google Analytics (CORS)
- ⚠️ **MANQUE:** Preconnect vers Google Fonts (si utilisé)

**Action Requise:**
1. Vérifier si Google Fonts utilisé
2. Si oui: Ajouter preconnect vers fonts.googleapis.com et fonts.gstatic.com

---

## 🎯 Top 5-10 Optimization Opportunities (Prioritized)

### Ordre d'Implémentation Recommandé

| # | Optimisation | Impact Estimé | Difficulté | Priorité | Task Story |
|---|--------------|---------------|------------|----------|------------|
| **1** | Créer vercel.json avec cache headers | +5-10 points Performance | Facile | 🔴 HIGH | Task 8 |
| **2** | Optimiser font loading strategy | +5-10 points Performance<br>+0.2-0.5s FCP | Moyen | 🔴 HIGH | Task 2 |
| **3** | Valider + Optimiser LCP element | +0.1-0.3s LCP | Facile | 🔴 HIGH | Task 3 |
| **4** | Mesurer + Corriger CLS | +0-5 points Performance | Moyen | 🟡 MEDIUM | Task 4 |
| **5** | Optimiser temps chargement total | +2-5 points Performance | Facile | 🟡 MEDIUM | Task 5 |
| **6** | Audit Accessibility validation | 0 (déjà ~100) | Facile | 🟢 LOW | Task 7 |
| **7** | Audit Best Practices + SEO | +0-5 points | Facile | 🟢 LOW | Task 7 |

---

## 📋 Predicted Lighthouse Scores (Baseline)

### Estimation AVANT Optimisations

**Mobile (Slow 4G, Throttled):**

| Catégorie | Score Estimé | Justification |
|-----------|--------------|---------------|
| **Performance** | 85-92/100 | ⚠️ Font loading, cache headers, CSS blocking |
| **Accessibility** | 98-100/100 | ✅ Story 8.2 confirmé conforme WCAG AA |
| **Best Practices** | 90-95/100 | ✅ HTTPS, pas de console errors (à valider) |
| **SEO** | 95-100/100 | ✅ Meta tags OK (Story 1.2), mobile-friendly |

**Core Web Vitals Estimés:**

| Métrique | Valeur Estimée | Target | Prédiction |
|----------|----------------|--------|------------|
| **FCP** | 1.2-1.8s | < 1.5s | ⚠️ Borderline (font loading impact) |
| **LCP** | 2.0-2.8s | < 2.5s | ⚠️ Borderline (validation requise) |
| **TBT** | 50-150ms | < 200ms | ✅ Probablement OK (peu de JS) |
| **CLS** | 0.05-0.15 | < 0.1 | ⚠️ Borderline (font swap risk) |
| **SI** | 1.5-2.5s | < 3.4s | ✅ Probablement OK |

**Desktop (No Throttling):**
- Performance: 95-100/100 (réseau rapide masque problèmes)
- Autres catégories: Identiques à Mobile

---

## 🚀 Recommended Implementation Plan

### Phase 1: Quick Wins (30 min)

1. ✅ Créer vercel.json avec cache headers
2. ✅ Ajouter preconnect Google Fonts (si utilisé)
3. ✅ Configurer font-display: swap dans global.css ou Tailwind

**Impact Attendu:** +10-15 points Performance, +0.3s FCP

---

### Phase 2: Core Web Vitals Optimization (1-2h)

4. 🔍 Exécuter Lighthouse APRÈS Phase 1
5. ✅ Valider élément LCP et optimiser si nécessaire
6. ✅ Mesurer CLS et corriger si > 0.1
7. ✅ Valider FCP < 1.5s et LCP < 2.5s

**Impact Attendu:** Atteindre ALL Core Web Vitals thresholds

---

### Phase 3: Fine-Tuning (30 min)

8. ✅ Itérer sur Opportunities Lighthouse restantes
9. ✅ Valider Best Practices + SEO scores > 90
10. ✅ Tests multi-devices (Desktop, Mobile, Tablet)

**Impact Attendu:** Performance > 90/100 garanti

---

### Phase 4: Documentation (30 min)

11. ✅ Documenter before/after avec screenshots
12. ✅ Créer rapport final optimisations
13. ✅ Recommandations maintenance continue

---

## 📝 Next Steps

1. **Implémenter Phase 1 (Quick Wins)**
   - Créer vercel.json
   - Optimiser font loading
   - Deploy et tester

2. **Exécuter Lighthouse Baseline**
   - Suivre guide: `lighthouse-testing-guide.md`
   - Documenter scores réels
   - Comparer vs prédictions

3. **Implémenter Phase 2 (Core Web Vitals)**
   - Corriger issues identifiés par Lighthouse
   - Re-tester après chaque changement

4. **Finaliser avec Phase 3+4**
   - Atteindre targets > 90/100
   - Documentation complète

---

## ⚠️ Assumptions & Validation Required

**Assumptions faites sans Lighthouse run:**

1. ✅ **Build metrics validés** (128KB, 700ms)
2. ❓ **Font loading:** Assume Inter NOT loaded yet (à valider dans dist/index.html)
3. ❓ **LCP element:** Assume hero-background.svg (à valider avec Lighthouse)
4. ❓ **CLS:** Assume < 0.1 mais risque font swap (à valider)
5. ❓ **Performance score:** Estimate 85-92/100 (à valider)

**Validation Actions:**

- [ ] Inspecter dist/index.html pour font loading actual
- [ ] Exécuter Lighthouse pour confirmer scores estimés
- [ ] Identifier LCP element réel
- [ ] Mesurer CLS réel
- [ ] Ajuster plan si prédictions incorrectes

---

**Status:** Ready to implement Phase 1 optimizations (Quick Wins)
