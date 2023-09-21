/** @type {import('tailwindcss').Config} */

// Configuration de Tailwind CSS
export default {
  // Fichiers à inclure lors de la génération des classes CSS
  content: [
    "./index.html", // Fichier HTML principal
    "./src/**/*.{js,ts,jsx,tsx}", // Fichiers JavaScript/TypeScript dans le répertoire src
  ],
  theme: {
    // Personnalisation du thème Tailwind
    fontSize: {
      xs: ['12px', '16px'],    // Taille de police "xs" avec taille et hauteur de ligne
      sm: ['14px', '20px'],    // Taille de police "sm" avec taille et hauteur de ligne
      base: ['16px', '19.5px'],// Taille de police "base" avec taille et hauteur de ligne
      lg: ['18px', '21.94px'], // Taille de police "lg" avec taille et hauteur de ligne
      xl: ['20px', '24.38px'], // Taille de police "xl" avec taille et hauteur de ligne
      '2xl': ['24px', '29.26px'], // Taille de police "2xl" avec taille et hauteur de ligne
      '3xl': ['28px', '50px'], // Taille de police "3xl" avec taille et hauteur de ligne
      '4xl': ['48px', '58px'], // Taille de police "4xl" avec taille et hauteur de ligne
      '8xl': ['96px', '106px'], // Taille de police "8xl" avec taille et hauteur de ligne
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'], // Police personnalisée "palanquin"
        montserrat: ['Montserrat', 'sans-serif'], // Police personnalisée "montserrat"
      },
      colors: {
        'primary': "#ECEEFF",      // Couleur personnalisée "primary"
        "coral-red": "#FF6452",    // Couleur personnalisée "coral-red"
        "slate-gray": "#6D6D6D",  // Couleur personnalisée "slate-gray"
        "pale-blue": "#F5F6FF",    // Couleur personnalisée "pale-blue"
        "white-400": "rgba(255, 255, 255, 0.80)" // Couleur personnalisée "white-400"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)' // Ombre personnalisée "3xl"
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')", // Image de fond "hero"
        'card': "url('assets/images/thumbnail-background.svg')",    // Image de fond "card"
      },
      screens: {
        "wide": "1440px" // Écran personnalisé "wide" avec une largeur de 1440 pixels
      }
    },
  },
  plugins: [], // Aucun plugin activé pour le moment
}
