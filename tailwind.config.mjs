/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myblue: "#294DEA",
        surface: {
          a0: "#121212",
          a10: "#282828",
          a20: "#3f3f3f",
          a30: "#575757",
          a40: "#717171",
          a50: "#8b8b8b",
        },
        primary: {
          a0: "#294dea",
          a10: "#545fed",
          a20: "#7071f0",
          a30: "#8984f3",
          a40: "#9f98f6",
          a50: "#b3acf8"
        },
        tonal: {
          a0: "#191824",
          a10: "#2e2d39",
          a20: "#45444e",
          a30: "#5d5b65",
          a40: "#76747d",
          a50: "#8f8f96"
        }
      },
    },
  },
  plugins: [],
};
