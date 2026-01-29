# Manuel de Tests Manuels Cross-Browser
## Story 8.4: Browser Compatibility Testing

**Date:** 2026-01-29
**Status:** Automated tests complete (45/45 passed), manual tests documented below

---

## Vue d'Ensemble

Les tests automatisés ont validé la **structure HTML, les headers de sécurité, et les intégrations tierces**. Ce guide documente les tests manuels restants qui nécessitent une interaction réelle avec le navigateur.

**Tests Automatisés Complétés (45/45)** ✅
- HTML structure et intégrations
- Security headers (CSP, HSTS, X-Frame-Options, etc.)
- Accessibilité (ARIA, skip links, alt text)
- Performance (lazy loading, async scripts)

**Tests Manuels à Effectuer** ⚠️
- Interactions Calendly (modal open/close)
- Events GA4 dans Network tab
- Video playback
- Responsive visuel
- Keyboard navigation avec focus visible
- Screen readers (VoiceOver, NVDA)

---

## Tests Manuels par Navigateur

### 1. Chrome Desktop (version 90+)

**URL de Test:** https://make-it-global-website.vercel.app

#### Test 1: Calendly Popup Interaction
1. **Ouvrir** le site dans Chrome (version ≥90)
2. **Cliquer** sur le bouton "Réserver mon appel" dans le Hero
3. **Vérifier:**
   - ✅ Modal Calendly s'ouvre
   - ✅ Scheduling interface visible
   - ✅ Bouton "×" (close) fonctionne
   - ✅ Touche "Esc" ferme le modal
   - ✅ Scroll bloqué quand modal ouvert
4. **Screenshot:** Prendre une capture du modal ouvert
5. **Résultat attendu:** Modal Calendly fonctionne sans erreur

#### Test 2: WhatsApp Link Interaction
1. **Cliquer** sur le bouton "Discuter sur WhatsApp" (Hero ou Contact)
2. **Vérifier:**
   - ✅ Nouvel onglet s'ouvre
   - ✅ URL: `https://wa.me/33647770475?text=...`
   - ✅ Message pré-rempli correct (accents français + emoji)
   - ✅ Desktop: Ouvre web.whatsapp.com ou demande l'application
3. **Screenshot:** Prendre une capture de web.whatsapp.com avec message
4. **Résultat attendu:** WhatsApp s'ouvre avec message pré-rempli

#### Test 3: GA4 Events Tracking
1. **Ouvrir** Chrome DevTools (F12)
2. **Aller** dans l'onglet "Network"
3. **Filtrer:** `google-analytics.com/g/collect`
4. **Cliquer** sur bouton Calendly (Hero)
5. **Vérifier:**
   - ✅ Requête GA4 envoyée (ligne verte dans Network)
   - ✅ Payload contains: `event_name=calendly_click`
   - ✅ Payload contains: `section=hero`
   - ✅ Payload contains: `cta_type=button`
6. **Cliquer** sur bouton WhatsApp (Contact)
7. **Vérifier:**
   - ✅ Requête GA4 envoyée
   - ✅ Payload contains: `event_name=whatsapp_click`
   - ✅ Payload contains: `section=contact`
8. **Screenshot:** Network tab avec requêtes GA4 visibles
9. **Résultat attendu:** Events GA4 envoyés correctement

#### Test 4: Video Embeds Playback
1. **Scroller** jusqu'à la section "Découvrez la Qualité en Action"
2. **Cliquer** sur le bouton play d'une vidéo YouTube
3. **Vérifier:**
   - ✅ Thumbnail disparaît
   - ✅ Iframe YouTube charge
   - ✅ Vidéo commence à jouer (son optionnel)
   - ✅ Contrôles YouTube visibles
4. **Répéter** pour une vidéo Vimeo (si présente)
5. **Screenshot:** Vidéo en cours de lecture
6. **Résultat attendu:** Lazy loading fonctionne, vidéos jouent

