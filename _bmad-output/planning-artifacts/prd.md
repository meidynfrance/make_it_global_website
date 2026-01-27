---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain-skipped', 'step-06-innovation-skipped', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
status: complete
completedAt: 2026-01-26
inputDocuments:
  - product-brief-make_it_global_website-2026-01-26.md
workflowType: 'prd'
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 0
  projectDocs: 0
classification:
  projectType: web_app
  domain: general_b2b
  complexity: low
  projectContext: greenfield
---

# Product Requirements Document - make_it_global_website

**Author:** Meidy
**Date:** 2026-01-26

---

## Executive Summary

**Produit :** Site web one-page pour Make It Global
**Type :** Site de réassurance et conversion B2B
**Cible :** Infopreneurs (50K€+/mois) et CEO d'entreprises B2B (30-200 salariés)

**Proposition de valeur :** Service clé-en-main de traduction multimédia (vidéos avec lip-sync, PDF, textes) combinant IA et validation humaine pour permettre aux entreprises francophones de conquérir les marchés internationaux.

**Objectif du site :** Convertir les prospects contactés via LinkedIn/email en appels découverte.
- Cible : 5-10 appels/mois → 30% conversion → 1+ client signé/mois → 10-20K€/client

**Scope MVP :** Site one-page statique avec 6 sections :
1. Hero (proposition de valeur + CTA)
2. Problème/Solution
3. Exemples vidéos avant/après
4. Processus clé en main
5. Témoignages anonymisés
6. Contact (Calendly + WhatsApp + Formulaire)

**Stack technique :** Site statique (Astro/Next.js/HTML) + TailwindCSS + Vercel/Netlify

**Complexité :** Basse (site statique, pas de backend)

---

## Success Criteria

### User Success

**Pour l'Infopreneur (Sophie) :**
- Nouveau marché/pays lancé en moins de 3 mois
- Premières ventes internationales générées
- Formation complète traduite et disponible

**Pour le CEO B2B (Marc) :**
- Vidéos produits localisées en 5-10 langues
- Contenus disponibles pour 100% des marchés cibles
- Taux de conversion des commerciaux en hausse

**Indicateurs de succès utilisateur :**
- Le client génère des ventes dans un nouveau pays
- Les commerciaux disposent de contenus localisés

### Business Success

| Métrique | Cible | Fréquence |
|----------|-------|-----------|
| Appels découverte réservés | 5-10 / mois | Mensuel |
| Taux conversion appel → client | 30% | Mensuel |
| Nouveaux clients signés | ≥ 1 / mois | Mensuel |
| CA par nouveau client | 10-20K€ / mois | Par client |

**Projection 12 mois :**
- 12 nouveaux clients signés
- 120-240K€ de CA mensuel récurrent

### Technical Success

| Critère | Cible |
|---------|-------|
| Temps de chargement | < 3 secondes |
| Responsive | 100% mobile-friendly |
| Uptime | 99.9% |
| Intégrations | Calendly + WhatsApp fonctionnels |
| Analytics | Tracking des KPIs opérationnel |

### Measurable Outcomes

| KPI | Mesure | Cible |
|-----|--------|-------|
| Visiteurs uniques | Analytics | À définir |
| Taux de rebond | Analytics | < 50% |
| Conversion visiteur → appel | Calcul | > 5% |
| Temps sur page | Analytics | > 2 min |

---

## Product Scope

### MVP - Minimum Viable Product

**Site one-page avec 6 sections :**
1. Hero Section (proposition de valeur + CTA)
2. Section Problème/Solution
3. Section Exemples Vidéos (avant/après)
4. Section Processus (étapes clé en main)
5. Section Témoignages (anonymisés)
6. Section Contact/CTA (Calendly + WhatsApp + Formulaire)

**Fonctionnalités techniques MVP :**
- [ ] Intégration Calendly
- [ ] Bouton WhatsApp click-to-chat
- [ ] Formulaire contact (email + téléphone)
- [ ] Embed vidéos (YouTube/Vimeo)
- [ ] Analytics de base
- [ ] Design responsive mobile-first
- [ ] Palette colorée premium

### Growth Features (Post-MVP)

- Page tarifs avec calculateur
- Études de cas détaillées
- Optimisation conversion basée sur données
- A/B testing

### Vision (Future)

- Site multilingue (EN, ES)
- Blog SEO pour acquisition organique
- Témoignages vidéo clients
- Espace client avec suivi de projets
- Plateforme de devis automatisé

---

## User Journeys

### Contexte Global

Les visiteurs arrivent sur le site **après un premier contact humain** (LinkedIn, email, recommandation). Le site n'est pas un outil d'acquisition mais de **réassurance et conversion**.

**Point d'entrée :** Lien cliqué depuis un message LinkedIn, un email de prospection, ou le profil LinkedIn de Meidy.

---

### Journey 1 : Sophie - L'Infopreneuse qui découvre le site

**Persona :** Sophie, formatrice en ligne, 80K€/mois, 200+ vidéos de formation, équipe de 3 personnes.

