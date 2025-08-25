/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        restaurante: {
          rojo: "#7B1E5F",
          dorado: "#C6A563",
          crema: "#F5F0E6",
          gris: "#2E2E2E",
        },
      },
      fontFamily: {
        titulo: ["'Playfair Display'", "serif"],
        texto: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
