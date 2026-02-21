# Flowpage Navbar Template

Ce dossier contient tout le nécessaire pour réutiliser la barre de navigation Flowpage dans n'importe quel autre projet React + TailwindCSS.

## 1. Dépendances requises

Assurez-vous d'installer les dépendances suivantes dans le projet de destination :

```bash
npm install gsap lucide-react clsx tailwind-merge
```

## 2. Configuration Tailwind (`tailwind.config.js`)

La Navbar dépend du design system "Flowpage". Vous devez ajouter les couleurs de la marque dans la configuration Tailwind de l'autre projet :

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FDFCF8",
          "bg-alt": "#FAF9F6",
          dark: "#2A2A2A",
          gray: "#6B6B6B",
          border: "#E6E6E2",
          orange: "#D46A4C",
          olive: "#829175",
        },
      },
      fontFamily: {
        clash: ['"Clash Grotesk"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
      },
    },
  },
};
```

## 3. Typographie

La Navbar utilise les polices **Clash Grotesk** pour le logo, et **Manrope** pour les menus. Ajoutez l'import dans votre `index.html` :

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
<link
  href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600,700&display=swap"
  rel="stylesheet"
/>
```

## 4. Utilisation

Il suffit d'importer et de restituer le fichier `Navbar.jsx` en haut de votre hiérarchie React :

```jsx
import Navbar from "./chemin/vers/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>{/* Le reste de votre application */}</main>
    </div>
  );
}
```