**Contexte :** Sophie vient d'échanger avec Meidy sur LinkedIn. Intriguée par "lancez votre formation à l'international sans effort", elle clique sur le lien du site.

**Parcours narratif :**

| Étape | Action | Émotion | Ce qu'elle voit |
|-------|--------|---------|-----------------|
| 1. Arrivée | Clique sur le lien LinkedIn | Curieuse | Hero avec proposition de valeur claire |
| 2. Accroche | Lit le headline | Intéressée | "Traduisez vos vidéos, on s'occupe de tout" |
| 3. Identification | Scrolle vers Problème | Se reconnaît | Son problème décrit (pas le temps, trop cher) |
| 4. Découverte | Regarde les exemples vidéos | Impressionnée | Avant/après avec lip-sync bluffant |
| 5. Compréhension | Lit le processus | Rassurée | 3-4 étapes simples, vraiment clé en main |
| 6. Preuve sociale | Lit les témoignages | Convaincue | "CA triplé", "nouveau marché en 3 mois" |
| 7. Action | Clique sur CTA | Décidée | Calendly pour réserver un appel |
| 8. Conversion | Réserve un créneau | Enthousiaste | Confirmation de rendez-vous |

**Moment déclic :** Voir les exemples vidéos avant/après avec lip-sync.

**Résultat :** Appel découverte réservé, Sophie repart rassurée et impatiente.

---

### Journey 2 : Marc - Le CEO B2B qui valide le prestataire

**Persona :** Marc, CEO d'une PME industrielle de 80 salariés, présence internationale, vidéos produits uniquement en français.

**Contexte :** Marc a reçu un email de Meidy suite à une recommandation d'un partenaire. Il clique sur le lien pour évaluer le sérieux du prestataire.

**Parcours narratif :**

| Étape | Action | Émotion | Ce qu'elle voit |
|-------|--------|---------|-----------------|
| 1. Arrivée | Clique sur le lien email | Sceptique | Site professionnel et moderne |
| 2. Scan rapide | Parcourt la page | Attentif | Proposition claire, pas de blabla |
| 3. Validation technique | Regarde les exemples | Impressionné | Qualité pro des vidéos traduites |
| 4. ROI | Lit les témoignages | Intéressé | Résultats business concrets |
| 5. Process | Vérifie le processus | Rassuré | Pas de charge pour son équipe |
| 6. Contact | Choisit WhatsApp | Pragmatique | Contact direct et rapide |
| 7. Échange | Envoie un message | Engagé | Demande de call |

**Moment déclic :** Comprendre que son équipe n'aura rien à gérer.

**Résultat :** Contact pris via WhatsApp, discussion pour planifier un appel.

---

### Journey 3 : Visiteur mobile depuis LinkedIn

**Contexte :** Prospect sur mobile qui clique sur le lien depuis l'app LinkedIn.

**Parcours spécifique :**

| Étape | Besoin | Impératif UX |
|-------|--------|--------------|
| 1. Chargement | Rapide | < 3 secondes |
| 2. Hero | Lisible | Texte adapté mobile |
| 3. Vidéos | Jouables | Player responsive |
| 4. Scroll | Fluide | Sections bien espacées |
| 5. CTA | Accessible | Boutons tactiles larges |
| 6. Contact | Simple | WhatsApp en un tap |

---

### Journey Requirements Summary

**Capabilities révélées par les parcours :**

| Section | Capacité requise | Priorité |
|---------|------------------|----------|
| Hero | Headline accrocheur + CTA visible | Critique |
| Problème | Texte d'identification claire | Haute |
| Vidéos | Player embed fonctionnel | Critique |
| Processus | Visualisation étapes | Haute |
| Témoignages | Citations + chiffres | Haute |
| Contact | Calendly + WhatsApp + Form | Critique |
| Global | Responsive mobile-first | Critique |
| Global | Chargement < 3s | Haute |

---

## Web App Specific Requirements

### Project-Type Overview

Site web one-page statique destiné à la réassurance et conversion de prospects B2B. Architecture simple sans backend complexe, focalisé sur la performance et l'expérience mobile.

### Technical Architecture Considerations

| Aspect | Décision | Justification |
|--------|----------|---------------|
| **Architecture** | Site statique (SSG) | Performance optimale, pas de backend |
| **Framework** | HTML/CSS/JS ou Next.js/Astro | Flexibilité, performance |
| **Hébergement** | Vercel / Netlify / GitHub Pages | CDN global, déploiement simple |
| **CMS** | Non requis | Contenu géré directement |

### Browser Support

| Navigateur | Version minimum | Support |
|------------|-----------------|---------|
| Chrome | 90+ | ✅ Complet |
| Firefox | 88+ | ✅ Complet |
| Safari | 14+ | ✅ Complet |
| Edge | 90+ | ✅ Complet |
| IE11 | - | ❌ Non supporté |

### Performance Targets

| Métrique | Cible | Outil de mesure |
|----------|-------|-----------------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Time to Interactive | < 3s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Score Lighthouse | > 90 | Lighthouse |

### Responsive Design

