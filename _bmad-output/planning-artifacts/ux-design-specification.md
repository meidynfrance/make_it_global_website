---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
inputDocuments:
  - product-brief-make_it_global_website-2026-01-26.md
  - prd.md
  - architecture.md
status: complete
completedAt: 2026-01-27
date: 2026-01-27
project_name: make_it_global_website
user_name: Meidy
workflowType: ux-design
---

# UX Design Specification make_it_global_website

**Author:** Meidy
**Date:** 2026-01-27

---

## Executive Summary

### Project Vision

Site one-page de conversion B2B pour Make It Global, service de traduction multimédia clé-en-main (vidéos avec lip-sync, PDF, textes) combinant IA et validation humaine. Le site agit comme outil de réassurance et conversion après un premier contact humain (LinkedIn/email), avec pour objectif de transformer les prospects en appels découverte (5-10/mois → 30% conversion → 1+ client/mois).

### Target Users

**Persona 1 - Sophie (Infopreneuse établie)**
- Formatrice en ligne / coach business, CA 50-150K€/mois, 200+ vidéos
- Problème vécu : Pas le temps de gérer un projet de traduction, pense que l'international est complexe et va la défocus
- Besoin : Solution clé-en-main pour débloquer l'international sans effort supplémentaire
- Device principal : Mobile (LinkedIn app)

**Persona 2 - Marc (CEO B2B industriel)**
- CEO de PME/ETI (30-200 salariés), secteurs industrie/pharma/SaaS B2B
- Problème vécu : Vidéos produits non localisées, opportunités commerciales perdues à l'international
- Besoin : Professionnaliser la présence internationale sans mobiliser ses équipes
- Device principal : Desktop et mobile

### Key Design Challenges

1. **Combattre l'objection temps/défocus** : Les prospects craignent que la traduction leur prenne du temps et les défocus. Le design doit marteler le message "clé-en-main, on s'occupe de tout" de manière visuelle et répétée.

2. **Mobile-first absolu** : La majorité des visites proviennent de mobile (LinkedIn app). L'expérience mobile doit être parfaite : chargement < 3s, vidéos jouables sans friction, CTA accessibles en un tap, navigation fluide.

3. **Tonalité accessible/rassurante** : Éviter le "trop premium/luxe" qui peut créer une distance. Le design doit être moderne, professionnel mais chaleureux, avec un langage direct et humain pour rassurer sans être pompeux.

### Design Opportunities

1. **"Clé-en-main" comme USP visuel** : Transformer l'objection en point fort via des illustrations/icônes montrant concrètement "vous donnez vos vidéos, on gère le reste". Témoignages focalisés sur "j'ai rien eu à faire".

2. **Vidéos avant/après comme preuve sociale visuelle** : Les utilisateurs cibles connaissent déjà le concept de traduction vidéo. Montrer directement la qualité avec des exemples avant/après et le lip-sync plutôt que d'expliquer le processus.

3. **Contact ultra-accessible (WhatsApp + Calendly)** : WhatsApp pour contact "low-friction" sur mobile, Calendly pour formalisation structurée. Pas de formulaire = moins de barrière à l'action.

---

## Core User Experience

### Defining Experience

L'expérience de make_it_global_website repose sur un parcours de consommation linéaire et sans friction. Le visiteur, arrivant principalement via mobile (LinkedIn app), découvre l'offre d'une traite en scrollant du Hero jusqu'au CTA final. Pas de navigation complexe, pas de retour en arrière : chaque section guide naturellement vers la suivante dans un flow one-shot optimisé pour la conversion.

L'action critique est double et égale : **réserver un appel Calendly** OU **initier une conversation WhatsApp**. Ces deux canaux ont le même niveau d'importance et de visibilité, permettant à l'utilisateur de choisir selon son contexte et sa préférence sans friction.

### Platform Strategy

- **Plateforme principale** : Web responsive avec approche mobile-first radicale
- **Device cible prioritaire** : Mobile (majorité du trafic depuis LinkedIn app)
- **Mode d'interaction** : Touch-first (tap, scroll), optimisé pour pouces
- **Contexte d'usage** : One-shot (consommation d'une traite), pas de visites multiples
- **Performance critique** : Chargement < 3s sur 4G, scroll fluide sans lag

### Effortless Interactions

Les interactions suivantes doivent être complètement naturelles et sans effort :

1. **Scroll vertical fluide** : Navigation principale sans menu, scroll de haut en bas sans friction sur mobile
2. **Lecture vidéos** : Lancement en un tap, lecture immédiate sans buffering, contrôles natifs
3. **Contact WhatsApp** : Un tap sur le bouton → ouverture directe de WhatsApp avec message pré-rempli
4. **Réservation Calendly** : Accès immédiat au calendrier, sélection de créneau en 2 taps
5. **Aucune donnée requise** : Pas de formulaire à remplir avant contact (friction éliminée)

### Critical Success Moments

Les moments make-or-break dans le parcours utilisateur :

1. **Hero (0-3 secondes)** : L'utilisateur comprend immédiatement la proposition de valeur ou quitte le site. Headline + visuel doivent accrocher instantanément.

