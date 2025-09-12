/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",   // 👈 important
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f19",
        card: "#0f1524",
        accent: "#51e5a8",
        muted: "#9aa4b2",
      },
      borderRadius: { '2xl': '1.25rem' },
    },
  },
  plugins: [],
}