#### Test 5: Responsive Design Visual
1. **Ouvrir** Chrome DevTools (F12)
2. **Activer** Device Toolbar (Ctrl+Shift+M ou Cmd+Shift+M)
3. **Tester chaque breakpoint:**
   - **320px (Mobile S):** ✅ Single column, text lisible, boutons accessibles
   - **640px (Mobile L):** ✅ Spacing ajusté
   - **768px (Tablet):** ✅ 2 colonnes, navigation horizontale
   - **1024px (Desktop):** ✅ 3 colonnes, hover states
   - **1280px (Desktop L):** ✅ Max-width 1200px, centré
4. **Screenshot:** Une capture à chaque breakpoint
5. **Résultat attendu:** Layout adapté à chaque breakpoint sans overflow horizontal

#### Test 6: Keyboard Navigation
1. **Recharger** la page
2. **Appuyer** sur Tab (répéter)
3. **Vérifier:**
   - ✅ Skip link "Passer au contenu principal" visible en premier
   - ✅ Focus visible (outline 2px + shadow)
   - ✅ Ordre logique: Skip links → Hero CTAs → Navigation → Sections → Footer
   - ✅ Tous les boutons et liens accessibles au clavier
4. **Appuyer** sur Enter sur le bouton Calendly
5. **Vérifier:**
   - ✅ Modal s'ouvre
6. **Appuyer** sur Esc
7. **Vérifier:**
   - ✅ Modal se ferme
8. **Screenshot:** Focus indicator visible sur un bouton
9. **Résultat attendu:** Navigation clavier complète et intuitive

#### Test 7: Console Errors
1. **Ouvrir** Chrome DevTools (F12) → Console
2. **Recharger** la page
3. **Vérifier:**
   - ✅ 0 erreurs (lignes rouges)
   - ✅ 0 violations CSP
   - ⚠️ Avertissements Calendly cookies OK (acceptable)
4. **Interagir** avec tous les CTAs
5. **Vérifier:**
   - ✅ 0 nouvelles erreurs
6. **Screenshot:** Console vide (ou seulement avertissements cookies)
7. **Résultat attendu:** Aucune erreur JavaScript ou CSP

---

### 2. Chrome Android (Mobile Testing)

**Prérequis:** Appareil Android avec Chrome 90+ OU émulation via Chrome DevTools

#### Test 1: Touch Events
1. **Ouvrir** le site sur Chrome Android
2. **Tester** tous les boutons (Calendly, WhatsApp)
3. **Vérifier:**
   - ✅ Touch targets ≥44px (doigt entier)
   - ✅ Tap feedback visuel (hover state)
   - ✅ Pas de double-tap zoom involontaire
4. **Résultat attendu:** Tous les boutons facilement tapables

#### Test 2: WhatsApp App Integration
1. **Cliquer** sur bouton WhatsApp
2. **Vérifier:**
   - ✅ Android demande: "Ouvrir avec WhatsApp?"
   - ✅ WhatsApp app s'ouvre (si installée)
   - ✅ Message pré-rempli dans chat
3. **Résultat attendu:** WhatsApp app s'ouvre directement (pas web.whatsapp.com)

#### Test 3: Orientation Changes
1. **Tourner** le téléphone (portrait ↔ landscape)
2. **Vérifier:**
   - ✅ Layout s'adapte
   - ✅ Pas de content overflow
   - ✅ CTAs toujours visibles
3. **Résultat attendu:** Responsive fonctionne en rotation

---

### 3. Firefox Desktop (version 88+)

**URL de Test:** https://make-it-global-website.vercel.app

#### Tests à Effectuer (similaire à Chrome)
1. ✅ Calendly popup: SDK compatibility avec Firefox
2. ✅ WhatsApp links: Opens wa.me correctly
3. ✅ GA4 events: Firefox DevTools Network tab
4. ✅ Video embeds: YouTube/Vimeo playback
5. ✅ Responsive: Firefox DevTools (5 breakpoints)
6. ✅ Keyboard navigation: Tab/Shift+Tab, Enter, Esc
7. ✅ Console: 0 errors, 0 CSP violations

**Focus Spécifique Firefox:**
- **Keyboard navigation:** Firefox users = power users, test exhaustivement
- **Accessibility Inspector:** Firefox DevTools > Accessibility panel
- **CSP headers:** Validate CSP compatibility (Firefox plus strict)

**Résultat Attendu:**
- Comportement identique à Chrome
- 0 Firefox-specific bugs
- Keyboard navigation impeccable

