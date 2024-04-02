/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // in theme it overwrites everything in that category
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    // in extend we keep original things and add new ones
    extend: {
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
