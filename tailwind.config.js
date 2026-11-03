/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "obsidian": "#070709",
        "gold-antique": "#D4AF37",
        "gold-glow": "#f59e0b",
        "bronze": "#8C6D3B",
        "background": "#131315",
        "surface": "#131315",
        "surface-dim": "#131315",
        "surface-bright": "#39393b",
        "surface-container-lowest": "#0e0e10",
        "surface-container-low": "#1c1b1d",
        "surface-container": "#201f21",
        "surface-container-high": "#2a2a2c",
        "surface-container-highest": "#353437",
        "on-surface": "#e5e1e4",
        "on-surface-variant": "#d0c5af",
        "inverse-surface": "#e5e1e4",
        "inverse-on-surface": "#313032",
        "outline": "#99907c",
        "outline-variant": "#4d4635",
        "primary": "#f2ca50",
        "primary-container": "#d4af37",
        "on-primary": "#3c2f00",
        "on-primary-container": "#554300",
        "secondary": "#eec14b",
        "secondary-container": "#b38b14",
        "tertiary": "#f1ca64",
        "tertiary-container": "#d3af4c",
        "error": "#ffb4ab",
        "error-container": "#93000a"
      },
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