---

### 4. Safari Desktop (version 14+, macOS)

**URL de Test:** https://make-it-global-website.vercel.app

#### Tests à Effectuer
1. ✅ Calendly popup: SDK compatibility WebKit engine
2. ✅ WhatsApp links: Opens web.whatsapp.com (desktop)
3. ⚠️ GA4 events: **ITP may delay attribution 7 days** (note Safari ITP warnings OK)
4. ✅ Video embeds: Safari video codecs compatibility
5. ✅ Responsive: Safari Web Inspector
6. ✅ Keyboard navigation: Enable "Tab highlights each item" in Safari Preferences
7. ✅ Console: 0 errors (ITP warnings OK, not errors)

**Focus Spécifique Safari:**
- **WebKit rendering:** Different from Chromium, check layout
- **ITP (Intelligent Tracking Prevention):** GA4 events may show "Prevented" in Web Inspector Network tab. This is EXPECTED, not a bug.
- **Video codecs:** Safari picky about video formats, validate playback
- **VoiceOver:** macOS native screen reader (Cmd+F5 to enable)

**Résultat Attendu:**
- Site fonctionne identiquement
- GA4 events sent (ITP warnings acceptable)
- Videos play correctly

---

### 5. Safari iOS (version 14+, iPhone/iPad)

**URL de Test:** https://make-it-global-website.vercel.app

#### Tests à Effectuer
1. ✅ Touch events: All buttons ≥44px
2. ✅ WhatsApp app: Opens WhatsApp app directly
3. ✅ Calendly modal: SDK compatibility on mobile Safari
4. ✅ Video playback: YouTube/Vimeo on iOS
5. ✅ Responsive: Portrait and landscape
6. ✅ VoiceOver: Screen reader testing (Settings > Accessibility > VoiceOver)

**Focus Spécifique iOS Safari:**
- **Touch targets:** Test with thumb (larger than finger)
- **Safe area:** Check notch/home indicator don't hide content
- **VoiceOver:** "Double-tap to activate", announcements correct

**Résultat Attendu:**
- Expérience mobile optimale
- VoiceOver annonce correctement tous les éléments

---

### 6. Edge Desktop (version 90+, Windows)

**URL de Test:** https://make-it-global-website.vercel.app

#### Tests à Effectuer (similaire à Chrome)
1. ✅ Calendly popup: Chromium engine = similar to Chrome
2. ✅ WhatsApp links: Opens wa.me
3. ✅ GA4 events: Edge DevTools Network tab
4. ✅ Video embeds: YouTube/Vimeo playback
5. ✅ Responsive: Edge DevTools (5 breakpoints)
6. ✅ Keyboard navigation: Tab, Enter, Esc
7. ✅ Console: 0 errors, 0 CSP violations

**Focus Spécifique Edge:**
- **Chromium-based:** Expect near-identical behavior to Chrome
- **Corporate users:** Edge = primary browser for business
- **Quick validation:** Should be fastest browser to test (< 10 minutes)

**Résultat Attendu:**
- Identique à Chrome (Chromium engine)
- 0 Edge-specific bugs
- Quick pass

---

## Tests d'Accessibilité Cross-Browser

### Screen Readers

#### VoiceOver (Safari macOS/iOS)
1. **Activer:** Cmd+F5 (macOS) ou Settings > Accessibility > VoiceOver (iOS)
2. **Naviguer:** VO+Right Arrow (macOS) ou swipe right (iOS)
3. **Vérifier:**
   - ✅ "Heading level 1: Traduction vidéo avec lip-sync en 48h"
   - ✅ "Button: Réserver mon appel"
   - ✅ "Link, Discuter sur WhatsApp"
   - ✅ Skip links announced correctly
4. **Résultat attendu:** All elements announced with correct roles

#### NVDA (Firefox Windows)
1. **Installer:** NVDA (free, open-source)
2. **Activer:** Ctrl+Alt+N
3. **Naviguer:** Down Arrow (read next element)
4. **Vérifier:**
   - ✅ Headings announced
   - ✅ Buttons announced
   - ✅ Links announced
5. **Résultat attendu:** Content reads logically

### Motion Preferences

