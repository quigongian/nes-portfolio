/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

      }
    },
    fontFamily: {
      chicago: ["ChiKareGo, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true,
    }
  },
  plugins: [],
}

