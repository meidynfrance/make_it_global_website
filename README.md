# Make It Global - Site Web de Conversion B2B

Site one-page statique pour service de traduction multimédia (vidéos lip-sync, PDFs, textes) destiné aux infopreneurs et CEOs PME B2B francophones visant l'international.

## 🚀 Installation

### Prérequis
- Node.js v18.20+ (recommandé: dernière version LTS)
- npm ou yarn

### Configuration Locale

1. **Installer les dépendances:**
   ```bash
   npm install
   ```

2. **Configurer les variables d'environnement (optionnel):**
   ```bash
   cp .env.example .env
   # Éditer .env avec vos valeurs
   ```

3. **Lancer le serveur de développement:**
   ```bash
   npm run dev
   ```
   Le site sera accessible sur `http://localhost:4321`

## 📦 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production (génère le site statique dans `dist/`) |
| `npm run preview` | Prévisualise le build de production localement |

## 🏗️ Architecture Technique

- **Framework:** Astro v5 (SSG - Static Site Generation)
- **Styling:** TailwindCSS v4 (utility-first)
- **TypeScript:** Mode "relaxed" (JS + TS supportés)
- **Hébergement:** Vercel avec CDN global

## 📁 Structure du Projet

```
src/
├── assets/images/       # Images du projet (WebP/AVIF)
├── components/
│   ├── sections/        # Sections du one-page (non réutilisables)
│   └── ui/              # Composants réutilisables (Button, VideoEmbed, etc.)
├── layouts/             # Layout principal avec meta tags et GA4
├── pages/               # Pages Astro (index.astro)
├── styles/              # Styles globaux (global.css)
└── utils/               # Fonctions helpers (analytics, whatsapp)
```

## 🎨 Design System

### Palette de Couleurs
- **Primary (Bleu):** `primary-600` - CTA principal (Calendly)
- **Accent (Orange):** `accent-500` - CTA secondaire (WhatsApp)
- **Neutral (Gris):** Hiérarchie de texte et backgrounds

### Classes de Boutons Personnalisées
- `.btn-primary` - Bouton bleu Calendly
- `.btn-secondary` - Bouton orange WhatsApp
- `.btn-outline` - Bouton contour

### Typographie
- **Body text:** Inter
- **Headlines:** Plus Jakarta Sans

## ♿ Accessibilité

Le site respecte les normes **WCAG 2.1 Level AA**:
- Contraste texte/fond ≥ 4.5:1
- Touch targets ≥ 44x44px
- Navigation clavier complète avec focus rings visibles
- Support des préférences `prefers-reduced-motion`

## 📱 Responsive Design

Approche **mobile-first** avec breakpoints Tailwind:
- **Mobile (default):** 320-639px - Single column, stack vertical
- **sm: 640px+** - Mobile L/Phablet
- **md: 768px+** - Tablet - 2 colonnes
- **lg: 1024px+** - Desktop - 3 colonnes, hover states
- **xl: 1280px+** - Desktop large - Max-width 1200px

## 🎯 Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90/100

## 📝 Conventions de Nommage

| Élément | Convention | Exemple |
|---------|------------|---------|
| Composants | PascalCase.astro | `HeroSection.astro` |
| Pages | kebab-case.astro | `index.astro` |
| Images | kebab-case | `hero-background.webp` |

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contribution

Pour toute question ou suggestion, contactez l'équipe de développement.