#### Test prefers-reduced-motion
1. **macOS:**
   - System Preferences > Accessibility > Display
   - Enable "Reduce motion"
2. **Windows:**
   - Settings > Ease of Access > Display
   - Enable "Show animations in Windows"
3. **Recharger** le site
4. **Vérifier:**
   - ✅ Animations disabled
   - ✅ Transitions minimal or instant
   - ✅ No parallax scrolling
5. **Résultat attendu:** Animations respectent préférence utilisateur

---

## Checklist de Validation Finale

### Tous Navigateurs (Chrome, Firefox, Safari, Edge)

| Critère | Chrome | Firefox | Safari | Edge | Mobile |
|---------|--------|---------|--------|------|--------|
| **Page charge (HTTP 200)** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **Calendly popup fonctionne** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **WhatsApp opens correctly** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **GA4 events sent** | ⚠️ | ⚠️ | ⚠️ (ITP) | ⚠️ | ⚠️ |
| **Videos play** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **Responsive 5 breakpoints** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **Keyboard navigation** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | N/A |
| **0 console errors** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **Screen reader announces** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| **Reduced motion respected** | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

**Légende:** ✅ Testé & Passé | ⚠️ À Tester | ❌ Échec | N/A Non Applicable

---

## Rapporter les Résultats

### Format de Rapport

Pour chaque navigateur testé, documenter:

```markdown
## [Browser Name] [Version] - [Date]

**Testeur:** [Nom]
**Device:** [Desktop/Mobile/Tablet]
**OS:** [macOS/Windows/iOS/Android] [Version]

### Résultats

| Test | Status | Notes |
|------|--------|-------|
| Page Load | ✅/❌ | [Temps de chargement, erreurs] |
| Calendly | ✅/❌ | [Modal opens/closes correctly] |
| WhatsApp | ✅/❌ | [Opens app/web correctly] |
| GA4 Events | ✅/❌ | [Events sent in Network tab] |
| Videos | ✅/❌ | [Playback works] |
| Responsive | ✅/❌ | [All breakpoints OK] |
| Keyboard Nav | ✅/❌ | [Tab order logical, focus visible] |
| Console | ✅/❌ | [0 errors, only Calendly cookies warning] |
| Accessibility | ✅/❌ | [Screen reader announces correctly] |

### Screenshots

[Joindre captures d'écran clés]

### Issues Trouvés

1. [Description du problème]
   - **Severité:** High/Medium/Low
   - **Reproduction:** [Étapes]
   - **Navigateur:** [Chrome/Firefox/Safari/Edge]
   - **Workaround:** [Solution temporaire si existe]

### Recommandations

[Actions recommandées basées sur les résultats]
```

---

## Temps Estimé pour Tests Manuels

| Navigateur | Temps Estimé | Priorité |
|------------|--------------|----------|
| **Chrome Desktop** | 30 minutes | Critical |
| **Chrome Android** | 15 minutes | Critical |
| **Safari Desktop** | 30 minutes | Critical |
| **Safari iOS** | 15 minutes | Critical |
| **Firefox Desktop** | 20 minutes | High |
| **Edge Desktop** | 10 minutes | High |
| **Screen Readers** | 20 minutes | High |
| **Total** | ~2h 20min | - |

---

## Notes Importantes

### Known Issues (Acceptable)

1. **Calendly Third-Party Cookies Warning:**
   - **Browser:** Chrome, Edge
   - **Impact:** Best Practices: 77/100
   - **Status:** Acceptable trade-off (conversion > score)
   - **No action required**

2. **Safari ITP (Intelligent Tracking Prevention):**
   - **Browser:** Safari Desktop + iOS
   - **Impact:** GA4 attribution delayed up to 7 days
   - **Status:** Not a bug—privacy feature
   - **No action required**

### What to Do If Tests Fail

1. **Check console for errors first**
2. **Verify browser version ≥ minimum (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)**
3. **Clear cache and cookies, reload**
4. **Test in incognito/private mode to rule out extensions**
5. **Document issue with screenshots and browser details**
6. **Consult browser-compatibility-report.md for known issues**

---

**Document Last Updated:** 2026-01-29
**Next Update:** After manual testing completion
