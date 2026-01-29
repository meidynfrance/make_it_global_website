# Guide de Test Lighthouse - Story 8.3

**Date:** 2026-01-29
**Site:** Make It Global
**URL Production:** https://make-it-global-website.vercel.app

## 📋 Objectifs de Performance

### Seuils Requis (Acceptance Criteria)

| Métrique | Seuil Requis | Catégorie |
|----------|--------------|-----------|
| **Temps de chargement initial** | < 3 secondes | NFR1 |
| **First Contentful Paint (FCP)** | < 1.5 secondes | NFR2 |
| **Largest Contentful Paint (LCP)** | < 2.5 secondes | NFR3 |
| **Score Lighthouse Performance** | > 90/100 | NFR4 |
| **Score Lighthouse Accessibility** | > 90/100 | AC5 |
| **Score Lighthouse Best Practices** | > 90/100 | AC6 |
| **Score Lighthouse SEO** | > 90/100 | AC7 |

### Core Web Vitals (Google 2026)

| Métrique | Good | Needs Improvement | Poor |
|----------|------|-------------------|------|
| **LCP** | ≤ 2.5s | 2.5s - 4.0s | > 4.0s |
| **INP** | ≤ 200ms | 200ms - 500ms | > 500ms |
| **CLS** | ≤ 0.1 | 0.1 - 0.25 | > 0.25 |

---

## 🧪 Méthode de Test

### Option 1: Chrome DevTools Lighthouse (Recommandé)

**Étapes:**

1. **Ouvrir Chrome en mode Incognito** (Cmd+Shift+N sur Mac, Ctrl+Shift+N sur Windows)
   - Évite les extensions qui peuvent fausser les scores
   - Cache propre pour résultats cohérents

2. **Naviguer vers l'URL de production:**
   ```
   https://make-it-global-website.vercel.app
   ```

3. **Ouvrir Chrome DevTools** (F12 ou Cmd+Option+I)

4. **Aller dans l'onglet "Lighthouse"**
   - Si non visible: ⋮ (3 points) → More tools → Lighthouse

5. **Configurer l'audit:**
   - **Mode:** Mobile (par défaut) puis Desktop (2ème run)
   - **Categories:** Cocher toutes: Performance, Accessibility, Best Practices, SEO
   - **Throttling:** Applied (Slow 4G) - laisser par défaut

6. **Cliquer "Analyze page load"**
   - Attendre 30-60 secondes pour l'audit complet
   - Ne pas interagir avec la page pendant l'audit

7. **Sauvegarder le rapport:**
   - Cliquer sur ⚙️ (Settings) → "Save as HTML"
   - Nommer: `lighthouse-baseline-mobile-YYYY-MM-DD.html`

8. **Répéter en mode Desktop:**
   - Changer Mode de "Mobile" à "Desktop"
   - Re-lancer l'audit
   - Sauvegarder: `lighthouse-baseline-desktop-YYYY-MM-DD.html`

9. **Exécuter 3x pour cohérence:**
   - Scores Lighthouse peuvent varier ±5 points
   - Faire moyenne des 3 runs pour précision

---

### Option 2: PageSpeed Insights (Lab + Field Data)

**URL:** https://pagespeed.web.dev/

**Étapes:**

1. **Naviguer vers PageSpeed Insights**

2. **Entrer l'URL:**
   ```
   https://make-it-global-website.vercel.app
   ```

3. **Cliquer "Analyze"**
   - Attendre résultats (30-60 secondes)

4. **Examiner les données:**
   - **Lab Data (Lighthouse):** Résultats simulés sur mobile Slow 4G
   - **Field Data (CrUX):** Données réelles utilisateurs (si disponible après 28 jours)

5. **Prendre screenshots:**
   - Scores globaux
   - Section "Opportunities" (optimisations prioritaires)
   - Section "Diagnostics" (informations techniques)

---

### Option 3: Chrome DevTools Performance Panel

**Pour mesurer FCP, LCP, CLS en temps réel:**

1. **Ouvrir DevTools → Performance tab**

2. **Cliquer Record (⚫️)**

3. **Recharger la page (Cmd+R ou Ctrl+R)**

4. **Arrêter l'enregistrement après chargement complet**

5. **Analyser la timeline:**
   - **FCP:** Premier marqueur bleu (First Contentful Paint)
   - **LCP:** Marqueur violet LCP (Largest Contentful Paint)
   - **CLS:** Barres rouges (Layout Shifts)

6. **Prendre screenshot de la timeline**

---

## 📊 Template de Documentation Baseline

### Scores Lighthouse - Baseline (Date: YYYY-MM-DD)

#### Mobile (Slow 4G, Throttled)

| Catégorie | Score | Status | Notes |
|-----------|-------|--------|-------|
| **Performance** | __/100 | ⚠️ / ✅ | |
| **Accessibility** | __/100 | ⚠️ / ✅ | |
| **Best Practices** | __/100 | ⚠️ / ✅ | |
| **SEO** | __/100 | ⚠️ / ✅ | |

**Core Web Vitals (Mobile):**

