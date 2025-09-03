/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')["light"],
          "base-100": "#ffffff", // keep clean white base
          "base-200": "#f9fafb", // soft background
          "base-300": "#f3f4f6", 
          primary: "#8b5cf6",   // violet-500
          secondary: "#f472b6", // pink-400
          accent: "#fbbf24",    // amber-400
        },
        dark: {
          ...require('daisyui/src/theming/themes')["dark"],
          "base-100": "#1e1e2e", 
          "base-200": "#111827", 
          "base-300": "#0f172a",
          primary: "#6366f1",   // indigo-500
          secondary: "#a855f7", // purple-500
          accent: "#f97316",    // orange-500
        },
      },
    ],
  },

  plugins: [require('daisyui')],
  darkMode: ['class', '[data-theme="dark"]'],
};