| Breakpoint | Largeur | Cible |
|------------|---------|-------|
| Mobile S | 320px | Petits smartphones |
| Mobile L | 425px | Smartphones standards |
| Tablet | 768px | Tablettes |
| Desktop | 1024px+ | Ordinateurs |

**Approche :** Mobile-first (design mobile en premier, enrichi pour desktop)

### Accessibility Level

| Niveau | Standard | Status |
|--------|----------|--------|
| WCAG A | Basique | ✅ Requis |
| WCAG AA | Recommandé | ✅ Requis |
| WCAG AAA | Avancé | ⚪ Optionnel |

**Exigences clés :**
- Contraste texte/fond suffisant
- Navigation clavier fonctionnelle
- Attributs alt sur les images
- Labels sur les formulaires
- Focus visible sur les éléments interactifs

### SEO Strategy

| Aspect | Priorité | Justification |
|--------|----------|---------------|
| Meta tags basiques | Moyenne | Open Graph pour partage LinkedIn |
| Sitemap | Basse | Une seule page |
| Schema.org | Basse | Non prioritaire |
| Blog/Content | Hors scope | Pas d'acquisition SEO |

### Implementation Considerations

**Stack technique recommandé :**
- **Option 1 :** HTML/CSS/JS vanilla + TailwindCSS
- **Option 2 :** Next.js (Static Export) + TailwindCSS
- **Option 3 :** Astro + TailwindCSS

**Intégrations tierces :**
- Calendly (embed ou popup)
- WhatsApp Business API (click-to-chat)
- Google Analytics 4
- Hébergement vidéos (YouTube/Vimeo embed)

---

## Functional Requirements

### Présentation & Proposition de Valeur

- **FR1:** Visiteur peut voir la proposition de valeur principale dès l'arrivée sur le site
- **FR2:** Visiteur peut comprendre le service offert en moins de 10 secondes
- **FR3:** Visiteur peut accéder au CTA principal (réserver un appel) depuis le hero

### Identification du Problème

- **FR4:** Visiteur peut lire une description du problème que Make It Global résout
- **FR5:** Visiteur peut voir comment la solution répond à ce problème
- **FR6:** Visiteur peut comprendre l'approche hybride IA + Humain

### Démonstration Vidéo

- **FR7:** Visiteur peut regarder des vidéos exemples avant/après traduction
- **FR8:** Visiteur peut voir la qualité du lip-sync et du doublage
- **FR9:** Visiteur peut lancer/arrêter les vidéos de démonstration

### Processus de Travail

- **FR10:** Visiteur peut visualiser les étapes du processus de travail
- **FR11:** Visiteur peut comprendre l'aspect "clé en main" du service

### Preuve Sociale

- **FR12:** Visiteur peut lire des témoignages clients anonymisés
- **FR13:** Visiteur peut voir des résultats chiffrés (ex: "CA triplé")

### Contact & Conversion

- **FR14:** Visiteur peut réserver un appel découverte via Calendly
- **FR15:** Visiteur peut contacter Make It Global via WhatsApp en un clic
- **FR16:** Visiteur peut envoyer un message via formulaire de contact
- **FR17:** Visiteur peut saisir son email et numéro de téléphone dans le formulaire

### Navigation & Accessibilité

- **FR18:** Visiteur peut naviguer sur le site depuis un mobile
- **FR19:** Visiteur peut scroller entre les différentes sections
- **FR20:** Visiteur peut utiliser le site avec un lecteur d'écran (accessibilité)

### Analytics & Tracking

- **FR21:** Système peut tracker les visites sur le site
- **FR22:** Système peut mesurer les clics sur les CTA (Calendly, WhatsApp)
- **FR23:** Système peut identifier la source du trafic (UTM)

---

## Non-Functional Requirements

### Performance

| NFR | Critère | Cible |
|-----|---------|-------|
| **NFR1** | Temps de chargement initial | < 3 secondes |
| **NFR2** | First Contentful Paint | < 1.5 secondes |
| **NFR3** | Largest Contentful Paint | < 2.5 secondes |
| **NFR4** | Score Lighthouse Performance | > 90/100 |
| **NFR5** | Démarrage vidéos après clic | < 2 secondes |

### Accessibilité

| NFR | Critère | Standard |
|-----|---------|----------|
| **NFR6** | Conformité WCAG | Niveau AA |
| **NFR7** | Contraste texte/fond | Ratio ≥ 4.5:1 |
| **NFR8** | Navigation clavier | 100% fonctionnelle |
| **NFR9** | Textes alternatifs | Sur toutes les images |

### Intégration

| NFR | Critère | Exigence |
|-----|---------|----------|
| **NFR10** | Calendly | Widget fonctionnel sur mobile et desktop |
| **NFR11** | WhatsApp | Lien click-to-chat opérationnel |
| **NFR12** | Analytics | Tracking des événements de conversion |
| **NFR13** | Vidéos embed | Lecture sans erreur (YouTube/Vimeo) |

### Fiabilité

| NFR | Critère | Cible |
|-----|---------|-------|
| **NFR14** | Disponibilité | 99.9% uptime |
| **NFR15** | Compatibilité navigateurs | Chrome, Firefox, Safari, Edge (versions modernes)
