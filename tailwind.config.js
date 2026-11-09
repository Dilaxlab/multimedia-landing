/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "obsidian": withOpacity("--color-surface-lowest-rgb"),
        "gold-antique": withOpacity("--color-primary-gold-rgb"),
        "gold-glow": withOpacity("--color-primary-rgb"),
        "bronze": withOpacity("--color-secondary-rgb"),
        "background": withOpacity("--color-surface-rgb"),
        "surface": withOpacity("--color-surface-rgb"),
        "surface-dim": withOpacity("--color-surface-dim-rgb"),
        "surface-bright": withOpacity("--color-surface-bright-rgb"),
        "surface-container-lowest": withOpacity("--color-surface-lowest-rgb"),
        "surface-container-low": withOpacity("--color-surface-low-rgb"),
        "surface-container": withOpacity("--color-surface-container-rgb"),
        "surface-container-high": withOpacity("--color-surface-high-rgb"),
        "surface-container-highest": withOpacity("--color-surface-highest-rgb"),
        "on-surface": withOpacity("--color-on-surface-rgb"),
        "on-surface-variant": withOpacity("--color-on-surface-variant-rgb"),
        "inverse-surface": withOpacity("--color-inverse-surface-rgb"),
        "inverse-on-surface": withOpacity("--color-inverse-on-surface-rgb"),
        "outline": withOpacity("--color-outline-rgb"),
        "outline-variant": withOpacity("--color-outline-variant-rgb"),
        "primary": withOpacity("--color-primary-rgb"),
        "primary-container": withOpacity("--color-primary-container-rgb"),
        "on-primary": withOpacity("--color-on-primary-rgb"),
        "on-primary-container": withOpacity("--color-on-primary-container-rgb"),
        "secondary": withOpacity("--color-secondary-rgb"),
        "secondary-container": withOpacity("--color-secondary-container-rgb"),
        "tertiary": withOpacity("--color-tertiary-rgb"),
        "tertiary-container": withOpacity("--color-tertiary-container-rgb"),
        "error": "#ffb4ab",
        "error-container": "#93000a"
      },
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: 'rgb(var(--color-outline-variant-rgb) / 0.25)',
      }),
      borderRadius: {
        "DEFAULT": "0.25rem",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "margin": "1rem",
        "margin-tablet": "2rem",
        "margin-desktop": "3.5rem",
        "gutter": "1rem",
        "gutter-tablet": "1.5rem",
        "gutter-desktop": "2rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem"
      },
      fontFamily: {
        "cinzel": ["Cinzel", "serif"],
        "serif": ["Cinzel", "Playfair Display", "serif"],
        "sans": ["'Plus Jakarta Sans'", "Hanken Grotesk", "sans-serif"],
        "display-lg": ["Cinzel", "Playfair Display", "serif"],
        "display-md": ["Cinzel", "Playfair Display", "serif"],
        "headline-lg": ["Cinzel", "Playfair Display", "serif"],
        "headline-md": ["Cinzel", "Playfair Display", "serif"],
        "headline-sm": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "body-lg": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "body-md": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "label-lg": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "label-md": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        "label-sm": ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["56px", { lineHeight: "64px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg-mobile": ["38px", { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-md": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "headline-lg": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-md": ["22px", { lineHeight: "30px", fontWeight: "500" }],
        "headline-sm": ["18px", { lineHeight: "26px", letterSpacing: "0.01em", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "label-lg": ["13px", { lineHeight: "18px", letterSpacing: "0.08em", fontWeight: "600" }],
        "label-md": ["11px", { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "600" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.14em", fontWeight: "500" }]
      }
    }
  },
  plugins: [],
};
