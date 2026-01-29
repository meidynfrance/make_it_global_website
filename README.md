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
| `npm test` | Lance les tests unitaires (Vitest) |
| `npm run test:ui` | Lance l'interface graphique des tests |

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

## 🎬 Modifier les Vidéos de Démonstration

Les vidéos de la section "Découvrez la Qualité en Action" sont configurables facilement:

1. **Ouvrir le fichier:**
   ```bash
   src/components/sections/VideoSection.astro
   ```

2. **Modifier les IDs vidéo (lignes 23-45):**
   ```typescript
   const videos = [
     {
       id: 'VOTRE_VIDEO_ID_YOUTUBE',  // Remplacer par l'ID YouTube réel
       platform: 'youtube',            // ou 'vimeo'
       title: 'Titre descriptif',
       caption: 'Français → Anglais',
       description: 'Description courte',
     },
     // ... autres vidéos
   ];
   ```

3. **Trouver l'ID d'une vidéo YouTube:**
   - URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - ID: `dQw4w9WgXcQ` (partie après `v=`)

4. **Rebuild et tester:**
   ```bash
   npm run build
   npm run preview
   ```

**Note:** Les vidéos utilisent le façade pattern (thumbnail + click-to-load) pour optimiser les performances. Aucune iframe n'est chargée avant que l'utilisateur clique sur le bouton play.

## 🌐 Browser Support (Story 8.4)

Le site est testé et compatible avec les navigateurs modernes suivants:

| Browser | Minimum Version | Market Share (2026) | Status |
|---------|----------------|---------------------|--------|
| **Chrome** | 90+ (Apr 2021) | 65% | ✅ Tested |
| **Safari** | 14+ (Sep 2020) | 20% | ✅ Tested |
| **Firefox** | 88+ (Apr 2021) | 5% | ✅ Tested |
| **Edge** | 90+ (Apr 2021) | 5% | ✅ Tested |
| **Mobile Chrome** | 90+ | 40% | ✅ Tested |
| **Mobile Safari** | 14+ | 25% | ✅ Tested |

**Total Market Coverage:** ~95% des utilisateurs

### Known Issues

1. **Calendly Third-Party Cookies:**
   - **Impact:** Lighthouse Best Practices: 77/100 (instead of 100/100)
   - **Status:** Acceptable trade-off (conversion priority > score)
   - **No action required**

2. **Safari ITP (Intelligent Tracking Prevention):**
   - **Impact:** Google Analytics 4 attribution may be delayed up to 7 days
   - **Status:** Not a bug—Safari privacy feature
   - **No action required**

## 🚀 Deployment (Vercel)

### Quick Deploy

1. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Vercel auto-deploy:**
   - Build runs automatically
   - Live in < 2 minutes
   - Preview deployments for PRs

### Production Configuration

- **SSL/HTTPS:** Automatic (Vercel free tier)
- **CDN:** Global (100+ locations)
- **Uptime:** 99.9% SLA guarantee
- **Security Headers:** Configured via `vercel.json`
- **Cache Strategy:**
  - Hashed assets (CSS/JS/images): `max-age=31536000, immutable`
  - HTML: `max-age=0, must-revalidate`

### Environment Variables (Optional)

Set in Vercel Dashboard > Project Settings > Environment Variables:

- `PUBLIC_GOOGLE_ANALYTICS_ID` - Google Analytics 4 Measurement ID
- `PUBLIC_CALENDLY_URL` - Calendly scheduling URL
- `PUBLIC_WHATSAPP_NUMBER` - WhatsApp contact number
- `PUBLIC_SITE_URL` - Site base URL
- `PUBLIC_SITE_NAME` - Site name

**Note:** Site works without environment variables (graceful degradation).

### Vercel Commands (Optional)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Vercel Documentation](https://vercel.com/docs)
- **Browser Compatibility Report:** `_bmad-output/implementation-artifacts/browser-compatibility-report.md`
- **Manual Testing Guide:** `_bmad-output/implementation-artifacts/manual-testing-guide.md`

## 🤝 Contribution

Pour toute question ou suggestion, contactez l'équipe de développement.
