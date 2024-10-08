/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jomolhari: ["Jomolhari", "serif"],
      },
      height: {
        "custom-height": "25rem",
      },
    },
  },
  plugins: [],
};