| Métrique | Valeur | Target | Status |
|----------|--------|--------|--------|
| **FCP** | __s | < 1.5s | ⚠️ / ✅ |
| **LCP** | __s | < 2.5s | ⚠️ / ✅ |
| **TBT** | __ms | < 200ms | ⚠️ / ✅ |
| **CLS** | __ | < 0.1 | ⚠️ / ✅ |
| **SI** | __s | < 3.4s | ⚠️ / ✅ |

#### Desktop (No Throttling)

| Catégorie | Score | Status | Notes |
|-----------|-------|--------|-------|
| **Performance** | __/100 | ⚠️ / ✅ | |
| **Accessibility** | __/100 | ⚠️ / ✅ | |
| **Best Practices** | __/100 | ⚠️ / ✅ | |
| **SEO** | __/100 | ⚠️ / ✅ | |

---

### Top Opportunities (Lighthouse Recommendations)

**Format:**

1. **[Opportunity Title]**
   - **Impact estimé:** +X points Performance
   - **Description:** [Ce que Lighthouse recommande]
   - **Action:** [Ce qu'on doit faire]
   - **Priorité:** 🔴 High / 🟡 Medium / 🟢 Low

**Exemple:**

1. **Eliminate render-blocking resources**
   - **Impact estimé:** +0.5s FCP
   - **Description:** CSS bloque le rendu initial
   - **Action:** Inline critical CSS ou preload
   - **Priorité:** 🔴 High

---

### Bundle Size Analysis

**Fichiers générés (dist/):**

| Type | Fichier | Taille | Compression | Notes |
|------|---------|--------|-------------|-------|
| **HTML** | index.html | 33KB | Gzip | |
| **CSS** | index.[hash].css | 36KB | Gzip | |
| **JS** | (aucun) | 0KB | - | Astro SSG |
| **Images** | hero-background.svg | 1.1KB | - | LCP element |
| **Images** | process-step-*.svg | ~3KB | - | Lazy loaded |
| **Total** | | ~128KB | | Target: < 200KB ✅ |

---

### Network Waterfall (Chrome DevTools Network)

**Capture:**

1. **Ouvrir DevTools → Network tab**
2. **Cocher "Disable cache"**
3. **Throttling:** Slow 4G
4. **Recharger la page**
5. **Screenshot du waterfall complet**

**Analyse:**

- **Nombre de requêtes:** __
- **Total transferé:** __KB
- **Total resources:** __KB
- **Finish time:** __s
- **DOMContentLoaded:** __s
- **Load event:** __s

---

## 🎯 Checklist d'Analyse

### Performance Baseline

- [ ] Lighthouse Mobile exécuté 3x, moyenne calculée
- [ ] Lighthouse Desktop exécuté 3x, moyenne calculée
- [ ] PageSpeed Insights consulté (Lab + Field data)
- [ ] Chrome Performance panel utilisé pour mesurer FCP/LCP/CLS
- [ ] Network waterfall capturé avec throttling Slow 4G
- [ ] Screenshots sauvegardés pour tous les audits
- [ ] Rapports HTML Lighthouse sauvegardés

### Documentation Baseline

- [ ] Tableau scores Lighthouse complété
- [ ] Core Web Vitals documentés
- [ ] Top 5-10 Opportunities listées avec impact
- [ ] Bundle size analysis complété
- [ ] Network waterfall analysé
- [ ] Fichiers critiques identifiés (LCP element, render-blocking resources)

### Identification Problèmes

- [ ] FCP > 1.5s? → Identifier render-blocking resources
- [ ] LCP > 2.5s? → Identifier élément LCP et son chargement
- [ ] CLS > 0.1? → Identifier éléments causant layout shifts
- [ ] Performance < 90? → Lister top 3 opportunités d'optimisation
- [ ] Accessibility < 100? → Identifier régressions depuis Story 8.2
- [ ] Best Practices < 90? → Lister problèmes (HTTPS, CSP, console errors)
- [ ] SEO < 90? → Vérifier meta tags, mobile-friendly, structured data

---

## 📝 Prochaines Étapes (Après Baseline)

1. **Analyser les Opportunities Lighthouse**
   - Prioritiser par impact (FCP, LCP gains)
   - Créer liste d'actions correctives

2. **Implémenter Optimisations**
   - Selon Tasks 2-8 de la story
   - Focus: Font loading, critical CSS, cache headers

3. **Re-tester Post-Optimisations**
   - Même méthodologie (3x runs, mobile + desktop)
   - Documenter avant/après avec screenshots

4. **Rapport Final**
   - Tableau comparatif baseline vs final
   - Liste optimisations appliquées
   - Impact mesuré de chaque optimisation

---

## 🔗 Ressources

- **Lighthouse Documentation:** https://developer.chrome.com/docs/lighthouse/overview/
- **Core Web Vitals:** https://web.dev/vitals/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Web Vitals Extension:** https://chrome.google.com/webstore/detail/web-vitals/

---

**Note:** Ce guide sera complété avec les résultats réels après exécution des tests.