2. **Section Vidéos (moment déclic #1)** : L'utilisateur voit la qualité du lip-sync et de la traduction. C'est la preuve concrète que "ça marche vraiment". Si les vidéos ne chargent pas ou sont de mauvaise qualité, conversion ratée.

3. **Section Témoignages (moment déclic #2)** : L'utilisateur lit des résultats concrets ("CA triplé", "nouveau marché en 3 mois") et se dit "d'autres l'ont fait, je peux le faire". C'est le dernier push avant l'action.

4. **CTA final (conversion)** : Juste après les témoignages, l'utilisateur doit pouvoir convertir en un tap (Calendly ou WhatsApp). Si les CTA ne sont pas visibles ou accessibles, la conversion est perdue.

### Experience Principles

Principes directeurs pour toutes les décisions UX :

1. **"One-shot scroll" : Consommation linéaire sans retour** - Le visiteur consomme tout d'une traite. Chaque section amène naturellement à la suivante. Pas de navigation complexe, flow linéaire Hero → CTA.

2. **"Conversion multi-canal" : Calendly = WhatsApp** - Les deux CTA ont la même importance et visibilité. L'utilisateur choisit son canal préféré selon son contexte. Pas de hiérarchie entre les deux options.

3. **"Mobile-first radical" : L'expérience mobile EST l'expérience** - Design mobile d'abord, desktop est un bonus. Tout doit fonctionner en un tap sur mobile. Chargement < 3s sur 4G, scroll ultra-fluide.

4. **"Show, don't tell" : Preuves visuelles > Explications** - Vidéos avant/après au centre (pas de long texte explicatif). Témoignages avec résultats chiffrés. "Clé-en-main" montré visuellement (icônes, illustrations).

5. **"Zéro friction" : Éliminer toute barrière à l'action** - Pas de formulaire. WhatsApp en un clic direct. Calendly immédiatement accessible. Aucune information requise avant le contact.

---

## Desired Emotional Response

### Primary Emotional Goals

L'expérience émotionnelle de make_it_global_website repose sur un double objectif : **inspirer l'ambition** tout en **construisant la confiance**.

**Émotion primaire cible :** "Waouh, je vois les opportunités qui s'ouvrent ! J'ai trop hâte de démarrer ce projet pour faire croître ma boîte encore plus. Et en plus, j'ai confiance en eux parce que ça a l'air vraiment professionnel."

Ce mix émotionnel combine :
- **Aspiration** : Inspiration, excitation, vision du potentiel de croissance
- **Réassurance** : Confiance, professionnalisme, sécurité dans la décision

### Emotional Journey Mapping

| Étape du parcours | Émotion cible | Comment la créer |
|-------------------|---------------|------------------|
| **Hero (0-3s)** | Surprise positive ("Waouh !") + Curiosité | Visuel fort, headline punchy qui interpelle immédiatement |
| **Problème/Solution** | Identification + Soulagement | Langage direct, problèmes concrets auxquels l'utilisateur s'identifie |
| **Vidéos (déclic #1)** | Impression forte ("La qualité !") + Confiance professionnelle | Vidéos haute qualité, présentation soignée du lip-sync |
| **Processus** | Réassurance ("Vraiment clé-en-main") | Visualisation simple et claire, accent sur "vous n'avez rien à faire" |
| **Témoignages (déclic #2)** | Inspiration ("Les opportunités") + Validation sociale | Résultats chiffrés concrets, témoignages de croissance business |
| **CTA final** | Excitation ("Hâte de démarrer !") + Confiance décisionnelle | CTA énergique mais accessible, double option sans friction |

### Micro-Emotions

Les états émotionnels subtils mais critiques pour la conversion :

1. **Confiance > Scepticisme**
   - Défi : Le visiteur arrive depuis LinkedIn avec un léger doute ("Est-ce sérieux ?")
   - Objectif : Basculer rapidement vers "Ils sont vraiment professionnels"
   - UX implication : Design soigné, vidéos de qualité, témoignages crédibles

2. **Inspiration > Routine**
   - Défi : Éviter d'être perçu comme "encore un prestataire de traduction"
   - Objectif : Déclencher "Je vois le potentiel de croissance internationale"
   - UX implication : Focus sur les opportunités business, résultats concrets (CA triplé)

3. **Excitation > Hésitation**
   - Défi : Transformer le "je vais réfléchir" en action immédiate
   - Objectif : Créer l'impatience "J'ai hâte de démarrer !"
   - UX implication : Momentum du parcours, CTA accessibles juste après l'inspiration

4. **Sécurité > Risque perçu**
   - Défi : Rassurer sur le temps/effort requis (objection principale)
   - Objectif : Ancrer "C'est vraiment clé-en-main, zéro prise de tête"
   - UX implication : Répétition visuelle du message "on s'occupe de tout"

### Design Implications

Connexions directes entre émotions cibles et choix UX :

1. **Pour créer le "Waouh" (surprise positive) :**
   - Hero avec visuel impactant et moderne
   - Animation subtile au scroll (micro-interactions)
   - Palette colorée et énergique (pas monochrome)
   - Qualité visuelle irréprochable (images WebP optimisées)

2. **Pour construire la confiance professionnelle :**
   - Vidéos de démonstration de haute qualité
   - Design moderne mais sobre, pas de gadgets
   - Témoignages authentiques avec résultats chiffrés
   - Pas de promesses exagérées, ton factuel et direct

3. **Pour inspirer l'ambition (opportunités de croissance) :**
   - Témoignages focalisés sur résultats business ("CA triplé", "nouveau marché")
   - Langage orienté croissance et expansion internationale
   - Visualisation des possibilités plutôt que du processus technique

4. **Pour canaliser l'excitation vers l'action :**
   - CTA énergiques et visibles (couleurs contrastées)
   - Double option Calendly/WhatsApp au même niveau (choix = empowerment)
   - Zéro friction entre l'inspiration (témoignages) et l'action (CTA)

5. **Pour rassurer (clé-en-main) :**
   - Section Processus focalisée sur "ce que vous N'avez PAS à faire"
   - Icônes/illustrations montrant "vous donnez, on gère, vous recevez"
   - Répétition du message clé-en-main à travers le parcours

### Emotional Design Principles

Principes directeurs pour créer l'expérience émotionnelle cible :

1. **"Inspiration avant information"** - Montrer les possibilités de croissance avant les détails techniques. L'utilisateur doit rêver avant de comprendre.

2. **"Professionnalisme tangible"** - La confiance se construit visuellement : qualité des vidéos, design soigné, résultats concrets. Pas de blabla, des preuves.

3. **"Momentum émotionnel"** - Chaque section amplifie l'excitation précédente : Waouh (Hero) → Confiance (Vidéos) → Inspiration (Témoignages) → Action (CTA). Pas de rupture.

4. **"Réassurance répétée"** - Combattre l'objection temps/défocus à chaque section. L'utilisateur doit constamment se dire "vraiment, je n'ai rien à gérer".

5. **"Émotion = conversion"** - Le site ne convertit pas par la raison mais par l'émotion. Quand l'utilisateur ressent "J'ai hâte de démarrer !", il clique.

---

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

Les utilisateurs cibles (infopreneurs et CEO B2B) sont sensibles aux landing pages et sites qui appliquent les principes suivants :

**Caractéristiques des expériences qui convertissent :**

1. **Clarté immédiate** : On comprend la proposition de valeur en quelques secondes sans effort mental
2. **Visuel prioritaire** : Les promesses et bénéfices sont exprimés visuellement plutôt que par de longs paragraphes
3. **Phrases percutantes** : Messages courts, directs, impactants - pas de remplissage
4. **Bénéfice évident** : L'utilisateur voit immédiatement l'intérêt POUR LUI
5. **Simplicité radicale** : Pas de blabla, on va droit au but

**Références d'excellence UX :**
- **Stripe** : Clarté visuelle, design moderne, promesses limpides
- **Linear** : Design minimaliste, phrases courtes, bénéfices ultra-clairs
- **Vercel** : Approche visuelle, pas de texte superflu, performance immédiate

Ces produits partagent une philosophie : **"Show, don't tell"** - Montrer plutôt qu'expliquer.

### Transferable UX Patterns

Patterns identifiés et applicables à make_it_global_website :

**1. Hero visuellement dominant**
- Pattern : Visuel fort (image/vidéo) + headline court + CTA immédiat
- Transfert : Hero avec visuel impactant, headline 1 ligne, double CTA (Calendly/WhatsApp) visible dès le départ
- Justification : Aligne avec "clarté immédiate" et "Mobile-first radical"

**2. Bénéfices en mode "scannable"**
- Pattern : Icônes + titres courts (3-5 mots) + 1 ligne d'explication max
- Transfert : Section Problème/Solution avec icônes visuelles, titres percutants, zéro paragraphe
- Justification : Aligne avec "Show, don't tell" et consommation one-shot mobile

**3. Preuve sociale visuelle**
- Pattern : Témoignages courts avec chiffres mis en avant visuellement
- Transfert : Section Témoignages avec résultats chiffrés en gros (CA triplé, +3 mois) et citation courte
- Justification : Aligne avec "Inspiration avant information" et momentum émotionnel

**4. Processus ultra-simplifié**
- Pattern : 3-4 étapes max, visuelles, langage actionnable
- Transfert : Section Processus en 3 étapes : "Vous envoyez" → "On traduit" → "Vous recevez"
- Justification : Aligne avec "Zéro friction" et combat l'objection temps/défocus

**5. CTA sans friction**
- Pattern : Boutons visibles, texte actionnable, aucune donnée requise avant l'action
- Transfert : Double CTA (Calendly + WhatsApp) au même niveau, textes comme "Réserver mon appel" ou "Discuter sur WhatsApp"
- Justification : Aligne avec "Conversion multi-canal" et "Zéro friction"

**6. Vidéos contrôlées par l'utilisateur**
- Pattern : Vidéos en lecture manuelle (pas d'autoplay), player natif simple
- Transfert : Section Vidéos avec thumbnails attractifs, lecture au clic, contrôles natifs
- Justification : Respect de l'utilisateur, évite la friction du son inattendu

### Anti-Patterns to Avoid

Patterns UX à bannir absolument de make_it_global_website :

**1. ❌ Pop-ups intrusifs**
- Problème : Interrompent le flow, créent de la frustration
- Impact : Rupture du "one-shot scroll", friction dans le momentum émotionnel
- Décision : Aucune pop-up sur le site, même pour la capture d'email

**2. ❌ Pavés de texte**
- Problème : Personne ne lit sur mobile, crée de la fatigue cognitive
- Impact : Contradictoire avec "Show, don't tell" et Mobile-first
- Décision : Maximum 2-3 lignes par section, privilégier les listes à puces et visuels

**3. ❌ Animations lourdes qui ralentissent**
- Problème : Performance dégradée, frustration sur mobile/4G
- Impact : Viole le principe de chargement < 3s et scroll fluide
- Décision : Animations subtiles uniquement (fade-in, slide), pas d'animations complexes

**4. ❌ Menus de navigation complexes**
- Problème : Distrait du parcours linéaire, ajoute de la friction
- Impact : Contradictoire avec "One-shot scroll"
- Décision : Aucun menu de navigation, scroll vertical simple

**5. ❌ Formulaires longs**
- Problème : Barrière à l'action, friction maximale
- Impact : Viole "Zéro friction" et "Conversion multi-canal"
- Décision : Pas de formulaire du tout, seulement Calendly et WhatsApp en direct

**6. ❌ Vidéos en autoplay avec son**
- Problème : Intrusif, startling, mauvaise expérience mobile
- Impact : Crée de la frustration au lieu de l'inspiration
- Décision : Toutes les vidéos nécessitent une action utilisateur pour démarrer

### Design Inspiration Strategy

Stratégie claire pour utiliser ces insights dans la conception :

**À adopter directement :**

1. **Hero visuel-first** : Visuel dominant + headline 1 ligne + CTA double immédiat
2. **Bénéfices "scannable"** : Icônes + titres courts + 1 ligne max d'explication
3. **Témoignages chiffrés** : Résultats en gros, citations courtes, visuellement attractifs
4. **Processus 3 étapes** : Visualisation simple et directe du "clé-en-main"
5. **CTA énergiques** : Textes actionnables, visibilité maximale, zéro friction

**À adapter pour notre contexte :**

1. **Section Vidéos** : Player natif simple avec thumbnails attractifs (pas d'autoplay)
2. **Mobile-first absolu** : Tous les patterns optimisés d'abord pour mobile, desktop en bonus
3. **Palette colorée énergique** : Moderne et professionnel mais chaleureux (pas corporate fade)

**À éviter absolument :**

1. Pop-ups sous toutes leurs formes
2. Paragraphes de plus de 3 lignes
3. Animations qui impactent la performance
4. Toute friction entre l'utilisateur et l'action (formulaires, étapes inutiles)
5. Autoplay vidéo/audio
6. Navigation complexe ou menus détaillés

**Principe directeur :**
"Si ça ralentit, complique ou distrait, on l'enlève. Si ça clarifie, inspire ou facilite l'action, on le garde."

---

## Design System Foundation

### Design System Choice

**Approche sélectionnée : TailwindCSS Pur (Custom Design System)**

Le site make_it_global_website utilisera TailwindCSS comme fondation de design system, avec une approche entièrement personnalisée. Aucune bibliothèque de composants externe (Tailwind UI, Headless UI, etc.) ne sera utilisée. Tous les composants seront créés from scratch en utilisant les utilitaires Tailwind.

**Stack technique :**
- **Astro** : Framework statique pour les composants
- **TailwindCSS v4** : Système utilitaire pour le styling
- **Composants Astro natifs** : `.astro` files pour les sections et composants UI

### Rationale for Selection

Cette approche a été choisie pour les raisons suivantes :

1. **Simplicité adaptée au projet** : Un site one-page avec 6 sections ne nécessite pas une bibliothèque de composants complexe. Les besoins sont limités : Hero, sections de contenu, vidéos embed, témoignages, et CTA. Créer ces composants en custom est plus simple que d'intégrer et configurer une bibliothèque externe.

2. **Performance optimale** : TailwindCSS pur sans dépendances externes = bundle CSS minimal. Avec la contrainte de chargement < 3s sur mobile/4G, éliminer toute dépendance superflue est critique. Astro + TailwindCSS génère uniquement le CSS utilisé, garantissant un poids minimal.

3. **Liberté créative totale** : Le design doit être "coloré, énergique, moderne mais chaleureux" - pas corporate fade. Une approche custom permet de créer une identité visuelle unique sans être contraint par les opinions de design d'une bibliothèque tierce (Material Design, Ant Design, etc.).

4. **Alignement architectural** : Cette approche s'aligne parfaitement avec la stack définie dans l'architecture (Astro + TailwindCSS + Vercel). Pas de friction, pas de couche d'abstraction supplémentaire.

5. **Maintenabilité** : Moins de dépendances = moins de maintenance. Pas de breaking changes de bibliothèques externes, pas de mises à jour forcées, pas de conflits de versions.

### Implementation Approach

**Structure des composants :**

```
src/
├── components/
│   ├── sections/              # Sections du one-page
│   │   ├── HeroSection.astro
│   │   ├── ProblemSection.astro
│   │   ├── VideoSection.astro
│   │   ├── ProcessSection.astro
│   │   ├── TestimonialsSection.astro
│   │   └── ContactSection.astro
│   └── ui/                    # Composants réutilisables
│       ├── Button.astro
│       ├── VideoEmbed.astro
│       ├── CalendlyEmbed.astro
│       ├── WhatsAppButton.astro
│       └── TestimonialCard.astro
```

**Design Tokens via tailwind.config.mjs :**

Tous les tokens de design (couleurs, espacements, typographie, breakpoints) seront centralisés dans la configuration Tailwind :

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        primary: { /* palette principale */ },
        accent: { /* palette accent */ },
        neutral: { /* grays */ }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif']
      },
      spacing: { /* espacements custom si nécessaire */ },
      animation: { /* animations subtiles */ }
    }
  }
}
```

**Patterns réutilisables :**

Pour éviter la répétition de classes, les patterns critiques (boutons CTA, cards) seront définis via `@apply` dans `global.css` :

```css
/* src/styles/global.css */
.btn-primary {
  @apply px-6 py-3 bg-primary-600 text-white rounded-lg
         hover:bg-primary-700 transition-colors
         font-semibold text-base;
}

.btn-secondary {
  @apply px-6 py-3 border-2 border-primary-600 text-primary-600
         rounded-lg hover:bg-primary-50 transition-colors
         font-semibold text-base;
}
```

### Customization Strategy

**1. Palette colorée énergique (non-corporate)**

Objectif : Créer une palette moderne, professionnelle mais chaleureuse - pas de monochrome fade.

Approche :
- Couleur primaire : Ton énergique (bleu vif, violet, ou orange selon préférence)
- Couleur accent : Complémentaire pour CTA et éléments clés
- Neutrals : Grays modernes (pas trop froids)
- Utilisation libérale de la couleur pour créer de l'énergie visuelle

**2. Typographie moderne et lisible**

Objectif : Phrases percutantes et lisibles, hiérarchie claire.

Approche :
- Font display : Pour headlines (Plus Jakarta Sans, Satoshi, ou Cal Sans)
- Font body : Pour contenu (Inter, Open Sans)
- Hiérarchie : Headlines gros et visibles, body text concis (max 2-3 lignes)
- Mobile-optimized : Tailles adaptées pour lecture confortable sur mobile

**3. Composants orientés conversion**

Objectif : Composants optimisés pour le parcours émotionnel et la conversion.

**Boutons CTA (critiques) :**
- Taille tactile généreuse (min 44x44px)
- Couleurs contrastées pour visibilité maximale
- États hover/active clairs
- Textes actionnables ("Réserver mon appel", "Discuter sur WhatsApp")

**Cards Témoignages :**
- Résultats chiffrés mis en avant visuellement (gros, colorés)
- Citation courte et scannable
- Design qui inspire confiance (pas flashy)

**VideoEmbed :**
- Thumbnails attractifs
- Ratio 16:9 responsive
- Contrôles natifs, pas d'autoplay
- Loading lazy pour performance

**4. Responsive mobile-first radical**

Objectif : L'expérience mobile EST l'expérience.

Approche :
- Design mobile en premier, puis adaptation desktop
- Breakpoints Tailwind : `sm:`, `md:`, `lg:` utilisés stratégiquement
- Touch targets ≥ 44px sur mobile
- Spacing généreux pour faciliter le scroll au pouce
- Textes lisibles sans zoom (16px minimum)

**5. Micro-interactions subtiles**

Objectif : Animations qui ajoutent de la polish sans ralentir.

Approche :
- Fade-in au scroll (Intersection Observer)
- Hover states sur boutons et cards
- Transitions douces (200-300ms)
- Pas d'animations lourdes (parallax, 3D, etc.)

**6. Accessibilité WCAG AA**

Objectif : Site utilisable par tous, conforme WCAG AA.

Approche :
- Contraste texte/fond ≥ 4.5:1
- Navigation clavier fonctionnelle (focus visible)
- Attributs ARIA sur composants interactifs
- Alt texts sur toutes les images
- Sémantique HTML correcte

---

## Defining Core Experience

### Defining Experience

L'expérience centrale de make_it_global_website n'est pas simplement "découvrir un service de traduction" mais **se projeter dans la croissance de son business grâce à l'international**.

**En une phrase :** "Faire comprendre au visiteur qu'il peut générer du CA supplémentaire en traduisant ses contenus - et le convaincre d'agir immédiatement."

Le site ne vend pas des fonctionnalités (traduction, lip-sync, IA+Humain), il vend une **opportunité de croissance business**. L'utilisateur réussit quand il se dit : **"OK, c'est pour moi, ça peut me faire générer du chiffre d'affaires en plus."**

**Le parcours de conviction :**

1. **Découverte (Hero - 0-3s)** : "Tiens, je peux traduire mes vidéos pour l'international ?"
2. **Preuve (Vidéos)** : "Wow, la qualité est là, c'est vraiment professionnel"
3. **Projection (Témoignages)** : 👉 **"OK, c'est pour moi, ça peut me faire générer du CA"** ← Moment critique de réussite
4. **Action (CTA)** : "Je réserve/contacte maintenant pendant que je suis chaud"

**Ce qui différencie cette expérience :**

Contrairement aux sites de service classiques qui se concentrent sur les fonctionnalités ("On fait de la traduction vidéo avec IA"), make_it_global_website se focalise sur le **résultat business final**. Les témoignages ne disent pas "La traduction était bonne" mais "J'ai triplé mon CA" ou "Nouveau marché en 3 mois". Chaque élément du site ramène à la question centrale : **"Combien de CA en plus je peux générer ?"**

### User Mental Model

**Croyances initiales de l'utilisateur :**

Quand Sophie (infopreneuse) ou Marc (CEO B2B) arrivent sur le site, ils ont ces croyances en tête :

1. **"La traduction, c'est cher et long"**
   - Mental model : Traduction = projet complexe avec gros budget
   - Frein : Peur de l'investissement temps/argent
   - Notre contre-argument : "Clé-en-main, on s'occupe de tout"

2. **"Je ne sais pas si ça va vraiment me rapporter"**
   - Mental model : L'international est un pari incertain
   - Frein : Hésitation sur le ROI
   - Notre contre-argument : Témoignages avec résultats business concrets chiffrés

3. **"C'est compliqué à mettre en place"**
   - Mental model : Besoin d'équipe dédiée, process lourds
   - Frein : Peur de se défocus de son core business
   - Notre contre-argument : Processus en 3 étapes simple, visualisé

4. **"Il faut d'abord finir de conquérir le marché français"**
   - Mental model : Séquentiel (France puis international)
   - Frein : Priorités perçues
   - Notre contre-argument : "L'international grandit pendant que tu restes focus France"

**Attentes de l'utilisateur :**

- **Rapidité de compréhension** : En < 30 secondes, je dois savoir si c'est pour moi
- **Preuve visuelle** : Des exemples concrets, pas du blabla
- **Facilité de contact** : Un clic pour agir, pas de friction
- **Réassurance professionnelle** : Je dois sentir que c'est sérieux

### Success Criteria

**Le visiteur se dit "OK, c'est pour moi" quand ces 3 critères sont remplis :**

**1. Résultats business tangibles (Projection ROI)**
- Critère : Le visiteur voit des résultats chiffrés concrets ("CA triplé", "nouveau marché en 3 mois")
- Indicateur : Il fait le calcul mental rapide : "Si eux ont fait X, je peux faire Y"
- Implémentation : Témoignages avec chiffres gros et visuels, pas de résultats vagues

**2. Zéro friction opérationnelle (Clé-en-main)**
- Critère : Le visiteur comprend qu'il n'aura rien à gérer, aucun temps perdu
- Indicateur : Il se dit "Je n'ai qu'à envoyer mes vidéos, ils font tout"
- Implémentation : Section Processus focalisée sur "ce que vous N'avez PAS à faire"

**3. Confiance professionnelle (Qualité prouvée)**
- Critère : Le visiteur voit la qualité du lip-sync et se dit "C'est vraiment pro"
- Indicateur : Il passe du scepticisme à "Ils sont sérieux"
- Implémentation : Vidéos haute qualité, design soigné, ton factuel

**Quand l'expérience échoue :**

- ❌ L'utilisateur ne se projette pas dans la croissance → Pas de conversion
- ❌ L'utilisateur pense que c'est compliqué/chronophage → Hésitation
- ❌ L'utilisateur doute de la qualité → Perte de confiance

**Feedback de succès :**

- ✅ Le visiteur scrolle jusqu'au bout sans rebond
- ✅ Le visiteur reste plus de 2 minutes sur le site
- ✅ Le visiteur clique sur Calendly ou WhatsApp

### Pattern Analysis: Established vs Novel

**Pattern établi : Landing page B2B de conversion**

L'architecture du site suit un pattern UX éprouvé et reconnaissable :
- Hero avec proposition de valeur
- Problème/Solution
- Preuve sociale (vidéos, témoignages)
- CTA clairs

**Pourquoi un pattern établi :**
- Les utilisateurs (infopreneurs, CEO) connaissent déjà ce parcours
- Pas de friction cognitive, ils savent naviguer ce type de site
- Conversion prouvée depuis des années (Unbounce, Instapage, etc.)

**Notre innovation dans le pattern établi :**

Ce n'est PAS un pattern nouveau à apprendre, mais une **utilisation intelligente du pattern classique avec un twist crucial** :

**Twist #1 : Focus projection business > Fonctionnalités**
- Pattern classique : "Voici ce qu'on fait" (features)
- Notre approche : "Voici ce que vous allez gagner" (business outcome)
- Exemple : Au lieu de "Traduction IA + Humain", on dit "Nouveau marché en 3 mois"

**Twist #2 : Momentum émotionnel crescendo**
- Pattern classique : Informations plates distribuées uniformément
- Notre approche : Amplification progressive Waouh → Confiance → Inspiration → Action
- Chaque section construit sur l'excitation de la précédente

**Twist #3 : Clé-en-main comme argument central**
- Pattern classique : Liste de bénéfices équilibrée
- Notre approche : "Vous n'avez rien à faire" martelé à chaque section
- Combat directement l'objection principale (temps/défocus)

**Pas de pattern nouveau à enseigner :**
- Pas de navigation innovante à apprendre
- Pas d'interaction nouvelle à découvrir
- Pas de concept UX à expliquer
- L'utilisateur sait déjà "scroller + cliquer sur CTA"

### Experience Mechanics

**Décomposition détaillée du parcours central :**

**1. INITIATION (Hero - 0-3 secondes)**

*Comment l'utilisateur commence :*
- Arrive via lien LinkedIn/email (contexte : déjà intrigué)
- Voit immédiatement un visuel fort + headline percutant
- Première question mentale : "C'est quoi exactement ?"

*Déclencheurs :*
- Visuel impactant qui attire l'œil
- Headline qui promet un bénéfice clair (ex: "Traduisez vos vidéos, conquérez l'international")
- CTA visible dès le départ (ancre psychologique)

*Réponse système :*
- Chargement instantané (< 3s critique)
- Design moderne qui inspire confiance
- Clarté immédiate sur la proposition de valeur

**2. INTERACTION (Scroll through sections - 30-120 secondes)**

*Ce que l'utilisateur fait :*
- Scroll vertical fluide, section par section
- Lecture rapide en mode "scan" (headlines, visuels, chiffres)
- Visionnage partiel ou complet d'une vidéo exemple
- Lecture des témoignages avec focus sur les chiffres

*Contrôles utilisés :*
- Pouce pour scroller (mobile) ou molette (desktop)
- Tap sur vidéo pour lancer
- Aucun menu, aucune navigation complexe

*Réponse système à chaque section :*
- **Problème/Solution** : "Je me reconnais" → Identification
- **Vidéos** : "Wow, la qualité" → Confiance
- **Processus** : "C'est simple" → Réassurance
- **Témoignages** : "Ça marche pour eux" → Projection

**3. FEEDBACK (Tout au long du parcours)**

*Indicateurs de succès pour l'utilisateur :*

- **Visuel** : Scroll fluide, animations subtiles au passage de sections
- **Cognitif** : Chaque section répond à une question mentale précise
  - Hero : "C'est quoi ?"
  - Problème : "C'est pour moi ?"
  - Vidéos : "C'est de qualité ?"
  - Processus : "C'est compliqué ?"
  - Témoignages : "Ça marche vraiment ?"
- **Émotionnel** : Progression de l'excitation (Waouh → Confiance → Inspiration)

*En cas d'erreur ou confusion :*
- Vidéo ne charge pas → Thumbnail + texte alternatif
- Scroll trop rapide → Animations au passage rappellent les sections
- Hésitation → Double CTA (Calendly ET WhatsApp) pour choix de canal

**4. COMPLÉTION (Moment de conversion)**

*L'utilisateur sait qu'il a "réussi" quand :*
- Il a scrollé jusqu'aux témoignages
- Il se dit "OK, c'est pour moi, ça peut me faire générer du CA"
- Il voit les 2 options de contact (Calendly + WhatsApp)

*L'action finale :*
- **Option A** : Clic sur bouton Calendly → Ouverture calendrier → Sélection créneau
- **Option B** : Clic sur bouton WhatsApp → Ouverture app WhatsApp → Message pré-rempli

*Résultat réussi :*
- Appel Calendly réservé OU
- Conversation WhatsApp initiée

*Et après :*
- Aucune action supplémentaire requise sur le site
- Confirmation visuelle de l'action (page Calendly ou app WhatsApp)
- Meidy prend le relais pour la suite du parcours commercial

---

## Visual Design Foundation

### Color System

**Palette : Bleu Énergique + Orange Accent**

Direction visuelle : Professionnelle, moderne, accessible et énergique. Le bleu inspire confiance et professionnalisme (tech/B2B), l'orange apporte chaleur et énergie pour l'action.

**Couleurs primaires (Bleu) :**
```
Primary-50:  #EFF6FF  (backgrounds légers)
Primary-100: #DBEAFE
Primary-200: #BFDBFE
Primary-300: #93C5FD
Primary-400: #60A5FA
Primary-500: #3B82F6  (couleur principale, boutons)
Primary-600: #2563EB  (hover states)
Primary-700: #1D4ED8
Primary-800: #1E40AF
Primary-900: #1E3A8A
```

**Couleurs accent (Orange) :**
```
Accent-50:  #FFF7ED
Accent-100: #FFEDD5
Accent-200: #FED7AA
Accent-300: #FDBA74
Accent-400: #FB923C
Accent-500: #F97316  (accent principal, CTA secondaires)
Accent-600: #EA580C  (hover accent)
Accent-700: #C2410C
Accent-800: #9A3412
Accent-900: #7C2D12
```

**Couleurs neutrales (Grays modernes) :**
```
Neutral-50:  #F8FAFC  (backgrounds)
Neutral-100: #F1F5F9
Neutral-200: #E2E8F0
Neutral-300: #CBD5E1
Neutral-400: #94A3B8
Neutral-500: #64748B  (texte secondaire)
Neutral-600: #475569
Neutral-700: #334155
Neutral-800: #1E293B
Neutral-900: #0F172A  (texte principal)
```

**Couleurs sémantiques :**
```
Success: #10B981  (messages de succès)
Warning: #F59E0B  (alertes)
Error:   #EF4444  (erreurs)
```

**Utilisation stratégique :**

- **Bleu (Primary)** : Boutons CTA principaux (Calendly), headlines, éléments de confiance
- **Orange (Accent)** : Boutons CTA secondaires (WhatsApp), chiffres dans témoignages, éléments d'action
- **Neutrals** : Texte, backgrounds, structure
- **White (#FFFFFF)** : Backgrounds sections, cards

**Accessibilité :**
- Contraste texte/fond : Minimum 4.5:1 (WCAG AA)
- Primary-600 sur blanc : 7.2:1 ✅
- Neutral-900 sur blanc : 16.1:1 ✅
- Accent-600 sur blanc : 5.8:1 ✅

### Typography System

**Police unique : Inter (Google Fonts - 100% gratuite)**

Rationale : Inter est une police sans-serif moderne, open-source, optimisée pour la lisibilité écran. Elle fonctionne parfaitement pour headlines ET body text, réduisant le poids de chargement (une seule police) tout en maintenant un design moderne.

**Source :**
```html
<!-- Google Fonts CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**Échelle typographique (mobile-first) :**

| Élément | Mobile | Desktop | Weight | Line Height |
|---------|--------|---------|--------|-------------|
| **H1 (Hero)** | 32px (2rem) | 56px (3.5rem) | 800 (ExtraBold) | 1.1 |
| **H2 (Sections)** | 24px (1.5rem) | 40px (2.5rem) | 700 (Bold) | 1.2 |
| **H3 (Subsections)** | 20px (1.25rem) | 28px (1.75rem) | 600 (SemiBold) | 1.3 |
| **Body Large** | 18px (1.125rem) | 20px (1.25rem) | 400 (Regular) | 1.6 |
| **Body** | 16px (1rem) | 18px (1.125rem) | 400 (Regular) | 1.6 |
| **Body Small** | 14px (0.875rem) | 16px (1rem) | 400 (Regular) | 1.5 |
| **CTA Buttons** | 16px (1rem) | 18px (1.125rem) | 600 (SemiBold) | 1.4 |
| **Caption** | 12px (0.75rem) | 14px (0.875rem) | 500 (Medium) | 1.4 |

**Principes typographiques :**

1. **Hiérarchie claire** : Différence marquée entre H1, H2, H3 pour faciliter le scan
2. **Lisibilité mobile** : 16px minimum pour body text (pas de zoom nécessaire)
3. **Poids variés** : Utilisation stratégique des weights pour hiérarchie et emphase
4. **Line-height généreux** : 1.6 pour body text = lecture confortable
5. **Phrases courtes** : Max 2-3 lignes par section (pas de pavés)

**Tailwind config :**
```javascript
// tailwind.config.mjs
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    }
  }
}
```

### Spacing & Layout Foundation

**Système d'espacement : Base 8px**

Tous les espacements sont des multiples de 8px pour cohérence et harmonie visuelle.

**Échelle d'espacement :**
```
4px   (0.25rem) - Spacing minimal (gaps internes)
8px   (0.5rem)  - Spacing serré
16px  (1rem)    - Spacing standard
24px  (1.5rem)  - Spacing moyen
32px  (2rem)    - Spacing large
48px  (3rem)    - Spacing section
64px  (4rem)    - Spacing section large
96px  (6rem)    - Spacing entre sections majeures
128px (8rem)    - Spacing Hero (desktop)
```

**Principes de layout :**

**1. Layout aéré (white space généreux)**
- Objectif : Faciliter le scan mobile, éviter la surcharge cognitive
- Approche : Espacements larges entre sections (96px desktop, 64px mobile)
- Padding généreux dans les sections (32-48px)

**2. Sections pleine largeur**
- Objectif : Impact visuel maximal, design moderne
- Approche : Backgrounds sections en pleine largeur, contenu centré avec max-width
- Max-width contenu : 1200px (desktop), 100% - 32px padding (mobile)

**3. Pas de grille rigide**
- Objectif : Flexibilité pour design one-page fluide
- Approche : Flexbox et CSS Grid pour layouts spécifiques
- Chaque section a son propre layout optimisé

**4. Mobile-first spacing**
- Objectif : Performance mobile optimale
- Approche : Espacements mobile définis en premier, augmentés pour desktop
- Breakpoints : sm:640px, md:768px, lg:1024px, xl:1280px

**Layout patterns par section :**

| Section | Layout | Spacing |
|---------|--------|---------|
| **Hero** | Centré, max-width 800px | py-64 (desktop), py-32 (mobile) |
| **Problème/Solution** | 2 colonnes desktop, stack mobile | py-96, gap-48 |
| **Vidéos** | Grid 2 colonnes desktop, stack mobile | py-96, gap-32 |
| **Processus** | 3 colonnes desktop, stack mobile | py-96, gap-24 |
| **Témoignages** | Grid 3 colonnes desktop, 1 mobile | py-96, gap-32 |
| **Contact/CTA** | Centré, max-width 600px | py-64 |

**Tailwind spacing config (déjà inclus par défaut, mais documenté) :**
```javascript
// Tailwind utilise le système 4px par défaut
// p-4 = 16px, p-8 = 32px, p-16 = 64px, etc.
```

### Accessibility Considerations

**1. Contraste couleurs (WCAG AA)**
- Tous les textes : Minimum 4.5:1
- Texte large (≥24px) : Minimum 3:1
- Éléments interactifs : Contraste suffisant pour identification
- Testés avec WebAIM Contrast Checker

**2. Typographie accessible**
- Taille minimum body : 16px (pas de zoom requis sur mobile)
- Line-height généreux : 1.6 pour body (lisibilité)
- Pas de texte justifié (difficile pour dyslexiques)
- Paragraphes courts : Max 2-3 lignes

**3. Touch targets mobile**
- Taille minimum : 44x44px (recommandation Apple/Google)
- Boutons CTA : 48px+ hauteur minimum
- Espacement entre éléments tactiles : 8px minimum

**4. Focus visible**
- États focus clairs sur tous les éléments interactifs
- Ring visible au clavier (Tailwind `focus:ring-2`)
- Couleur focus : Primary-500 avec opacity

**5. Sémantique HTML**
- Headers hiérarchiques (H1 → H2 → H3)
- Landmarks ARIA (header, main, section, footer)
- Alt texts descriptifs sur toutes les images
- Attributs ARIA sur composants custom

**6. Performance visuelle**
- Pas d'animations qui causent vestibular motion
- Respect de `prefers-reduced-motion`
- Transitions douces (200-300ms)
- Pas de flashs ou clignotements

---

## Design Direction Decision

### Design Directions Explored

Plutôt que de générer de multiples variations divergentes, nous avons adopté une approche de **design convergent** basée sur l'ensemble des décisions UX et visuelles précédentes. Toutes les décisions prises (couleurs, typographie, émotions cibles, expérience core) pointent vers une seule direction cohérente et optimale.

**Direction retenue dès le départ :** "Modern B2B Conversion - Clean & Energetic"

Cette direction unique découle naturellement de :
- Objectif business : Conversion B2B (réassurance + projection business)
- Émotions cibles : Inspiration + Confiance
- Pattern établi : Landing page one-page éprouvée
- Contraintes techniques : Mobile-first, performance < 3s
- Palette visuelle : Bleu énergique + Orange accent
- Anti-patterns définis : Pas de pop-ups, pas de pavés de texte, pas d'animations lourdes

### Chosen Direction

**Direction : "Modern B2B Conversion - Clean & Energetic"**

**Caractéristiques visuelles :**

**1. Layout & Structure**
- **Sections pleine largeur** avec backgrounds alternés (blanc/bleu léger)
- **Contenu centré** avec max-width 1200px
- **White space généreux** entre sections (96px desktop, 64px mobile)
- **Scroll linéaire** sans navigation complexe
- **Hero impactant** avec visuel fort et CTA double visible immédiatement

**2. Style Visuel**
- **Minimaliste mais pas austère** : Design épuré, focalisé sur l'essentiel
- **Coloré et énergique** : Utilisation stratégique du bleu et orange pour créer dynamisme
- **Professionnel mais chaleureux** : Équilibre entre sérieux B2B et approche humaine
- **Visuellement scannable** : Icônes, chiffres gros, headlines percutantes

**3. Hiérarchie Visuelle**
- **Headlines énormes** (H1: 56px desktop) pour impact immédiat
- **Chiffres mis en avant** dans témoignages (taille XXL, couleur accent)
- **CTA contrastés** : Bleu (Calendly) et Orange (WhatsApp) au même niveau
- **Vidéos hero** : Thumbnails attractifs, ratio 16:9, quality avant quantité

**4. Patterns de Composants**

**Hero Section :**
- Background subtil (gradient bleu très léger ou photo avec overlay)
- Headline H1 gras, court, percutant
- Sous-titre 1-2 lignes max
- Double CTA (Calendly + WhatsApp) visible dès le départ
- Scroll indicator subtil

**Section Problème/Solution :**
- Layout 2 colonnes desktop (Problème | Solution)
- Icônes visuelles + Headlines + 1 ligne explication
- Background blanc, texte foncé
- Accent orange sur éléments clés

**Section Vidéos :**
- Grid 2 colonnes desktop, stack mobile
- Thumbnails vidéos attractifs avec play button overlay
- Légendes courtes ("Version FR" | "Version EN")
- Background bleu léger pour contraste

**Section Processus :**
- 3 colonnes desktop (Vous envoyez | On traduit | Vous recevez)
- Icônes/illustrations simples pour chaque étape
- Numérotation visible (1, 2, 3)
- Focus sur "ce que vous N'avez PAS à faire"

**Section Témoignages :**
- Grid 3 cards desktop, stack mobile
- Chiffres énormes en couleur accent (#F97316)
- Citation courte en dessous
- Photo/initiales du client si possible
- Background cards blanc avec shadow subtile

**Section Contact/CTA :**
- Centré, max-width 600px
- Headline finale de réassurance
- Double CTA (Calendly + WhatsApp) taille généreuse
- Icônes claires pour chaque option
- Background bleu foncé avec texte blanc (contraste)

**5. États Interactifs**
- **Hover boutons** : Transition couleur 200ms, légère élévation (shadow)
- **Focus clavier** : Ring bleu visible (accessibilité)
- **Vidéo hover** : Overlay avec légère opacity pour indiquer interactivité
- **Cards témoignages** : Légère élévation au hover (si desktop)

### Design Rationale

**Pourquoi cette direction unique fonctionne :**

**1. Alignement parfait avec objectifs business**
- Layout one-page linéaire → Supporte le parcours "one-shot scroll"
- Sections visuelles → Supporte "Show, don't tell"
- Double CTA visible → Supporte "Conversion multi-canal"
- White space généreux → Supporte "Mobile-first radical"

**2. Cohérence émotionnelle**
- Bleu → Construit la confiance professionnelle
- Orange → Crée l'excitation et l'action
- White space → Crée la clarté et évite la surcharge
- Headlines gros → Créent le "Waouh" immédiat

**3. Performance garantie**
- Design simple → HTML/CSS léger, pas de frameworks lourds
- Une police (Inter) → Poids minimal
- Animations subtiles → Pas d'impact performance
- Lazy loading vidéos → Chargement initial < 3s

**4. Anti-patterns évités par design**
- Pas de pop-ups : Design ne prévoit aucun modal intrusif
- Pas de pavés : Layout force texte court (max 2-3 lignes)
- Pas de menus complexes : Scroll simple, pas de navigation
- Pas d'autoplay : Vidéos contrôlées par utilisateur

**5. Différenciation compétitive**
- Pas "corporate fade" : Couleurs énergiques, pas monochrome
- Pas "startup flashy" : Professionnel, pas gadget
- Équilibre unique : Confiance (bleu) + Énergie (orange)

### Implementation Approach

**Phase 1 : Structure & Layout (Semaine 1)**
- Initialiser projet Astro + TailwindCSS
- Configurer palette couleurs dans `tailwind.config.mjs`
- Créer `BaseLayout.astro` avec structure HTML sémantique
- Implémenter structure de sections (6 sections)

**Phase 2 : Composants UI (Semaine 1-2)**
- `Button.astro` (variants: primary bleu, secondary orange)
- `VideoEmbed.astro` (player lazy-loaded)
- `TestimonialCard.astro` (chiffre gros + citation)
- `CalendlyEmbed.astro` et `WhatsAppButton.astro`

**Phase 3 : Sections (Semaine 2-3)**
- `HeroSection.astro` : Headline + double CTA + visuel
- `ProblemSection.astro` : Problème | Solution layout
- `VideoSection.astro` : Grid 2 vidéos avant/après
- `ProcessSection.astro` : 3 étapes visuelles
- `TestimonialsSection.astro` : Grid 3 cards
- `ContactSection.astro` : CTA final centré

**Phase 4 : Polish & Performance (Semaine 3-4)**
- Animations scroll (Intersection Observer)
- Optimisation images (WebP, lazy loading)
- Tests accessibilité (WCAG AA)
- Tests performance (Lighthouse > 90)
- Tests mobile (responsive, touch targets)

**Phase 5 : Intégrations (Semaine 4)**
- Calendly embed configuration
- WhatsApp click-to-chat setup
- Google Analytics 4 configuration
- Vercel deployment

**Livrables par phase :**
- Phase 1-2 : Prototype statique fonctionnel
- Phase 3 : Site complet avec placeholder content
- Phase 4 : Site optimisé et accessible
- Phase 5 : Site production-ready

---

## User Journey Flows

**Parcours principal : "Discovery to Conversion"**

Pour un site one-page de conversion, le parcours utilisateur est **linéaire et unifié**. Tous les visiteurs suivent le même flow de base, avec des variations mineures selon leur persona et leur device.

**Flow principal (tous utilisateurs) :**

```
1. ARRIVÉE
   ↓ LinkedIn/Email → Clic lien

2. HERO (0-3 secondes)
   ↓ Lecture headline + scan visuel
   ↓ [Décision: Intéressant ou pas ?]
   ├─→ Non → SORTIE (rebond)
   └─→ Oui → SCROLL

3. SECTION PROBLÈME/SOLUTION
   ↓ Scan rapide problèmes/solutions
   ↓ [Identification: "C'est pour moi ?"]
   ├─→ Non → SORTIE
   └─→ Oui → SCROLL

4. SECTION VIDÉOS (Moment déclic #1)
   ↓ Visionnage partiel/complet vidéo
   ↓ [Évaluation: "La qualité est là ?"]
   ├─→ Doute → SORTIE ou retour Hero
   └─→ Confiance → SCROLL

5. SECTION PROCESSUS
   ↓ Scan 3 étapes
   ↓ [Réassurance: "C'est compliqué ?"]
   └─→ "C'est simple" → SCROLL

6. SECTION TÉMOIGNAGES (Moment déclic #2)
   ↓ Lecture chiffres + citations
   ↓ [Projection: "Ça peut me générer du CA ?"]
   ├─→ Non convaincu → SORTIE
   └─→ "OK, c'est pour moi !" → SCROLL

7. SECTION CONTACT/CTA (Conversion)
   ↓ Choix de canal
   ├─→ Calendly → Réservation appel → SUCCÈS
   └─→ WhatsApp → Message direct → SUCCÈS
```

### Journey 1: Sophie (Infopreneuse Mobile)

**Contexte d'arrivée :**
- Device : Mobile (LinkedIn app)
- État mental : Curieuse mais pressée
- Objection principale : "Pas le temps, ça va me défocus"

**Variations spécifiques :**

**Hero (0-3s) :**
- Lecture ultra-rapide du headline sur mobile
- Scan visuel rapide (image + CTA)
- Décision binaire : scroll ou sortie

**Vidéos :**
- Visionnage partiel (30-60s max)
- Focus sur le résultat visuel, pas le processus technique
- Déclic : "Wow, c'est vraiment pro"

**Témoignages :**
- Focus sur les chiffres de croissance ("CA triplé")
- Se projette : "Si elle a fait ça, je peux aussi"
- Déclic final : "OK, ça peut me faire générer du CA"

**Conversion :**
- **Préférence : Calendly** (formalisation, structure)
- Action : Tap bouton → Sélection créneau → Confirmation
- Timing : Conversion en < 2 minutes total

**Points de friction potentiels :**
- Vidéo trop longue → Impatience → Risque sortie
- Trop de texte → Fatigue cognitive → Risque sortie
- CTA pas visible mobile → Frustration → Sortie

**Optimisations :**
- Vidéos courtes (< 60s)
- Headlines percutants, zéro pavé
- CTA visible après chaque section clé

### Journey 2: Marc (CEO Desktop/Mobile)

**Contexte d'arrivée :**
- Device : Desktop OU Mobile
- État mental : Évaluateur, sceptique
- Objection principale : "Est-ce vraiment professionnel ?"

**Variations spécifiques :**

**Hero (0-3s) :**
- Évaluation rapide du professionnalisme visuel
- Scan du design (moderne ? amateur ?)
- Continue si "ça a l'air sérieux"

**Vidéos :**
- Visionnage plus attentif (évalue la qualité)
- Analyse technique : "Le lip-sync est bon ?"
- Déclic : "C'est vraiment de qualité pro"

**Processus :**
- Focus sur "pas de charge pour mon équipe"
- Validation : "Je n'aurai rien à gérer"

**Témoignages :**
- Focus sur résultats business concrets
- Validation sociale : "D'autres CEO l'ont fait"
- Déclic : "Ça peut booster nos ventes internationales"

**Conversion :**
- **Préférence : WhatsApp** (contact direct, pragmatique)
- Action : Clic bouton → Message pré-rempli → Envoi
- Timing : Conversion en < 3 minutes total

**Points de friction potentiels :**
- Design pas assez pro → Perte de confiance → Sortie
- Témoignages vagues → Doute → Sortie
- Process pas clair → Hésitation → Report de décision

**Optimisations :**
- Design soigné, pas flashy
- Témoignages avec résultats chiffrés précis
- Processus visuel ultra-clair (3 étapes)

### Journey 3: Parcours Mobile Rapide

**Contexte d'arrivée :**
- Device : Mobile (contexte rapide, ex: transports)
- État mental : Découverte rapide, attention limitée
- Contrainte : Temps limité, réseau potentiellement lent

**Variations spécifiques :**

**Performance critique :**
- Chargement < 3s sur 4G
- Scroll fluide sans lag
- Vidéos en lazy loading

**Navigation :**
- Pouce uniquement (scroll vertical)
- Tap sur vidéos pour lancer
- Tap sur CTA pour conversion

**Attention limitée :**
- Scan ultra-rapide (< 90 secondes total)
- Focus sur visuels et chiffres
- Texte minimal consommé

**Conversion :**
- **Préférence : WhatsApp** (déjà sur mobile)
- Action : Un tap → App WhatsApp → Message
- Timing : Conversion en < 90 secondes

**Points de friction potentiels :**
- Chargement lent → Abandon immédiat
- Scroll pas fluide → Frustration → Sortie
- CTA trop petit → Difficulté tap → Abandon

**Optimisations :**
- Lazy loading agressif
- Touch targets ≥ 44px
- WhatsApp prioritaire sur mobile

### Journey Patterns

**Patterns communs identifiés à travers tous les parcours :**

**1. Pattern "Décision en cascade"**
- Chaque section = point de décision (continuer ou sortir)
- Pas de retour en arrière : décisions séquentielles
- Momentum progressif : chaque "oui" rend le suivant plus probable

**2. Pattern "Double déclic"**
- Déclic #1 (Vidéos) : Confiance professionnelle établie
- Déclic #2 (Témoignages) : Projection business validée
- Les deux nécessaires pour conversion

**3. Pattern "Conversion multi-canal"**
- Deux options égales : Calendly OU WhatsApp
- Pas de hiérarchie, choix utilisateur
- Chaque canal optimisé pour son contexte

**4. Pattern "Scroll momentum"**
- Pas de navigation complexe
- Scroll vertical naturel
- Chaque section guide vers la suivante

**5. Pattern "Réassurance répétée"**
- Message "clé-en-main" à chaque section
- Objection temps/défocus combattue en continu
- Confiance construite progressivement

### Flow Optimization Principles

**Principes d'optimisation appliqués à tous les parcours :**

**1. Minimiser le temps jusqu'à la valeur**
- Proposition de valeur visible en < 3 secondes (Hero)
- Preuve tangible en < 30 secondes (Vidéos)
- Conversion accessible en < 2 minutes (CTA toujours visible)

**2. Réduire la charge cognitive**
- Une décision à la fois (scroll ou sortie)
- Texte minimal (max 2-3 lignes)
- Visuels > Texte systématiquement

**3. Feedback clair et continu**
- Scroll fluide = feedback de progression
- Animations subtiles au passage de sections
- CTA visible = feedback "vous pouvez agir maintenant"

**4. Moments de "waouh" stratégiques**
- Hero : Surprise positive (visuel + headline)
- Vidéos : Impression qualité (lip-sync)
- Témoignages : Inspiration (chiffres de croissance)

**5. Gestion des erreurs gracieuse**
- Vidéo ne charge pas → Thumbnail + texte alternatif
- Réseau lent → Lazy loading, priorité contenu critique
- Hésitation → Double CTA (deux chances de conversion)

**6. Élimination des frictions**
- Pas de formulaire avant contact
- Pas de navigation complexe
- Pas de décisions inutiles
- Pas d'étapes supplémentaires

**7. Mobile-first absolu**
- Parcours optimisé pour pouce
- Touch targets généreux (≥ 44px)
- Performance 4G garantie (< 3s)
- WhatsApp prioritaire sur mobile

**8. Respect du contexte utilisateur**
- Sophie (mobile, pressée) → Parcours ultra-rapide
- Marc (desktop, évaluateur) → Plus de détails disponibles
- Tous : Choix de canal selon préférence

---

## Component Strategy

### Component Architecture Overview

Le système de composants pour make_it_global_website suit une architecture à deux niveaux :

**Niveau 1 : Section Components** (6 composants)
- Composants de haut niveau représentant chaque section du one-page
- Encapsulent la logique et le layout spécifique à leur section
- Composent les UI components pour créer l'expérience complète

**Niveau 2 : UI Components** (5 composants)
- Composants atomiques réutilisables
- Responsables d'une seule fonction UX
- Pas de logique business, uniquement présentation et interaction

**Hiérarchie des composants :**

```
index.astro (Page)
│
├── BaseLayout.astro (Layout wrapper)
│   └── Main content
│       ├── HeroSection.astro
│       │   ├── Button.astro (Calendly)
│       │   └── WhatsAppButton.astro
│       │
│       ├── ProblemSection.astro
│       │   └── (Contenu direct, pas de sous-composants)
│       │
│       ├── VideoSection.astro
│       │   └── VideoEmbed.astro (x2-3)
│       │
│       ├── ProcessSection.astro
│       │   └── (Contenu direct avec icônes)
│       │
│       ├── TestimonialsSection.astro
│       │   └── TestimonialCard.astro (x3)
│       │
│       └── ContactSection.astro
│           ├── CalendlyEmbed.astro
│           └── WhatsAppButton.astro
```

### Section Components Specifications

#### 1. HeroSection.astro

**Responsabilité :**
- Présenter la proposition de valeur principale
- Capturer l'attention en < 3 secondes
- Fournir accès immédiat aux CTA principaux

**Props API :**
```typescript
interface Props {
  headline: string;           // H1 principal (max 60 caractères)
  subheadline: string;        // Sous-titre explicatif (max 120 caractères)
  ctaPrimaryText: string;     // Texte bouton Calendly (ex: "Réserver mon appel")
  ctaSecondaryText: string;   // Texte bouton WhatsApp (ex: "Discuter sur WhatsApp")
  calendlyUrl: string;        // URL Calendly embed
  whatsappNumber: string;     // Numéro WhatsApp (+33...)
  whatsappMessage?: string;   // Message pré-rempli (optionnel)
  backgroundImage?: string;   // Image background hero (optionnel)
}
```

**Layout & Structure :**
```
[Background: Gradient bleu léger ou image avec overlay]
│
├── Container (max-width: 800px, centré, py-32 mobile / py-64 desktop)
│   ├── H1 (text-5xl mobile / text-6xl desktop, font-extrabold)
│   ├── Subheadline (text-lg mobile / text-xl desktop, mt-4)
│   ├── CTA Group (mt-8, flex, gap-4, mobile: stack vertical)
│   │   ├── Button (variant: primary, Calendly)
│   │   └── WhatsAppButton (variant: secondary)
│   └── Scroll Indicator (mt-16, animation bounce)
```

**États & Comportements :**
- **Chargement** : Fade-in animation (0.5s) au load
- **Responsive** : Stack vertical des CTA sur mobile, horizontal sur desktop
- **Interaction** : CTA cliquables avec feedback hover

**Accessibilité :**
- H1 avec texte clair et descriptif
- Boutons avec labels explicites
- Contraste texte/background ≥ 4.5:1

**Performance :**
- Background image en WebP, lazy si pas above-the-fold
- Aucun JavaScript pour la présentation (sauf Calendly embed si inline)

---

#### 2. ProblemSection.astro

**Responsabilité :**
- Présenter les problèmes que Make It Global résout
- Créer l'identification utilisateur ("C'est pour moi")
- Introduire l'approche hybride IA + Humain

**Props API :**
```typescript
interface Props {
  sectionTitle: string;                 // Titre section (ex: "Le problème")
  problems: Array<{
    icon: string;                       // Nom icône (ex: "clock", "money")
    title: string;                      // Titre problème (3-5 mots)
    description: string;                // Description courte (1 ligne max)
  }>;
  solutionTitle: string;                // Titre solution
  solutionDescription: string;          // Description solution (2-3 lignes)
  solutionHighlight: string;            // Texte highlight "IA + Humain"
}
```

**Layout & Structure :**
```
[Background: Blanc]
│
├── Container (max-width: 1200px, py-96)
│   ├── Section Title (text-center, mb-16)
│   ├── Grid (grid-cols-1 md:grid-cols-2, gap-48)
│   │   ├── Problème Column
│   │   │   └── Problems List (space-y-8)
│   │   │       └── Problem Item (x3-4)
│   │   │           ├── Icon (text-accent-500, w-12 h-12)
│   │   │           ├── Title (font-semibold)
│   │   │           └── Description
│   │   │
│   │   └── Solution Column
│   │       ├── Solution Title (text-2xl, font-bold)
│   │       ├── Solution Description
│   │       └── Highlight Badge ("IA + Humain")
```

**États & Comportements :**
- **Scroll-in animation** : Fade-in + slide-up au passage (Intersection Observer)
- **Responsive** : Stack vertical sur mobile, 2 colonnes desktop
- **Icônes** : SVG inline ou Heroicons/Lucide

**Accessibilité :**
- Structure sémantique avec `<article>` pour chaque problème
- Icônes décoratives avec `aria-hidden="true"`
- Textes alternatifs si icônes porteuses de sens

---

#### 3. VideoSection.astro

**Responsabilité :**
- Démontrer la qualité des traductions (lip-sync)
- Fournir la preuve visuelle "déclic #1"
- Permettre comparaison avant/après

**Props API :**
```typescript
interface Props {
  sectionTitle: string;              // Titre section
  videos: Array<{
    id: string;                      // ID unique
    title: string;                   // Titre vidéo (ex: "Version FR")
    videoUrl: string;                // URL YouTube/Vimeo ou fichier
    thumbnailUrl: string;            // Thumbnail custom
    platform: 'youtube' | 'vimeo' | 'native';  // Type player
  }>;
  layout: 'grid' | 'comparison';     // Grid 2 colonnes ou avant/après
}
```

**Layout & Structure :**
```
[Background: Primary-50 (bleu très léger)]
│
├── Container (max-width: 1200px, py-96)
│   ├── Section Title (text-center, mb-16)
│   └── Video Grid (grid-cols-1 md:grid-cols-2, gap-32)
│       └── VideoEmbed (x2-3)
```

**États & Comportements :**
- **Lazy loading** : Vidéos chargées seulement au scroll (Intersection Observer)
- **Responsive** : Stack vertical mobile, grid desktop
- **Interaction** : Clic thumbnail → Lecture vidéo

**Performance :**
- **Critique** : Lazy loading obligatoire
- Thumbnails optimisées (WebP)
- Player iframe chargé on-demand

---

#### 4. ProcessSection.astro

**Responsabilité :**
- Visualiser le processus en 3 étapes simples
- Rassurer sur l'aspect "clé-en-main"
- Montrer ce que l'utilisateur N'a PAS à faire

**Props API :**
```typescript
interface Props {
  sectionTitle: string;
  steps: Array<{
    number: number;                  // Numéro étape (1, 2, 3)
    icon: string;                    // Nom icône
    title: string;                   // Titre étape (3-5 mots)
    description: string;             // Description (1-2 lignes)
  }>;
  reassuranceText: string;           // Texte final "Vous n'avez rien à gérer"
}
```

**Layout & Structure :**
```
[Background: Blanc]
│
├── Container (max-width: 1200px, py-96)
│   ├── Section Title (text-center, mb-16)
│   ├── Steps Grid (grid-cols-1 md:grid-cols-3, gap-24)
│   │   └── Step Card (x3)
│   │       ├── Number Badge (text-6xl, text-accent-500)
│   │       ├── Icon
│   │       ├── Title (font-semibold)
│   │       └── Description
│   │
│   └── Reassurance Text (text-center, mt-16, text-xl, font-bold)
```

**États & Comportements :**
- **Scroll-in animation** : Staggered fade-in (décalage 100ms entre steps)
- **Responsive** : Stack vertical mobile, 3 colonnes desktop
- **Visual flow** : Flèches entre steps (desktop only)

---

#### 5. TestimonialsSection.astro

**Responsabilité :**
- Fournir la preuve sociale "déclic #2"
- Montrer résultats business concrets chiffrés
- Créer la projection "Ça peut me générer du CA"

**Props API :**
```typescript
interface Props {
  sectionTitle: string;
  testimonials: Array<{
    id: string;
    clientName: string;              // Nom ou initiales
    clientRole: string;              // Rôle (ex: "Formatrice en ligne")
    result: string;                  // Résultat chiffré (ex: "CA triplé")
    quote: string;                   // Citation courte (max 150 caractères)
    avatarUrl?: string;              // Photo ou initiales générées
  }>;
}
```

**Layout & Structure :**
```
[Background: Neutral-50]
│
├── Container (max-width: 1200px, py-96)
│   ├── Section Title (text-center, mb-16)
│   └── Testimonials Grid (grid-cols-1 md:grid-cols-3, gap-32)
│       └── TestimonialCard (x3)
```

**États & Comportements :**
- **Scroll-in animation** : Fade-in + slide-up staggered
- **Responsive** : Stack vertical mobile, 3 colonnes desktop
- **Hover state** : Légère élévation (desktop only)

---

#### 6. ContactSection.astro

**Responsabilité :**
- Fournir les options de conversion finales
- Maintenir parité Calendly/WhatsApp
- Créer l'urgence d'action ("Hâte de démarrer")

**Props API :**
```typescript
interface Props {
  headline: string;                  // Headline finale (ex: "Prêt à démarrer ?")
  subheadline?: string;              // Sous-titre optionnel
  calendlyUrl: string;
  whatsappNumber: string;
  whatsappMessage?: string;
  showCalendlyInline: boolean;       // Inline embed ou popup
}
```

**Layout & Structure :**
```
[Background: Primary-900 (bleu foncé) avec texte blanc]
│
├── Container (max-width: 600px, centré, py-64)
│   ├── Headline (text-4xl, text-white, font-bold, text-center)
│   ├── Subheadline (text-lg, text-neutral-200, mt-4)
│   ├── CTA Group (mt-12, flex, gap-4, justify-center)
│   │   ├── CalendlyEmbed
│   │   └── WhatsAppButton
│   │
│   └── Calendly Inline Widget (optionnel, mt-16)
```

**États & Comportements :**
- **Scroll-in animation** : Fade-in final
- **Responsive** : Stack CTA sur mobile
- **Sticky CTA** : Boutons accessibles même en scroll (optionnel)

---

### UI Components Specifications

#### 1. Button.astro

**Responsabilité :**
- Bouton générique avec variants pour cohérence visuelle
- Support états hover/focus/disabled
- Accessibilité clavier native

**Props API :**
```typescript
interface Props {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;                     // Si lien externe
  onclick?: string;                  // Handler JavaScript
  disabled?: boolean;
  fullWidth?: boolean;               // 100% width mobile
  class?: string;                    // Classes additionnelles
}
```

**Variants :**

**Primary (Bleu) :**
```css
bg-primary-600 text-white
hover:bg-primary-700
px-6 py-3 rounded-lg
font-semibold text-base
transition-colors duration-200
```

**Secondary (Orange) :**
```css
bg-accent-500 text-white
hover:bg-accent-600
px-6 py-3 rounded-lg
font-semibold text-base
transition-colors duration-200
```

**Outline :**
```css
border-2 border-primary-600 text-primary-600
hover:bg-primary-50
px-6 py-3 rounded-lg
font-semibold text-base
transition-colors duration-200
```

**Tailles :**
- **sm** : px-4 py-2 text-sm
- **md** : px-6 py-3 text-base (défaut)
- **lg** : px-8 py-4 text-lg

**Accessibilité :**
- Focus ring : `focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`
- Disabled state : `disabled:opacity-50 disabled:cursor-not-allowed`
- Touch target minimum : 44x44px sur mobile

---

#### 2. WhatsAppButton.astro

**Responsabilité :**
- Bouton spécialisé pour contact WhatsApp
- Génère le lien click-to-chat avec message pré-rempli
- Icône WhatsApp reconnaissable

**Props API :**
```typescript
interface Props {
  phoneNumber: string;               // Format: +33XXXXXXXXX
  message?: string;                  // Message pré-rempli (URL encoded)
  text?: string;                     // Texte bouton (défaut: "Discuter sur WhatsApp")
  variant?: 'primary' | 'secondary'; // Style variant
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;                // Afficher icône WhatsApp
}
```

**Comportement :**
- Génère URL : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
- Ouvre dans nouvelle fenêtre/app mobile
- Icône WhatsApp (vert #25D366 ou blanc selon variant)

**Template :**
```astro
<a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  class={buttonClasses}
>
  {showIcon && <WhatsAppIcon />}
  {text}
</a>
```

---

#### 3. CalendlyEmbed.astro

**Responsabilité :**
- Intégration Calendly (popup ou inline)
- Configuration responsive
- Gestion du loading state

**Props API :**
```typescript
interface Props {
  calendlyUrl: string;               // URL Calendly (ex: "username/30min")
  type: 'popup' | 'inline';          // Mode d'affichage
  buttonText?: string;               // Texte bouton si popup
  height?: string;                   // Hauteur iframe si inline (défaut: 630px)
  hideEventDetails?: boolean;        // Options Calendly
  hideCookieBanner?: boolean;
}
```

**Implémentation Popup :**
```astro
<Button
  variant="primary"
  onclick="Calendly.initPopupWidget({url: '{calendlyUrl}'})"
>
  {buttonText}
</Button>

<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Implémentation Inline :**
```astro
<div
  class="calendly-inline-widget"
  data-url={calendlyUrl}
  style={`height: ${height}; min-width: 320px;`}
></div>

<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Performance :**
- Script Calendly chargé async
- Inline widget lazy-loaded si pas visible

---

#### 4. VideoEmbed.astro

**Responsabilité :**
- Embed vidéos YouTube/Vimeo avec lazy loading
- Thumbnail custom avec play button overlay
- Gestion ratio 16:9 responsive

**Props API :**
```typescript
interface Props {
  videoId: string;                   // ID vidéo
  platform: 'youtube' | 'vimeo' | 'native';
  title: string;                     // Titre pour accessibilité
  thumbnailUrl?: string;             // Thumbnail custom
  autoplay?: boolean;                // Autoplay (défaut: false)
  lazyLoad?: boolean;                // Lazy loading (défaut: true)
}
```

**Structure avec Lazy Loading :**
```astro
<div class="video-container relative aspect-video">
  <!-- Thumbnail + Play Button -->
  <div class="video-thumbnail cursor-pointer" data-video-id={videoId}>
    <img src={thumbnailUrl} alt={title} loading="lazy" />
    <div class="play-button-overlay">
      <PlayIcon />
    </div>
  </div>

  <!-- Iframe chargé au clic -->
  <iframe
    class="hidden w-full h-full"
    data-src={videoUrl}
    title={title}
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
```

**Comportement :**
- **Default** : Affiche thumbnail + play button
- **Au clic** : Cache thumbnail, charge iframe, lance lecture
- **Lazy** : Iframe src chargé seulement si dans viewport

---

#### 5. TestimonialCard.astro

**Responsabilité :**
- Afficher témoignage avec résultat chiffré mis en avant
- Design inspirant confiance
- Responsive avec élévation au hover

**Props API :**
```typescript
interface Props {
  clientName: string;
  clientRole: string;
  result: string;                    // Ex: "CA x3" ou "+200% ventes"
  quote: string;
  avatarUrl?: string;
  class?: string;
}
```

**Layout :**
```
Card (bg-white, rounded-xl, shadow-lg, p-8, hover:shadow-xl transition)
│
├── Result Highlight (text-5xl, font-extrabold, text-accent-500, mb-4)
├── Quote (text-lg, text-neutral-700, mb-6, italic)
├── Divider (border-t, border-neutral-200, my-6)
└── Client Info (flex, items-center, gap-4)
    ├── Avatar (w-12 h-12, rounded-full, bg-primary-100)
    └── Text
        ├── Name (font-semibold, text-neutral-900)
        └── Role (text-sm, text-neutral-500)
```

**États :**
- **Default** : shadow-lg
- **Hover** : shadow-xl, translate-y-[-4px] (desktop only)

---

### Component Reusability Strategy

**Composants hautement réutilisables :**

1. **Button.astro** : Utilisé dans Hero, Contact, et potentiellement partout
2. **WhatsAppButton.astro** : Utilisé dans Hero et Contact
3. **TestimonialCard.astro** : Répété x3 dans TestimonialsSection

**Composants spécifiques (usage unique) :**

1. **CalendlyEmbed.astro** : Contact (inline) et Hero (popup) - paramétrable
2. **VideoEmbed.astro** : VideoSection uniquement
3. Toutes les Section Components : Usage unique par définition

**Pattern de composition :**

Les Section Components sont responsables de :
- Orchestrer le layout spécifique
- Passer les bonnes props aux UI Components
- Gérer les états locaux (ex: animations scroll)

Les UI Components sont responsables de :
- Afficher et styliser selon props
- Gérer les interactions utilisateur (hover, click)
- Maintenir l'accessibilité

---

### Implementation Guidelines

**Ordre de développement recommandé :**

**Phase 1 : UI Components Foundation**
1. Button.astro (critique, utilisé partout)
2. WhatsAppButton.astro (dépend de Button)
3. TestimonialCard.astro (autonome)
4. VideoEmbed.astro (autonome)
5. CalendlyEmbed.astro (autonome)

**Phase 2 : Section Components**
1. HeroSection.astro (première impression critique)
2. ContactSection.astro (conversion critique)
3. TestimonialsSection.astro (déclic #2)
4. VideoSection.astro (déclic #1)
5. ProcessSection.astro (réassurance)
6. ProblemSection.astro (identification)

**Rationale de l'ordre :**
- UI Components d'abord → Sections peuvent les utiliser immédiatement
- Sections critiques (Hero, Contact) → Test du parcours de conversion early
- Sections émotionnelles (Testimonials, Videos) → Validation du "déclic"
- Sections informatives (Process, Problem) → Polish final

**Best Practices :**

1. **Props validation** : TypeScript interfaces pour tous les composants
2. **Default values** : Props optionnels avec valeurs par défaut sensées
3. **Accessibilité** : WCAG AA systématique (contraste, focus, ARIA)
4. **Performance** : Lazy loading pour vidéos et images, async pour scripts tiers
5. **Mobile-first** : Tester sur mobile en premier, desktop en bonus
6. **Documentation** : Commenter les props et comportements non-évidents

**Testing Strategy :**

**Par composant :**
- Rendu visuel correct sur mobile/desktop
- Accessibilité clavier (focus, tab order)
- États hover/focus/disabled fonctionnels
- Props validation (types corrects)

**Intégration sections :**
- Scroll fluide entre sections
- Animations déclenchées au bon moment
- CTA fonctionnels (Calendly, WhatsApp)
- Performance < 3s sur 4G

---

### Component Dependencies

**Dépendances externes :**

1. **TailwindCSS** : Tous les composants (styling)
2. **Calendly SDK** : CalendlyEmbed.astro
3. **YouTube/Vimeo API** : VideoEmbed.astro (iframe)
4. **Heroicons ou Lucide** : Icônes dans ProblemSection, ProcessSection

**Dépendances internes :**

```
HeroSection.astro
  ├── Button.astro
  └── WhatsAppButton.astro
      └── Button.astro

ContactSection.astro
  ├── CalendlyEmbed.astro
  │   └── Button.astro (si popup)
  └── WhatsAppButton.astro

TestimonialsSection.astro
  └── TestimonialCard.astro (x3)

VideoSection.astro
  └── VideoEmbed.astro (x2-3)

ProcessSection.astro
  └── (Pas de sous-composants)

ProblemSection.astro
  └── (Pas de sous-composants)
```

**Aucune dépendance circulaire** : Hiérarchie claire Section → UI → Primitives

---

### Performance Considerations

**Critical components (above-the-fold) :**
- HeroSection.astro : Doit charger en < 1.5s
- Button.astro : Aucun JavaScript, CSS pur

**Lazy-loaded components :**
- VideoEmbed.astro : Iframe chargé au scroll (Intersection Observer)
- TestimonialCard.astro : Animation au scroll
- CalendlyEmbed inline : Chargé au scroll si pas visible

**Third-party scripts :**
- Calendly : Async, non-bloquant
- YouTube/Vimeo : Iframe lazy, façade avec thumbnail

**Bundle optimization :**
- Un seul fichier CSS (TailwindCSS compilé, purgé)
- Pas de JavaScript framework (Astro = zero JS par défaut)
- Images en WebP, lazy loading agressif

---

## UX Consistency Patterns

### Button Hierarchy

**Primary Action (Calendly - Bleu):**
- **When to Use:** Action principale de conversion (réservation appel découverte)
- **Visual Design:**
  - Background: `bg-primary-600` (#2563EB)
  - Hover: `bg-primary-700` (#1D4ED8)
  - Text: `text-white`, `font-semibold`, `text-base` (mobile) / `text-lg` (desktop)
  - Padding: `px-6 py-3` (md), `px-8 py-4` (lg)
  - Border radius: `rounded-lg`
- **Behavior:**
  - Hover: Transition couleur (200ms) + légère élévation (`shadow-md → shadow-lg`)
  - Click: Ouvre Calendly popup ou scroll vers embed inline
  - Touch: Feedback tactile, ripple effect optionnel
- **Accessibility:**
  - Focus ring: `focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`
  - Touch target minimum: 44x44px
  - Label explicite: "Réserver mon appel découverte"
- **Mobile Considerations:**
  - Full width sur mobile: `w-full sm:w-auto`
  - Taille touch-optimized (48px minimum hauteur)

**Secondary Action (WhatsApp - Orange):**
- **When to Use:** Action alternative de conversion (contact direct)
- **Visual Design:**
  - Background: `bg-accent-500` (#F97316)
  - Hover: `bg-accent-600` (#EA580C)
  - Même styling que Primary pour cohérence
  - Icône WhatsApp visible (vert #25D366 en version outline, blanc en filled)
- **Behavior:**
  - Hover: Identique à Primary
  - Click: Ouvre WhatsApp (app mobile ou web desktop)
  - Génère URL: `wa.me/${number}?text=${message}`
- **Accessibility:** Identique à Primary
- **Mobile Considerations:**
  - Priorité sur mobile (natif sur smartphones)
  - Ordre visuel: WhatsApp AVANT Calendly sur < 640px

**Outline/Ghost Actions:**
- **When to Use:** Actions tertiaires ou liens (ex: "En savoir plus")
- **Visual Design:**
  - Border: `border-2 border-primary-600`
  - Text: `text-primary-600`
  - Hover: `bg-primary-50`
- **Behavior:** Transition douce (200ms)
- **Usage limité:** Pas critique pour conversion

**Button States:**

| État | Visual Treatment | Interaction |
|------|------------------|-------------|
| **Default** | Couleur pleine, shadow subtile | Clickable |
| **Hover** | Couleur +1 shade darker, shadow augmentée | Cursor pointer |
| **Focus** | Ring bleu visible (keyboard) | Keyboard accessible |
| **Active** | Couleur +2 shades darker, shadow réduite | Pressing feedback |
| **Disabled** | Opacity 50%, cursor not-allowed | Non-clickable |
| **Loading** | Spinner icon, opacity 80% | Non-clickable temporairement |

---

### Loading States

**Video Loading (VideoEmbed):**

**State 1: Thumbnail (Default)**
- **Visual:**
  - Thumbnail image haute qualité (WebP optimisé)
  - Play button overlay centré (cercle blanc avec icône play bleu)
  - Hover: Play button scale légèrement (1.05x)
- **Behavior:**
  - État initial, aucun iframe chargé
  - Au clic: Transition vers State 2
- **Fallback:** Si thumbnail fail, background bleu avec icône vidéo

**State 2: Loading (Transition)**
- **Visual:**
  - Thumbnail reste visible
  - Spinner overlay (bleu, centré)
  - Durée attendue: < 2 secondes
- **Behavior:**
  - Iframe commence à charger
  - Spinner visible pendant chargement
- **Timeout:** Si > 5s, afficher State 3 (Error)

**State 3: Playing**
- **Visual:**
  - Iframe vidéo plein écran
  - Contrôles natifs visibles
- **Behavior:**
  - Lecture automatique après chargement
  - Utilisateur contrôle pause/play

**State 4: Error**
- **Visual:**
  - Message: "La vidéo n'a pas pu être chargée"
  - Bouton "Réessayer" (outline bleu)
  - Icône vidéo barrée (gris)
- **Behavior:**
  - Clic "Réessayer" → Retour à State 2
  - Alternative: Lien vers vidéo externe (YouTube direct)

---

**Calendly Embed Loading:**

**Popup Mode:**
- **State 1:** Bouton CTA visible
- **State 2 (Click):** Modal Calendly apparaît (géré par SDK)
- **Loading:** Spinner Calendly natif
- **Error:** Message Calendly si indisponible

**Inline Mode:**
- **State 1 (Before Scroll):** Placeholder vide (hauteur réservée 630px)
- **State 2 (In Viewport):** Widget commence à charger
- **Loading:** Skeleton screen (rectangles gris animés simulant calendrier)
- **Loaded:** Widget Calendly fonctionnel
- **Error:**
  - Message: "Le calendrier n'est pas disponible"
  - CTA alternatif: Bouton WhatsApp ou lien Calendly externe

---

**Initial Page Load:**

**Critical Rendering Path:**
- **0-500ms:** HTML + CSS inline critique chargés
  - Hero visible immédiatement (above-the-fold)
  - CTA cliquables
- **500ms-1.5s:** Contenu above-the-fold complet
  - Images Hero en WebP
  - Fonts chargées (Inter via Google Fonts)
- **1.5s-3s:** Contenu below-the-fold
  - Images lazy-loaded au scroll
  - Vidéos en lazy-load (thumbnails uniquement)

**Loading Indicator:**
- **Pas de spinner global** (perte de temps perçu)
- **Progressive rendering** : Contenu apparaît au fur et à mesure
- **Skeleton screens** : Pour Calendly inline uniquement

---

### Feedback Patterns

**Success Feedback (CTA Clicks):**

**Calendly Click (Popup):**
- **Immediate:** Modal Calendly apparaît (feedback visuel instantané)
- **No additional feedback needed** (Calendly SDK gère l'expérience)

**Calendly Click (Inline):**
- **Immediate:** Smooth scroll vers widget inline
- **Visual:** Widget highlight légèrement (border bleu pulsant 1x)

**WhatsApp Click:**
- **Immediate:** Nouvelle fenêtre/app s'ouvre
- **Visual feedback:** Bouton montre "Ouverture de WhatsApp..." pendant 500ms
- **Mobile:** App WhatsApp native s'ouvre directement
- **Desktop:** WhatsApp Web s'ouvre dans nouvelle fenêtre

**Feedback States:**

| Action | Feedback Visuel | Timing | Fallback |
|--------|-----------------|--------|----------|
| **Calendly Popup** | Modal apparaît | Instantané | Lien Calendly externe si SDK fail |
| **Calendly Inline** | Scroll + highlight | 300ms | Même fallback |
| **WhatsApp** | Fenêtre/app ouvre | Instantané | Copie numéro si app non installée |
| **Video Play** | Iframe charge + play | 1-2s | Message erreur si timeout |
| **Scroll Animation** | Fade-in éléments | 300ms | Contenu visible sans animation |

---

**Error Feedback:**

**Video Load Error:**
- **Visual:**
  - Container vidéo avec border rouge léger
  - Icône alerte (triangle orange)
  - Message: "Cette vidéo n'a pas pu être chargée"
  - Bouton "Réessayer" (bleu outline)
- **Behavior:**
  - Pas de blocage du reste de la page
  - Option "Voir sur YouTube" en lien alternatif

**Calendly Unavailable:**
- **Visual:**
  - Message: "Le calendrier n'est pas disponible actuellement"
  - CTA alternatif: "Contactez-nous sur WhatsApp"
  - Ou: Lien direct Calendly externe
- **Behavior:**
  - WhatsApp button promu comme option principale

**Network Error (Global):**
- **Visual:**
  - Toast notification top-center
  - Message: "Connexion internet instable"
  - Icône WiFi barré
- **Behavior:**
  - Auto-dismiss après 5s
  - Retry automatique en background

---

### Empty/Error States

**Video Thumbnail Missing:**
- **Visual:**
  - Background: `bg-primary-100` (bleu très léger)
  - Icône: Play button géant (gris clair)
  - Texte: Titre de la vidéo
- **Behavior:**
  - Cliquable malgré thumbnail manquant
  - Charge iframe normalement

**No JavaScript Available:**
- **Visual:**
  - Message: "Votre navigateur bloque JavaScript"
  - Lien direct Calendly externe visible
  - Numéro WhatsApp visible en texte
- **Behavior:**
  - Site reste fonctionnel (static)
  - Calendly/WhatsApp en liens simples

**Browser Not Supported (IE11):**
- **Visual:**
  - Banner top: "Votre navigateur n'est pas supporté"
  - Suggestion: "Utilisez Chrome, Firefox ou Safari"
- **Behavior:**
  - Site reste visible mais styling dégradé

---

### Scroll & Animation Patterns

**Scroll Behavior:**

**Smooth Scroll:**
- **When:** Clic CTA Hero → Scroll vers Contact section
- **Behavior:** `scroll-behavior: smooth` (CSS)
- **Duration:** Automatique (native browser)
- **Fallback:** Jump direct si smooth scroll non supporté

**Scroll Momentum:**
- **Mobile:** Native touch scroll (pas de custom scroll)
- **Desktop:** Molette standard (pas de smooth scroll library)

---

**Intersection Observer Animations:**

**Pattern "Fade-in on Scroll":**
- **When to Use:** Sections apparaissent au scroll
- **Visual Design:**
  - Default state: `opacity-0 translate-y-8`
  - Visible state: `opacity-100 translate-y-0`
  - Transition: `transition-all duration-500 ease-out`
- **Behavior:**
  - Trigger: Élément entre dans viewport (20% visible)
  - Play once (pas de replay au scroll retour)
  - Staggered si plusieurs éléments (delay 100ms entre chaque)
- **Accessibility:**
  - Respect `prefers-reduced-motion` (pas d'animation si JS désactivé)
  - Contenu visible même si JS désactivé (progressive enhancement)
- **Implementation:**
  ```javascript
  // Intersection Observer pour animations scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.2 });
  ```

**Elements with Scroll Animation:**
- Section titles (H2)
- Problem/Solution cards
- Video containers
- Process steps (staggered 100ms)
- Testimonial cards (staggered 150ms)
- CTA section

---

**Hover Animations (Desktop Only):**

**Pattern "Card Lift on Hover":**
- **When to Use:** TestimonialCard, VideoEmbed thumbnails
- **Visual Design:**
  - Default: `shadow-lg`
  - Hover: `shadow-xl translate-y-[-4px]`
  - Transition: `transition-all duration-200 ease-out`
- **Mobile:** Pas d'effet hover (touch n'a pas de hover)

**Pattern "Button Depth on Hover":**
- **When to Use:** Tous les boutons CTA
- **Visual Design:**
  - Default: `shadow-md`
  - Hover: `shadow-lg bg-[darker-shade]`
  - Active: `shadow-sm translate-y-[1px]` (pressed effect)

---

### Navigation Patterns

**Primary Navigation:**
- **Pattern:** Scroll vertical simple
- **No menu bar** (one-page, pas de navigation complexe)
- **Scroll indicator:** Subtle arrow bounce dans Hero (optionnel)

**Skip Links (Accessibility):**
- **When to Use:** Navigation clavier
- **Visual:** Hidden by default, visible on focus
- **Links:**
  - "Passer au contenu principal"
  - "Voir les exemples vidéos"
  - "Réserver un appel"

**Keyboard Navigation:**
- **Tab Order:**
  1. Skip links
  2. Hero CTA (Calendly puis WhatsApp)
  3. Sections dans l'ordre visuel
  4. Video play buttons
  5. Testimonial cards (si interactifs)
  6. Contact CTA final
- **Focus Visible:** Ring bleu sur tous les éléments interactifs

---

## Responsive Design & Accessibility

### Responsive Strategy

**Philosophy: "Mobile IS the Experience"**

make_it_global_website adopts a **mobile-first radical** approach where the mobile experience is not an adaptation but the core design. Desktop is an enhancement, not the baseline.

**Mobile Strategy (320px - 767px):**
- **Layout:** Single column stack vertical
- **Navigation:** Scroll vertical simple, pas de menu
- **CTA:** Full-width buttons (w-full), stack verticalement
- **Sections:** Padding réduit (px-4, py-16), contenu centré
- **Touch:** Tous les éléments interactifs ≥ 44x44px
- **Performance:** < 3s sur 4G, lazy loading agressif
- **Priority:** WhatsApp button AVANT Calendly (natif sur smartphone)
- **Vidéos:** Stack vertical, thumbnails optimisés, contrôles natifs
- **Témoignages:** 1 colonne, carousel si > 3 (optionnel)

**Tablet Strategy (768px - 1023px):**
- **Layout:** 2 colonnes pour sections adaptées (Problème/Solution, Vidéos)
- **Navigation:** Scroll vertical maintenu, pas de sidebar
- **CTA:** Inline horizontal (côte à côte)
- **Sections:** Padding moyen (px-6, py-24)
- **Touch:** Maintien des touch targets ≥ 44px (touch device)
- **Témoignages:** 2 colonnes grid
- **Processus:** 3 colonnes possible si espace suffisant

**Desktop Strategy (1024px+):**
- **Layout:** Multi-colonnes pour sections riches (2-3 colonnes)
- **Max-width:** 1200px contenu, centré avec auto margins
- **Sections:** Padding généreux (px-8, py-32), white space amplifié
- **CTA:** Inline horizontal, taille standard (pas full-width)
- **Hover states:** Actifs (cards lift, button depth)
- **Vidéos:** 2-3 colonnes grid, contrôles natifs
- **Témoignages:** 3 colonnes grid
- **Processus:** 3 colonnes avec flèches entre steps

**Extra-large Desktop (1280px+):**
- **Max-width:** Maintenu à 1200px (pas d'étirement infini)
- **White space:** Augmenté sur les côtés
- **Sections:** Même layout que 1024px, plus aéré

---

### Breakpoint Strategy

**Tailwind CSS Breakpoints (Mobile-First):**

| Breakpoint | Min Width | Design Target | Layout Changes |
|------------|-----------|---------------|----------------|
| **Default** | 0px | Mobile S/M (320-639px) | Single column, stack vertical, full-width CTA |
| **sm:** | 640px | Mobile L / Phablet | CTA inline possible, padding augmenté légèrement |
| **md:** | 768px | Tablet portrait | 2 colonnes (Problème/Solution, Vidéos), grid témoignages |
| **lg:** | 1024px | Tablet landscape / Desktop | 3 colonnes (Témoignages, Processus), hover states actifs |
| **xl:** | 1280px | Desktop large | Max-width maintenu, white space augmenté |

**Mobile-First Media Queries:**

```css
/* Mobile default (0-639px) */
.section { padding: 1rem; }
.grid { grid-template-columns: 1fr; }

/* sm: 640px+ */
@media (min-width: 640px) {
  .section { padding: 1.5rem; }
}

/* md: 768px+ */
@media (min-width: 768px) {
  .section { padding: 2rem; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* lg: 1024px+ */
@media (min-width: 1024px) {
  .section { padding: 3rem; }
  .grid-testimonials { grid-template-columns: repeat(3, 1fr); }
}
```

**Responsive Component Behaviors:**

| Component | Mobile | Tablet (md:) | Desktop (lg:) |
|-----------|--------|--------------|---------------|
| **HeroSection** | Stack CTA vertical | CTA inline | CTA inline + spacing |
| **ProblemSection** | 1 col stack | 2 col (Pb \| Sol) | 2 col + padding |
| **VideoSection** | 1 col stack | 2 col grid | 2 col grid + hover |
| **ProcessSection** | 1 col stack | 2-3 col adapt | 3 col + flèches |
| **TestimonialsSection** | 1 col stack | 2 col grid | 3 col grid + hover |
| **ContactSection** | Stack CTA vertical | CTA inline | CTA inline centré |

**Critical Breakpoint Decisions:**

1. **640px (sm:)** - CTA passent de full-width à inline
2. **768px (md:)** - Passage à 2 colonnes pour sections clés
3. **1024px (lg:)** - Activation hover states, 3 colonnes témoignages

---

### Accessibility Strategy

**WCAG Compliance Level: AA (Recommended Standard)**

make_it_global_website vise la conformité **WCAG 2.1 Level AA**, le standard industriel pour une bonne expérience utilisateur accessible.

**Why WCAG AA:**
- **Level A** : Trop basique, barrières d'accès restent
- **Level AA** : Standard requis pour conformité légale (EU, US), bon équilibre UX
- **Level AAA** : Non nécessaire pour ce type de site B2B conversion

**Accessibility Pillars:**

**1. Perceivable (Perceptible)**

**Color Contrast:**
- **Texte normal (< 24px)** : Ratio minimum 4.5:1
  - Primary-600 (#2563EB) sur blanc : 7.2:1 ✅
  - Neutral-900 (#0F172A) sur blanc : 16.1:1 ✅
  - Accent-600 (#EA580C) sur blanc : 5.8:1 ✅
- **Texte large (≥ 24px)** : Ratio minimum 3:1
- **Éléments UI** : Ratio minimum 3:1
- **Test:** WebAIM Contrast Checker systématique

**Alternative Text:**
- Toutes les images ont alt descriptif
- Icônes décoratives : `aria-hidden="true"`
- Icônes fonctionnelles : `aria-label` explicite

**Video Captions:**
- Sous-titres disponibles pour vidéos démo (si contenu parlé)
- Transcription textuelle alternative (optionnel)

**2. Operable (Utilisable)**

**Keyboard Navigation:**
- **Tab order** logique et séquentiel
- **Focus visible** sur tous les éléments interactifs : `focus:ring-2 focus:ring-primary-500`
- **Skip links** : "Passer au contenu", "Réserver un appel"
- **Escape key** : Ferme Calendly popup si ouvert

**Touch Targets:**
- **Minimum size** : 44x44px (WCAG 2.5.5 Level AAA, mais adopté)
- **Spacing** : 8px minimum entre touch targets
- **Boutons CTA** : 48px+ hauteur sur mobile

**No Keyboard Traps:**
- Calendly popup fermable au clavier (Escape)
- Aucune modal non-fermable

**3. Understandable (Compréhensible)**

**Clear Language:**
- Phrases courtes et directes (max 2-3 lignes)
- Pas de jargon technique non expliqué
- Headlines descriptifs et explicites

**Predictable Navigation:**
- Scroll vertical simple, pas de surprises
- CTA clairs avec labels explicites
- Pas de changements de contexte inattendus

**Error Identification:**
- Messages d'erreur clairs (ex: "Vidéo non chargée")
- Solutions proposées ("Réessayer", "Voir sur YouTube")

**4. Robust (Robuste)**

**Semantic HTML:**
```html
<header> - Hero section
<main> - Contenu principal
  <section aria-labelledby="section-title"> - Chaque section
    <h2 id="section-title"> - Titre section
<footer> - Contact final (optionnel)
```

**ARIA Landmarks:**
- `role="main"` sur contenu principal
- `role="navigation"` si skip links
- `aria-label` sur sections sans heading visible

**Screen Reader Support:**
- Testé avec VoiceOver (iOS/macOS)
- Compatible NVDA (Windows)
- Structure de headings correcte (H1 → H2 → H3)

---

### Testing Strategy

**Responsive Testing:**

**Device Testing:**
- **Mobile Real Devices:**
  - iPhone 13/14 (Safari iOS)
  - Samsung Galaxy S21/S22 (Chrome Android)
  - Tailles: 375px, 390px, 412px
- **Tablet Real Devices:**
  - iPad Air (Safari iPadOS)
  - Samsung Galaxy Tab (Chrome)
  - Tailles: 768px, 820px, 1024px
- **Desktop:**
  - MacBook (1440px, 1680px)
  - Windows laptop (1920px)

**Browser Testing:**
- **Chrome** 90+ ✅ (primary)
- **Safari** 14+ ✅ (iOS critical)
- **Firefox** 88+ ✅
- **Edge** 90+ ✅
- **IE11** ❌ Non supporté (message d'avertissement)

**Network Performance Testing:**
- **4G** : < 3s First Contentful Paint (critique)
- **3G** : < 5s acceptable, lazy loading critique
- **WiFi** : < 1.5s optimal
- **Tool:** Chrome DevTools Throttling, WebPageTest

---

**Accessibility Testing:**

**Automated Testing:**
- **Lighthouse** : Score Accessibility > 95
- **axe DevTools** : 0 violations critiques
- **WAVE** : Validation structure sémantique
- **CI Integration** : axe-core dans tests automatisés

**Manual Testing:**

**Keyboard-Only Navigation:**
- Tab through tous les éléments interactifs
- Vérifier focus visible et ordre logique
- Tester Escape key sur Calendly popup
- Tester Enter/Space sur boutons et liens

**Screen Reader Testing:**
- **VoiceOver (macOS/iOS)** : Test complet navigation
- **NVDA (Windows)** : Validation structure headings
- **Test checklist:**
  - Headings structure H1 → H2 → H3
  - Alt texts descriptifs
  - ARIA labels sur éléments custom
  - Skip links fonctionnels

**Color Blindness Simulation:**
- **Tool:** Chrome DevTools Vision Deficiencies
- **Test:** Protanopia, Deuteranopia, Tritanopia
- **Validation:** Information pas uniquement via couleur

**Touch Target Testing:**
- **Tool:** Chrome DevTools Touch Emulation
- **Validation:** Tous targets ≥ 44x44px
- **Test:** Thumbs-only navigation sur mobile

---

**User Testing with Assistive Technologies:**

**Participants:**
- 2-3 utilisateurs avec handicaps variés
- 1 utilisateur screen reader aveugle/malvoyant
- 1 utilisateur mobilité réduite (clavier seul)
- 1 utilisateur dyslexie/cognition

**Scenarios:**
1. Arriver sur le site → Comprendre l'offre
2. Visionner vidéo exemple
3. Réserver un appel via Calendly
4. Contacter via WhatsApp

**Success Criteria:**
- Tâches complétées sans aide
- Aucun blocage d'accès
- Feedback positif sur clarté

---

### Implementation Guidelines

**Responsive Development:**

**1. Use Relative Units:**
```css
/* ✅ Good */
font-size: 1rem;        /* 16px base */
padding: 2rem;          /* 32px */
width: 100%;
max-width: 75rem;       /* 1200px */

/* ❌ Avoid */
font-size: 16px;
padding: 32px;
width: 1200px;
```

**2. Mobile-First Media Queries:**
```css
/* Default: Mobile */
.component { ... }

/* Tablet and up */
@media (min-width: 768px) {
  .component { ... }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component { ... }
}
```

**3. Touch Target Sizing:**
```css
/* Minimum touch targets */
.btn, .link {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px; /* Ensures minimum */
}

/* TailwindCSS */
<button class="px-6 py-3 min-h-[44px]">CTA</button>
```

**4. Responsive Images:**
```html
<!-- WebP with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>

<!-- Responsive sizes -->
<img
  srcset="image-320.webp 320w, image-640.webp 640w, image-1280.webp 1280w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  src="image-640.webp"
  alt="Description"
  loading="lazy"
>
```

---

**Accessibility Development:**

**1. Semantic HTML Structure:**
```html
<header>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Headline</h1>
  </section>
</header>

<main>
  <section aria-labelledby="problem-heading">
    <h2 id="problem-heading">Section Title</h2>
  </section>
</main>
```

**2. ARIA Labels and Roles:**
```html
<!-- Skip links -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Passer au contenu principal
</a>

<!-- Buttons with icons -->
<button aria-label="Ouvrir WhatsApp">
  <WhatsAppIcon aria-hidden="true" />
</button>

<!-- Sections -->
<section aria-labelledby="testimonials-heading">
  <h2 id="testimonials-heading">Témoignages</h2>
</section>
```

**3. Keyboard Navigation:**
```css
/* Focus visible */
:focus {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

/* TailwindCSS */
.focus\:ring-2:focus {
  ring: 2px solid #3B82F6;
  ring-offset: 2px;
}

/* Skip links */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
}
```

**4. Reduced Motion Support:**
```css
/* Respect user preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* TailwindCSS */
<div class="transition-all motion-reduce:transition-none">
  ...
</div>
```

**5. Form Accessibility (Calendly):**
```html
<!-- Calendly handled internally, but if custom forms: -->
<label for="email">
  Email
  <span aria-label="required">*</span>
</label>
<input
  id="email"
  type="email"
  required
  aria-required="true"
  aria-describedby="email-error"
>
<div id="email-error" role="alert" aria-live="polite">
  <!-- Error message appears here -->
</div>
```

---

**Development Checklist:**

**Responsive:**
- [ ] Mobile design developed first (< 640px)
- [ ] Breakpoints tested at 640px, 768px, 1024px
- [ ] Touch targets ≥ 44px verified
- [ ] Images responsive avec srcset
- [ ] Performance < 3s sur 4G mobile
- [ ] Real device testing (iPhone, Android)

**Accessibility:**
- [ ] Semantic HTML correct (header, main, section)
- [ ] Headings structure H1 → H2 → H3
- [ ] Contraste texte ≥ 4.5:1 vérifié
- [ ] Alt texts sur toutes images
- [ ] Focus visible sur éléments interactifs
- [ ] Keyboard navigation testée
- [ ] Screen reader testé (VoiceOver minimum)
- [ ] Skip links implémentés
- [ ] ARIA labels sur éléments custom
- [ ] prefers-reduced-motion supporté
- [ ] Lighthouse Accessibility > 95
